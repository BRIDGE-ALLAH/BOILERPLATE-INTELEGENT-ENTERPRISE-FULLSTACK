# UBME — Master Technical Blueprint

**Version:** 0.2.0  
**Research snapshot:** 2026-11-09  
**Runtime target:** Bun  
**Language:** TypeScript (strict)  
**Persistence foundation:** MikroORM (v7 line; exact patch pinned during implementation)  
**Initial databases:** SQLite and PostgreSQL

## 1. Product definition

UBME is a **model-driven business framework**. It adds the model and business semantics that a conventional ORM generally does not provide as one cohesive system:

- a central registry of named business models;
- declarative scalar and relational fields;
- typed metadata and introspection;
- model extension and selected inheritance strategies;
- recordset-oriented batch operations;
- an immutable execution environment carrying identity, tenant, organization, locale, transaction, and capabilities;
- domain query syntax independent of SQL dialect;
- business actions and invariants;
- validation and lifecycle integration;
- computed and related fields with explicit dependency tracking;
- model, record, and field authorization;
- addon dependency and migration management;
- persistence through a supported adapter.

UBME should borrow **concepts**, not copy Odoo's Python API or every Odoo behavior. The objective is idiomatic TypeScript with explicit types and predictable execution, not a Python syntax emulator.

## 2. The essential Odoo insight

An Odoo-like ORM is not simply a collection of model classes. Four architectural ideas are central:

1. **Registry:** model names resolve through one registry composed from installed modules.
2. **Environment:** operations run with a current database transaction/cursor, user identity, context, cache, registry, and privileged-mode state.
3. **Recordsets:** model operations commonly act on sets of records and can batch read/write/compute work.
4. **Dependency-aware fields and policy:** field metadata, compute dependencies, access rules, and module composition are first-class.

UBME must therefore include `ModelRegistry`, `ExecutionContext`, `RecordSet`, `FieldMetadata`, `ComputeGraph`, `DomainCompiler`, `PolicyEngine`, and `AddonGraph`. Building only `defineModel()` plus CRUD repositories would not meet the stated Odoo-like goal.

## 3. Architecture at a glance

```text
                 APPLICATIONS (Bun / TypeScript)
      API       WEB       ADMIN      WORKER    AUTOMATION    CLI
       \         |          |          |          |          /
        +--------+----------+----------+----------+---------+
                                   |
                         UBME APPLICATION FACADE
                                   |
       +------------------------------------------------------+
       |                 MODEL ENGINE                          |
       | Registry | Metadata | RecordSet | ExecutionContext   |
       | Fields   | Relations| Actions   | Validation          |
       | Domain   | Compute  | Security  | Lifecycle / Events  |
       | Addons   | Introspection | Serialization             |
       +---------------------------+--------------------------+
                                   |
                        PERSISTENCE INTEGRATION
                                   |
                       UBME MikroORM Adapter
                                   |
             MikroORM EntityManager / Unit of Work / SQL
                      /                         \
              SQLite adapter               PostgreSQL driver
                      |                         |
                 SQLite DB                PostgreSQL DB
```

The Model Engine must not depend on HTTP, UI, a particular queue vendor, or one application framework. The Persistence Integration may depend on MikroORM. The core model contracts should remain persistence-agnostic.

## 4. Core bounded contexts

### 4.1 Model definition and metadata

Input: typed model definitions and addon contributions.  
Output: immutable, validated metadata and persistence mapping.

Responsibilities:
- validate model/field identifiers;
- resolve field and relation targets;
- detect duplicate names and invalid overrides;
- resolve addon dependencies before model extension;
- calculate effective model metadata;
- build compute dependency metadata;
- compile persistence entities before `MikroORM.init()`;
- publish read-only metadata descriptors for consumers.

The registry has two states:

- `BUILDING`: addon definitions can be registered and resolved;
- `FROZEN`: the final model graph and persistence metadata are immutable.

No arbitrary model registration after the ORM has initialized in v1. Runtime changes to the model graph require a controlled deployment/restart and reviewed migration.

