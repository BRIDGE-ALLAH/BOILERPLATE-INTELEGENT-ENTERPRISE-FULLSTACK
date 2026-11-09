# Centralization Phase 2: Deep Insight Plan

## Project Overview (Deep Analysis)

### Architecture Structure

**API (apps/api)** - Fastify-based REST API:
- Entry: `src/index.ts`
- Modules: `health`, `users` (each with controller + service)
- Architecture layers: Controller → Service → (Repository pattern present but using in-memory Map)
- Response format standardized: `createSuccessResponse`/`createErrorResponse` from `@repo/utils`
- Routes prefixed with `/api/v1` (now centralized via `API_PREFIX`)
- Imports: `@repo/config`, `@repo/types`, `@repo/utils`, `@repo/constants`, `@repo/auth`

**Web (apps/web)** - Next.js + React:
- Entry: `src/app/[lang]/layout.tsx` (multi-language support)
- Architecture: `@core/` (utils, hooks, styles, themes, components), `features/` (auth, users, etc.), `services/api/` (API client), `store/`, `hooks/`
- UI components: `@repo/ui-system` (MUI/radix-based: Alert, Avatar, Badge, Button, Card, etc.)
- State: Redux Toolkit + `@tanstack/react-query` for data fetching
- Styling: MUI theme overrides extensive (100+ override files)
- Imports: `@repo/*` packages extensively + direct node_modules dependencies

### Package Ecosystem (@repo/*)

| Package | Purpose | Key Exports |
|---------|---------|-------------|
| `@repo/config` | Environment configuration | `env`, `corsConfig`, `swaggerConfig`, `API_PREFIX` |
| `@repo/constants` | Application constants | `API_ENDPOINTS`, `HTTP_STATUS`, `ERROR_CODES`, `BrandingConfig`, `FeatureFlags`, `PAGINATION`, `FILE_LIMITS`, `CACHE_TTL` |
| `@repo/types` | Shared TypeScript types | `ApiResponse`, `ApiError`, `PaginatedResponse`, `User`, `HttpStatus`, `ErrorCode` (now unified) |
| `@repo/utils` | Utility functions | `createSuccessResponse`, `createErrorResponse`, `getPaginationParams`, `paginate`, `formatDate`, `isValidEmail`, etc. |
| `@repo/ui-system` | Reusable UI components | 30+ MUI/radix components (Alert, Avatar, Badge, Button, Card, Chip, Divider, Dropdown, IconButton, Input, Modal, Pagination, Progress, Spinner, Table, Tabs, Tooltip) |
| `@repo/auth` | Authentication config | Passport/jwt strategies, next-auth setup |
| `@repo/validation` | Validation schemas | Valibot/ajv-based schemas |
| `@repo/navigation` | Navigation config | Sidebar/menus configuration |
| `@repo/api-client` & `@repo/api-lib` | API client libraries | Typed API calls |
| `@repo/fake-db` | In-memory test database | Map-based user storage for API tests |

### Data Flow: API → Web

1. **API Layer**: Fastify controllers → Services → In-memory Map (fake-db) → JSON responses
2. **Web Layer**: API client (`@repo/api-client` or direct fetch) → React components → TanStack Query → MUI UI
3. **Shared**: Types flow from `@repo/types`, configs from `@repo/constants`/`@repo/config`

## What's Already Centralized ✅

- API response format (`createSuccessResponse`/`createErrorResponse`)
- HTTP status codes & error codes (`HTTP_STATUS`, `ERROR_CODES`)
- API endpoint definitions (`API_ENDPOINTS`, `API_PREFIX`)
- Branding configuration (`getBranding()` / `loadBrandingFromEnv()`)
- Feature flags (`getFeatureFlags()` / `loadFeatureFlagsFromEnv()`)
- Pagination utilities (`getPaginationParams`, `paginate`)
- Core UI components (30+ components in `@repo/ui-system`)
- User types (`User`, `CreateUserDto`, `UpdateUserDto`)

