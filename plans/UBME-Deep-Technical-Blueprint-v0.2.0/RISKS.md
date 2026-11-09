# Risks, Unknowns and Mitigations

| Risk / unknown | Impact | Mitigation / gate |
|---|---|---|
| MikroORM PostgreSQL driver under Bun is not explicitly guaranteed by the docs | Runtime failure or edge-case bugs | Phase 0 full integration suite using exact Bun and `pg` versions; do not declare support early |
| Bun native SQLite needs generic `SqliteDriver` + Kysely dialect, not the regular better-sqlite3 path | Wrong dependency/configuration | Keep both routes clearly separated; test native route first |
| Dynamic UBME descriptors may not map cleanly to all MikroORM metadata features | Registry/compiler design failure | Prototype EntitySchema compilation for scalar, relation, inheritance, hooks and custom types before API freeze |
| Model extension after ORM init may require reinitialization | Runtime inconsistency | Freeze registry before init; addon updates are deployment/restart operations |
| Stored computed fields become stale on bulk or relation writes | Incorrect business values | Virtual compute first; stored compute only with complete invalidation matrix and tests |
| Record filters can be bypassed through raw queries or disabled filters | Data leak | UBME-owned query boundary, raw persistence private, policy injection tests, PostgreSQL RLS defense-in-depth |
| Odoo access semantics copied incompletely | Authorization bugs | Document the deliberate deny-by-default semantics and test policy composition explicitly |
| Decimal behavior differs between SQLite and PostgreSQL | Financial calculation errors | Decimal string contract, explicit precision/scale codec, 64-bit range analysis, no JS float |
| SQLite write contention under concurrent workloads | Busy errors / latency | Document local single-writer profile, busy timeout/retry, load tests; use PostgreSQL for heavier concurrency |
| `AsyncLocalStorage` does not automatically cover every Worker/channel boundary | Wrong user/tenant context | Explicit context propagation and re-creation in each worker |
| Entity lifecycle hook behavior misses collection mutations or occurs before commit | Missing/duplicate events | Inspect Unit of Work collection changes; transactional outbox; no external I/O from hooks |
| Addon removal can delete shared data | Data loss | Ownership metadata, migration plans, explicit approval and backup |
| Public RecordSet can become a security bypass if instantiated from IDs | Unauthorized operations | Only create through scoped ModelContext; re-check policy for every operation |
| Too many packages too early | Maintenance overhead | Start with core, MikroORM adapter, CLI and testkit; split only when stable |
| API DSL mimics Odoo too closely and becomes magical | Hard-to-debug code and poor TS inference | Explicit typed APIs, no arbitrary Python-like expression evaluator |

## Open questions to close during Phase 0

1. Exact MikroORM v7 patch and package alignment.
2. Whether `EntitySchema` compilation can support the desired addon field merging without unsupported metadata mutation.
3. Whether `@mikro-orm/postgresql` + `pg` is stable under the chosen Bun version/OS.
4. Whether native `bun:sqlite` Kysely dialect covers all required query/migration operations.
5. Best exact Decimal storage codec for SQLite given required precision and aggregation patterns.
6. Which domain operators can be portable without surprising collation/case-sensitivity differences.
7. Whether initial business models need STI, or mixin + composition is sufficient.

Do not resolve open questions by assumption. Each needs a runnable proof or explicit deferral.
