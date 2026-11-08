from __future__ import annotations

import asyncio
import hmac
from contextlib import asynccontextmanager
from typing import AsyncIterator

import uvicorn
from fastapi import (
    APIRouter,
    BackgroundTasks,
    Depends,
    FastAPI,
    HTTPException,
    Query,
    Request,
    status,
)
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import Response

from .config import Settings
from .database import AutomationStore, DuplicateAutomationName, utc_now
from .engine import AutomationExecutor, calculate_next_run
from .schemas import (
    AutomationCreate,
    AutomationList,
    AutomationRead,
    AutomationUpdate,
    HealthResponse,
    RunList,
    RunRead,
    TriggerResponse,
)
from .scheduler import AutomationScheduler


def require_api_key(request: Request) -> None:
    configured_key = request.app.state.settings.api_key
    if not configured_key:
        return
    provided_key = request.headers.get("x-api-key", "")
    if not provided_key or not hmac.compare_digest(provided_key, configured_key):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or missing API key",
        )


def create_app(settings: Settings | None = None) -> FastAPI:
    app_settings = settings or Settings()

    @asynccontextmanager
    async def lifespan(app: FastAPI) -> AsyncIterator[None]:
        store = AutomationStore(app_settings.database_path)
        executor = AutomationExecutor(store, app_settings)
        scheduler = AutomationScheduler(store, executor)
        app.state.settings = app_settings
        app.state.store = store
        app.state.executor = executor
        app.state.scheduler = scheduler
        scheduler.start()
        try:
            yield
        finally:
            scheduler.shutdown()

    app = FastAPI(
        title=app_settings.app_name,
        version="1.0.0",
        lifespan=lifespan,
    )
    app.add_middleware(
        CORSMiddleware,
        allow_origins=app_settings.allowed_origins,
        allow_credentials=False,
        allow_methods=["GET", "POST", "PATCH", "DELETE"],
        allow_headers=["content-type", "x-api-key"],
    )

    router = APIRouter(dependencies=[Depends(require_api_key)])

    @app.get("/health", response_model=HealthResponse, tags=["system"])
    async def health(request: Request) -> HealthResponse:
        scheduler: AutomationScheduler = request.app.state.scheduler
        return HealthResponse(
            status="healthy",
            service="moonwitness-automation",
            timestamp=utc_now(),
            scheduler_running=scheduler.running,
            scheduled_jobs=scheduler.job_count,
        )

    @router.post(
        "/automations",
        response_model=AutomationRead,
        status_code=status.HTTP_201_CREATED,
        tags=["automations"],
    )
    async def create_automation(
        payload: AutomationCreate,
        request: Request,
    ) -> AutomationRead:
        store: AutomationStore = request.app.state.store
        scheduler: AutomationScheduler = request.app.state.scheduler
        next_run = calculate_next_run(payload.model_dump()) if payload.enabled else None
        try:
            automation = await asyncio.to_thread(
                store.create_automation,
                name=payload.name,
                description=payload.description,
                schedule_type=payload.schedule_type,
                cron=payload.cron,
                interval_seconds=payload.interval_seconds,
                action=payload.action.model_dump(mode="json"),
                enabled=payload.enabled,
                next_run_at=next_run,
            )
        except DuplicateAutomationName as error:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail=f"Automation name {payload.name!r} already exists",
            ) from error
        scheduler.refresh(automation)
        return AutomationRead.model_validate(automation)

    @router.get(
        "/automations",
        response_model=AutomationList,
        tags=["automations"],
    )
    async def list_automations(
        request: Request,
        limit: int = Query(default=50, ge=1, le=200),
        offset: int = Query(default=0, ge=0),
    ) -> AutomationList:
        store: AutomationStore = request.app.state.store
        automations, total = await asyncio.to_thread(
            store.list_automations, limit, offset
        )
        return AutomationList(
            automations=[
                AutomationRead.model_validate(automation) for automation in automations
            ],
            total=total,
            limit=limit,
            offset=offset,
        )

    @router.get(
        "/automations/{automation_id}",
        response_model=AutomationRead,
        tags=["automations"],
    )
    async def get_automation(automation_id: str, request: Request) -> AutomationRead:
        store: AutomationStore = request.app.state.store
        automation = await asyncio.to_thread(store.get_automation, automation_id)
        if automation is None:
            raise HTTPException(status_code=404, detail="Automation not found")
        return AutomationRead.model_validate(automation)

    @router.patch(
        "/automations/{automation_id}",
        response_model=AutomationRead,
        tags=["automations"],
    )
    async def update_automation(
        automation_id: str,
        payload: AutomationUpdate,
        request: Request,
    ) -> AutomationRead:
        store: AutomationStore = request.app.state.store
        scheduler: AutomationScheduler = request.app.state.scheduler
        current = await asyncio.to_thread(store.get_automation, automation_id)
        if current is None:
            raise HTTPException(status_code=404, detail="Automation not found")

        patch = payload.model_dump(exclude_unset=True)
        merged = {
            "name": current["name"],
            "description": current["description"],
            "schedule_type": current["schedule_type"],
            "cron": current["cron"],
            "interval_seconds": current["interval_seconds"],
            "action": current["action"],
            "enabled": current["enabled"],
        }
        merged.update(patch)
        validated = AutomationCreate.model_validate(merged)
        schedule_changed = bool(
            {"schedule_type", "cron", "interval_seconds", "enabled"} & set(patch)
        )
        changes: dict[str, object] = {
            "name": validated.name,
            "description": validated.description,
            "schedule_type": validated.schedule_type,
            "cron": validated.cron,
            "interval_seconds": validated.interval_seconds,
            "action": validated.action.model_dump(mode="json"),
            "enabled": validated.enabled,
        }
        if schedule_changed:
            changes["next_run_at"] = (
                calculate_next_run(changes) if validated.enabled else None
            )

        try:
            updated = await asyncio.to_thread(
                store.update_automation, automation_id, changes
            )
        except DuplicateAutomationName as error:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail=f"Automation name {validated.name!r} already exists",
            ) from error
        if updated is None:
            raise HTTPException(status_code=404, detail="Automation not found")
        scheduler.refresh(updated)
        return AutomationRead.model_validate(updated)

    @router.delete(
        "/automations/{automation_id}",
        status_code=status.HTTP_204_NO_CONTENT,
        tags=["automations"],
    )
    async def delete_automation(automation_id: str, request: Request) -> Response:
        store: AutomationStore = request.app.state.store
        scheduler: AutomationScheduler = request.app.state.scheduler
        deleted = await asyncio.to_thread(store.delete_automation, automation_id)
        if not deleted:
            raise HTTPException(status_code=404, detail="Automation not found")
        scheduler.remove(automation_id)
        return Response(status_code=status.HTTP_204_NO_CONTENT)

    @router.post(
        "/automations/{automation_id}/trigger",
        response_model=TriggerResponse,
        status_code=status.HTTP_202_ACCEPTED,
        tags=["automations"],
    )
    async def trigger_automation(
        automation_id: str,
        request: Request,
        background_tasks: BackgroundTasks,
    ) -> TriggerResponse:
        store: AutomationStore = request.app.state.store
        executor: AutomationExecutor = request.app.state.executor
        automation = await asyncio.to_thread(store.get_automation, automation_id)
        if automation is None:
            raise HTTPException(status_code=404, detail="Automation not found")
        if not automation["enabled"]:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="Automation is disabled",
            )
        run = await asyncio.to_thread(store.create_run, automation_id, "manual")
        background_tasks.add_task(executor.execute_run, run["id"])
        return TriggerResponse(
            message="Automation run queued",
            run=RunRead.model_validate(run),
        )

    @router.get(
        "/automations/{automation_id}/runs",
        response_model=RunList,
        tags=["runs"],
    )
    async def list_runs(
        automation_id: str,
        request: Request,
        limit: int = Query(default=50, ge=1, le=200),
        offset: int = Query(default=0, ge=0),
    ) -> RunList:
        store: AutomationStore = request.app.state.store
        automation = await asyncio.to_thread(store.get_automation, automation_id)
        if automation is None:
            raise HTTPException(status_code=404, detail="Automation not found")
        runs, total = await asyncio.to_thread(
            store.list_runs, automation_id, limit, offset
        )
        return RunList(
            runs=[RunRead.model_validate(run) for run in runs],
            total=total,
            limit=limit,
            offset=offset,
        )

    @router.get("/runs/{run_id}", response_model=RunRead, tags=["runs"])
    async def get_run(run_id: str, request: Request) -> RunRead:
        store: AutomationStore = request.app.state.store
        run = await asyncio.to_thread(store.get_run, run_id)
        if run is None:
            raise HTTPException(status_code=404, detail="Run not found")
        return RunRead.model_validate(run)

    app.include_router(router)
    return app


app = create_app()


if __name__ == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
