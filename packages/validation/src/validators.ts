 import { safeParse } from 'valibot';
 import { createErrorResponse } from '@repo/utils';
 
 export class ValidationError extends Error {
   constructor(
     message: string,
     public details: Record<string, unknown>
   ) {
     super(message);
     this.name = 'ValidationError';
   }
 }
 
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
 
 export const validateBody = <T>(schema: any, body: unknown): T => {
   return validateSchema<T>(schema, body);
 };
 
 export const validateQuery = <T>(schema: any, query: Record<string, unknown>): T => {
   return validateSchema<T>(schema, query);
 };
 
 export const validateParams = <T>(schema: any, params: Record<string, unknown>): T => {
   return validateSchema<T>(schema, params);
 };
