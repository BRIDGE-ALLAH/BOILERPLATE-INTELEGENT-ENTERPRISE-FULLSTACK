from __future__ import annotations

import asyncio
import logging
from datetime import datetime
from typing import Any

from apscheduler.schedulers.asyncio import AsyncIOScheduler
from apscheduler.triggers.date import DateTrigger

from .database import AutomationStore, isoformat, utc_now
from .engine import AutomationExecutor, calculate_next_run, parse_timestamp


logger = logging.getLogger(__name__)


class AutomationScheduler:
    def __init__(self, store: AutomationStore, executor: AutomationExecutor) -> None:
        self.store = store
        self.executor = executor
        self._scheduler = AsyncIOScheduler(timezone="UTC")

    @property
    def running(self) -> bool:
        return bool(getattr(self._scheduler, "running", False))

    @property
    def job_count(self) -> int:
        return len(self._scheduler.get_jobs()) if self.running else 0

    def start(self) -> None:
        if self.running:
            return
        self._scheduler.start()
        now = utc_now()
        for automation in self.store.list_enabled():
            next_run = parse_timestamp(automation.get("next_run_at"))
            if next_run is None or next_run <= now:
                next_run = calculate_next_run(automation, now)
            self.store.update_runtime(automation["id"], next_run_at=next_run)
            self._add_job(automation["id"], next_run)

    def shutdown(self) -> None:
        if self.running:
            self._scheduler.shutdown(wait=False)

    def refresh(self, automation: dict[str, Any] | None) -> None:
        if automation is None:
            return
        automation_id = automation["id"]
        self._remove_job(automation_id)
        if not automation["enabled"]:
            return
        next_run = parse_timestamp(automation.get("next_run_at"))
        if next_run is None or next_run <= utc_now():
            next_run = calculate_next_run(automation, utc_now())
            self.store.update_runtime(automation_id, next_run_at=next_run)
        self._add_job(automation_id, next_run)

    def remove(self, automation_id: str) -> None:
        self._remove_job(automation_id)

    def _job_id(self, automation_id: str) -> str:
        return f"automation:{automation_id}"

    def _add_job(self, automation_id: str, next_run: datetime) -> None:
        self._scheduler.add_job(
            self._fire,
            trigger=DateTrigger(run_date=next_run, timezone=next_run.tzinfo),
            args=[automation_id],
            id=self._job_id(automation_id),
            replace_existing=True,
            misfire_grace_time=60,
        )

    def _remove_job(self, automation_id: str) -> None:
        job_id = self._job_id(automation_id)
        if self._scheduler.get_job(job_id) is not None:
            self._scheduler.remove_job(job_id)

    async def _fire(self, automation_id: str) -> None:
        try:
            automation = await asyncio.to_thread(
                self.store.get_automation, automation_id
            )
            if automation is None or not automation["enabled"]:
                return
            run = await asyncio.to_thread(
                self.store.create_run, automation_id, "scheduled"
            )
            await self.executor.execute_run(run["id"])
            latest = await asyncio.to_thread(self.store.get_automation, automation_id)
            if latest is None:
                return
            if latest["enabled"]:
                next_run = calculate_next_run(latest, utc_now())
                await asyncio.to_thread(
                    self.store.update_runtime,
                    automation_id,
                    next_run_at=next_run,
                )
                self._add_job(automation_id, next_run)
            else:
                await asyncio.to_thread(
                    self.store.update_runtime,
                    automation_id,
                    clear_next_run=True,
                )
        except Exception:
            logger.exception("Scheduled automation %s failed", automation_id)
