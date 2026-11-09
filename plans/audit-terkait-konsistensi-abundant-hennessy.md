# Audit: Konsistensi dan Centralization

## Context
This audit examines the consistency and centralization patterns across the MoonWitness monorepo. The project uses a workspace structure with shared packages under `@repo/*` to centralize common configurations, types, and utilities. This plan identifies areas of strength and opportunities for improved consistency.

## Current Centralized Packages

### `@repo/config`
- **Location**: `packages/config/src/env.ts`
- **Purpose**: Centralized environment configuration with defaults and production validation
- **Exports**: `env` object with NODE_ENV, PORT, HOST, API_PREFIX, API_VERSION, CORS settings, JWT settings, DATABASE_URL, NEXT_PUBLIC_API_URL, NEXT_PUBLIC_APP_NAME
- **Usage**: Imported by `apps/api/src/index.ts` via `@repo/config`

### `@repo/constants`
- **Location**: `packages/constants/src/`
- **Purpose**: Application constants including branding, feature flags, HTTP status codes, error codes, content types
- **Key exports**:
  - `API_ENDPOINTS` - Centralized API route definitions
  - `API_PREFIX` = '/api/v1'
  - `buildApiUrl()` helper
  - `HTTP_STATUS` enum (200, 201, 204, 400, 401, 403, 404, 409, 422, 429, 500, 503)
  - `ERROR_CODES` enum (VALIDATION_ERROR, UNAUTHORIZED, FORBIDDEN, NOT_FOUND, CONFLICT, INTERNAL_ERROR, DATABASE_ERROR, EXTERNAL_SERVICE_ERROR, RATE_LIMIT_EXCEEDED)
  - `CONTENT_TYPES` object (JSON, FORM, TEXT, HTML)
  - `BrandingConfig` interface + `defaultBranding` + `getBranding()` / `loadBrandingFromEnv()`
  - `FeatureFlags` interface + `defaultFeatureFlags` + `getFeatureFlags()` / `loadFeatureFlagsFromEnv()`
  - `PAGINATION`, `FILE_LIMITS`, `CACHE_TTL` constants

