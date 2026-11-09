// @repo/auth - Authentication guards and utilities

import { extractTokenFromHeader, hasRole, hasPermission, TokenPayload, UserRole, Permission } from './jwt.js';
import { jwtService } from './jwt.js';

// Type guard for TokenPayload
export const isTokenPayload = (obj: any): obj is TokenPayload => {
  return (
    obj &&
    typeof obj.userId === 'string' &&
    typeof obj.email === 'string' &&
    (typeof obj.role === 'string' || obj.role === undefined) &&
    (typeof obj.iat === 'number' || obj.iat === undefined) &&
    (typeof obj.exp === 'number' || obj.exp === undefined)
  );
};

// Fastify request user attachment helper
export function attachUserToRequest(req: any, token: string): token is string {
  const payload = jwtService.verify(token);
  if (payload && isTokenPayload(payload)) {
    req.user = payload;
    return true;
  }
  return false;
}

// Role-based access check for middleware
export function requireRole(allowedRoles: string[]) {
  return (req: any, res: any, next: any) => {
    const user = req.user;
    if (!user) {
      return res.status(401).send({
        success: false,
        error: {
          code: 'UNAUTHORIZED',
          message: 'Authentication required',
        },
        meta: {
          timestamp: new Date().toISOString(),
          version: 'v1',
        },
      });
    }

    if (!allowedRoles.includes(user.role)) {
      return res.status(403).send({
        success: false,
        error: {
          code: 'FORBIDDEN',
          message: 'Insufficient permissions',
        },
        meta: {
          timestamp: new Date().toISOString(),
          version: 'v1',
        },
      });
    }

    next();
  };
}

// Permission-based access check for middleware
export function requirePermission(requiredPermissions: string[]) {
  return (req: any, res: any, next: any) => {
    const user = req.user;
    if (!user) {
      return res.status(401).send({
        success: false,
        error: {
          code: 'UNAUTHORIZED',
          message: 'Authentication required',
        },
        meta: {
          timestamp: new Date().toISOString(),
          version: 'v1',
        },
      });
    }

    if (!hasPermission(user, requiredPermissions)) {
      return res.status(403).send({
        success: false,
        error: {
          code: 'FORBIDDEN',
          message: 'Insufficient permissions',
        },
        meta: {
          timestamp: new Date().toISOString(),
          version: 'v1',
        },
      });
    }

    next();
  };
}

// Public route decorator (for marking routes that don't need auth)
export function isPublicRoute(): boolean {
  // This can be used in conjunction with Fastify's routing
  return false;
}

// Re-export auth utilities
export { extractTokenFromHeader, hasRole, hasPermission, jwtService, UserRole, Permission, TokenPayload };