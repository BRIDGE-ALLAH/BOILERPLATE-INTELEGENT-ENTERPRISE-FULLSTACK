# UBME CLI

CLI tools for UBME: schema management, addon management, diagnostics, and migration utilities.

## Features

- Schema validation and generation
- Addon installation and management
- Migration management
- Diagnostic and health checks
- Model registry inspection
- Execution context management

## Commands

- `ubme schema:validate` - Validate UBME model definitions
- `ubme schema:generate` - Generate MikroORM EntitySchema from models
- `ubme addon:install` - Install UBME addon package
- `ubme addon:list` - List installed UBME addons
- `ubme migrate:create` - Create new migration file
- `ubme migrate:run` - Apply pending migrations
- `ubme health:check` - Check UBME system health
- `ubme context:inspect` - Inspect current execution context
}