 import { ApiResponse } from '@repo/types';
 
 export const createSuccessResponse = <T>(
   data: T,
   message?: string,
 ): ApiResponse<T> => ({
   success: true,
   data,
   meta: {
     timestamp: new Date().toISOString(),
     version: 'v1',
   },
 });
 
 export const createErrorResponse = (
   code: string,
   message: string,
   details?: Record<string, unknown>,
 ): ApiResponse<unknown> => ({
   success: false,
   error: {
     code,
     message,
     details,
   },
   meta: {
     timestamp: new Date().toISOString(),
     version: 'v1',
   },
 });
