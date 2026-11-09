# Bun, MikroORM and Database Strategy

**Research snapshot: 2026-11-09.** Verify release notes and exact package compatibility when implementation begins.

## 1. Recommended persistence direction

Use MikroORM v7 as the initial persistence foundation, with all `@mikro-orm/*` packages pinned to a compatible, aligned release. The exact patch version belongs in the lockfile after a successful proof of concept; this blueprint does not invent or hard-code an unverified patch.

MikroORM v7.2 documentation:
- recommends `defineEntity` for programmatic entity declarations without decorators;
- builds `defineEntity` on `EntitySchema` and provides TypeScript inference;
- supports EntitySchema metadata and entity classes;
- documents Unit of Work, Identity Map, transaction handling, migrations and query filters.

UBME's dynamic addon metadata may be easier to compile to `EntitySchema`; static typed entities can use `defineEntity`. Verify that the chosen combination supports all desired metadata, entity classes, relations, custom types, and discovery behavior before freezing the adapter interface.

## 2. SQLite options — do not confuse these paths

### Option A: MikroORM SQLite package

`@mikro-orm/sqlite` uses `better-sqlite3`. The official docs show it can be installed with `bun add`, but package installation is not the same as proving runtime behavior in every target environment. This option should be tested on the actual deployment OS/architecture.

### Option B: Bun native SQLite (recommended first POC for Bun-native local apps)

MikroORM documents using:

- `@mikro-orm/core`;
- `@mikro-orm/sql` (generic SQL driver exports `SqliteDriver`);
- `kysely`;
- `kysely-bun-sqlite`;
- Bun's `bun:sqlite` `Database`.

The documented integration uses `SqliteDriver` plus `BunSqliteDialect`. This is the explicit route to test if UBME wants Bun's built-in SQLite implementation. Do not claim that `@mikro-orm/sqlite` itself uses Bun's native `bun:sqlite`; it uses `better-sqlite3`.

### SQLite operational limits

- SQLite is a strong embedded/local database, not a drop-in PostgreSQL concurrency model.
- Expect a single-writer constraint and handle `SQLITE_BUSY`/locking with a documented timeout/retry policy.
- Use a local filesystem for database files; do not assume network filesystems behave safely.
- Verify foreign key enforcement, WAL configuration, backup, restore, and transaction behavior.
- Migration DDL support differs from PostgreSQL; table-rebuild migrations may be necessary.
- Test schema differences rather than using SQLite as a substitute for PostgreSQL integration tests.

## 3. PostgreSQL under Bun

MikroORM documents the PostgreSQL driver as using the `pg` package. Bun documents Node.js compatibility and a native `Bun.SQL` API supporting PostgreSQL, but `Bun.SQL` is **not documented here as a drop-in driver for MikroORM**.

Therefore the initial path is:

- test `@mikro-orm/postgresql` with its documented `pg` driver under the exact target Bun version;
- verify connections, TLS, pool, prepared statements, transactions, cancellation, errors, shutdown, and concurrency;
- if any feature is incompatible, evaluate a dedicated adapter or choose a verified Node runtime for the PostgreSQL service rather than creating a fragile transport shim.

Do not infer PostgreSQL + MikroORM + Bun compatibility solely from the fact that Bun runs many Node packages.

## 4. Bun SQL is a separate option, not an automatic MikroORM adapter

Bun's `SQL` API offers direct SQL queries and transaction support for PostgreSQL, MySQL, and SQLite. It may be excellent for services that want direct SQL. However, using Bun.SQL instead of MikroORM means choosing a different persistence strategy; it is not automatically interchangeable with MikroORM's EntityManager, Unit of Work, identity map, metadata, or relation mapping.

For UBME v1, avoid supporting both persistence abstractions simultaneously. Keep MikroORM as the single canonical persistence engine unless the feasibility spike proves it unusable for the required Bun/database target.

## 5. Type portability matrix

| Logical type | PostgreSQL mapping | SQLite mapping | UBME rule |
|---|---|---|---|
| UUID | `uuid` | text or tested binary representation | expose canonical string |
| Integer | `integer` | integer | explicit range |
| BigInt | `bigint` | integer (signed 64-bit) | JSON serialize as string |
| Decimal | `numeric(p,s)` | fixed-scale integer or canonical text strategy | return decimal string; never JS float |
| Float | `double precision` | real | approximate only |
| Boolean | `boolean` | integer 0/1 | adapter-normalized |
| Date | `date` | ISO text | no timezone shift |
| DateTime | `timestamptz` | UTC ISO text or integer epoch | represent an instant in UTC |
| Enum | text + check constraint | text + check constraint | avoid native PG enum in portable core |
| JSON | `jsonb` or `json` | text JSON | only portable JSON behavior in core |
| Binary | `bytea` | blob | size limits and external object storage policy |

SQLite's type affinity and numeric behavior differ from PostgreSQL. The adapter must define exact storage/codec behavior; do not rely on SQLite `NUMERIC` to preserve arbitrary-precision decimals. Fixed scale can use scaled integers subject to 64-bit range. If arbitrary precision is required, use canonical decimal text and restrict database-side numeric operations unless a safe extension exists.

## 6. Portable query capability contract

Expose capability flags from each adapter, for example:

```typescript
interface DatabaseCapabilities {
  supportsReturning: boolean;
  supportsPartialIndexes: boolean;
  supportsNativeJsonOperators: boolean;
  supportsRowLevelSecurity: boolean;
  supportsTransactionalDdl: boolean;
  supportsPessimisticRowLocks: boolean;
  supportsCaseInsensitiveLike: boolean;
}
```

This interface is proposed. The adapter must report tested capabilities, not theoretical SQL standards. UBME core behavior must either use the portable subset or explicitly require a capability. Never silently emulate a security or consistency feature with weaker semantics.

## 7. Migration integration

Use MikroORM's migration support for generated and tracked migration files. Use SchemaGenerator for local schema feedback only. Production migrations are version-controlled, reviewed, and executed as a deployment step. See `MIGRATIONS.md`.

## 8. Request context and Bun

MikroORM RequestContext uses AsyncLocalStorage to isolate EntityManagers. Bun documents AsyncLocalStorage support, but also documents context propagation limitations for Worker and message-channel events. UBME should:

- explicitly fork an EntityManager per request/job/context;
- pass `ExecutionContext` explicitly in core calls;
- optionally integrate AsyncLocalStorage as convenience for HTTP middleware;
- reconstruct context and fork a new EntityManager in every worker job;
- test error paths and nested transactions under Bun.

## 9. Required feasibility spike

Before implementing business features, create a disposable demo that proves:

1. Bun starts MikroORM v7 with a programmatic EntitySchema.
2. Bun `bun:sqlite` route connects through the documented Kysely dialect.
3. SQLite create/read/update/delete works.
4. One-to-many, many-to-one, and many-to-many relationships work.
5. Unit of Work and transaction rollback behave correctly.
6. Migration generation and execution work under Bun.
7. PostgreSQL driver initializes under Bun, runs the same CRUD/relations/transactions/migrations test suite, and closes cleanly.
8. AsyncLocalStorage or explicit context behavior is isolated across concurrent requests.
9. Runtime, OS, architecture, and package versions are recorded.

If PostgreSQL-under-Bun fails, stop and resolve the architecture decision before continuing. Do not claim support based on partial CRUD alone.
