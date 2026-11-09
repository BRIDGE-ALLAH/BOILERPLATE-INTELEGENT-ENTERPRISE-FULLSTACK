// Rate Limiter - Simple in-memory rate limiting
interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const store = new Map<string, RateLimitEntry>();

export interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
  keyPrefix?: string;
}

export class RateLimiter {
  private config: RateLimitConfig;

  constructor(config: RateLimitConfig) {
    this.config = {
      keyPrefix: "ratelimit",
      ...config,
    };
  }

  private getKey(identifier: string): string {
    return `${this.config.keyPrefix}:${identifier}`;
  }

  private cleanup(): void {
    const now = Date.now();
    for (const [key, entry] of store.entries()) {
      if (entry.resetTime < now) {
        store.delete(key);
      }
    }
  }

  check(identifier: string): { allowed: boolean; remaining: number; resetTime: number } {
    this.cleanup();
    const key = this.getKey(identifier);
    const now = Date.now();
    const entry = store.get(key);

    if (!entry || entry.resetTime < now) {
      const newEntry: RateLimitEntry = {
        count: 1,
        resetTime: now + this.config.windowMs,
      };
      store.set(key, newEntry);
      return { allowed: true, remaining: this.config.maxRequests - 1, resetTime: newEntry.resetTime };
    }

    if (entry.count >= this.config.maxRequests) {
      return { allowed: false, remaining: 0, resetTime: entry.resetTime };
    }

    entry.count++;
    return { allowed: true, remaining: this.config.maxRequests - entry.count, resetTime: entry.resetTime };
  }

  reset(identifier: string): void {
    store.delete(this.getKey(identifier));
  }

  resetAll(): void {
    store.clear();
  }
}

export const createRateLimiter = (config: RateLimitConfig) => new RateLimiter(config);

export const defaultRateLimiter = new RateLimiter({
  maxRequests: 100,
  windowMs: 60 * 1000, // 1 minute
});
