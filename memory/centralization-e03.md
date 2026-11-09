# E-03: Audit Web App API Responses & Centralization

## Goal
Audit the `@repo/utils` usage in the web app (`apps/web`) and determine if API routes should adopt the centralized response format from `@repo/utils`. Currently the web app has a separate API format.

## Web App API Architecture

### Web App Structure

| Component | Framework | API Format |
|-----------|-----------|------------|
| `apps/web` | Next.js 16 + React 19 | Route handlers (`route.ts`, `app/api/*`) |
| `apps/api` | Fastify | REST JSON API (`@repo/utils` response format) |
| API Response | `@repo/utils` `createSuccessResponse`/`createErrorResponse` | Standardized |
| Web API Routes | Next.js `handle` + `midway` | Custom format (varies) |

### Web App API Routes (Sample)

| File | Endpoint | Response Format |
|------|----------|-----------------|
| `apps/web/src/app/api/health/route.ts` | `GET /api/health` | `{ status: 'ok' }` or custom |
| `apps/web/src/app/api/users/route.ts` | `GET/POST /api/users` | Varies - some use `next/serializer` |
| `apps/web/src/pages/api/auth/[...nextauth].ts` | Auth routes | `next-auth` default format |

### Centralization Gap

| Aspect | API App (`apps/api`) | Web App (`apps/web`) | Gap |
|--------|---------------------|--------------------|-----|
| Response format | `@repo/utils` `createSuccessResponse`/`createErrorResponse` | Custom/varies | ⬜ Not centralized |
| Error codes | `@repo/constants` ERROR_CODES | Custom or none | ⬜ Not centralized |
| Pagination | `@repo/utils` `paginate` + `getPaginationParams` | Custom implementation | ⬜ Not centralized |
| Type usage | `@repo/types` `CreateUserDto`, `User` | `next` types + custom DTOs | ⬜ Partial |
| Import pattern | `@repo/utils` named imports | `next/serializer` or custom | ⬜ Different |

---

## Audit: Web App `@repo/utils` Usage

### Confirmed Imports in Web App

| File | Import | Usage |
|------|--------|-------|
| `packages/validation/src/validators.ts:2` | `import { createErrorResponse } from '@repo/utils';` | Used in validation layer (shared between apps) |
| `apps/web` | No direct `@repo/utils` route handler imports | - |
| `apps/web` | `@repo/types` type imports | `CreateUserDto`, `User` in component props |

### Key Finding: `packages/validation` is the Bridge

The `packages/validation` package is the **only** web app consumer of `@repo/utils`:

```typescript
// packages/validation/src/validators.ts
import { createErrorResponse } from '@repo/utils';

// Used in: both API app and potentially web app validation logic
export const validateSchema = <T>(schema: any, data: unknown): T => {
  const result = safeParse(schema, data);
  
  if (!result.success) {
    const details: Record<string, unknown> = {};
    result.issues?.forEach((issue: any) => {
      const path = issue.path?.map((p: any) => p.key).join('.') || 'root';
      details[path] = issue.message;
    });
    
    throw new ValidationError('Validation failed', details);
  }
  
  return result.output as T;
};
```

**Note:** `ValidationError` thrown here is caught by API app's `setupErrorHandling` hook, which uses `@repo/utils` `createErrorResponse`. So the validation package IS the connection point.

---

## Centralization Options for Web App

### Option 1: Adopt `@repo/utils` Format (Recommended)

**Change:** Web API routes use `@repo/utils` response format

**Benefits:**
- Unified API format across monorepo (`apps/api` + `apps/web`)
- Single error code source (`@repo/constants` ERROR_CODES)
- Shared pagination (`@repo/utils` `paginate`, `getPaginationParams`)
- Easier type sharing (`@repo/types` DTOs)

**Changes Required:**

1. **Create web API route helpers** (or modify existing):
   ```typescript
   // apps/web/src/lib/api-utils.ts (NEW)
   import { createSuccessResponse, createErrorResponse } from '@repo/utils';
   import { ERROR_CODES } from '@repo/constants';
   
   export const apiResponse = {
     success: <T>(data: T, message = 'Success') => createSuccessResponse(data, message),
     error: (code: string, message: string, details?) => createErrorResponse(code, message, details),
   };
   ```

