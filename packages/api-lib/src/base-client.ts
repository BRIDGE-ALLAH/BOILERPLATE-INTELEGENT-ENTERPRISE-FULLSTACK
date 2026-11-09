import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from "axios";
import { env } from "@repo/config";
import type { ApiResponse, ApiError } from "@repo/types";

export interface BaseClientConfig {
  baseURL?: string;
  timeout?: number;
  headers?: Record<string, string>;
}

export class BaseApiClient {
  protected instance: AxiosInstance;
  protected defaultHeaders: Record<string, string>;

  constructor(config: BaseClientConfig = {}) {
    this.defaultHeaders = {
      "Content-Type": "application/json",
      ...config.headers,
    };

    this.instance = axios.create({
      baseURL: config.baseURL || env.NEXT_PUBLIC_API_URL,
      timeout: config.timeout || 10000,
      headers: this.defaultHeaders,
    });

    this.setupInterceptors();
  }

  protected setupInterceptors(): void {
    this.instance.interceptors.request.use(
      (config) => {
        const token = this.getAuthToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    this.instance.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        if (error.response?.status === 401) {
          this.handleUnauthorized();
        }
        return Promise.reject(this.normalizeError(error));
      }
    );
  }

  protected getAuthToken(): string | null {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("auth_token") || sessionStorage.getItem("auth_token");
  }

  protected handleUnauthorized(): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth_token");
      sessionStorage.removeItem("auth_token");
      window.location.href = "/login";
    }
  }

  protected normalizeError(error: AxiosError): ApiError {
    if (error.response?.data) {
      const data = error.response.data as any;
      return {
        code: data.error?.code || "API_ERROR",
        message: data.error?.message || error.message,
        details: data.error?.details,
        path: error.config?.url,
      };
    }
    return {
      code: "NETWORK_ERROR",
      message: error.message,
      path: error.config?.url,
    };
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await this.instance.get<ApiResponse<T>>(url, config);
    return response.data;
  }

  public async post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await this.instance.post<ApiResponse<T>>(url, data, config);
    return response.data;
  }

  public async put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await this.instance.put<ApiResponse<T>>(url, data, config);
    return response.data;
  }

  public async patch<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await this.instance.patch<ApiResponse<T>>(url, data, config);
    return response.data;
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await this.instance.delete<ApiResponse<T>>(url, config);
    return response.data;
  }

  public setAuthToken(token: string): void {
    if (typeof window !== "undefined") {
      localStorage.setItem("auth_token", token);
    }
  }

  public clearAuthToken(): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth_token");
      sessionStorage.removeItem("auth_token");
    }
  }
}

export const baseApiClient = new BaseApiClient();
