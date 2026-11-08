from __future__ import annotations

import json
import sqlite3
import threading
import uuid
from contextlib import contextmanager
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Iterator


class DuplicateAutomationName(Exception):
    """Raised when an automation name is already taken."""


def utc_now() -> datetime:
    return datetime.now(timezone.utc)


def isoformat(moment: datetime) -> str:
    return moment.astimezone(timezone.utc).isoformat()


SCHEMA = """
CREATE TABLE IF NOT EXISTS automations (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    description TEXT NOT NULL DEFAULT '',
    schedule_type TEXT NOT NULL CHECK (schedule_type IN ('cron', 'interval')),
    cron TEXT,
    interval_seconds INTEGER,
    action_type TEXT NOT NULL DEFAULT 'http',
    action_config TEXT NOT NULL,
    enabled INTEGER NOT NULL DEFAULT 1,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL,
    next_run_at TEXT,
    last_run_at TEXT,
    last_status TEXT
);

CREATE TABLE IF NOT EXISTS automation_runs (
    id TEXT PRIMARY KEY,
    automation_id TEXT NOT NULL,
    trigger TEXT NOT NULL CHECK (trigger IN ('scheduled', 'manual')),
    status TEXT NOT NULL,
    queued_at TEXT NOT NULL,
    started_at TEXT,
    finished_at TEXT,
    duration_ms INTEGER,
    response_status INTEGER,
    response_body TEXT,
    error TEXT,
    FOREIGN KEY (automation_id) REFERENCES automations (id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_runs_automation_queued
    ON automation_runs (automation_id, queued_at DESC);
"""


