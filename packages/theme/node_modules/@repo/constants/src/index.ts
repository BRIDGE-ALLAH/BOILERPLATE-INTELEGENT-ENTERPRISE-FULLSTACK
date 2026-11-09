// @repo/constants - Application constants including white-label/branding config and centralized values
//
// This package serves as the single source of truth for application-wide constants,
// including HTTP status codes, error codes, API endpoints, branding configuration,
// feature flags, pagination limits, file limits, and cache TTL values.
//
// All constants here are meant to be imported directly rather than re-defined elsewhere.
// Override values via environment variables (NEXT_PUBLIC_*) in @repo/config or @repo/constants/src/branding.ts / features.ts
//
// Import patterns:
//   - API routes:   import { API_ENDPOINTS, API_PREFIX } from '@repo/constants'
//   - HTTP status:  import { HTTP_STATUS, ERROR_CODES } from '@repo/constants'
//   - Branding:     import { getBranding } from '@repo/constants'
//   - Feature flags:import { getFeatureFlags } from '@repo/constants'
//   - Pagination:   import { PAGINATION, CACHE_TTL } from '@repo/constants'
//
// Re-exports from other packages:
//   - HTTP_STATUS, ERROR_CODES: also available from @repo/types (unified source)
//   - BrandingConfig, defaultBranding, getBranding(): @repo/constants
//   - FeatureFlags, defaultFeatureFlags, getFeatureFlags(): @repo/constants
//   - User, CreateUserDto, UpdateUserDto: @repo/types
//   - createSuccessResponse, createErrorResponse: @repo/utils
//   - ApiResponse, ApiError, PaginatedResponse: @repo/types

export * from "./app.js";
export * from "./api.js";
export * from "./http.js";
export * from "./storage.js";
export * from "./branding.js";
export * from "./features.js";
export * from "./pagination.ts";
export * from "./validation.ts";