### 4.2 Execution context (Environment equivalent)

Every application operation must carry a context containing at least:

```typescript
interface ExecutionContext {
  readonly principal: Principal;
  readonly tenantId: string | null;
  readonly organizationIds: readonly string[];
  readonly activeOrganizationId: string | null;
  readonly locale: string;
  readonly timeZone: string;
  readonly correlationId: string;
  readonly capabilities: ReadonlySet<Capability>;
  readonly persistence: PersistenceContext;
}
```

This is a **proposed UBME contract**, not a MikroORM type. `PersistenceContext` owns an EntityManager fork and transaction state. Context must be immutable or expose controlled derivation methods. User-supplied headers/body data must never be trusted to grant capabilities or choose arbitrary tenant IDs.

The context should expose constrained operations such as `withOrganization()` only after authorization. It must not provide a general-purpose public `sudo()` escape hatch. System-level work uses explicit, non-serializable server capabilities issued only inside trusted server code.

Prefer explicit context passing in core APIs. AsyncLocalStorage may be offered as an ergonomic integration, but it must not be the only source of tenant/user context. Bun documents `AsyncLocalStorage` as implemented, while noting that context does not propagate to some Worker/MessagePort/BroadcastChannel flows. Workers must receive a trusted context envelope and reconstruct a new execution context.

### 4.3 RecordSet (recordset equivalent)

A `RecordSet<T>` represents a typed set of record identities plus the context in which operations are evaluated. It is not merely an array of hydrated entities.

Initial interface proposal:

```typescript
interface RecordSet<T> {
  readonly model: ModelRef<T>;
  readonly ids: readonly RecordId[];
  read<K extends keyof T>(fields: readonly K[]): Promise<Array<Pick<T, K>>>;
  write(values: Partial<T>): Promise<void>;
  unlink(): Promise<void>;
  count(): Promise<number>;
  exists(): Promise<boolean>;
}
```

Later operations may include `mapped`, `filtered`, `sorted`, `groupBy`, and batch action dispatch. These methods must preserve access policy and avoid N+1 queries. `RecordSet` must not silently bypass record rules when constructed from arbitrary IDs.

### 4.4 Field and relation engine

Fields are descriptors with separate concerns:
- logical type and validation;
- persistence mapping;
- default resolution;
- nullability and constraints;
- visibility and mutability policy;
- search/sort support;
- compute/related metadata;
- serialization behavior.

The engine must never infer database semantics solely from the TypeScript type. For example, `number` could mean integer, approximate float, or decimal; those have different storage and correctness requirements.

### 4.5 Query/domain engine

The public query contract is a typed AST. UBME should not accept arbitrary strings, evaluated expressions, raw SQL, or user-supplied ORM query fragments.

Proposed AST:

```typescript
type Predicate =
  | { field: FieldPath; op: ComparisonOperator; value: Scalar | readonly Scalar[] }
  | { and: readonly Predicate[] }
  | { or: readonly Predicate[] }
  | { not: Predicate }
  | { exists: { relation: RelationPath; where: Predicate } };
```

The compiler validates every field path, operator, relation traversal, type, and query cost before translating to MikroORM criteria or QueryBuilder. The final query always includes mandatory access predicates. Client query conditions may narrow results; they may never widen access.

### 4.6 Business action engine

Business actions are explicit named commands that run under a validated context and transaction. Example: `sale.order.confirm`, `payment.capture`, or `inventory.reserve`.

Action execution order:
1. resolve model and action metadata;
2. validate principal and action permission;
3. validate input schema;
4. resolve target recordset under record rules;
5. open or join transaction according to an explicit policy;
6. execute deterministic domain logic;
7. validate invariants;
8. flush persistence changes;
9. write outbox/domain-event records in the same transaction;
10. commit and return a safe DTO/result.

A public action must re-check record access and business preconditions. Never assume that an ID or recordset supplied by a caller is authorized.

### 4.7 Compute engine

Computed fields are dependency-driven. The engine maintains a directed graph of field dependencies, validates cycles, groups dirty records by model/field, and recomputes in batches.

