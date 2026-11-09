# UBME MikroORM Adapter

MikroORM integration layer for UBME. Handles metadata compilation, EntityManager management, and persistence adaptation for SQLite and PostgreSQL.

## Modules

- `metadataCompiler` - Compiles UBME model metadata into MikroORM EntitySchema
- `entityManagerBridge` - Wraps MikroORM EntityManager with UBME-specific operations
- `sqliteAdapter` - SQLite database adapter
- `adapters/sqliteAdapter` - SQLite adapter implementation

## Package Layout

```
packages/ubme-mikroorm/
├── src/
│   ├── metadataCompiler.ts   # Metadata to EntitySchema compiler
│   ├── entityManagerBridge.ts # EntityManager wrapper
│   ├── sqliteAdapter.ts      # SQLite adapter
│   ├── adapters/sqliteAdapter.ts
│   └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```