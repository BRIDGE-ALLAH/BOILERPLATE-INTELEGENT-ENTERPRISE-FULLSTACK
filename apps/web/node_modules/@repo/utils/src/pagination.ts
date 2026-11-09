 import { PaginationParams, PaginatedResponse } from '@repo/types';
 
 export const getPaginationParams = (
   query: Record<string, unknown>,
 ): PaginationParams => {
   const page = Math.max(1, parseInt(String(query.page || 1)));
   const pageSize = Math.min(100, Math.max(1, parseInt(String(query.pageSize || 10))));
   return { page, pageSize };
 };
 
 export const paginate = <T>(
   items: T[],
   page: number = 1,
   pageSize: number = 10,
 ): PaginatedResponse<T> => {
   const total = items.length;
   const totalPages = Math.ceil(total / pageSize);
   const startIndex = (page - 1) * pageSize;
   const endIndex = startIndex + pageSize;
   const paginatedItems = items.slice(startIndex, endIndex);
 
   return {
     items: paginatedItems,
     total,
     page,
     pageSize,
     totalPages,
   };
 };
