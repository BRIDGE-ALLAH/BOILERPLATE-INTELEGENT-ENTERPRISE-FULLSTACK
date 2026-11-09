 // Application constants
 
 export const APP_NAME = 'MOONWITNESS';
 export const APP_VERSION = '1.0.0';
 
 export const PAGINATION = {
   DEFAULT_PAGE: 1,
   DEFAULT_PAGE_SIZE: 10,
   MAX_PAGE_SIZE: 100,
 } as const;
 
 export const FILE_LIMITS = {
   MAX_SIZE: 10 * 1024 * 1024, // 10MB
   ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'],
 } as const;
 
 export const RATE_LIMITS = {
   DEFAULT: 100, // requests per minute
   AUTH: 10,
   UPLOAD: 5,
 } as const;
 
 export const CACHE_TTL = {
   SHORT: 60, // 1 minute
   MEDIUM: 300, // 5 minutes
   LONG: 3600, // 1 hour
   DAY: 86400, // 24 hours
 } as const;
