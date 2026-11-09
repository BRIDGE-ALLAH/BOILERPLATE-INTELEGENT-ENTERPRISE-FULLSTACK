 export const isValidEmail = (email: string): boolean => {
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return emailRegex.test(email);
 };
 
 export const isValidUrl = (url: string): boolean => {
   try {
     new URL(url);
     return true;
   } catch {
     return false;
   }
 };
 
 export const isValidUuid = (uuid: string): boolean => {
   const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
   return uuidRegex.test(uuid);
 };
 
 export const isPositiveNumber = (value: unknown): value is number => {
   return typeof value === 'number' && value > 0;
 };
