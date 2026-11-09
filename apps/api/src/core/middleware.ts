// @api - Core middleware for Fastify API
import fastify from 'fastify';
import { createSuccessResponse, createErrorResponse } from '@repo/utils';
import { HTTP_STATUS, ERROR_CODES } from '@repo/constants';
import { createAuthPlugin, requireRole, requirePermission, jwtService } from '@repo/auth';

// Global error handler hook
export function setupErrorHandling(app: ReturnType<typeof fastify>) {
  // Centralized error handling hook
  app.addHook('onError', (req, rep, error) => {
    console.error('🚨 API Error:', {
      url: req.url,
      method: req.method,
      error: error.message,
      stack: error.stack,
    });

    // Determine status code
    const statusCode = error.statusCode || 500;

    // Send standardized error response
    rep.status(statusCode).send(
      createErrorResponse(
        error.code || ERROR_CODES.INTERNAL_ERROR,
        error.message || 'Internal Server Error',
        error.expose ? error.details : undefined
      )
    );
  });

  // Route-specific error decorator
  app.decorate('controller', 'async errorHandler', async function (
    this: any,
    promise: Promise<any>
  ) {
    try {
      const result = await promise;
      return { success: true, data: result };
    } catch (error: any) {
      // Re-throw with standardized format so onError hook handles it
      const status = error.statusCode || error.status || 500;
      const errorObj = new Error(error.message || 'Internal Server Error');
      errorObj.statusCode = status;
      errorObj.code = error.code || ERROR_CODES.INTERNAL_ERROR;
      errorObj.details = error.details;
      errorObj.expose = this.env.NODE_ENV !== 'development'; // Hide details in prod
      throw errorObj;
    }
  });
}

// API route error wrapper helper
export function apiErrorWrapper(
  handler: (req: any, rep: any) => Promise<any>,
  opts: { exposeDetails?: boolean } = {}
) {
  return async (req: any, rep: any) => {
    try {
      const result = await handler(req, rep);
      // Ensure success response format
      if (result && typeof result === 'object' && !result.success) {
        // Already an error response
        return rep.status(result.status || 200).send(result);
      }
      // Wrap success if not already wrapped
      if (result && typeof result === 'object' && result.success !== undefined) {
        return rep.send(result);
      }
      // Default success response
      return rep.send(
        createSuccessResponse(result, 'Operation completed successfully')
      );
    } catch (error: any) {
      // Let the onError hook handle it
      throw error;
    }
  };
}

// Standard 404 handler
export function notFoundHandler(rep: any, message = 'Resource not found') {
  return rep
    .status(404)
    .send(
      createErrorResponse(ERROR_CODES.NOT_FOUND, message)
    );
}

// Standard 401 handler
export function unauthorizedHandler(rep: any, message = 'Unauthorized') {
  return rep
    .status(401)
    .send(
      createErrorResponse(ERROR_CODES.UNAUTHORIZED, message)
    );
}

// Standard 403 handler
export function forbiddenHandler(rep: any, message = 'Forbidden') {
  return rep
    .status(403)
    .send(
      createErrorResponse(ERROR_CODES.FORBIDDEN, message)
    );
}

// Fastify authentication plugin registration
export async function registerAuthPlugin(app: ReturnType<typeof fastify>) {
  await app.register(createAuthPlugin);
}

// Re-export auth guards
export { requireRole, requirePermission, jwtService };