 import { apiClient } from './client.js';
 import { ApiResponse } from '@repo/types';
 
 export interface HealthStatus {
   status: 'healthy' | 'degraded' | 'unhealthy';
   timestamp: string;
   uptime: number;
   checks: Record<string, 'ok' | 'error'>;
 }
 
 export const healthApi = {
   check: () => apiClient.get<ApiResponse<HealthStatus>>('/health'),
 
   live: () => apiClient.get<ApiResponse<{ status: string }>>('/health/live'),
 
   ready: () => apiClient.get<ApiResponse<{ ready: boolean }>>('/health/ready'),
 };