class AutomationStore:
    def __init__(self, database_path: Path | str) -> None:
        self.database_path = Path(database_path)
        if self.database_path.parent != Path("."):
            self.database_path.parent.mkdir(parents=True, exist_ok=True)
        self._lock = threading.RLock()
        self._initialize()

    @contextmanager
    def _connection(self) -> Iterator[sqlite3.Connection]:
        connection = sqlite3.connect(
            self.database_path,
            timeout=30,
            check_same_thread=False,
        )
        connection.row_factory = sqlite3.Row
        connection.execute("PRAGMA foreign_keys = ON")
        connection.execute("PRAGMA journal_mode = WAL")
        try:
            yield connection
            connection.commit()
        except Exception:
            connection.rollback()
            raise
        finally:
            connection.close()

    def _initialize(self) -> None:
        with self._lock, self._connection() as connection:
            connection.executescript(SCHEMA)

    @staticmethod
    def _automation_from_row(row: sqlite3.Row) -> dict[str, Any]:
        automation = dict(row)
        automation["action"] = json.loads(automation.pop("action_config"))
        automation.pop("action_type", None)
        automation["enabled"] = bool(automation["enabled"])
        return automation

    @staticmethod
    def _run_from_row(row: sqlite3.Row) -> dict[str, Any]:
        return dict(row)

    def create_automation(
        self,
        name: str,
        description: str,
        schedule_type: str,
        cron: str | None,
        interval_seconds: int | None,
        action: dict[str, Any],
        enabled: bool,
        next_run_at: datetime | None,
    ) -> dict[str, Any]:
        automation_id = f"auto_{uuid.uuid4().hex[:16]}"
        now = isoformat(utc_now())
        with self._lock, self._connection() as connection:
            try:
                connection.execute(
                    """
                    INSERT INTO automations (
                        id, name, description, schedule_type, cron,
                        interval_seconds, action_type, action_config,
                        enabled, created_at, updated_at, next_run_at
                    ) VALUES (?, ?, ?, ?, ?, ?, 'http', ?, ?, ?, ?, ?)
                    """,
                    (
                        automation_id,
                        name,
                        description,
                        schedule_type,
                        cron,
                        interval_seconds,
                        json.dumps(action),
                        int(enabled),
                        now,
                        now,
                        isoformat(next_run_at) if next_run_at else None,
                    ),
                )
            except sqlite3.IntegrityError as error:
                raise DuplicateAutomationName(name) from error
        automation = self.get_automation(automation_id)
        if automation is None:
            raise RuntimeError("Created automation could not be read back")
        return automation

    def get_automation(self, automation_id: str) -> dict[str, Any] | None:
        with self._lock, self._connection() as connection:
            row = connection.execute(
                "SELECT * FROM automations WHERE id = ?", (automation_id,)
            ).fetchone()
        return self._automation_from_row(row) if row else None

    def list_automations(
        self, limit: int, offset: int
    ) -> tuple[list[dict[str, Any]], int]:
        with self._lock, self._connection() as connection:
            total = connection.execute(
                "SELECT COUNT(*) FROM automations"
            ).fetchone()[0]
            rows = connection.execute(
                "SELECT * FROM automations ORDER BY created_at DESC LIMIT ? OFFSET ?",
                (limit, offset),
            ).fetchall()
        return [self._automation_from_row(row) for row in rows], total

    def list_enabled(self) -> list[dict[str, Any]]:
        with self._lock, self._connection() as connection:
            rows = connection.execute(
                "SELECT * FROM automations WHERE enabled = 1 ORDER BY created_at"
            ).fetchall()
        return [self._automation_from_row(row) for row in rows]

    def update_automation(
        self, automation_id: str, changes: dict[str, Any]
    ) -> dict[str, Any] | None:
        allowed = {
            "name",
            "description",
            "schedule_type",
            "cron",
            "interval_seconds",
            "action",
            "enabled",
            "next_run_at",
        }
        values = {key: value for key, value in changes.items() if key in allowed}
        if not values:
            return self.get_automation(automation_id)
        values["updated_at"] = isoformat(utc_now())
        if "action" in values:
            values["action_config"] = json.dumps(values.pop("action"))
        if "enabled" in values:
            values["enabled"] = int(values["enabled"])
        if "next_run_at" in values:
            next_run = values["next_run_at"]
            values["next_run_at"] = isoformat(next_run) if next_run else None
        assignments = ", ".join(f"{column} = ?" for column in values)
        parameters = [*values.values(), automation_id]
        with self._lock, self._connection() as connection:
            try:
                cursor = connection.execute(
                    f"UPDATE automations SET {assignments} WHERE id = ?",
                    parameters,
                )
            except sqlite3.IntegrityError as error:
                raise DuplicateAutomationName(str(changes.get("name", ""))) from error
        if cursor.rowcount == 0:
            return None
        return self.get_automation(automation_id)

    def update_runtime(
        self,
        automation_id: str,
        *,
        next_run_at: datetime | None = None,
        last_run_at: datetime | None = None,
        last_status: str | None = None,
        clear_next_run: bool = False,
    ) -> None:
        values: dict[str, Any] = {}
        if clear_next_run:
            values["next_run_at"] = None
        elif next_run_at is not None:
            values["next_run_at"] = isoformat(next_run_at)
        if last_run_at is not None:
            values["last_run_at"] = isoformat(last_run_at)
        if last_status is not None:
            values["last_status"] = last_status
        if not values:
            return
        assignments = ", ".join(f"{column} = ?" for column in values)
        parameters = [*values.values(), automation_id]
        with self._lock, self._connection() as connection:
            connection.execute(
                f"UPDATE automations SET {assignments} WHERE id = ?",
                parameters,
            )

    def delete_automation(self, automation_id: str) -> bool:
        with self._lock, self._connection() as connection:
            cursor = connection.execute(
                "DELETE FROM automations WHERE id = ?", (automation_id,)
            )
        return cursor.rowcount > 0

    def create_run(self, automation_id: str, trigger: str) -> dict[str, Any]:
        run_id = f"run_{uuid.uuid4().hex[:16]}"
        now = isoformat(utc_now())
        with self._lock, self._connection() as connection:
            connection.execute(
                """
                INSERT INTO automation_runs
                    (id, automation_id, trigger, status, queued_at)
                VALUES (?, ?, ?, 'queued', ?)
                """,
                (run_id, automation_id, trigger, now),
            )
        run = self.get_run(run_id)
        if run is None:
            raise RuntimeError("Created run could not be read back")
        return run

    def mark_run_running(self, run_id: str, started_at: datetime) -> None:
        with self._lock, self._connection() as connection:
            connection.execute(
                """
                UPDATE automation_runs
                SET status = 'running', started_at = ?
                WHERE id = ?
                """,
                (isoformat(started_at), run_id),
            )

    def finish_run(
        self,
        run_id: str,
        status: str,
        finished_at: datetime,
        duration_ms: int,
        response_status: int | None,
        response_body: str | None,
        error: str | None,
    ) -> None:
        with self._lock, self._connection() as connection:
            connection.execute(
                """
                UPDATE automation_runs
                SET status = ?,
                    finished_at = ?,
                    duration_ms = ?,
                    response_status = ?,
                    response_body = ?,
                    error = ?
                WHERE id = ?
                """,
                (
                    status,
                    isoformat(finished_at),
                    duration_ms,
                    response_status,
                    response_body,
                    error,
                    run_id,
                ),
            )

    def get_run(self, run_id: str) -> dict[str, Any] | None:
        with self._lock, self._connection() as connection:
            row = connection.execute(
                "SELECT * FROM automation_runs WHERE id = ?", (run_id,)
            ).fetchone()
        return self._run_from_row(row) if row else None

    def list_runs(
        self, automation_id: str, limit: int, offset: int
    ) -> tuple[list[dict[str, Any]], int]:
        with self._lock, self._connection() as connection:
            total = connection.execute(
                "SELECT COUNT(*) FROM automation_runs WHERE automation_id = ?",
                (automation_id,),
            ).fetchone()[0]
            rows = connection.execute(
                """
                SELECT * FROM automation_runs
                WHERE automation_id = ?
                ORDER BY queued_at DESC
                LIMIT ? OFFSET ?
                """,
                (automation_id, limit, offset),
            ).fetchall()
        return [self._run_from_row(row) for row in rows], total
