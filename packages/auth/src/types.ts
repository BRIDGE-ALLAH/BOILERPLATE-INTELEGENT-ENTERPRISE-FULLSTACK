 export enum UserRole {
   SUPER_ADMIN = 'super_admin',
   ADMIN = 'admin',
   MODERATOR = 'moderator',
   USER = 'user',
   GUEST = 'guest',
 }
 
 export enum Permission {
   USER_READ = 'user:read',
   USER_WRITE = 'user:write',
   USER_DELETE = 'user:delete',
   ADMIN_READ = 'admin:read',
   ADMIN_WRITE = 'admin:write',
   SYSTEM_CONFIG = 'system:config',
 }
 
 export interface AuthResult {
   success: boolean;
   user?: {
     id: string;
     email: string;
     role: string;
   };
   error?: string;
 }
