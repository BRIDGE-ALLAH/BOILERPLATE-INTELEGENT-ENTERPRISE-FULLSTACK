// Error Handler - Standardized error handling
import type { ApiError, ApiResponse } from "@repo/types";

export class ApiErrorHandler {
  static handle(error: unknown): ApiError {
    if (error instanceof Response) {
      return { code: "HTTP_ERROR", message: `HTTP ${error.status}: ${error.statusText}` };
    }
    if (error instanceof Error) {
      return { code: "ERROR", message: error.message };
    }
    if (typeof error === "object" && error !== null) {
      const err = error as Record<string, unknown>;
      return {
        code: (err.code as string) || "UNKNOWN_ERROR",
        message: (err.message as string) || "An unknown error occurred",
        details: err.details as Record<string, unknown>,
      };
    }
    return { code: "UNKNOWN_ERROR", message: "An unknown error occurred" };
  }

  static toResponse(error: unknown): ApiResponse<null> {
    const handled = this.handle(error);
    return {
      success: false,
      error: handled,
      meta: {
        timestamp: new Date().toISOString(),
        version: "v1",
      },
    };
  }

  static isNetworkError(error: unknown): boolean {
    return error instanceof TypeError && error.message.includes("fetch");
  }

  static isTimeoutError(error: unknown): boolean {
    return error instanceof DOMException && error.name === "TimeoutError";
  }
}

export const apiErrorHandler = new ApiErrorHandler();
