from __future__ import annotations

from datetime import datetime, timezone
from typing import Any, Literal

from croniter import croniter
from pydantic import BaseModel, Field, HttpUrl, model_validator


ScheduleType = Literal["cron", "interval"]
HttpMethod = Literal["GET", "POST", "PUT", "PATCH", "DELETE"]
RunStatus = Literal["queued", "running", "succeeded", "failed", "skipped"]


class HttpAction(BaseModel):
    url: HttpUrl
    method: HttpMethod = "POST"
    headers: dict[str, str] = Field(default_factory=dict, max_length=30)
    body: str | None = Field(default=None, max_length=262_144)
    timeout_seconds: float | None = Field(default=None, gt=0, le=60)

    @model_validator(mode="after")
    def validate_headers(self) -> HttpAction:
        for name, value in self.headers.items():
            if not name or any(character in name for character in "\r\n:"):
                raise ValueError(f"Invalid header name: {name!r}")
            if any(character in value for character in "\r\n"):
                raise ValueError(f"Invalid header value for {name!r}")
            if len(name) > 128 or len(value) > 2048:
                raise ValueError(f"Header {name!r} is too large")
        return self


class AutomationCreate(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    description: str = Field(default="", max_length=500)
    schedule_type: ScheduleType
    cron: str | None = Field(default=None, max_length=100)
    interval_seconds: int | None = Field(default=None, ge=30, le=604_800)
    action: HttpAction
    enabled: bool = True

    @model_validator(mode="after")
    def validate_schedule(self) -> AutomationCreate:
        self.name = self.name.strip()
        if not self.name:
            raise ValueError("Automation name cannot be empty")
        if self.schedule_type == "cron":
            if not self.cron:
                raise ValueError("cron is required when schedule_type is 'cron'")
            if self.interval_seconds is not None:
                raise ValueError("interval_seconds is not allowed for cron schedules")
            base = datetime.now(timezone.utc)
            try:
                next_run = croniter(self.cron, base).get_next(datetime)
            except (KeyError, TypeError, ValueError) as error:
                raise ValueError(f"Invalid cron expression: {error}") from error
            if next_run <= base:
                raise ValueError("cron expression does not produce a future run")
        else:
            if self.interval_seconds is None:
                raise ValueError(
                    "interval_seconds is required when schedule_type is 'interval'"
                )
            if self.cron is not None:
                raise ValueError("cron is not allowed for interval schedules")
        return self


class AutomationUpdate(BaseModel):
    name: str | None = Field(default=None, min_length=1, max_length=100)
    description: str | None = Field(default=None, max_length=500)
    schedule_type: ScheduleType | None = None
    cron: str | None = Field(default=None, max_length=100)
    interval_seconds: int | None = Field(default=None, ge=30, le=604_800)
    action: HttpAction | None = None
    enabled: bool | None = None


class AutomationRead(BaseModel):
    id: str
    name: str
    description: str
    schedule_type: ScheduleType
    cron: str | None
    interval_seconds: int | None
    action: HttpAction
    enabled: bool
    created_at: datetime
    updated_at: datetime
    next_run_at: datetime | None
    last_run_at: datetime | None
    last_status: str | None


class AutomationList(BaseModel):
    automations: list[AutomationRead]
    total: int
    limit: int
    offset: int


class RunRead(BaseModel):
    id: str
    automation_id: str
    trigger: Literal["scheduled", "manual"]
    status: RunStatus
    queued_at: datetime
    started_at: datetime | None
    finished_at: datetime | None
    duration_ms: int | None
    response_status: int | None
    response_body: str | None
    error: str | None


class RunList(BaseModel):
    runs: list[RunRead]
    total: int
    limit: int
    offset: int


class HealthResponse(BaseModel):
    status: Literal["healthy"]
    service: str
    timestamp: datetime
    scheduler_running: bool
    scheduled_jobs: int


class TriggerResponse(BaseModel):
    message: str
    run: RunRead
