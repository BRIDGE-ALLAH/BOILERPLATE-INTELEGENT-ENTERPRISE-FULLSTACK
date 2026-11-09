# Schema and Migration Policy

## 1. Core rule

**The model registry describes the desired schema; migrations change the deployed schema.** The registry must never silently mutate production database structure during normal application startup.

MikroORM SchemaGenerator documentation warns that it can drop or alter tables, indexes, and sequences and is intended for development schema generation, not production migration from schema A to B. Use versioned migrations for production.

## 2. Workflow

```text
Edit model metadata
      |
Run registry + schema validation
      |
Generate migration SQL from metadata diff
      |
Review SQL + data-loss analysis
      |
Test on disposable database + prior-version fixture
      |
Commit migration file
      |
Backup / deployment preflight
      |
Apply migration as deployment step
      |
Start app with matching registry
      |
Verify schema compatibility + health checks
```

## 3. Production startup

Application startup may:
- connect to the database;
- read migration history;
- compare expected schema/metadata version;
- fail startup when the schema is incompatible;
- expose readiness only after checks pass.

Application startup must not:
- run `schema:update` automatically;
- drop unknown tables;
- alter production columns without reviewed migration;
- silently create missing business tables;
- auto-install addons or apply destructive addon migrations.

## 4. Expand/contract migration pattern

For changes that cannot be done atomically without downtime:

1. **Expand:** add new nullable column/table/index; keep old code compatible.
2. **Deploy compatibility code:** dual-read/dual-write or support both forms.
3. **Backfill:** resumable, observable, bounded, idempotent batch job.
4. **Switch:** change reads to new representation and verify.
5. **Contract:** remove obsolete schema only in a later reviewed migration.

Avoid large table rewrites in a request path. Document lock duration and rollback strategy for each migration.

## 5. Migration metadata

Each migration should have:
- unique identifier and timestamp/version;
- owning addon/package;
- short description;
- forward operation;
- rollback strategy where possible;
- preconditions/postconditions;
- data-loss classification;
- expected lock/availability impact;
- idempotent backfill instructions if relevant.

Not every migration is safely reversible. Mark irreversible migrations explicitly rather than inventing a fake `down()` that cannot restore data.

## 6. Addon migrations

Addon migrations run in dependency order. The addon graph must be resolved before migration planning. Removing an addon is not equivalent to dropping all its tables: data ownership, shared tables, foreign keys, and other addons' dependencies must be evaluated. Destructive uninstall requires an explicit export/backup and operator approval.

## 7. Multi-database testing

Every schema change must run against:
- a clean SQLite database;
- an upgraded SQLite fixture from prior release;
- a clean PostgreSQL database;
- an upgraded PostgreSQL fixture from prior release.

Do not use SQLite-only test coverage as evidence of PostgreSQL migration safety.

## 8. CLI contract

Proposed commands:

```bash
bun ubme schema:check
bun ubme migration:diff --name add-order-state
bun ubme migration:status
bun ubme migration:apply --target latest
bun ubme migration:plan --addon sales
bun ubme addon:validate
```

Destructive actions require `--confirm` and must print the generated plan. Production apply should require an explicit environment and an approved deployment process. `--dry-run` should be supported where meaningful.
