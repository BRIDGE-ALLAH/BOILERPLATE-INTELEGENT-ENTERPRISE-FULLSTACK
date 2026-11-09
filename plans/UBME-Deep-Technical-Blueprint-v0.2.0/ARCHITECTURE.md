# Architecture and Runtime Design

## 1. Dependency direction

```text
apps/*
  -> UBME public facade
      -> ubme-core
      -> ubme-mikroorm (composition root only)
            -> MikroORM
            -> database driver
```

`ubme-core` must not import MikroORM. `ubme-core` owns logical model metadata and portable query/policy types. `ubme-mikroorm` translates logical metadata and operations into MikroORM constructs. Application packages must not import `@mikro-orm/*` directly; raw persistence access is restricted to the adapter package and trusted maintenance tools.

## 2. Boot sequence

1. Load a static allow-listed addon manifest list.
2. Validate manifests and semantic versions.
3. Resolve dependencies with topological sorting; report a complete cycle path on failure.
4. Register base models, mixins, and extensions.
5. Resolve effective model metadata and reject conflicting fields/actions/policies.
6. Validate relations and compute dependency graph.
7. Compile model metadata to MikroORM `EntitySchema`/entity metadata.
8. Initialize MikroORM with all compiled entities and the selected driver.
9. Verify database connectivity and schema compatibility.
10. Freeze registry and publish an immutable runtime snapshot.
11. Accept requests/jobs.

If any step fails, startup fails closed. No partially initialized server should accept requests.

## 3. Request/job lifecycle

```text
HTTP request / queue job / CLI command
          |
Authenticate principal + resolve trusted tenant/org
          |
Create ExecutionContext + fork EntityManager
          |
Resolve model/action + authorization
          |
Validate input + compile domain/policy predicates
          |
Execute business operation in transaction
          |
Validate invariants + Unit of Work flush
          |
Persist outbox rows in same transaction
          |
Commit transaction
          |
Serialize safe DTO under field policy
          |
Dispose context; asynchronous worker publishes outbox
```

A read-only request may not need an explicit write transaction, but it still needs a scoped EntityManager and policy context. Every job receives a fresh context and EntityManager fork.

## 4. Context model

`ExecutionContext` contains trusted application identity and current persistence scope. Suggested components:

- `Principal`: user/service identity, role IDs, auth method, status;
- `TenantScope`: tenant ID and permitted organization IDs;
- `RequestMetadata`: correlation ID, locale, timezone, client/app identity;
- `Capabilities`: opaque server-issued privileges;
- `PersistenceContext`: EntityManager fork and transaction state;
- `PolicySnapshot`: immutable security metadata resolved from registry/principal.

Do not store arbitrary request JSON as trusted context. Do not allow clients to set `principal`, `tenantId`, `organizationIds`, `capabilities`, or system mode.

Context derivation must be monotonic with respect to authority: a derived context may narrow accessible organizations or privileges; it cannot silently increase them. Any system operation must be explicit and auditable.

## 5. Registry lifecycle and dynamic metadata

The registry is dynamic only during startup composition. After `MikroORM.init()`, the metadata snapshot is frozen. This constraint exists because MikroORM discovery/metadata and database schema mapping are initialized as a coherent set; runtime registration of a new model/table is not assumed to be supported by the ordinary ORM lifecycle.

Addon install/update is therefore a deployment operation:
- stage code and manifest;
- run dependency and metadata validation;
- generate/review migration;
- apply migration in a controlled step;
- restart application with new frozen registry;
- run readiness/compatibility tests.

## 6. RecordSet semantics

`RecordSet<T>` holds model reference, IDs/query selection, and execution context—not a bag of unchecked entity instances. Construction paths:
- `search(predicate)` returns a scoped recordset;
- `browse(ids)` validates that requested IDs are resolved under caller policy before data is returned or modified;
- `create(values)` returns created recordset after validation and persistence;
- `empty()` returns a valid empty recordset.

Batch methods must preserve policy and business invariants. A fast bulk update path may be enabled only for explicitly safe fields/actions and only if it does not skip validation, compute invalidation, audit, or event generation. Otherwise use normal Unit of Work operations.

## 7. Query compiler pipeline

```text
Input JSON / typed Predicate AST
          |
Schema-aware parser
          |
Field + operator + relation validation
          |
Cost/depth/complexity limits
          |
Inject mandatory tenant + global policy predicates
          |
Resolve grant/deny policy predicates
          |
Compile to parameterized MikroORM criteria / QueryBuilder
          |
Execute using scoped EntityManager
          |
Apply field policy + safe DTO projection
```

A client-provided predicate is combined with security predicates using `AND`. The client must never be able to negate or replace the security expression. `OR`/`NOT` nodes are scoped only to the user's expression subtree.

Aggregations, count, existence, exports, and pagination must use the same security compiler. Otherwise a user can infer inaccessible information through counts or aggregate values even when rows are hidden.

## 8. Domain event architecture

```text
Business transaction
  ├─ update domain records
  ├─ update audit metadata
  └─ insert outbox event (same DB transaction)
                    |
                  COMMIT
                    |
             Outbox dispatcher
                    |
          publish with idempotency key
                    |
         mark delivered / retry / dead-letter
```

Outbox event payloads should include event ID, event type, schema version, aggregate type/ID, tenant ID, occurred-at timestamp, correlation ID, and a minimized payload. Do not serialize entire ORM entities.

## 9. Package boundaries

### `ubme-core`
- public model/field metadata contracts;
- registry and addon graph;
- execution context types;
- RecordSet facade interfaces;
- domain AST and validation;
- action/validation/policy contracts;
- metadata introspection and safe DTO contract.

### `ubme-mikroorm`
- compiler from UBME model metadata to MikroORM metadata;
- EntityManager lifecycle and fork management;
- relational persistence implementation;
- transaction bridge;
- query compiler backend;
- migrations integration;
- driver adapters and capability descriptors.

### `ubme-cli`
- static project diagnostics;
- registry validation;
- schema diff and migration generation wrappers;
- migration status/apply commands;
- addon graph inspection;
- compatibility report.

### `ubme-testkit`
- adapter contract suite;
- fixtures and deterministic factories;
- policy attack scenarios;
- query-count instrumentation.

## 10. Error boundaries

Use stable typed errors, not raw driver errors as public responses:
- `ModelNotFoundError`
- `FieldNotFoundError`
- `ModelDefinitionError`
- `AddonDependencyError`
- `ValidationError`
- `AccessDeniedError`
- `RecordNotFoundError` (may be intentionally indistinguishable from access denied at public boundary)
- `ConcurrencyConflictError`
- `TransactionError`
- `SchemaIncompatibleError`
- `PersistenceUnavailableError`
- `QueryComplexityError`

Map internal details to safe error codes. Keep SQL/stack traces in protected logs only.
