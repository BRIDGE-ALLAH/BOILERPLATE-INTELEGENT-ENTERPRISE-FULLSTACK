# Testing and Quality Strategy

## 1. Quality gates run from the beginning

Every commit should run:
- formatting;
- linting;
- TypeScript typecheck;
- unit tests;
- adapter contract tests where infrastructure is available;
- package boundary/dependency checks;
- build/package export tests.

Use Bun's test runner if it satisfies the required test infrastructure; tests should be deterministic and isolate database state.

## 2. Adapter contract tests

The same behavior suite must run against every supported adapter:

### Scalar values
- nullable and required values;
- Unicode and maximum lengths;
- integer/bigint bounds;
- Decimal exact round-trip and compare behavior;
- Date and UTC DateTime round-trip;
- JSON validation/round-trip;
- enum/check constraints;
- binary payloads and size limits.

### Relations
- ManyToOne ownership and nullability;
- OneToMany inverse mapping;
- OneToOne unique constraint;
- ManyToMany pivot operations;
- explicit association entity;
- restrict/set-null/cascade deletion semantics;
- orphan behavior.

### Unit of Work and transactions
- create/update/delete flush;
- identity map consistency within one context;
- isolation between forked contexts;
- rollback on thrown error;
- nested transaction policy;
- optimistic concurrency conflict;
- connection shutdown/disposal.

### Query behavior
- equality and comparisons;
- IN/NOT IN;
- null checks;
- nested AND/OR/NOT;
- relation existence;
- stable sort/pagination;
- count/exists/aggregate equivalence;
- query parameterization;
- capability-gated operators.

## 3. Security tests

Every threat in `SECURITY.md` must have a negative test. Add property-based generation of nested domain ASTs and verify that user-controlled `OR`/`NOT` cannot remove mandatory security filters.

Test security at all access paths: API façade, RecordSet, relation population, action execution, export, aggregate, count, background job, migration/admin capabilities.

## 4. Compute tests

- dependency graph creation;
- missing dependency;
- circular dependency;
- scalar invalidation;
- relation invalidation;
- collection mutation;
- batched creation/update;
- rollback behavior;
- backfill/resume;
- non-deterministic compute guardrails;
- read policy when computation depends on restricted fields.

## 5. Addon tests

- deterministic topological sort;
- cycle and version conflict;
- duplicate model names;
- field/action/policy collision;
- explicit override compatibility;
- extension migration required;
- addon removal safety;
- startup fail-closed when graph invalid.

## 6. Runtime compatibility matrix

For every release candidate record:
- exact Bun version;
- exact Node compatibility package/driver versions;
- MikroORM exact aligned package versions;
- `kysely` and `kysely-bun-sqlite` versions;
- OS and CPU architecture;
- SQLite version/driver route;
- PostgreSQL server version and TLS mode;
- test outcome and known failures.

A driver is supported only after the full contract suite passes. A passing `bun add` or one successful `SELECT 1` is not sufficient.

## 7. Performance tests

Measure:
- 1, 100, 1,000, and 10,000 record batch operations;
- cold/warm relation reads;
- recordset batch read/write;
- domain query with tenant and record policy predicates;
- computed field invalidation/recompute;
- outbox publish throughput and retry lag;
- pagination at deep offsets versus keyset cursor;
- SQLite lock contention and busy timeout behavior;
- PostgreSQL concurrent readers/writers.

Track SQL query count and N+1 regressions. Do not set arbitrary performance targets before a baseline on the actual deployment environment.

## 8. Release validation checklist

- [ ] clean install from lockfile;
- [ ] lint/typecheck/build;
- [ ] all unit tests;
- [ ] SQLite adapter contract suite;
- [ ] PostgreSQL adapter contract suite;
- [ ] security adversarial suite;
- [ ] migrations from previous-release fixtures;
- [ ] performance baseline within agreed budgets;
- [ ] package exports and examples compile;
- [ ] backup/restore runbook exercised;
- [ ] changelog and compatibility matrix updated.