### `@repo/types`
- **Location**: `packages/types/src/`
- **Purpose**: Shared TypeScript types used across API and web
- **Key exports**:
  - `ApiResponse<T>` - `{ success: boolean; data?: T; error?: ApiError; meta: { timestamp; version } }`
  - `ApiError` - `{ code; message; details?; path? }`
  - `PaginatedResponse<T>` - `{ items: T[]; total; page; pageSize; totalPages }`
  - `HttpStatus` enum (duplicate of `@repo/constants`'s)
  - `ErrorCode` enum (duplicate of `@repo/constants`'s)
  - `User`, `CreateUserDto`, `UpdateUserDto` interfaces
  - `PaginationParams`, `SortParams`, `FilterParams`, `ApiContext` interfaces
  - `DeepPartial` utility type

### `@repo/utils`
- **Location**: `packages/utils/src/`
- **Purpose**: Utility functions used across the application
- **Key exports**:
  - `createSuccessResponse<T>()` - standardized success response
  - `createErrorResponse(code, message, details?)` - standardized error response
  - `getPaginationParams(query)` - extracts pagination from query
  - `paginate(items, page, pageSize)` - paginates array
  - `formatDate(date, format)`, `formatDateTime(date)`, `addDays(date, days)`, `isAfter(date1, date2)`
  - `capitalize()`, `camelCase()`, `kebabCase()`, `truncate()`, `slugify()`
  - `isValidEmail()`, `isValidUrl()`, `isValidUuid()`, `isPositiveNumber()`

### `@repo/ui-system`
- **Location**: `packages/ui-system/src/`
- **Purpose**: Reusable UI components built with MUI/radix
- **Components**: Alert, Avatar, Badge, Breadcrumb, Button, Card, Chip, Divider, Dropdown, IconButton, Input, Modal, Pagination, Progress, Spinner, Table, Tabs, Tooltip

### `@repo/auth`
- **Location**: `packages/auth/`
- **Purpose**: Authentication-related configuration

### `@repo/validation`
- **Location**: `packages/validation/`
- **Purpose**: Validation schemas

## Consistency Analysis

### Strengths ✓
1. **Response Format**: `createSuccessResponse()` and `createErrorResponse()` from `@repo/utils` provide consistent API response structure across the codebase
2. **API Endpoints**: `API_ENDPOINTS` constant in `@repo/constants` centralizes all API route strings
3. **HTTP Status Codes**: `HTTP_STATUS` enum provides typed constants
4. **Error Codes**: `ERROR_CODES` enum centralizes error code strings
5. **Branding**: `getBranding()` / `loadBrandingFromEnv()` pattern allows centralized default branding with env overrides
6. **Feature Flags**: `getFeatureFlags()` / `loadFeatureFlagsFromEnv()` pattern for centralized feature configuration
7. **Pagination**: `getPaginationParams()` + `paginate()` utilities with typed `PaginationParams` and `PaginatedResponse`
8. **Type Sharing**: `User`, `CreateUserDto`, `UpdateUserDto` types shared via `@repo/types`

### Areas for Improvement ✗

1. **Duplicate Enums**: `HttpStatus` and `ErrorCode` enums defined in BOTH `@repo/types` AND `@repo/constants` - should be unified to one source of truth
2. **API Prefix**: `API_PREFIX = '/api/v1'` defined in `@repo/constants` but also referenced directly in `apps/api/src/index.ts` - should consistently use the centralized constant
3. **Missing Centralizations**:
   - Rate limits (`CACHE_TTL` exists but rate limit values in `packages/constants/src/constants.ts` may not be fully utilized)
   - File limits (`FILE_LIMITS` defined but verify usage across codebase)
   - Cache TTL constants (`CACHE_TTL.SHORT`, `.MEDIUM`, `.LONG`, `.DAY`)
4. **Inconsistent Import Patterns**:
   - Some files import from `@repo/utils` directly (e.g., `users.controller.ts` imports `createSuccessResponse`, `createErrorResponse`, `paginate`, `getPaginationParams`)
   - Verify all modules consistently use centralized utilities
5. **Type Redundancy**: `PaginationParams` defined in `@repo/types` but `getPaginationParams` in `@repo/utils` has its own implementation - should ensure alignment

## Recommendations

1. **Unify HttpStatus/ErrorCode**: Choose one package (`@repo/constants` seems more foundational) as the single source, and have `@repo/types` re-export or alias from it
2. **Ensure API_PREFIX Usage**: Verify all API route registrations use the `API_PREFIX` constant from `@repo/constants` rather than hardcoding `/api/v1`
3. **Complete Rate Limit Centralization**: Ensure all rate limit values are in `@repo/constants` and referenced everywhere
4. **Verify Import Consistency**: Audit all controller/service files to ensure they import from centralized packages rather than duplicating logic
5. **Document Centralized Constants**: Add JSDoc/comments to `packages/constants/src/index.ts` explaining what each export is for and when to override via env vars
6. **Create Usage Guide**: Document which packages should be used for what purpose (e.g., "use `@repo/utils` for response formatting, `@repo/constants` for status codes and endpoints")

## Verification Steps

1. Run `grep` across the codebase to confirm:
   - All API route prefixes reference `API_PREFIX` from `@repo/constants`
   - All response uses `createSuccessResponse`/`createErrorResponse` from `@repo/utils`
   - All error codes use `ERROR_CODES` from `@repo/constants`
   - All HTTP status uses `HTTP_STATUS` from `@repo/constants` (or unified source)
2. Check that `BrandingConfig` and `FeatureFlags` are properly loaded via `getBranding()`/`getFeatureFlags()` in relevant places
3. Ensure no duplicate enum definitions exist