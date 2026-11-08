from __future__ import annotations

import json
import threading
import time
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any

import pytest
from fastapi.testclient import TestClient

from app.config import Settings
from app.main import create_app


class WebhookHandler(BaseHTTPRequestHandler):
    def do_POST(self) -> None:
        length = int(self.headers.get("content-length", "0"))
        payload = self.rfile.read(length).decode("utf-8")
        response = json.dumps({"received": payload}).encode("utf-8")
        self.send_response(200)
        self.send_header("content-type", "application/json")
        self.send_header("content-length", str(len(response)))
        self.end_headers()
        self.wfile.write(response)

    def log_message(self, format: str, *args: Any) -> None:
        return


@pytest.fixture()
def webhook_server() -> str:
    server = ThreadingHTTPServer(("127.0.0.1", 0), WebhookHandler)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    try:
        yield f"http://127.0.0.1:{server.server_port}/hook"
    finally:
        server.shutdown()
        server.server_close()
        thread.join(timeout=5)


def build_settings(tmp_path: Path, allow_private: bool = False) -> Settings:
    return Settings(
        database_path=tmp_path / "automation.db",
        api_key=None,
        allow_private_targets=allow_private,
        request_timeout_seconds=5,
    )


def create_payload(url: str) -> dict[str, Any]:
    return {
        "name": f"webhook-{time.time_ns()}",
        "description": "Delivers a signed MoonWitness event",
        "schedule_type": "interval",
        "interval_seconds": 3600,
        "action": {
            "url": url,
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": json.dumps({"event": "moonrise"}),
        },
    }


def wait_for_finished_run(
    client: TestClient, automation_id: str, timeout: float = 5.0
) -> dict[str, Any]:
    deadline = time.monotonic() + timeout
    while time.monotonic() < deadline:
        response = client.get(f"/automations/{automation_id}/runs")
        assert response.status_code == 200
        runs = response.json()["runs"]
        if runs and runs[0]["status"] not in {"queued", "running"}:
            return runs[0]
        time.sleep(0.05)
    raise AssertionError("Automation run did not finish in time")


def test_health_reports_scheduler(tmp_path: Path) -> None:
    with TestClient(create_app(build_settings(tmp_path))) as client:
        response = client.get("/health")
    assert response.status_code == 200
    body = response.json()
    assert body["status"] == "healthy"
    assert body["scheduler_running"] is True


def test_crud_and_validation(tmp_path: Path) -> None:
    app = create_app(build_settings(tmp_path))
    with TestClient(app) as client:
        invalid = client.post(
            "/automations",
            json={
                "name": "broken",
                "schedule_type": "cron",
                "cron": "not-a-cron",
                "action": {"url": "https://example.com/hook"},
            },
        )
        assert invalid.status_code == 422

        created = client.post(
            "/automations",
            json={
                "name": "nightly",
                "schedule_type": "cron",
                "cron": "0 2 * * *",
                "action": {"url": "https://example.com/hook"},
            },
        )
        assert created.status_code == 201
        automation = created.json()
        assert automation["next_run_at"]
        health = client.get("/health").json()
        assert health["scheduled_jobs"] == 1

        duplicate = client.post(
            "/automations",
            json={
                "name": "nightly",
                "schedule_type": "interval",
                "interval_seconds": 60,
                "action": {"url": "https://example.com/hook"},
            },
        )
        assert duplicate.status_code == 409

        disabled = client.patch(
            f"/automations/{automation['id']}", json={"enabled": False}
        )
        assert disabled.status_code == 200
        assert disabled.json()["enabled"] is False
        assert disabled.json()["next_run_at"] is None

        blocked_trigger = client.post(f"/automations/{automation['id']}/trigger")
        assert blocked_trigger.status_code == 409

        listing = client.get("/automations")
        assert listing.status_code == 200
        assert listing.json()["total"] == 1

        deleted = client.delete(f"/automations/{automation['id']}")
        assert deleted.status_code == 204
        assert client.get(f"/automations/{automation['id']}").status_code == 404
        assert client.get("/health").json()["scheduled_jobs"] == 0


def test_manual_trigger_calls_webhook(tmp_path: Path, webhook_server: str) -> None:
    app = create_app(build_settings(tmp_path, allow_private=True))
    with TestClient(app) as client:
        created = client.post("/automations", json=create_payload(webhook_server))
        assert created.status_code == 201
        automation_id = created.json()["id"]

        triggered = client.post(f"/automations/{automation_id}/trigger")
        assert triggered.status_code == 202
        run = wait_for_finished_run(client, automation_id)

        assert run["status"] == "succeeded"
        assert run["response_status"] == 200
        assert run["trigger"] == "manual"
        assert "moonrise" in run["response_body"]

        automation = client.get(f"/automations/{automation_id}").json()
        assert automation["last_status"] == "succeeded"
        assert automation["last_run_at"] is not None


def test_private_targets_are_blocked_by_default(
    tmp_path: Path, webhook_server: str
) -> None:
    app = create_app(build_settings(tmp_path, allow_private=False))
    with TestClient(app) as client:
        created = client.post("/automations", json=create_payload(webhook_server))
        automation_id = created.json()["id"]
        client.post(f"/automations/{automation_id}/trigger")
        run = wait_for_finished_run(client, automation_id)

    assert run["status"] == "failed"
    assert "private/reserved" in run["error"]


def test_api_key_protects_management_routes(tmp_path: Path) -> None:
    settings = build_settings(tmp_path)
    settings.api_key = "test-secret"
    with TestClient(create_app(settings)) as client:
        assert client.get("/health").status_code == 200
        assert client.get("/automations").status_code == 401
        authorized = client.get(
            "/automations", headers={"x-api-key": "test-secret"}
        )
        assert authorized.status_code == 200
        assert authorized.json()["total"] == 0
