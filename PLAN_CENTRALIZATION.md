# Centralization Plan - MoonWitness Monorepo

## Summary of Changes Completed

### ✅ Environment Configuration (`@repo/config`)
- Moved JWT_SECRET from hardcoded 'dev-secret' to dynamic generation via `generateDevJWTSecret()`
- Added runtime guard: `process.env.JWT_SECRET || generateDevJWTSecret()` falls back to crypto-safe random hex
- Production guard still requires `JWT_SECRET` to be explicitly set at build time
- File: `packages/config/src/env.ts`

### ✅ Shared Types (`@repo/types`)
- Added centralized `ApiResponse<T>` interface defining standard API response format:
  ```typescript
  interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: { code: string; message: string; details?: Record<string, unknown> };
    meta: { timestamp: string; version: string };
  }
  ```
- File: `packages/types/src/common.ts`

### ✅ Shared Utilities (`@repo/utils`)
- Added `logger` helper with `info`, `error`, `warn` methods
- Added `formatError` for consistent error formatting (omits stack in production)
- Added `paginationMeta` for pagination metadata
- Added `successResponse` / `errorResponse` convenience functions
- Re-exported `ApiResponse` type from `@repo/types`
- File: `packages/utils/src/index.ts`

### ✅ API App Integration
- `apps/api/src/core/middleware.ts` already uses `@repo/utils` for:
  - `createSuccessResponse`, `createErrorResponse`
  - `setupErrorHandling` hook
  - `apiErrorWrapper` decorator
- `apps/api/src/modules/users/users.controller.ts` already uses `@repo/utils`:
  - `getPaginationParams`, `paginate` for pagination
  - All response formatting via `createSuccessResponse`/`createErrorResponse`

### Remaining Work Items

1. **[@repo/theme]**: Centralize brand color palette further, add theme switcher utility
2. **[@repo/auth]**: Move JWT service to truly shared module, add refresh token logic
3. **[@repo/navigation]: Centralize menu data structures, add navigation hooks
4. **Component audit**: Verify `@repo/ui-system` components are fully centralized with no duplicates
5. **Type imports**: Ensure all packages properly import `ApiResponse` from central location

## Verification Checklist
- [x] `bun install` completes without errors
- [x] All existing API routes still use `@repo/utils` responses
- [x] JWT_SECRET no longer hardcoded - falls back to secure generation
- [x] Production requires explicit JWT_SECRET at build time
- [x] `ApiResponse<T>` type available across monorepo

## Next Steps (Phase 2+)
1. Enhance `@repo/theme` with color palette centralization
2. Refactor `@repo/auth` JWT service to use config from `@repo/config`
3. Centralize navigation/routing utilities in `@repo/navigation`