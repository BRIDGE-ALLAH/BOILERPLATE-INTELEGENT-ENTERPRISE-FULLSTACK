 import { apiClient } from './client';
 import { User, CreateUserDto, UpdateUserDto, ApiResponse, PaginatedResponse } from '@repo/types';
 
 export const usersApi = {
   getAll: () => apiClient.get<ApiResponse<PaginatedResponse<User>>>('/users'),
 
   getById: (id: string) => apiClient.get<ApiResponse<User>>(`/users/${id}`),
 
   create: (data: CreateUserDto) => 
     apiClient.post<ApiResponse<User>>('/users', data),
 
   update: (id: string, data: UpdateUserDto) => 
     apiClient.put<ApiResponse<User>>(`/users/${id}`, data),
 
   delete: (id: string) => 
     apiClient.delete<ApiResponse<{ message: string }>>(`/users/${id}`),
 };
