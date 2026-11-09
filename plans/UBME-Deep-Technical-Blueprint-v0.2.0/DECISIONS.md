# Architecture Decisions

This file records binding decisions and the reason behind them. It is intentionally concise and can be updated as implementation evidence becomes available.

## D-001 — Build a model/business engine, not a new persistence ORM

**Decision:** MikroORM is the persistence foundation; UBME owns Odoo-like business model semantics.  
**Reason:** Reimplementing identity map, Unit of Work, change tracking, relational persistence, transactions, and SQL drivers would create large correctness and maintenance risk.  
**Consequence:** The UBME core must remain independent of MikroORM; the adapter translates descriptors and operations.

## D-002 — Compile model metadata before ORM initialization

**Decision:** Resolve addons and compile all model metadata before `MikroORM.init()`, then freeze the registry.  
**Reason:** Dynamic late registration and physical schema changes are not assumed to be supported by a normal initialized ORM.  
**Consequence:** Addon install/update is a controlled deployment/restart operation in v1.

## D-003 — Programmatic metadata over decorators as the foundation

**Decision:** Prefer explicit model descriptors and MikroORM `EntitySchema`/`defineEntity` compilation.  
**Reason:** The project needs deterministic addon composition and explicit metadata; decorators can remain an optional authoring convenience later. MikroORM v7 documentation recommends `defineEntity` for programmatic, typed definitions.  
**Consequence:** Verify type inference and class behavior in the initial spike; avoid reflection metadata dependence.

## D-004 — Explicit ExecutionContext and scoped EntityManager

**Decision:** Every request/job/command receives a context with a fresh EntityManager fork.  
**Reason:** Identity Map and Unit of Work state must not leak across concurrent requests. Explicit context survives worker boundaries more predictably than hidden ambient state.  
**Consequence:** AsyncLocalStorage is convenience only; queue payloads reconstruct trusted context.

## D-005 — Deny-by-default record security

**Decision:** Missing model/record/field grants deny access. Explicit deny overrides grants.  
**Reason:** Odoo's default-allow record-rule behavior is not selected for a new platform where accidental policy omission is a key risk.  
**Consequence:** Public/unrestricted models require explicit policy configuration; this is stricter than Odoo.

## D-006 — Typed AST for domains

**Decision:** Query filters use a structured TypeScript AST.  
**Reason:** It is safer to validate than evaluating string expressions or accepting raw SQL.  
**Consequence:** UBME syntax is inspired by Odoo domains but does not promise tuple/string compatibility.

## D-007 — Outbox for external side effects

**Decision:** Persist domain event records in the same transaction; publish asynchronously after commit.  
**Reason:** Entity lifecycle hooks and flush timing are not a reliable boundary for external delivery.  
**Consequence:** At-least-once delivery and idempotent consumers are required.

## D-008 — SQLite and PostgreSQL are separate verified targets

**Decision:** Treat them as two adapters with a shared portable contract, not interchangeable engines.  
**Reason:** Type mapping, transaction, locking, JSON, DDL, and query features differ.  
**Consequence:** Full contract tests and capability reporting are required; no false parity claims.

## D-009 — No automatic production schema synchronization

**Decision:** Production schema evolves through reviewed migrations only.  
**Reason:** MikroORM warns SchemaGenerator can alter/drop schema and is not a production migration tool.  
**Consequence:** Boot verifies compatibility; deployment pipeline applies migrations.

## D-010 — Computed fields are phased

**Decision:** Start with virtual deterministic compute; stored cross-model compute is deferred.  
**Reason:** Correct invalidation across relation changes and batch writes is difficult and can silently corrupt derived values.  
**Consequence:** Search/group/sort semantics must be declared; unsupported compute patterns fail explicitly.

## D-011 — Addon code is trusted, static application code in v1

**Decision:** No arbitrary remote code loading or hot install.  
**Reason:** Dynamic code execution expands security, migration, and operational risk.  
**Consequence:** Addon graph is resolved at boot and changed through deployment.

## D-012 — No public raw persistence escape hatch

**Decision:** Application packages use UBME façade; raw EntityManager/QueryBuilder remains adapter-private.  
**Reason:** Direct DB access can bypass record policies, audit, computes, and event creation.  
**Consequence:** Maintenance scripts need separately scoped, audited capabilities.