2. **Modify route handlers** to use new helpers:
   ```typescript
   // apps/web/src/app/api/users/route.ts
   import { apiResponse } from '@/lib/api-utils';
   
   export async function GET(request: Request) {
     const users = await UserService.getAll();
     return new Response(
       JSON.stringify(apiResponse.success(users)),
       { headers: { 'Content-Type': 'application/json' } }
     );
   }
   ```

3. **Update error handling** to use centralized codes:
   ```typescript
   catch (error) {
     return new Response(
       JSON.stringify(apiResponse.error(
         ERROR_CODES.INTERNAL_ERROR,
         error.message || 'Internal Server Error'
       )),
       { status: 500, headers: { 'Content-Type': 'application/json' } }
     );
   }
   ```

**Estimated Effort:** 2-3 days for full web API route conversion

---

### Option 2: Keep Current Web Format (Status Quo)

**Rationale:**
- Next.js has its own API patterns (`next/serializer`, `zod`/`valibot` validation)
- Web app is client-facing; API format consistency less critical than internal API
- Lower risk - no changes to working code
- API app (`apps/api`) already uses centralized format (validated)

**Trade-offs:**
- ❌ Monorepo has two API formats (fragmentation)
- ❌ Future onboarding harder (new devs must learn two patterns)
- ❌ No shared error codes or pagination between apps
- ✅ Zero risk of breaking web API routes
- ✅ No changes needed

---

### Option 3: Hybrid Approach (Recommended Compromise)

**Keep web app's current pattern for new routes, but centralize common utilities.**

**Strategy:**
1. **Centralize shared utilities** that both apps use:
   - `@repo/utils` `formatError` (already shared via `packages/validation`)
   - `@repo/types` DTOs (already shared)
   - `@repo/config` env vars (already shared)

2. **For web app API routes only:**
   - Add `api-response` helper (thin wrapper around `@repo/utils`)
   - Adopt gradually: new routes use centralized format, old routes keep existing
   - No forced migration of existing routes

3. **Shared validation** (already done via `packages/validation`):
   - Both apps use `packages/validation` schemas
   - Validation errors flow through `@repo/utils` in API app
   - Web app validates on client + server, throws `ValidationError`

**Benefits of Hybrid:**
- ✅ Zero breaking changes to web app
- ✅ Gradual centralization (adopt at own pace)
- ✅ Shared validation layer (already done)
- ✅ Shared types and config (already done)
- ✅ Optional `@repo/utils` adoption for web routes
- ⚠️ Two formats persist (but gradually converging)

**Recommended:** Option 3 - Hybrid approach with gradual adoption.

---

## Audit Conclusion: E-03

### Current State

| Metric | Status |
|--------|--------|
| Web app uses `@repo/utils` | ❌ No direct route handler imports |
| Web app uses `@repo/types` | ✅ Type imports in components/DTOs |
| Web app uses `@repo/config` | ✅ Env vars via next-config |
| Web app uses `packages/validation` | ✅ Yes - bridges to `@repo/utils` |
| API format consistency | ⚠️ Two formats (api app: centralized, web: custom) |

### Recommendations

1. **Low Priority** - Web app centralization is optional; API app already centralized ✅
2. **If pursuing** - Use Option 3 (hybrid): add thin `@repo/utils` wrapper, adopt gradually
3. **No action needed** - Web app format difference is acceptable for now; focus on API app stability
4. **Document** the two-format reality in the monorepo's API strategy

### E-03 Summary

- **Status:** Audit complete - web app doesn't directly use `@repo/utils` route handlers
- **Root Cause:** Web app uses Next.js API routes; API app uses Fastify with `@repo/utils`
- **Options:**
  - **Option 1:** Full centralization (2-3 days work, moderate risk)
  - **Option 2:** Status quo (no changes, zero risk)
  - **Option 3:** Hybrid (thin wrapper, gradual adoption) - **RECOMMENDED**
- **Recommendation:** Option 3 - add `api-response` helper in web lib, adopt for new routes only

**Next Steps (if chosen):** Add `apps/web/src/lib/api-utils.ts` with thin `@repo/utils` wrappers, use for new API routes only.

---
**E-03 Complete:** Audit done. Web app doesn't directly use `@repo/utils` route handlers (separate Next.js architecture). Three options documented: Option 3 (hybrid) recommended for gradual centralization without breaking changes.