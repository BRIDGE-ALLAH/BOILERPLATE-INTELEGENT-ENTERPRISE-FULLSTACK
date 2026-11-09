# Official References and Verification Notes

**Research snapshot:** 2026-11-09. This document records official documentation used to shape the blueprint. Product versions and APIs may change; verify again when implementation starts. The blueprint intentionally avoids hard-coding unverified package patch versions.

## MikroORM

1. **Defining Entities via `defineEntity`** — recommended programmatic entity definition, `EntitySchema`, type inference, `setClass()` timing.  
   https://mikro-orm.io/docs/define-entity
2. **Defining Entities** — entity requirements and metadata provider options.  
   https://mikro-orm.io/docs/defining-entities
3. **Unit of Work and Transactions** — Identity Map, change tracking, flush behavior.  
   https://mikro-orm.io/docs/unit-of-work
4. **Identity Map** — request context and EntityManager forks.  
   https://mikro-orm.io/docs/identity-map
5. **Usage with SQLite** — better-sqlite3 path and Bun `bun:sqlite` via generic `SqliteDriver` + Kysely dialect.  
   https://mikro-orm.io/docs/usage-with-sqlite
6. **Configuration** — documented database driver packages; PostgreSQL driver uses `pg`.  
   https://mikro-orm.io/docs/configuration
7. **Filters** — filter application behavior, relation filters, raw-query bypass caveat, PostgreSQL RLS integration.  
   https://mikro-orm.io/docs/filters
8. **Transactions and Concurrency** — transaction demarcation, isolation, optimistic/pessimistic locking.  
   https://mikro-orm.io/docs/transactions
9. **Migrations** — versioned SQL migration support and Migrator configuration.  
   https://mikro-orm.io/docs/migrations
10. **Schema Generator** — explicit production warning; use reviewed migration files.  
    https://mikro-orm.io/docs/schema-generator
11. **Inheritance Mapping** — mapped superclasses and single-table inheritance.  
    https://mikro-orm.io/docs/inheritance-mapping
12. **Modeling Entity Relationships** — relation mapping and polymorphic relation trade-offs.  
    https://mikro-orm.io/docs/relationships
13. **Collections** — owning/inverse relation semantics, pivot tables, collection updates.  
    https://mikro-orm.io/docs/collections
14. **Events and Lifecycle Hooks** — hook timing, flush events, collection update caveats.  
    https://mikro-orm.io/docs/events
15. **Upgrading from v6 to v7** — v7 package and query runner changes.  
    https://mikro-orm.io/docs/upgrading-v6-to-v7

## Odoo (conceptual reference, not compatibility target)

16. **Odoo 19 ORM API** — models, recordsets, environment, fields, compute and related fields, search behavior.  
    https://www.odoo.com/documentation/19.0/developer/reference/backend/orm.html
17. **Odoo 19 Security** — model access rights, record rules and field access semantics.  
    https://www.odoo.com/documentation/19.0/developer/reference/backend/security.html
18. **Odoo 19 Module Manifest** — module metadata and dependency loading order.  
    https://www.odoo.com/documentation/19.0/developer/reference/backend/module.html
19. **Odoo 19 Performance** — batching and prefetch concepts.  
    https://www.odoo.com/documentation/19.0/developer/reference/backend/performance.html

## Bun

20. **Bun SQLite** — built-in `bun:sqlite` API and transaction support.  
    https://bun.com/docs/runtime/sqlite
21. **Bun SQL** — direct SQL API and adapter support; not treated as a MikroORM drop-in.  
    https://bun.sh/docs/runtime/sql
22. **Bun Node.js Compatibility** — `node:async_hooks` / AsyncLocalStorage support and propagation limitations.  
    https://bun.sh/docs/runtime/nodejs-compat

## Interpretation notes

- The official MikroORM SQLite docs distinguish `@mikro-orm/sqlite` (uses `better-sqlite3`) from the Bun-native route (`SqliteDriver` with `kysely-bun-sqlite`).
- The official MikroORM configuration lists PostgreSQL with the `pg` dependency. Bun's Node compatibility is useful evidence but does not prove every `pg`/MikroORM edge case; the blueprint requires a real integration suite.
- MikroORM filters are application-level filters; the docs warn raw queries or omitted filter use can bypass them. Therefore filters are not accepted as the sole security boundary.
- Odoo's record rules are default-allow when model access is granted and no rule applies. UBME deliberately specifies a stricter default-deny policy. UBME is not claiming Odoo-compatible security semantics.
- Odoo supports more compute, field, and recordset behavior than UBME v1 plans to implement. The roadmap stages these capabilities rather than pretending they are all trivial ORM features.
