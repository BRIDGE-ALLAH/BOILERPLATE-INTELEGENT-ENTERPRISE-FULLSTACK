// Request Context - Request-scoped context
import { randomUUID } from "crypto";

export interface RequestContext {
  requestId: string;
  timestamp: Date;
  userId?: string;
  roles?: string[];
  ip?: string;
  userAgent?: string;
  traceId?: string;
  spanId?: string;
}

let currentContext: RequestContext | null = null;

export const createRequestContext = (partial: Partial<RequestContext> = {}): RequestContext => {
  return {
    requestId: randomUUID(),
    timestamp: new Date(),
    ...partial,
  };
};

export const setRequestContext = (context: RequestContext): void => {
  currentContext = context;
};

export const getRequestContext = (): RequestContext | null => {
  return currentContext;
};

export const clearRequestContext = (): void => {
  currentContext = null;
};

export const withRequestContext = <T>(context: RequestContext, fn: () => T): T => {
  const prev = currentContext;
  currentContext = context;
  try {
    return fn();
  } finally {
    currentContext = prev;
  }
};
