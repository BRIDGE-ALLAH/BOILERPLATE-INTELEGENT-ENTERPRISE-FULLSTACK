# Proposed UBME Model API

> All code in this file is a **design sketch for the future UBME API**. It is not currently executable and is not a MikroORM API. The feasibility spike must validate TypeScript inference and mapping before freezing the public API.

## 1. Example model

```typescript
import {
  defineModel,
  Fields,
  type ModelOf,
} from "@ubme/core";

export class PartnerEntity {
  id!: string;
  name!: string;
  email!: string | null;
}

export const Partner = defineModel({
  name: "res.partner",
  label: "Partner",
  entity: PartnerEntity,
  table: "res_partner",
  fields: {
    id: Fields.UUID({ primary: true }),
    name: Fields.Char({ required: true, maxLength: 160, index: true }),
    email: Fields.Char({ nullable: true }),
    active: Fields.Boolean({ default: true }),
  },
});
```

The `entity` is an ordinary TypeScript class used for type inference and domain behavior. The descriptor defines metadata. The adapter compiles this descriptor into MikroORM entity metadata before initialization.

## 2. Relation model

```typescript
export class SaleOrderEntity {
  id!: string;
  number!: string;
  customer!: PartnerEntity;
  lines!: SaleOrderLineEntity[];
  state!: "draft" | "confirmed" | "cancelled";
}

export const SaleOrder = defineModel({
  name: "sale.order",
  entity: SaleOrderEntity,
  table: "sale_order",
  fields: {
    id: Fields.UUID({ primary: true }),
    number: Fields.Char({ required: true, unique: true }),
    customer: Fields.ManyToOne(() => Partner, {
      required: true,
      onDelete: "RESTRICT",
    }),
    lines: Fields.OneToMany(() => SaleOrderLine, {
      mappedBy: "order",
    }),
    state: Fields.Enum({
      values: ["draft", "confirmed", "cancelled"],
      default: "draft",
    }),
  },
});
```

`OneToMany` is inverse metadata and must map to the owning `ManyToOne`. Do not create a second foreign key for the inverse collection. `ManyToMany` should use a pivot table; if the association has business attributes such as quantity, order, status, or timestamps, use an explicit association model instead.

## 3. Execution context and operations

```typescript
const ctx = await ubme.createContext({
  principal: authenticatedPrincipal,
  tenant: trustedTenantResolution,
  correlationId,
});

try {
  const orders = ctx.model(SaleOrder).search({
    and: [
      { field: "state", op: "eq", value: "confirmed" },
      { field: "total", op: "gte", value: "100.00" },
    ],
  });

  const rows = await orders.read([
    "number",
    "state",
    "customer.name",
  ]);
} finally {
  await ctx.dispose();
}
```

The context creation implementation must resolve tenant and principal from trusted server code. It must not accept an untrusted request payload as the source of authorization attributes.

## 4. Domain AST

Use a structured AST, never string evaluation:

```typescript
const domain = {
  and: [
    { field: "state", op: "eq", value: "confirmed" },
    {
      or: [
        { field: "total", op: "gte", value: "100.00" },
        { field: "priority", op: "eq", value: "urgent" },
      ],
    },
    {
      exists: {
        relation: "lines",
        where: { field: "quantity", op: "gt", value: 0 },
      },
    },
  ],
} as const;
```

Initial operators:

- `eq`, `ne`, `gt`, `gte`, `lt`, `lte`;
- `in`, `notIn`;
- `contains`, `startsWith`, `endsWith` for explicitly supported text fields;
- `isNull`, `isNotNull`;
- `exists` for relation collections;
- logical `and`, `or`, `not`.

Do not automatically promise case-insensitive matching or identical Unicode collation across SQLite and PostgreSQL. Add adapter capability flags and tests. `like`/`ilike` syntax can be a logical operator only when the adapter gives it defined semantics.

## 5. Relation write commands

Instead of copying Odoo's tuple command syntax, use a typed command union:

```typescript
type RelationCommand<T> =
  | { op: "create"; values: T }
  | { op: "update"; id: string; values: Partial<T> }
  | { op: "link"; id: string }
  | { op: "unlink"; id: string }
  | { op: "delete"; id: string }
  | { op: "clear" }
  | { op: "set"; ids: readonly string[] };
```

Semantics differ by relation type. `unlink` means remove the association; it must not be silently equated with deleting the target record. `delete` removes the target entity and must pass its own ACL, record policy, and referential-integrity rules. For OneToMany, unlink behavior depends on nullability and explicit `onDelete`/orphan policy.

## 6. Computed fields

```typescript
Fields.Decimal({
  compute: "computeSubtotal",
  depends: ["quantity", "unitPrice"],
  store: false,
  precision: 18,
  scale: 2,
});
```

The compute handler is registered separately and must be deterministic:

```typescript
registerCompute("sale.order.line", {
  computeSubtotal(records, ctx) {
    for (const line of records) {
      line.subtotal = decimal(line.quantity)
        .mul(decimal(line.unitPrice))
        .toFixed(2);
    }
  },
});
```

MVP rules:
- virtual computed only first;
- no side effects;
- no arbitrary external I/O;
- no hidden permission elevation;
- declared dependencies only;
- explicit output type and nullability;
- field cannot be searched/sorted/grouped unless a search/materialization strategy is declared.

Stored computed fields are a later feature. Their correctness depends on invalidation for scalar changes, relation collection changes, bulk updates, and addon extension changes.

## 7. Business actions

```typescript
registerActions("sale.order", {
  confirm: {
    input: ConfirmOrderInput,
    permission: "sale.order.confirm",
    transaction: "required",
    handler: async (ctx, recordset, input) => {
      const orders = await recordset.loadForUpdate();
      assertAll(orders, order => order.state === "draft");

      for (const order of orders) {
        order.state = "confirmed";
      }

      ctx.events.add({
        type: "sale.order.confirmed",
        aggregate: "sale.order",
        ids: orders.map(order => order.id),
      });
    },
  },
});
```

The action is an explicit service command, not a publicly callable arbitrary class method. It needs authentication, authorization, input validation, transaction rules, and business-invariant checks.

## 8. Model extension

```typescript
extendModel("res.partner", {
  addon: "crm",
  fields: {
    leadSource: Fields.Char({ nullable: true }),
  },
  actions: {
    // explicit action contributions
  },
});
```

This is a **build/startup composition operation**. It merges the effective metadata before MikroORM initialization. It is not a live alteration of a production table and does not bypass migrations.

## 9. Type-system requirements

- preserve the concrete entity type through `defineModel`;
- infer scalar field values and relation target types;
- distinguish nullable and required properties;
- prevent invalid field paths in typed query APIs where practical;
- allow runtime validation for dynamic paths from HTTP clients;
- expose safe DTO types separately from persistence entity types;
- avoid forcing every entity to inherit from a heavy active-record base class;
- do not pretend that dynamic addon-added fields can be perfectly represented in compile-time types of already compiled application code.

A compile-time/static model definition and a runtime-extensible metadata graph are different use cases. The API must document this boundary rather than promising both with no trade-off.
