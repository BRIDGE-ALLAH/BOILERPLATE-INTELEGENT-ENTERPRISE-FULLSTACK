# MoonWitness Automation

FastAPI service for durable, scheduled HTTP automations and manual webhook runs.

## Features

- Cron and interval schedules persisted in SQLite
- APScheduler jobs restored on service startup
- SSRF protection that rejects private, loopback, and reserved targets by default
- Optional `X-API-Key` protection for management routes
- Manual triggers, run history, response capture, and execution errors
- CORS allowlist configured through the environment

## Run

```powershell
cd apps/automation
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -e ".[dev]"
Copy-Item .env.example .env
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

OpenAPI: `http://localhost:8000/docs`

Health: `http://localhost:8000/health`

## Configuration

Environment variables use the `AUTOMATION_` prefix.

| Variable | Default | Purpose |
| --- | --- | --- |
| `AUTOMATION_DATABASE_PATH` | `automation.db` | SQLite database file |
| `AUTOMATION_API_KEY` | unset | Protects management routes when set |
| `AUTOMATION_ALLOW_PRIVATE_TARGETS` | `false` | Permit internal-network action targets |
| `AUTOMATION_REQUEST_TIMEOUT_SECONDS` | `10` | Default outbound timeout |
| `AUTOMATION_MAX_RESPONSE_BYTES` | `8192` | Captured response body limit |
| `AUTOMATION_CORS_ORIGINS` | `http://localhost:3000` | Comma-separated allowed origins |

## API

| Method | Route | Purpose |
| --- | --- | --- |
| `GET` | `/health` | Service and scheduler status |
| `POST` | `/automations` | Create an automation |
| `GET` | `/automations` | List automations |
| `GET` | `/automations/{id}` | Read one automation |
| `PATCH` | `/automations/{id}` | Update or enable/disable |
| `DELETE` | `/automations/{id}` | Delete automation and its runs |
| `POST` | `/automations/{id}/trigger` | Queue a manual run |
| `GET` | `/automations/{id}/runs` | List run history |
| `GET` | `/runs/{id}` | Read one run |

Create an interval automation:

```powershell
$headers = @{ "content-type" = "application/json" }
$body = @{
  name = "notify-moonrise"
  description = "POST moonrise events to the webhook"
  schedule_type = "interval"
  interval_seconds = 300
  action = @{
    url = "https://example.com/hooks/moonrise"
    method = "POST"
    headers = @{ "content-type" = "application/json" }
    body = '{"event":"moonrise"}'
  }
} | ConvertTo-Json -Depth 5

Invoke-RestMethod -Method Post -Uri http://localhost:8000/automations `
  -ContentType application/json -Body $body -Headers @{ "x-api-key" = "secret" }
```

Create a cron automation with `"schedule_type": "cron"` and `"cron": "0 2 * * *"`.

## Tests

```powershell
.\.venv\Scripts\python.exe -m pytest
```
