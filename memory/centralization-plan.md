# Centralization Plan - MoonWitness Monorepo

## Changes Completed

### 1. `@repo/config` - Environment Configuration
- **File**: `packages/config/src/env.ts`
- **Change**: Replaced hardcoded `JWT_SECRET: 'dev-secret'` with `JWT_SECRET: process.env.JWT_SECRET || generateDevJWTSecret()`
- Added `generateDevJWTSecret()` function using `crypto.randomBytes(32).toString('hex')` for secure fallback
- Production guard updated to: `if (env.NODE_ENV === 'production' && !process.env.JWT_SECRET)` throw error
- **Why**: Eliminates hardcoded secrets while maintaining dev usability; production still requires explicit config

### 2. `@repo/types` - Shared Types
- **File**: `packages/types/src/common.ts`
- **Change**: Added `ApiResponse<T>` interface with standardized format:
  ```typescript
  interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: { code: string; message: string; details?: Record<string, unknown> };
    meta: { timestamp: string; version: string };
  }
  ```
- **Why**: Single source of truth for API response format across all apps

### 3. `@repo/utils` - Shared Utilities
- **File**: `packages/utils/src/index.ts`
- **Additions**:
  - `logger` helper with `info`, `error`, `warn` methods
  - `formatError(err)` - omits stack in production for security
  - `paginationMeta(page, limit, total)` - pagination metadata with hasNext/hasPrev
  - `successResponse(data, message)` - default success format
  - `errorResponse(code, message)` - default error format
  - Re-export of `ApiResponse` type from `@repo/types`
- **Why**: Centralizes common patterns used throughout the codebase

### 4. API App Integration Validation
- **Status**: Already uses `@repo/utils` for all response formatting
- **Files verified**: `apps/api/src/core/middleware.ts`, `apps/api/src/modules/users/users.controller.ts`
- **Result**: Centralization pattern confirmed working with zero code changes needed in API

## Verification Status
- All packages use `workspace:*` dependencies properly
- No breaking changes to existing API routes
- JWT_SECRET fallback is crypto-secure for development
- Production deployment still requires explicit JWT_SECRET configuration