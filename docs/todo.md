# MoonWitness — Product Roadmap (Todo)

## Phase 1 — Witness (MVP)  [in_progress]
### Goal
One screen, one timeline, one diagnostic bundle. Diagnose an incident in under 60 seconds.
### Core features
- Connect to Docker Engine (local socket)
- Auto-discover Compose project and Swarm service
- Fleet state overview: healthy / degraded / restart loop / OOMKilled / exited nonzero / replica mismatch
- Incident timeline per stack: deploy ? image change ? container die ? health check fail ? restart
- Evidence drawer: last logs, exit code, health check, image digest, ports, mounts, network, live CPU/RAM
- Diagnostic bundle export: markdown + JSON (timeline + log tail + inspect)
### Tech stack
- Go controller ? Docker Engine API + SSE stream
- Next.js UI ? consumes /api/v1/stream
- SQLite WAL (in-memory for 24–72 hours)
### Definition of done
- docker run --rm -v /var/run/docker.sock:/var/run/docker.sock moonwitness witness connect ? successful handshake
- UI shows fleet state without refresh
- Clicking a stack reveals timeline with evidence
- "Export bundle" button produces valid markdown
### Tests
- Go: integration test Docker socket, unit test timeline builder
- Playwright: E2E connect ? timeline ? export bundle

## Phase 2 — Runbook Actions  [pending]
### Goal
Restart, scale, rollback with approval and audit log. After Witness is trusted.
### Core features
- Restart selected container(s)
- Scale replica count (with confirmation modal)
- Rollback to previous image version
- Approval flow: require X-API-Key + confirmation
- Audit log: who, what, when, outcome
### Tech stack
- Same Go API, add mutation endpoints
- Front-end confirmation dialogs
- Audit table in SQLite
### Definition of done
- Restart container requires explicit confirm=true query param
- Scale changes go through /api/v1/actions/confirm
- Every action writes to udit_events table

## Phase 3 — Oracle (Future)  [blocked]
### Goal
Prediction of failure patterns after enough data is collected.
### Internal code name only — not marketed externally
### When to start
— After Phase 2 ships and enough incident data (>=100 runs per cluster)
— After auth + RBAC is stable
— After user requests prediksi di survey
### Possible features
- "This stack is likely to OOM in 24 hours"
- "Deploy this image instead — it has lower memory footprint"
- Auto-suggest health check tuning
### Success metrics
- Accuracy > 70% on held-out test set
- False positive < 10% (jangan spam alert)
### Success criteria
- Do not start until Phase 2 is production-stable
- Do not market as "Oracle" externally. Use internal only.

## Naming Hierarchy
| Name | Role |
|------|------|
| **MoonWitness** | Brand & product name |
| **Incident Witness** | Category narrative (read-only, observability) |
| **Controller** | Go component reading Docker Engine |
| **Observatory** | Fleet overview UI |
| **Record** | Timeline per stack |
| **Evidence Bundle** | Export artifact |
| **Oracle** | Internal code name for Phase 3 prediction; not exposed publicly |

## Copy Library
| Asset | Text |
|-------|------|
| Tagline | Evidence, not guesses. |
| English | Evidence, not guesses. |
| Hero | Your stack went dark. Here is what happened. |
| Subhero | MoonWitness turns Docker restarts, exits, health checks, and logs into one incident timeline you can diagnose and share in under a minute. |
| CTA | Run the witness |
| Trust line | Read-only by default. Your data stays on your host. |
| Footer | MoonWitness doesn't guess what broke. It shows what happened. |
| Phase 1 CTA | Run the witness |
| Phase 2 CTA | Approve and run runbook actions |
| Phase 3 note | Prediction — internal code name only. |

## What MoonWitness IS NOT
- Not a general-purpose monitoring dashboard (Grafana/Datadog territory).
- Not an AI copilot that hallucinates causes.
- Not a Portainer clone.
- Not a job queue / Celery clone.
- Not a Kubernetes-only tool.
- Not a SaaS with tenant isolation (local-first by design).
- Not a desktop app with hardcoded moon phases (that's a screensaver).
- Not an Oracle. (It witnesses. It does not predict—at least not yet.)

## Milestone Checklist
[-] Phase 1 MVP: fleet state + timeline + bundle
[-] Phase 1 tests: Go integration + Playwright E2E
[-] Phase 1 deploy: docker compose up -d works
[-] Phase 2 MVP: restart + scale with approval
[-] Phase 2 audit: audit_events table populated
[-] Phase 2 UI: confirmation modals
[-] Phase 3 data threshold: >=100 incidents per cluster
[-] Phase 3 auth: JWT + RBAC stable
[-] Phase 3 internal only: no public marketing
[-] Rebrand: remove "Oracle" from all public-facing copy