## What Needs Centralization 🔄

### 1. Authentication & Authorization Middleware ⭐ **HIGHEST PRIORITY**
- **Current state**: 
  - Next-auth configured in `apps/api/src/index.ts`
  - `@repo/auth` package exists but limited to dependencies
  - No centralized auth middleware for Fastify routes
  - Web app lacks consistent auth guard pattern
- **To centralize**:
  - Fastify auth middleware plugin (`@repo/auth` → Fastify plugin)
  - JWT validation and user extraction
  - Role-based access control (RBAC) middleware
  - Auth guard custom hook for React (`useAuth`, `useUser`)
  - Protected route patterns

**Impact**: Security consistency across all API routes + web page protection

### 2. API Client Pattern ⭐ **HIGH PRIORITY**
- **Current state**:
  - Web app uses mix: some use `@tanstack/react-query` with manual API calls, some use server actions
  - No centralized API client instance
  - Base URL varies (`NEXT_PUBLIC_API_URL` env var, hardcoded in some places)
  - Error handling inconsistent
- **To centralize**:
  - Typed API client service (`services/api/client.ts` pattern from Architecture.md)
  - Axios/fetch instance with baseURL from `@repo/config`
  - Interceptors for:
    - Automatic token injection
    - Error standardization (map to `ERROR_CODES`)
    - Retry logic
  - Named API modules (like `userApi`, `healthApi` from Architecture.md)
  - Query keys and mutation patterns standardized

**Impact**: Consistent API calls across web app, automatic error mapping, reduced boilerplate

### 3. Form Validation Schemas ⭐ **HIGH PRIORITY**
- **Current state**:
  - `react-hook-form` used throughout web app
  - Schemas defined inline or per-component
  - `valibot` and `@repo/utils` validation helpers exist but not consistently used
  - No centralized schema types
- **To centralize**:
  - Valibot/ajv schemas per entity stored in `@repo/validation`
  - Typed form hook helpers (`useFormWithSchema`)
  - Common validation patterns (email, uuid, positive number)
  - Error message catalog (tertranslated, consistent formatting)
  - Schema-generated types for React forms

**Impact**: Consistent validation, reduced duplicate schema code, better DX

### 4. Theme & Styling System ⭐ **MEDIUM PRIORITY**
- **Current state**:
  - `@repo/theme` package with color palette (primary: `#0ea5e9`, secondary: `#a855f7`, accent: `#06b6d4`)
  - MUI theme with 100+ override files in `apps/web/src/@core/theme/overrides/`
  - Color scheme definitions in `apps/web/src/@core/theme/colorSchemes.ts`
  - Typography and spacing scales configured
  - CSS variables not fully utilized
- **To centralize**:
  - MUI ThemeProvider configuration in single location
  - CSS variables for: primary, secondary, background, surface, text colors
  - Consistent spacing scale (8px grid)
  - Typography scale (heading1, body1, caption, etc.)
  - Dark mode extension from current basic implementation
  - Component style props pattern

**Impact**: Brand consistency, easier theming, reduced CSS duplication

### 5. Error Handling Pattern ⭐ **MEDIUM PRIORITY**
- **Current state**:
  - API: `try/catch` + `createErrorResponse` in some controllers, manual `status(404)` in others
  - Web: `.catch()` on API calls, error boundaries exist but inconsistent
  - `ERROR_CODES` already centralized, but usage inconsistent
- **To centralize**:
  - Fastify error decorator/middleware (`app.use(async (req, rep, next) => { ... })`)
  - Standard error response format already defined
  - React error boundary patterns
  - Global error handler for API routes
  - Error logging standardization

**Impact**: Consistent error experiences, easier debugging

### 6. Logging & Monitoring ⭐ **MEDIUM PRIORITY**
- **Current state**:
  - Fastify: `logger: env.NODE_ENV === 'development'` only
  - No structured logging (no JSON logs, no winston)
  - No error tracking (Sentry not configured)
  - Web: console.error scattered, no centralized logging
