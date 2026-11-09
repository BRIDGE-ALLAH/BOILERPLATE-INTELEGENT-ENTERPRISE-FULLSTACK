// @repo/auth - Authentication utilities for API and Web
export * from './jwt.js';
export * from './password.js';
export * from './guards.js';
export * from './types.js';
export * from './abac.js';

// Fastify authentication plugin
import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { env } from '@repo/config';
import { createErrorResponse, createSuccessResponse } from '@repo/utils';
import { ERROR_CODES, HTTP_STATUS } from '@repo/constants';
import { jwtService, extractTokenFromHeader, TokenPayload, UserRole, Permission, hasPermission, isTokenPayload } from './jwt.js';
import { passwordService } from './password.js';
import { requireRole, requirePermission } from './guards.js';
import { policyEngine, requirePolicy, attachResource } from './abac.js';

// Public routes that don't require authentication
const PUBLIC_ROUTES = [
  '/health',
  '/auth/login',
  '/auth/signup',
  '/docs',
  '/docs/',
  '/docs/json',
  '/docs/yaml',
];

function isPublicRoute(url: string): boolean {
  return PUBLIC_ROUTES.some(route => url.startsWith(route));
}

export async function createAuthPlugin(app: FastifyInstance) {
  // Decorate request with user type
  app.decorateRequest('user', null);
  app.decorateRequest('resource', null);

  // Add authentication hook
  app.addHook('onRequest', async (req: FastifyRequest, rep: FastifyReply) => {
    // Skip auth for public routes (health, auth login, etc.)
    if (isPublicRoute(req.url)) {
      return;
    }

    const authHeader = req.headers.authorization;
    const token = extractTokenFromHeader(authHeader);

    if (!token) {
      return rep.status(HTTP_STATUS.UNAUTHORIZED).send(
        createErrorResponse(ERROR_CODES.UNAUTHORIZED, 'Authorization header missing or invalid')
      );
    }

    const payload = jwtService.verify(token);

    if (!payload || !isTokenPayload(payload)) {
      return rep.status(HTTP_STATUS.UNAUTHORIZED).send(
        createErrorResponse(ERROR_CODES.UNAUTHORIZED, 'Invalid or expired token')
      );
    }

    req.user = payload;
  });

}

// Export auth utilities
export { jwtService, passwordService };
export { extractTokenFromHeader, hasPermission, hasRole, TokenPayload, UserRole, Permission, isTokenPayload };
export { requireRole, requirePermission, attachUserToRequest };
export { policyEngine, requirePolicy, attachResource };