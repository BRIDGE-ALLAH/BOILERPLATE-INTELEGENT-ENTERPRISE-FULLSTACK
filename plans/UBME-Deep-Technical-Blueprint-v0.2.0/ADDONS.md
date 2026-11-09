# Addon System and Model Composition

## 1. Why addons exist

Addons group cohesive business capabilities and contribute models, fields, actions, permissions, migrations, and metadata. They are the extension mechanism for business domains such as identity, organization, sales, inventory, and audit.

## 2. Manifest

Proposed format:

```typescript
export default defineAddon({
  name: "sales",
  version: "1.0.0",
  depends: ["base", "organization", "identity"],
  models: [SaleOrder, SaleOrderLine],
  extensions: [],
  actions: [],
  policies: [],
  migrations: ["./migrations"],
});
```

Required metadata:
- unique addon name;
- semantic version;
- dependency constraints;
- model and extension declarations;
- migration ownership;
- optional capability requirements;
- license and author metadata for distributable addons.

The addon loader must use an explicit allow-list of code packages. Never evaluate downloaded source code or user-supplied JavaScript as an addon.

## 3. Dependency resolution

- topologically sort dependencies;
- detect direct and indirect cycles;
- validate version constraints;
- ensure a dependency is installed before an extension;
- report a human-readable graph path on errors;
- produce a deterministic resolved order independent of filesystem enumeration.

## 4. Extension semantics

Model extension happens before ORM initialization. It merges a new addon contribution into an existing logical model. The base definition remains the owner of its identity and primary table. Extension may add fields, actions, policies, indexes, and metadata, subject to collision and compatibility rules.

Rules:
- field name collision fails unless explicit compatible override is declared;
- primary key/table identity cannot be replaced by an addon;
- relation target must resolve;
- adding a non-null field to existing populated table requires a default/backfill migration;
- changing scalar type requires a reviewed migration and compatibility policy;
- addon removal must not delete shared/base-owned fields or tables;
- model extension is frozen at startup and requires a deployment to change.

## 5. Inheritance strategies

| UBME concept | Meaning | Persistence interpretation |
|---|---|---|
| Mixin | Reusable fields/behavior | Mapped superclass or metadata composition |
| Model extension | Add fields to a logical model | Merge metadata into one effective entity before ORM init |
| STI | Subtypes share one table | MikroORM STI with discriminator, if tested |
| Delegation | Compose a model through another model | Explicit FK relation + delegated property metadata |
| TPT | Child data in separate table | Deferred; evaluate query and migration costs |

Do not advertise model extension as equivalent to MikroORM entity inheritance. Odoo `_inherit` and `_inherits` have different semantics and UBME must model them explicitly.

## 6. Lifecycle

Addon install/update should be a controlled deployment workflow:
1. resolve addon set;
2. validate dependency and model graph;
3. calculate migration plan;
4. review destructive changes;
5. backup if needed;
6. apply migrations;
7. start new process with frozen registry;
8. run health checks.

Hot install/uninstall, remote addon stores, and runtime hot reload are non-goals for v1.

## 7. Initial addon set

- `base`: common model metadata and foundational records;
- `identity`: user, credential reference, group/role, session-facing identity mapping;
- `organization`: tenant/org memberships and organization structure;
- `audit`: actor, action, model, record, timestamp, correlation metadata;
- `workflow`: defer until action/transaction/event foundations are stable;
- `notifications`: defer until outbox delivery and idempotency are stable.

Keep authentication secrets and session mechanics outside generic ORM field behavior where possible; the identity addon should model principals and associations, not reinvent password cryptography.
