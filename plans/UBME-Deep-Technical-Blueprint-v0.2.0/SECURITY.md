# Security Model and Threat Boundaries

## 1. Security objective

No read, write, action, aggregate, relation traversal, computed result, export, or serialization may expose data outside the caller's authorized scope. Security checks must be part of the model operation path, not left to controllers.

UBME intentionally uses **deny-by-default**. This is a conscious difference from Odoo's documented record-rule behavior, where record rules are default-allow after model access rights are granted. The goal is to reduce accidental exposure in a new TypeScript framework.

## 2. Authorization stages

Every operation evaluates:

1. principal authentication and status;
2. model-level operation permission;
3. action-specific permission (for actions);
4. tenant and organization boundary;
5. global record constraints;
6. explicit record grant policies;
7. explicit deny policies;
8. field-level read/write policy;
9. business invariants and database constraints.

A missing permission, unresolved context, unknown model/field, or missing required record grant must fail closed.

## 3. Model ACL

Model ACL controls the operation class:

- `create`
- `read`
- `update`
- `delete`
- named business actions (separate permission namespace)

A user's permissions may be composed from roles/groups, but a permission must be explicitly granted. Do not treat an empty group list, missing policy, or unknown role as permission to access all records.

## 4. Record policy composition

Use the following deterministic rule:

```text
ALLOW(operation, record) =
    authenticated principal
    AND model ACL grant
    AND all mandatory global constraints
    AND at least one applicable record grant
    AND NOT any applicable explicit deny
```

- Mandatory global constraints intersect (`AND`). Examples: tenant boundary, organization boundary, legal hold, soft-delete visibility.
- Applicable grant policies combine as explicitly documented (normally `OR` within one policy group/role set).
- An explicit deny overrides grants.
- If no record grant applies, deny.
- A model may declare an explicit `unrestrictedWithinTenant` policy, but that is an affirmative configuration, not an implicit fallback.

This differs from Odoo, where record rules are default-allow when no rule applies, global rules intersect, and group rules unify. UBME may provide an optional Odoo-compatible policy mode in a future addon, but it must not be the secure default.

## 5. Query enforcement

All read operations must inject access predicates into the query before execution. The same compiler must cover:
- `find/search`;
- `count` and `exists`;
- aggregate/group-by;
- relation population;
- relation existence filters;
- exports and reports;
- pagination totals;
- computed-field dependencies;
- update/delete target selection.

For client predicates, combine:

```text
SECURITY_PREDICATE AND CLIENT_PREDICATE
```

Do not merge them into the same user-controlled AST in a way that permits `OR`/`NOT` to escape the security subtree.

## 6. Create/update/delete checks

### Create
- validate caller model create permission;
- reject or overwrite client-supplied tenant/org ownership fields;
- set tenant/org from trusted context;
- validate relation target access;
- validate resulting record against required grant/ownership constraints;
- persist only after all checks.

### Update
- resolve current record under access policy;
- check update permission on current record;
- whitelist writable fields;
- check relation target access and field policy;
- apply values;
- validate the resulting record still satisfies post-write policy and invariants;
- commit inside transaction.

### Delete
- resolve each record under delete policy;
- apply explicit deletion policy and referential integrity;
- audit as required;
- never allow bulk delete to bypass per-model lifecycle/business rules unless it is a deliberately privileged maintenance operation.

## 7. Field-level access

A field can independently have:
- read roles/capabilities;
- write roles/capabilities;
- hidden-from-metadata behavior;
- serializer transformation/redaction;
- sensitivity classification.

Field `hidden`, UI readonly, disabled form controls, and API DTO omission are not enough. The engine must reject explicit unauthorized reads and writes. Do not serialize MikroORM entity instances directly to JSON.

## 8. Tenant and organization isolation

Initial strategy:
- a single-tenant SQLite installation may have one database file per application/tenant;
- shared-schema multi-tenant mode requires `tenant_id` on all tenant-owned rows and mandatory scope predicates;
- organization-owned data adds organization scope and an explicit relationship to tenant;
- system/global tables must be explicitly classified as global and cannot accidentally inherit tenant filters.

Do not start with schema-per-tenant or database-per-tenant routing. These add connection lifecycle, migration fan-out, metadata, and operational complexity. Revisit only with measured requirements.

For PostgreSQL, consider Row-Level Security as defense-in-depth. Set tenant/user context using transaction-scoped settings, not a persistent pooled connection setting that can bleed into the next request. Test connection reuse and reset behavior. RLS policies must be restrictive and migration-managed.

SQLite has no equivalent PostgreSQL RLS feature in this design; therefore the application boundary must be tested aggressively and raw DB access must remain private.

## 9. MikroORM filters are not the whole security boundary

MikroORM supports filters for EntityManager operations, including relation filtering, and supports PostgreSQL RLS integration in relevant configurations. But its documentation also states that filters are applied at the application layer and raw queries or forgotten filter options can bypass them. Therefore:

- use ORM filters as one implementation mechanism;
- enforce context and access checks in UBME public operations;
- prevent applications from obtaining raw EntityManager/QueryBuilder;
- inspect direct/native update/delete paths;
- enable PostgreSQL RLS where appropriate;
- test raw-query bypass attempts in the trusted adapter boundary.

## 10. System capabilities

Do not expose `sudo()` as an ordinary method. Define narrow server capabilities, for example:
- `system:outbox-dispatch`;
- `system:tenant-provision`;
- `system:migration`;
- `system:retention-purge`.

Each capability has a defined purpose, scope, and audit requirement. Never serialize capabilities to the browser or accept them from API requests.

## 11. Threat test catalogue

- User A reads User B's record by guessing an ID.
- User A updates a record to another tenant ID.
- User A creates a child row linked to an inaccessible parent.
- User A queries `count`, `groupBy`, or `exists` to infer hidden rows.
- User A traverses a relation to a restricted model.
- User A uses `OR`/`NOT` to bypass a tenant predicate.
- User A accesses restricted fields through nested serialization.
- User A invokes an action on records they cannot read or update.
- User A deletes a relation target through an `unlink` command.
- Worker receives forged tenant/user context from queue payload.
- Pooled PostgreSQL connection retains prior tenant session state.
- Application bypasses UBME through direct MikroORM import.
- Bulk/native operations skip policies, hooks, audit, or compute invalidation.

All must be negative tests in CI.
