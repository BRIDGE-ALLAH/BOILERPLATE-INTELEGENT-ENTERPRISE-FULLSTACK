# UBME Core Package

Core contracts, registry, fields, context, recordset, and query AST for the UBME model-driven business framework.

## Modules

- `types` - Core type definitions (Principal, ExecutionContext, FieldMetadata, RecordSet, Predicate, etc.)
- `modelRegistry` - BUILDING/FROZEN model registry with registration
- `modelRef` - Model reference type
- `executionContext` - Immutable execution context
- `recordSet` - Typed record set with batch operations
- `queryAST` - Domain query AST predicates
- `businessAction` - Action engine with transaction support
- `securityEngine` - Policy engine with deny-by-default security
- `computeEngine` - Compute field dependency engine
- `domainEngine` - Domain query compiler/validator/translator
- `addonEngine` - Addon registration and dependency resolution
- `validation` - Validation interface and implementations

## Package Layout

```
packages/ubme-core/
├── src/
│   ├── types.ts          # Core type definitions
│   ├── modelRegistry.ts  # Model registry (BUILDING/FROZEN)
│   ├── modelRef.ts       # ModelRef interface
│   ├── executionContext.ts
│   ├── recordSet.ts
│   ├── queryAST.ts
│   ├── businessAction.ts # Action engine
│   ├── securityEngine.ts # Policy engine
│   ├── computeEngine.ts  # Compute field engine
│   ├── domainEngine.ts   # Domain query compiler
│   ├── addonEngine.ts    # Addon dependency resolver
│   ├── validation.ts     # Validation interface
│   └── index.ts          # Package entry point
├── package.json
├── tsconfig.json
└── README.md
```