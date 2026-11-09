# UBME — Universal Business Model Engine

**Deep Technical Blueprint · v0.2.0 · Research snapshot: 2026-11-09**

> A Bun-first, TypeScript model-driven business framework inspired by the useful architectural ideas of Odoo, built on top of MikroORM rather than attempting to reimplement database persistence.

## What this repository describes

UBME is a proposed architecture and implementation plan. It is **not an existing package**, and the examples in this blueprint describe the intended UBME API. Names such as `defineModel`, `Fields.*`, `ExecutionContext`, `RecordSet`, and `engine.model()` are proposed UBME interfaces; they are not MikroORM exports.

The goal is to provide a single, typed model definition that can be reused by API, Admin, Worker, Automation, CLI, and other applications. The engine owns model metadata, business actions, validation, security policy, domain queries, addon composition, and model-level APIs. MikroORM owns relational persistence concerns such as EntityManager, Unit of Work, Identity Map, change tracking, and SQL mapping.

## Recommended decisions

1. **Do not build a persistence ORM from scratch.** Use MikroORM as the persistence foundation.
2. **Compile UBME model descriptors into MikroORM metadata before ORM initialization.** Freeze the model registry after boot.
3. **Use a typed `ExecutionContext` and request/job-scoped EntityManager.** Never share a mutable EntityManager/Identity Map globally across concurrent requests.
4. **Implement Odoo-inspired model semantics explicitly:** Model Registry, `RecordSet`, Environment-like context, relational fields, metadata, domain AST, actions, computed fields, access rules, and addon dependencies.
5. **Security is mandatory in the engine boundary.** The public application APIs must not be able to access raw EntityManager/QueryBuilder operations that bypass policy enforcement.
6. **Default to deny.** A model operation requires explicit model permission and an applicable record grant. Explicit public/unrestricted access must be declared.
7. **SQLite and PostgreSQL are the initial database targets, but portability is tested—not assumed.** SQLite and PostgreSQL have different type, locking, DDL, and query semantics.
8. **Migrations are reviewed deployment artifacts.** Never run destructive schema synchronization automatically in production.
9. **Computed fields are staged.** Start with virtual deterministic computations; add stored dependency-driven computation after invalidation and batch recomputation are proven.
10. **No runtime hot installation of arbitrary addon code in v1.** Resolve addon code and model metadata at startup, then freeze the registry.

## Documentation map

| File | Purpose |
|---|---|
| `BLUEPRINT.md` | Full functional and technical specification |
| `ARCHITECTURE.md` | Components, lifecycle, execution and persistence boundaries |
| `MODEL_API.md` | Proposed TypeScript model DSL and examples |
| `SECURITY.md` | ACL, record policies, field policy, tenant boundary, threat model |
| `DATABASES.md` | Bun, MikroORM, SQLite and PostgreSQL compatibility decisions |
| `MIGRATIONS.md` | Schema lifecycle, migration workflow and addon migrations |
| `ADDONS.md` | Module manifest, dependency graph, extension and inheritance |
| `ROADMAP.md` | Phases, exit criteria and delivery sequence |
| `TESTING.md` | Adapter, behavioral, security, performance and compatibility tests |
| `DECISIONS.md` | Explicit architecture decisions and rejected alternatives |
| `RISKS.md` | Known technical risks, unknowns and mitigations |
| `EXECUTION_PLAN.json` | Machine-readable implementation phases and tasks |
| `REFERENCES.md` | Official documentation sources consulted |

## Critical feasibility note

The current MikroORM documentation is on the v7.2 line and recommends `defineEntity` for programmatic entity definitions. UBME may use `EntitySchema` as its dynamic metadata compilation target and `defineEntity` for statically authored models where its type inference is useful. Both routes must be confirmed against the exact pinned MikroORM release during the feasibility spike.

For SQLite, MikroORM documents two distinct paths:

- `@mikro-orm/sqlite` uses `better-sqlite3`.
- Bun's native `bun:sqlite` is integrated through MikroORM's generic `SqliteDriver` with Kysely and the `kysely-bun-sqlite` dialect.

For PostgreSQL, MikroORM's documented driver uses `pg`. Bun can run a large part of the Node.js package ecosystem, but that alone is not a guarantee that every MikroORM/driver combination works correctly. PostgreSQL-under-Bun is therefore a required compatibility spike, not an assumed fact.

See `DATABASES.md` and `REFERENCES.md` before choosing package versions or declaring runtime support.

## Status and scope

- Blueprint status: **proposed architecture, research-reviewed**.
- Implementation status: **not implemented by this artifact**.
- Version target: v1.0 after all roadmap acceptance criteria pass.
- First deliverable: a feasibility proof for Bun + MikroORM + SQLite + PostgreSQL, followed by a static model registry and one complete sample business aggregate.

## Non-goals

UBME is not an ERP application, not an Odoo clone, not an API generator by itself, and not a replacement for PostgreSQL or SQLite. Accounting, inventory, payroll, UI form designers, report designers, and visual workflow builders belong in addons or separate applications after the model engine is stable.