The first production milestone should support:
- virtual computed fields (computed for a projection/read);
- deterministic field-local computations;
- explicit dependencies;
- bounded related-field reads.

Stored computed fields require a later milestone with:
- invalidation on every relevant write path;
- relation-aware dependency tracking;
- batch recomputation;
- transaction-consistent stored values;
- backfill/recompute jobs for existing data;
- failure and retry semantics;
- explicit recursive dependency behavior.

Do not mark a field `store: true` until all mutation paths—including relation collection changes and bulk writes—can reliably invalidate it. Do not allow network calls, filesystem operations, random values, current time, or permission elevation inside deterministic compute functions unless the field declares and handles those dependencies explicitly.

### 4.8 Security engine

Security belongs to the Model Engine boundary. It must apply to search, count, read, create, update, delete, relation traversal, aggregation, computed values, exports, and action invocation.

The security design is deliberately stricter than Odoo's default record-rule semantics. UBME uses deny-by-default and explicit grants; see `SECURITY.md`.

### 4.9 Addon engine

Addons contribute model definitions, extensions, actions, policies, migrations, and metadata. They are resolved in dependency order before registry freeze. Addon code is trusted application code; never load arbitrary user-provided scripts into the application process.

## 5. Field catalogue and semantics

### Scalar fields (initial)

| Logical field | Semantics |
|---|---|
| `String` / `Char` | Unicode text with optional length and normalization rules |
| `Text` | Long text; not assumed indexable or sortable efficiently |
| `Integer` | Signed integer with explicit range |
| `BigInt` | 64-bit integer; serialize as string where JSON precision may be lost |
| `Decimal` | Exact decimal contract; configured precision/scale; serialize as string |
| `Float` | Approximate value only; never money or exact quantities |
| `Boolean` | True/false |
| `Date` | Calendar date (`YYYY-MM-DD`), no timezone conversion |
| `DateTime` | UTC instant; display timezone applied at presentation boundary |
| `Time` | Local clock time without an implicit date/timezone |
| `UUID` | Stable identifier with adapter-specific native/text mapping |
| `JSON` | Validated structured payload; portable JSON operators are not assumed |
| `Enum` | String-backed enum with explicit allowed values |

### Relational fields

- `ManyToOne`: owning foreign key; target model is mandatory; nullability and `onDelete` are explicit.
- `OneToMany`: inverse collection; must declare the owning `ManyToOne` inverse field.
- `ManyToMany`: pivot/join table; define the owning side. If the link has attributes, model the link as an explicit association entity instead of a hidden M:N.
- `OneToOne`: unique owning foreign key; ownership is explicit.
- `Reference`/polymorphic: deferred. Such references cannot have a conventional foreign key to multiple tables and require explicit integrity checks.

Deletion defaults to `RESTRICT`. `CASCADE` must be declared intentionally and covered by tests. Do not infer cascade semantics from a UI relation.

### Field attributes

Support only attributes with defined semantics:
- `required`, `nullable`, `unique`, `index`, `default`;
- `label`, `description`, `deprecated`;
- `readonly`, `searchable`, `sortable`, `filterable`;
- `groups`/field policies;
- `compute`, `depends`, `store`, `related` (phased);
- database-specific mapping options behind an adapter capability contract.

`hidden` is not a security control. Field confidentiality must be enforced by the Security Engine and serializers.

## 6. Model composition and inheritance

Do not treat the word “inheritance” as one mechanism. UBME defines separate strategies:

1. **Mixin / mapped base:** reusable fields and behavior; no independent entity/table. Suitable for timestamps and common audited columns.
2. **Model extension (Odoo `_inherit`-like):** addon contributes fields/actions/policies to an existing logical model. UBME merges the metadata before ORM initialization. It is not a live database mutation.
3. **Single-table inheritance:** optional when a family truly shares one table and discriminator semantics. Use MikroORM-supported STI only after tests.
4. **Delegation/composition (Odoo `_inherits`-like):** one model owns a relation to another model and exposes selected delegated properties through explicit metadata. It remains a composition and retains referential constraints.
5. **Table-per-type inheritance:** defer unless a concrete use case and query/performance tests justify it.

