 export const formatDate = (date: Date | string, format: 'ISO' | 'SHORT' = 'ISO'): string => {
   const d = new Date(date);
   if (format === 'ISO') {
     return d.toISOString();
   }
   return d.toLocaleDateString('en-US', {
     year: 'numeric',
     month: 'short',
     day: 'numeric',
   });
 };
 
 export const formatDateTime = (date: Date | string): string => {
   const d = new Date(date);
   return d.toLocaleString('en-US', {
     year: 'numeric',
     month: 'short',
     day: 'numeric',
     hour: '2-digit',
     minute: '2-digit',
   });
 };
 
 export const addDays = (date: Date, days: number): Date => {
   const result = new Date(date);
   result.setDate(result.getDate() + days);
   return result;
 };
 
 export const isAfter = (date1: Date, date2: Date): boolean => {
   return new Date(date1) > new Date(date2);
 };
