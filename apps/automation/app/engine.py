from __future__ import annotations

import asyncio
import ipaddress
import socket
import time
from datetime import datetime, timedelta, timezone
from typing import Any
from urllib.parse import urlsplit

import httpx
from croniter import croniter

from .config import Settings
from .database import AutomationStore, utc_now


class ActionBlockedError(RuntimeError):
    """Raised when an action targets a network address that policy forbids."""


def parse_timestamp(value: str | None) -> datetime | None:
    if not value:
        return None
    moment = datetime.fromisoformat(value)
    if moment.tzinfo is None:
        moment = moment.replace(tzinfo=timezone.utc)
    return moment.astimezone(timezone.utc)


def calculate_next_run(
    automation: dict[str, Any], base: datetime | None = None
) -> datetime:
    base = (base or utc_now()).astimezone(timezone.utc)
    schedule_type = automation["schedule_type"]
    if schedule_type == "cron":
        return croniter(automation["cron"], base).get_next(datetime)
    return base + timedelta(seconds=int(automation["interval_seconds"]))


class AutomationExecutor:
    def __init__(self, store: AutomationStore, settings: Settings) -> None:
        self.store = store
        self.settings = settings

    async def execute_run(self, run_id: str) -> dict[str, Any] | None:
        run = await asyncio.to_thread(self.store.get_run, run_id)
        if run is None:
            return None
        automation = await asyncio.to_thread(
            self.store.get_automation, run["automation_id"]
        )
        if automation is None:
            finished_at = utc_now()
            await asyncio.to_thread(
                self.store.finish_run,
                run_id,
                "failed",
                finished_at,
                0,
                None,
                None,
                "Automation no longer exists",
            )
            return await asyncio.to_thread(self.store.get_run, run_id)

        started_at = utc_now()
        await asyncio.to_thread(self.store.mark_run_running, run_id, started_at)
        status = "failed"
        response_status: int | None = None
        response_body: str | None = None
        error: str | None = None
        started_perf = time.perf_counter()

        if run["trigger"] == "scheduled" and not automation["enabled"]:
            status = "skipped"
            error = "Automation was disabled before the scheduled run"
        else:
            try:
                await self._validate_target(automation["action"]["url"])
                response_status, response_body = await self._send(automation["action"])
                status = "succeeded" if response_status < 400 else "failed"
                if status == "failed":
                    error = f"Target returned HTTP {response_status}"
            except ActionBlockedError as blocked:
                error = str(blocked)
            except httpx.HTTPError as transport_error:
                error = f"{type(transport_error).__name__}: {transport_error}"
            except Exception as unexpected:
                error = f"{type(unexpected).__name__}: {unexpected}"

        finished_at = utc_now()
        duration_ms = max(0, int((time.perf_counter() - started_perf) * 1000))
        await asyncio.to_thread(
            self.store.finish_run,
            run_id,
            status,
            finished_at,
            duration_ms,
            response_status,
            response_body,
            error,
        )
        await asyncio.to_thread(
            self.store.update_runtime,
            automation["id"],
            last_run_at=started_at,
            last_status=status,
        )
        return await asyncio.to_thread(self.store.get_run, run_id)

    async def _validate_target(self, url: str) -> None:
        parsed = urlsplit(url)
        if parsed.scheme not in {"http", "https"}:
            raise ActionBlockedError("Only http and https targets are supported")
        host = parsed.hostname
        if not host:
            raise ActionBlockedError("Target URL has no hostname")
        if self.settings.allow_private_targets:
            return

        port = parsed.port or (443 if parsed.scheme == "https" else 80)
        try:
            addresses = await asyncio.to_thread(
                socket.getaddrinfo,
                host,
                port,
                0,
                socket.SOCK_STREAM,
            )
        except socket.gaierror as error:
            raise ActionBlockedError(f"Cannot resolve target host {host!r}") from error

        resolved = {entry[4][0].split("%")[0] for entry in addresses}
        if not resolved:
            raise ActionBlockedError(f"Cannot resolve target host {host!r}")
        for raw_address in resolved:
            address = ipaddress.ip_address(raw_address)
            if not address.is_global:
                raise ActionBlockedError(
                    f"Target address {address} is private/reserved; "
                    "set AUTOMATION_ALLOW_PRIVATE_TARGETS=true to allow it"
                )

    async def _send(self, action: dict[str, Any]) -> tuple[int, str]:
        timeout_seconds = (
            action.get("timeout_seconds") or self.settings.request_timeout_seconds
        )
        timeout = httpx.Timeout(float(timeout_seconds))
        async with httpx.AsyncClient(
            follow_redirects=False,
            timeout=timeout,
            trust_env=False,
        ) as client:
            request = client.build_request(
                action["method"],
                action["url"],
                headers=action.get("headers") or None,
                content=action.get("body"),
            )
            response = await client.send(request, stream=True)
            try:
                payload = bytearray()
                truncated = False
                async for chunk in response.aiter_bytes():
                    remaining = self.settings.max_response_bytes - len(payload)
                    if remaining <= 0:
                        truncated = True
                        break
                    payload.extend(chunk[:remaining])
                    if len(chunk) > remaining:
                        truncated = True
                text = bytes(payload).decode("utf-8", errors="replace")
                if truncated:
                    text += "\n[response truncated]"
                return response.status_code, text
            finally:
                await response.aclose()
