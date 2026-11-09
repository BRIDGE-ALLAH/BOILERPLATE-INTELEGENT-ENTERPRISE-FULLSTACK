 export const capitalize = (str: string): string => {
   return str.charAt(0).toUpperCase() + str.slice(1);
 };
 
 export const camelCase = (str: string): string => {
   return str
     .toLowerCase()
     .replace(/[-_\s]([a-z])/g, (_, letter) => letter.toUpperCase());
 };
 
 export const kebabCase = (str: string): string => {
   return str
     .replace(/([a-z])([A-Z])/g, '$1-$2')
     .toLowerCase()
     .replace(/[\s_]+/g, '-');
 };
 
 export const truncate = (str: string, length: number): string => {
   if (str.length <= length) return str;
   return str.slice(0, length) + '...';
 };
 
 export const slugify = (str: string): string => {
   return str
     .toLowerCase()
     .trim()
     .replace(/[^\w\s-]/g, '')
     .replace(/[\s_-]+/g, '-')
     .replace(/^-+|-+$/g, '');
 };
