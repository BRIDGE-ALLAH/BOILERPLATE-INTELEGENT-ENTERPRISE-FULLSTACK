# E-02: Add Refresh Token Logic to @repo/auth

## Goal
Extend the `@repo/auth` JWT service to support refresh token grant type, enabling token renewal without user re-authentication. This is a standard pattern for SPA + API architectures.

## Current Auth State

### `@repo/auth` Current Capabilities

| Feature | Status |
|---------|--------|
| Access token signing/verification | ✅ Complete (JwtService.sign(), JwtService.verify()) |
| Password hashing/verification | ✅ Complete (hashPassword, verifyPassword) |
| Auth plugin for Fastify | ✅ Complete (createAuthPlugin()) |
| JWT_SECRET from config | ✅ Complete (via @repo/config env) |
| Refresh token support | ❌ NOT YET - E-02 target |

### JWT Service Structure

**File:** `packages/auth/src/jwt.ts`

```typescript
export interface TokenPayload {
  userId: string;
  email: string;
  role?: string;
  iat?: number;
  exp?: number;
}

export class JwtService {
  private secret: string;
  private expiration: string;

  constructor() {
    this.secret = env.JWT_SECRET;
    this.expiration = env.JWT_EXPIRATION;
  }

  sign(payload: Omit<TokenPayload, 'iat' | 'exp'>): string {
    // ... signs access token
  }

  verify(token: string): TokenPayload | null {
    // ... verifies access token
  }
}

export const jwtService = new JwtService();
```

## Refresh Token Design

### Token Types

| Type | Purpose | TTL | Scope |
|------|---------|-----|-------|
| `access` | API request auth | 15-30 min | Short-lived, rotated on refresh |
| `refresh` | Token renewal | 7-30 days | Long-lived, used once to get new access token |

### Refresh Flow

```
1. Client stores: access_token, refresh_token
2. API access: Bearer access_token
3. When access expires (401):
   a. Client uses refresh_token / POST /auth/refresh
   b. Server verifies refresh_token validity
   c. Server revokes used refresh_token
   d. Server issues: new access_token + new refresh_token
4. When refresh expires: user re-logs in (full auth flow)
```

### Endpoints to Add

| Endpoint | Method | Auth | Description |
|----------|--------|------|-------------|
| `POST /auth/refresh` | POST | None (public) | Exchange refresh token for new access token |
| `POST /auth/logout` | POST | Access token | Invalidate refresh token (client-side) |

### Refresh Token Storage

- **Server-side:** Revoked in a `refresh_tokens` table or Redis set
- **Client-side:** HttpOnly + Secure cookie OR localStorage (with XSS warnings)
- **This implementation:** Server-side revocation list (in-memory for MVP, Redis for production)

---

## Implementation Plan

### 1. Extend `TokenPayload` Interface

```typescript
export interface TokenPayload {
  userId: string;
  email: string;
  role?: string;
  iat?: number;
  exp?: number;
  type: 'access' | 'refresh'; // token type discrimination
}
```

### 2. Add `refreshService` Methods

```typescript
class JwtService {
  // ... existing methods

  // Sign access token (short TTL)
  signAccess(payload: Omit<TokenPayload, 'iat' | 'exp'>): string {
    return this.sign({ ...payload, type: 'access', iat: Math.floor(Date.now() / 1000), exp: Math.floor(Date.now() / 1000) + this.parseExpiration(this.expiration) });
  }

  // Sign refresh token (long TTL)
  signRefresh(payload: Omit<TokenPayload, 'iat' | 'exp'>): string {
    const refreshExpiration = '30d'; // 30 days for refresh tokens
    return this.sign({ ...payload, type: 'refresh', iat: Math.floor(Date.now() / 1000), exp: Math.floor(Date.now() / 1000) + this.parseExpiration(refreshExpiration) });
  }

  // Verify token and check type
  verify(token: string): TokenPayload | null {
    const result = super.verify(token); // or existing logic
    if (result && result.type === 'refresh') {
      // Optionally mark refresh as used/revoked
    }
    return result;
  }
}
```

### 3. Add Refresh Endpoint (Fastify Plugin)

```typescript
// In packages/auth/src/index.ts or auth plugin
app.post('/auth/refresh', async (req, rep) => {
  const { refreshToken } = req.body;
  
  if (!refreshToken) {
    return rep.status(400).send({
      success: false,
      error: { code: 'BAD_REQUEST', message: 'Refresh token required' }
    });
  }
  
  const payload = jwtService.verify(refreshToken);
  
  if (!payload || payload.type !== 'refresh') {
    return rep.status(401).send({
      success: false,
      error: { code: 'UNAUTHORIZED', message: 'Invalid refresh token' }
    });
  }
  
  // Check revocation list (in-memory for MVP)
  if (refreshService.isRevoked(refreshToken)) {
    return rep.status(401).send({
      success: false,
      error: { code: 'TOKEN_REVOKED', message: 'Refresh token already used or revoked' }
    });
  }
  
  // Revoke old refresh token
  refreshService.revoke(refreshToken);
  
  // Issue new tokens
  const userId = payload.userId;
  const newAccessToken = jwtService.signAccess({ userId, email: payload.email });
  const newRefreshToken = jwtService.signRefresh({ userId, email: payload.email });
  
  // Store new refresh token revocation
  refreshService.markForRevocation(newRefreshToken); // will be revoked on next use
  
  rep.send({
    success: true,
    data: {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
      expiresIn: this.parseExpiration('15m') // 15 minutes
    }
  });
});
```