Conflicting field definitions fail by default. Overrides require an explicit `override` declaration and compatibility check. Addon order must be deterministic. Never rely on filesystem import order.

## 7. Persistence foundation

MikroORM supplies the identity map, Unit of Work, change tracking, relation persistence, EntityManager, transaction support, and SQL mapping. UBME must adapt to these semantics instead of creating a second ORM state manager.

### Metadata compilation

Pipeline:

```text
Addon manifests
    -> dependency sort
    -> register base models
    -> apply model extensions
    -> validate effective metadata
    -> build compute/policy/dependency graphs
    -> compile MikroORM EntitySchema mappings
    -> initialize MikroORM
    -> freeze registry
    -> serve requests/jobs
```

Use `defineEntity` for statically declared entities where it provides useful TypeScript inference. For descriptors assembled from addon metadata, evaluate `EntitySchema` as the adapter compilation target. Confirm exact constructor and metadata behavior against the pinned v7 patch in the proof of concept. `setClass()` in the `defineEntity` pattern must happen before ORM discovery/initialization.

### EntityManager ownership

- Keep one initialized MikroORM instance/pool per database connection configuration.
- Fork an EntityManager for each request, job, CLI operation, or explicit unit of work.
- Do not expose the process-global EntityManager to application packages.
- Do not concurrently mutate one EntityManager/transaction from unrelated tasks.
- Close/dispose contexts deterministically.
- Propagate only serializable trusted context data across queue/worker boundaries; create a fresh EntityManager in the worker.

### Transactions

Use MikroORM `em.transactional()`/transaction context for multi-record business actions. Flush is the persistence boundary for Unit of Work changes; explicit transaction boundaries are required for business operations spanning multiple flushes or outbox writes.

Use optimistic locking (version field) on business records subject to concurrent edits. Use pessimistic locking only where the database supports the required semantics and the workflow truly needs it. SQLite and PostgreSQL locking/concurrency behavior are not identical.

## 8. Query and recordset behavior

The engine should provide:
- typed `search`, `browse`, `read`, `create`, `write`, `unlink`, `count`;
- projections and explicit population plans;
- stable sorting and pagination;
- `exists`/relationship existential predicates;
- bounded aggregate and group operations;
- query-cost limits and maximum page size;
- batch create/update/delete paths with well-defined hooks and policy behavior.

Prefer keyset/cursor pagination for large mutable datasets. Offset pagination is acceptable for small administrative screens but needs stable ordering, including a deterministic primary-key tie-breaker.

Avoid transparent lazy-loading from arbitrary property access in application code. Prefer explicit `populate`/read projection plans or `RecordSet.read()` to make query behavior observable and prevent accidental N+1 loops.

## 9. Security and tenancy

Full normative behavior is in `SECURITY.md`. The essential rules:

- model permission and record permission are separate checks;
- no matching grant means deny;
- global mandatory predicates intersect;
- role/group grants combine only according to explicit policy rules;
- explicit deny policies override grants;
- create/update/delete must enforce policy on both current and resulting records;
- field policy is enforced at write, read, and serialization boundaries;
- relationship traversal and aggregates must not leak protected rows;
- tenant/org context comes from authenticated server context, not request payload;
- raw SQL and raw QueryBuilder are private infrastructure capabilities;
- PostgreSQL Row-Level Security may be enabled as defense-in-depth, not as the only engine check;
- SQLite gets equivalent application-layer enforcement and tenant-boundary tests.

Initial tenant model: support shared-schema `tenant_id` predicates when multi-tenant mode is enabled; single-tenant local SQLite deployments may use a separate database file. Schema-per-tenant and database-per-tenant routing are deferred.

## 10. Computed fields and cache

MikroORM Identity Map is the persistence identity cache. UBME must not implement a competing entity identity map.

