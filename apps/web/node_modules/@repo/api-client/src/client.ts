 import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
 import { env } from '@repo/config';
 
 class ApiClient {
   private instance: AxiosInstance;
 
   constructor() {
     this.instance = axios.create({
       baseURL: env.NEXT_PUBLIC_API_URL,
       timeout: 10000,
       headers: {
         'Content-Type': 'application/json',
       },
     });
 
     this.instance.interceptors.request.use(
       (config) => {
         const token = this.getToken();
         if (token) {
           config.headers.Authorization = `Bearer ${token}`;
         }
         return config;
       },
       (error) => Promise.reject(error)
     );
 
     this.instance.interceptors.response.use(
       (response) => response,
       (error) => {
         if (error.response?.status === 401) {
           this.removeToken();
         }
         return Promise.reject(error);
       }
     );
   }
 
   private getToken(): string | null {
     if (typeof window === 'undefined') return null;
     return localStorage.getItem('auth_token');
   }
 
   private removeToken(): void {
     if (typeof window === 'undefined') return;
     localStorage.removeItem('auth_token');
   }
 
   public setToken(token: string): void {
     if (typeof window === 'undefined') return;
     localStorage.setItem('auth_token', token);
   }
 
   public async get<T>(url: string, config?: AxiosRequestConfig) {
     return this.instance.get<T>(url, config);
   }
 
   public async post<T>(url: string, data?: unknown, config?: AxiosRequestConfig) {
     return this.instance.post<T>(url, data, config);
   }
 
   public async put<T>(url: string, data?: unknown, config?: AxiosRequestConfig) {
     return this.instance.put<T>(url, data, config);
   }
 
   public async patch<T>(url: string, data?: unknown, config?: AxiosRequestConfig) {
     return this.instance.patch<T>(url, data, config);
   }
 
   public async delete<T>(url: string, config?: AxiosRequestConfig) {
     return this.instance.delete<T>(url, config);
   }
 }
 
 export const apiClient = new ApiClient();
