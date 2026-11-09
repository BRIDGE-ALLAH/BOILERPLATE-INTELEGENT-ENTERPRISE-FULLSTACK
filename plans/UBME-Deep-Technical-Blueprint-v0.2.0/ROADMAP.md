# Implementation Roadmap

## Delivery principle

Build a working vertical slice, not a broad collection of empty modules. Each phase must end with executable tests and a documented acceptance report. Do not claim a phase is complete because types compile or files exist.

## Phase 0 — Feasibility and architecture lock

**Objective:** prove the selected runtime/persistence combination before building the engine.

Tasks:
- pin Bun version and MikroORM release candidate in a spike branch;
- test programmatic `EntitySchema`/`defineEntity` behavior;
- test Bun native SQLite through the documented Kysely dialect;
- test PostgreSQL `pg` driver under Bun;
- verify transactions, relations, migrations, shutdown, request isolation;
- record OS/architecture and exact package versions;
- choose the supported adapter path and write compatibility report.

Exit criteria:
- SQLite test suite passes under Bun;
- PostgreSQL test suite passes under Bun, or a clear blocker and explicit runtime alternative is approved;
- no assumption of Bun.SQL/MikroORM drop-in compatibility;
- architecture decision is documented.

## Phase 1 — Core contracts and registry

Tasks:
- define model/field/relation/action/policy metadata contracts;
- implement registry state machine BUILDING/FROZEN;
- implement stable model identifiers and naming validation;
- implement addon topological sorting and cycle detection;
- implement relation-target and field-reference validation;
- implement metadata snapshot/introspection;
- implement typed error hierarchy.

Exit criteria:
- model definitions can register without a database;
- duplicate/missing/circular references fail with actionable errors;
- resolved metadata is deterministic and immutable after freeze.

## Phase 2 — Persistence compiler and context lifecycle

Tasks:
- compile basic scalar field descriptors into MikroORM metadata;
- create MikroORM composition root and lifecycle;
- implement EntityManager fork per request/job;
- implement explicit `ExecutionContext` creation/disposal;
- map UUID, boolean, date/time, JSON and decimal codec rules;
- implement CRUD for one model;
- implement transaction/rollback and Unit of Work boundaries.

Exit criteria:
- one model persists and reloads on each supported database;
- two concurrent contexts do not share identity map state;
- rollback leaves no partial records;
- adapter contract suite passes for supported scalar fields.

## Phase 3 — Relationships and domain query

Tasks:
- implement ManyToOne, OneToMany, OneToOne;
- implement ManyToMany pivot mapping;
- support explicit association entities;
- implement typed domain AST parser and validator;
- compile safe predicates to parameterized MikroORM criteria/QueryBuilder;
- implement stable sort, pagination, count and exists;
- implement bounded relation traversal and population plans.

Exit criteria:
- relationship CRUD and referential integrity tests pass;
- invalid field paths/operators fail before SQL execution;
- count/search/exists share identical security query compilation;
- stable pagination has deterministic tie-breakers.

## Phase 4 — Security boundary

Tasks:
- implement model ACL;
- implement deny-by-default record grants and explicit deny rules;
- inject tenant/org global predicates;
- implement field read/write policies;
- secure relation population, aggregates, exports and serialization;
- make raw EntityManager/QueryBuilder access private to adapter;
- implement policy decision diagnostics without leaking data;
- add PostgreSQL RLS defense-in-depth where supported.

Exit criteria:
- complete threat test catalogue passes;
- unauthorized IDs, counts, relations and fields do not leak;
- tenant isolation passes on SQLite and PostgreSQL;
- direct application imports cannot bypass UBME in the approved package architecture.

## Phase 5 — RecordSet, actions, validation and lifecycle

Tasks:
- implement `RecordSet` browse/search/read/write/unlink/count/exists;
- implement field and model validation;
- implement business action registration and invocation;
- implement action transaction policy;
- implement optimistic version handling;
- map MikroORM lifecycle events carefully;
- implement transactional outbox storage and dispatcher contract;
- add audit records for privileged operations.

Exit criteria:
- one sample aggregate (e.g. SaleOrder + SaleOrderLine) confirms/cancels through actions;
- action failure rolls back data and outbox;
- batch operations do not skip policy or validation;
- concurrent update is detected rather than silently lost.

## Phase 6 — Compute engine

Tasks:
- implement virtual computed fields;
- build dependency graph and cycle detection;
- implement same-record scalar computation;
- implement relation-aware dependency metadata;
- add stored compute only for the supported, tested dependency subset;
- implement batch invalidation/recompute and backfill job;
- define search/sort/group policy for computed fields.

Exit criteria:
- changing every declared dependency produces correct values;
- relation collection updates are handled;
- batch update and transaction rollback do not leave stale values;
- unsupported compute patterns fail explicitly.

## Phase 7 — Model extension and addons

Tasks:
- implement mixin metadata composition;
- implement model extension and collision policy;
- implement delegation/composition metadata;
- evaluate STI only if an actual use case needs it;
- implement addon manifest validation and resolved graph;
- implement addon-scoped migrations and install plan;
- freeze registry before ORM init.

Exit criteria:
- extension order is deterministic;
- incompatible overrides fail;
- adding a field to a populated model requires an explicit migration/backfill;
- startup uses one immutable metadata snapshot.

## Phase 8 — CLI, migration workflow and operational readiness

Tasks:
- implement `model:list`, `model:describe`, `addon:graph`;
- implement `schema:check` and migration diff review;
- implement migration status/apply wrapper;
- implement safe migration preflight and backup hooks;
- implement structured logging and query metrics;
- implement health/readiness endpoints in the reference app;
- write backup/restore and upgrade runbooks.

Exit criteria:
- migrations are version-controlled and tested from previous release fixtures;
- application boot refuses incompatible schema;
- no production auto-schema mutation;
- operators can inspect model, addon, and migration state.

## Phase 9 — Hardening and v1.0

Tasks:
- run performance baselines and query-plan review;
- add N+1/query-budget tests;
- run fuzz/property tests for domain AST and policy composition;
- test load/concurrency and SQLite lock contention;
- test graceful shutdown and worker crash/retry behavior;
- audit package exports and direct persistence bypass paths;
- review dependency vulnerabilities and license obligations;
- complete docs, examples, and release notes.

Exit criteria:
- all v1.0 gates in `BLUEPRINT.md` pass;
- supported compatibility matrix is published;
- known limitations are explicit;
- release can be reproduced from a clean checkout.

## Recommended first vertical slice

Build only:
- `res.partner`;
- `sale.order`;
- `sale.order.line`;
- ManyToOne + OneToMany;
- draft -> confirmed -> cancelled actions;
- one tenant/organization policy;
- one virtual subtotal/total computation;
- SQLite and PostgreSQL contract tests.

This vertical slice is sufficient to expose most architectural errors before a large module catalog is created.
