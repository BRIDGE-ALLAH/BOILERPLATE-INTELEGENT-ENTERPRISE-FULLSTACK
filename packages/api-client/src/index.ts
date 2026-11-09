// @repo/api-client - Typed API client instance
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import type { Environment } from '@repo/config';
import { env } from '@repo/config';
import {
  ApiResponse,
  User,
  CreateUserDto,
  UpdateUserDto,
} from '@repo/types';

type ApiError = {
  success: boolean;
  error: {
    code: string;
    message: string;
    details?: Record<string, unknown>;
  };
  meta: {
    timestamp: string;
    version: string;
  };
};

type PaginatedResponse<T> = {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
};

// Create configured axios instance
const apiClient: AxiosInstance = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Request interceptor: add auth token if available
apiClient.interceptors.request.use(
  (config) => {
    // Get token from localStorage or context
    // In a real app, would check auth state
    const token = typeof window !== 'undefined'
      ? localStorage.getItem('token')
      : undefined;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor: standardize error handling
apiClient.interceptors.response.use(
  (response: AxiosResponse) => ({ ...response, data: response.data }),
  (error) => {
    // Standardized error handling
    const errorResponse = {
      success: false,
      error: {
        code: 'EXTERNAL_SERVICE_ERROR',
        message: error.response?.data?.message || error.message || 'Request failed',
        details: error.response?.data,
      },
      meta: {
        timestamp: new Date().toISOString(),
        version: 'v1',
      },
    };

    return Promise.reject(errorResponse);
  }
);

// API client methods
export const apiClientInstance = apiClient;
export { apiClient };

export const userApi = {
  getAll: (): Promise<ApiResponse<PaginatedResponse<User>>> =>
    apiClient.get('/users').then(res => res.data),

  getById: (id: string): Promise<ApiResponse<User>> =>
    apiClient.get(`/users/${id}`).then(res => res.data),

  create: (data: CreateUserDto): Promise<ApiResponse<User>> =>
    apiClient.post('/users', data).then(res => res.data),

  update: (id: string, data: UpdateUserDto): Promise<ApiResponse<User>> =>
    apiClient.put(`/users/${id}`, data).then(res => res.data),

  delete: (id: string): Promise<ApiResponse<{ message: string }>> =>
    apiClient.delete(`/users/${id}`).then(res => res.data),
};

export const healthApi = {
  check: (): Promise<ApiResponse<{ status: string }>> =>
    apiClient.get('/health').then(res => res.data),

  live: (): Promise<ApiResponse<{ status: string }>> =>
    apiClient.get('/health/live').then(res => res.data),

  ready: (): Promise<ApiResponse<{ ready: boolean }>> =>
    apiClient.get('/health/ready').then(res => res.data),
};

// Generic API helper
export const api = {
  get: <T>(endpoint: string): Promise<ApiResponse<T>> =>
    apiClient.get(endpoint).then(res => res.data),

  post: <T, D = unknown>(endpoint: string, data?: D): Promise<ApiResponse<T>> =>
    apiClient.post(endpoint, data).then(res => res.data),

  put: <T, D = unknown>(endpoint: string, data?: D): Promise<ApiResponse<T>> =>
    apiClient.put(endpoint, data).then(res => res.data),

  delete: <T>(endpoint: string): Promise<ApiResponse<T>> =>
    apiClient.delete(endpoint).then(res => res.data),

  patch: <T, D = unknown>(endpoint: string, data?: D): Promise<ApiResponse<T>> =>
    apiClient.patch(endpoint, data).then(res => res.data),
};

export type { ApiResponse, User, CreateUserDto, UpdateUserDto };
export type { ApiError, PaginatedResponse };