An additional read/prefetch cache may cache **projections only**, scoped to one execution context, and must be invalidated after writes. Cache keys include model, record ID, field projection, tenant, principal/visibility scope, and locale where relevant.

Compute phases:
- Phase A: virtual compute for explicit reads/projections;
- Phase B: stored compute for same-record scalar dependencies;
- Phase C: related-record dependencies and batch invalidation;
- Phase D: inverse compute methods, search translators, recursive dependencies, and asynchronous backfill/recompute tooling.

A computed field must declare whether it is safe for search, sort, grouping, and export. A non-stored computed field is not automatically searchable. An explicit search translator or materialized projection is required.

## 11. Lifecycle, domain events, and outbox

Keep three concepts separate:

- **Model lifecycle hooks:** validation or local model bookkeeping around persistence.
- **Business actions:** explicit commands that enforce domain invariants.
- **Domain events:** durable facts for other processes after a successful business transaction.

MikroORM entity hooks/subscribers have precise timing and collection-update caveats. UBME must not assume every collection mutation triggers scalar update hooks. It should inspect Unit of Work change sets/collection updates where needed and test every path.

Never publish external messages, call HTTP APIs, send email, or mutate another service from `afterFlush`/entity lifecycle hooks. Write an outbox row in the same transaction as the business change; a worker publishes it after commit with retries and idempotency keys.

## 12. Schema lifecycle

- Development: schema diff may be used for feedback and local disposable databases.
- Production: commit reviewed migration files and execute them as a deployment step.
- Startup: verify schema compatibility and migration state; do not automatically apply destructive changes.
- Migration flow: expand -> backfill -> switch reads/writes -> contract in later release.
- Addon install/update/uninstall: dependency-aware migration plan, backup/rollback strategy, and explicit operator approval for destructive changes.

MikroORM explicitly warns that SchemaGenerator can drop or alter tables and is not intended for production schema evolution. Use the migration toolchain and review generated SQL.

## 13. Addon and package architecture

Initial packages (keep the count small):

```text
packages/
  ubme-core/          # contracts, registry, fields, context, recordset, query AST
  ubme-mikroorm/      # metadata compiler, EntityManager bridge, adapters
  ubme-cli/           # diagnostics, schema/migration commands, addon tooling
  ubme-testkit/       # adapter contract fixtures and test helpers

addons/
  base/
  identity/
  organization/
  audit/
  workflow/           # later
  notifications/      # later

apps/
  playground/         # runnable reference application
  docs/               # documentation site, when needed
```

Keep internal modules as folders inside `ubme-core` until stable. Do not split every engine component into a separate npm package prematurely.

## 14. Observability and operational requirements

Every operation should have:
- correlation/trace ID;
- model and action name;
- duration;
- query count and slow-query metadata;
- transaction outcome;
- policy decision result without leaking sensitive record data;
- compute/recompute duration;
- outbox lag/retry metrics.

Do not log secrets, personal data, field values, SQL parameters, or tenant payloads by default. Provide redaction and structured log levels.

## 15. Release gates

UBME v1.0 requires:
- static registry and metadata compiler;
- one complete model aggregate with scalar and relational fields;
- safe create/read/update/delete and batch RecordSet operations;
- deterministic domain queries and stable pagination;
- deny-by-default model/record/field security;
- tested tenant isolation;
- business actions and transactional outbox;
- virtual computed fields and a documented stored-compute boundary;
- safe migrations and schema compatibility checks;
- Bun runtime proof on SQLite and PostgreSQL;
- adapter contract test suite;
- performance baseline and query-plan inspection;
- complete docs and migration/runbook examples.

## 16. Things UBME must not promise

- Full Odoo behavioral/API compatibility.
- Identical SQL behavior between SQLite and PostgreSQL.
- Runtime hot model mutation after ORM initialization.
- Automatic database schema synchronization in production.
- Search/grouping on every computed field.
- Database-enforced FK integrity for polymorphic references.
- Complete isolation from raw SQL if application code is allowed to obtain the raw connection.
- PostgreSQL driver compatibility on Bun without a successful real integration test.