### 4. Add Logout Endpoint

```typescript
app.post('/auth/logout', { preHandler: jwtService.createAuthPlugin() }, async (req, rep) => {
  const { refreshToken } = req.body;
  
  if (refreshToken) {
    refreshService.revoke(refreshToken);
  }
  
  rep.send({
    success: true,
    message: 'Logged out successfully'
  });
});
```

---

## Files to Modify

| File | Change |
|------|--------|
| `packages/auth/src/jwt.ts` | Add `type` field to `TokenPayload`, add `signAccess()`, `signRefresh()`, type checking in `verify()` |
| `packages/auth/src/index.ts` | Add `POST /auth/refresh` and `POST /auth/logout` endpoints |
| `packages/auth/src/refresh-service.ts` | NEW: In-memory refresh token revocation service (MVP) |

### MVP Implementation (In-Memory)

```typescript
// packages/auth/src/refresh-service.ts
// Simple in-memory revocation list for MVP
// Replace with Redis in production

type RevokedToken = {
  token: string;
  revokedAt: number;
  reason: 'refresh-used' | 'logout' | 'expired';
};

const revokedTokens: RevokedToken[] = [];

export const refreshService = {
  isRevoked(token: string): boolean {
    return revokedTokens.some(r => r.token === token);
  },
  
  revoke(token: string) {
    revokedTokens.push({
      token,
      revokedAt: Date.now(),
      reason: 'logout'
    });
    // Keep list bounded (e.g., max 1000 entries)
    if (revokedTokens.length > 1000) {
      revokedTokens.shift();
    }
  },
  
  markForRevocation(token: string) {
    // Will be checked on next use via isRevoked()
  }
};
```

---

## Integration with API App

### `@api` Usage

The API app (`apps/api`) already uses `@repo/auth` via `createAuthPlugin()`. After adding refresh endpoints:

```typescript
// apps/api/src/index.ts (or auth routes file)
app.register(authRouter, { prefix: '/auth' });
// New routes:
// POST /auth/refresh - exchange refresh token
// POST /auth/logout - invalidate refresh token
```

### Client Usage (React/Next.js)

```typescript
// Token management hook
useAuth = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  
  const refreshAccessToken = async () => {
    const response = await fetch('/auth/refresh', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refreshToken })
    });
    
    const data = await response.json();
    if (data.success) {
      setAccessToken(data.data.accessToken);
      setRefreshToken(data.data.refreshToken);
    }
  };
  
  return { accessToken, refreshToken, refreshAccessToken };
};
```

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Token replay attacks | Medium | High | Revoke used refresh tokens immediately |
| Infinite refresh loops | Low | Medium | Limit refresh attempts, require re-auth after N refreshes |
| Secret leakage | Low | High | Never expose JWT_SECRET; keep in env only |
| ES module `require()` issue | Low | Medium | Already fixed in M-01 (lazy init) |
| Incompatible with existing flow | Low | High | New endpoints are additive; existing auth flow unchanged |

---

## Success Criteria

- [ ] `POST /auth/refresh` endpoint works: returns new access + refresh tokens
- [ ] `POST /auth/logout` endpoint works: invalidates refresh token
- [ ] Used refresh tokens are immediately revoked (no replay)
- [ ] Access tokens remain 15-30 min TTL
- [ ] Refresh tokens remain 30-day TTL
- [ ] Existing auth flow (login, verify) unchanged
- [ ] No breaking changes to `@repo/auth` exports

---

## Timeline & Effort

| Phase | Task | Estimated Time |
|-------|------|----------------|
| **Setup** | Extend TokenPayload, add refresh methods | 2 hours |
| **Endpoints** | Add /refresh and /logout Fastify routes | 3 hours |
| **Service** | Implement in-memory revocation service | 1 hour |
| **API Integration** | Register routes in apps/api | 1 hour |
| **Testing** | Manual test of refresh flow | 2 hours |
| **Total** | **~9 hours** | **Effort: Medium** |

---

## Conclusion

**E-02 adds standard refresh token support to the monorepo's authentication system**, enabling SPA-style token renewal while maintaining security through immediate revocation of used refresh tokens. The implementation is additive - existing login/verify flows remain unchanged.

**Recommended next step** if pursuing auth enhancements: implement the refresh service and endpoints as described above.

---
**E-02 Status:** Ready for implementation. Requires modifying `packages/auth/src/jwt.ts`, creating `packages/auth/src/refresh-service.ts`, and adding routes to `apps/api`. Estimated 9 hours for full implementation.