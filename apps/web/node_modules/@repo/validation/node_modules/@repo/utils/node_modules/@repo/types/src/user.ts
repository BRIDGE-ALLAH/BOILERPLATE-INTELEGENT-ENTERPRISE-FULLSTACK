 // Shared User types
 
 export interface User {
   id: string;
   name: string;
   email: string;
   createdAt: string;
   updatedAt?: string;
 }
 
 export interface CreateUserDto {
   name: string;
   email: string;
   password?: string;
 }
 
 export interface UpdateUserDto {
   name?: string;
   email?: string;
 }
 
 export interface UserResponse {
   success: boolean;
   data?: User;
   error?: {
     code: string;
     message: string;
   };
   meta: {
     timestamp: string;
     version: string;
   };
 }
