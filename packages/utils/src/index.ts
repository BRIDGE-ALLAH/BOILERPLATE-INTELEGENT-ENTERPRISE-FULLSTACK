// Utility exports for the monorepo

export * from './response.js';
export * from './pagination.js';
export * from './validation.js';
export * from './date.js';
export * from './string.js';

// Re-export types from @repo/types
export type { ApiResponse } from '@repo/types';

// Shared logging helper
export const logger = {
  info: (message: string, context?: Record<string, unknown>) => {
    console.info(`[utils:info] ${message}`, context);
  },
  error: (message: string, context?: Record<string, unknown>) => {
    console.error(`[utils:error] ${message}`, context);
  },
  warn: (message: string, context?: Record<string, unknown>) => {
    console.warn(`[utils:warn] ${message}`, context);
  },
};

// Error response formatter
export const formatError = (err: Error): Record<string, unknown> => {
  return {
    name: err.name,
    message: err.message,
    // Omit stack in production for security
    ...(process.env.NODE_ENV !== 'production' ? { stack: err.stack } : {}),
  };
};

// Pagination metadata helper
export const paginationMeta = (page: number, limit: number, total: number) => ({
  page,
  limit,
  total,
  totalPages: Math.ceil(total / limit),
  hasNext: page < Math.ceil(total / limit),
  hasPrev: page > 1,
});

// Default success response
export const successResponse = (data: unknown, message = 'Success') => ({
  success: true,
  data,
  message,
});

// Default error response
export const errorResponse = (code: string, message: string) => ({
  success: false,
  error: { code, message },
});