- **To centralize**:
  - Winston or pino configuration for Fastify
  - Structured JSON logs with correlation IDs
  - Error tracking setup (Sentry/Datadog setup)
  - Performance monitoring points
  - Request logging middleware

**Impact**: Better debugging, production observability

### 7. Testing Patterns & Utilities ⭐ **MEDIUM PRIORITY**
- **Current state**:
  - `test` script in package.json runs `turbo run test`
  - API tests exist but limited
  - No test utilities for API client mocking
  - Component testing with RTL exists
- **To centralize**:
  - Test configuration (Vitest/Jest) centralized
  - Custom matchers for API responses (`toHaveApiResponse`)
  - Mock factory for `@repo/fake-db`
  - Test utilities (user factory, auth login helper)
  - Coverage thresholds configuration

**Impact**: Better test quality, faster test development

### 8. Navigation & Routing Configuration ⭐ **LOWER PRIORITY**
- **Current state**:
  - `@repo/navigation` package exists
  - Sidebar menus defined somewhere but not fully explored
  - Multi-language routing (`/[lang]` pattern) working
- **To centralize**:
  - Sidebar menu configuration from `@repo/navigation`
  - Route guards configuration
  - Breadcrumbs pattern
  - Permission-based route access

**Impact**: Consistent navigation, easier menu management

## Recommended Execution Order

### Sprint 1: Foundation (Weeks 1-2)
1. **Authentication Middleware** - Critical for security consistency
   - Fastify auth plugin `@repo/auth`
   - React `useAuth` hook
   - Route protection on both API and web

2. **API Client Pattern** - Critical for developer experience
   - Typed API service instance
   - Axios with interceptors
   - Standardized query patterns

### Sprint 2: Quality of Life (Weeks 3-4)
3. **Form Validation Schemas** - High impact on daily development
   - Centralized valibot schemas
   - `useFormWithSchema` hook
   - Consistent error messages

4. **Error Handling Pattern** - High impact on user experience
   - Fastify error middleware
   - React error boundaries + API error mapping
   - Consistent error responses

### Sprint 3: Polish (Weeks 5-6)
5. **Theme & Styling** - Brand consistency
   - MUI ThemeProvider centralization
   - CSS variables setup
   - Dark mode enhancement

6. **Logging & Monitoring** - Production readiness
   - Winston/pino configuration
   - Error tracking setup
   - Structured logs

### Sprint 4: Excellence (Weeks 7-8)
7. **Testing Utilities** - Test quality
   - Custom matchers
   - Test factories
   - Coverage configuration

8. **Navigation & Routing** - UX consistency
   - `@repo/navigation` full utilization
   - Permission-based access

## Key Files to Modify/Create

### Modify:
1. `packages/auth/` - Expand with Fastify plugin + React hooks
2. `packages/api-client/` - Add typed API client instance
3. `packages/validation/` - Add entity schemas + validation helpers
4. `packages/theme/` - Expand with typography/spacing variables
5. `turbo.json` - Add type-check and test scripts configuration

### Create:
1. `apps/api/src/core/middleware.ts` - Fastify middleware (auth, error, logging)
2. `apps/api/src/core/guards.ts` - Route guards
3. `apps/web/src/services/api/client.ts` - Typed API client
4. `apps/web/src/hooks/useAuth.ts` - Auth hook
5. `apps/web/src/services/api/endpoints.ts` - API endpoint constants

## Verification Steps

After implementation, verify:
1. All API routes protected by auth middleware
2. API client used consistently across web components
3. Form validation using centralized schemas
4. Theme applied uniformly (no inline styles overriding)
5. Error responses consistent format across API
6. Logs structured and correlated
7. Tests pass with new utilities

---

**Note**: This phase builds upon the Phase 1 centralizations already completed (response format, status codes, API prefix, branding, feature flags). Phase 2 focuses on developer experience, security, and production readiness.