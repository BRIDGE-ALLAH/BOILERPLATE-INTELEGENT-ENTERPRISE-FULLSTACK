// @tests - Test utilities for API and UI testing
import { setupServer } from 'msw';
import { rest } from 'msw';
import { faker } from '@faker-js/faker';
import { User } from '@repo/types';

// Test server setup with MSW (Mock Service Worker)
export const testServer = setupServer(
  rest.get('/api/v1/health', (req, res, ctx) => {
    return res(
      ctx.json({
        success: true,
        data: {
          status: 'healthy',
        },
        meta: {
          timestamp: new Date().toISOString(),
          version: 'v1',
        },
      })
    );
  }),

  rest.get('/api/v1/health/live', (req, res, ctx) => {
    return res(
      ctx.json({
        success: true,
        data: {
          status: 'alive',
        },
        meta: {
          timestamp: new Date().toISOString(),
          version: 'v1',
        },
      })
    );
  }),

  rest.get('/api/v1/health/ready', (req, res, ctx) => {
    return res(
      ctx.json({
        success: true,
        data: {
          ready: true,
        },
        meta: {
          timestamp: new Date().toISOString(),
          version: 'v1',
        },
      })
    );
  }),

  // User API mocks
  rest.get('/api/v1/users', (req, res, ctx) => {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 10;
    const total = 50;
    const totalPages = Math.ceil(total / pageSize);
    const users = Array.from({ length: 10 }, () => ({
      id: faker.string.uuid(),
      name: faker.person.firstName(),
      email: faker.person.email(),
      createdAt: faker.date.past().toISOString(),
    }));

    return res(
      ctx.json({
        success: true,
        data: {
          items: users,
          total,
          page,
          pageSize,
          totalPages,
        },
        meta: {
          timestamp: new Date().toISOString(),
          version: 'v1',
        },
      })
    );
  }),

  rest.post('/api/v1/users', (req, res, ctx) => {
    const user = {
      id: faker.string.uuid(),
      ...req.body,
    };
    return res(
      ctx.status(201),
      ctx.json({
        success: true,
        data: user,
        meta: {
          timestamp: new Date().toISOString(),
          version: 'v1',
        },
      })
    );
  }),

  // Auth mocks
  rest.post('/api/v1/auth/login', (req, res, ctx) => {
    const { email } = req.body as { email: string };
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        data: {
          user: {
            id: faker.string.uuid(),
            email,
            role: 'user',
          },
          token: faker.string.uuid(),
        },
        meta: {
          timestamp: new Date().toISOString(),
          version: 'v1',
        },
      })
    );
  }),

  // Logout mock
  rest.post('/api/v1/auth/logout', (req, res, ctx) => {
    return res(
      ctx.status(204)
    );
  })
);

// Test user factory
export const testUser = (overrides?: Partial<User>): User => ({
  id: faker.string.uuid(),
  name: faker.person.firstName(),
  email: faker.person.email(),
  createdAt: faker.date.past().toISOString(),
  ...overrides,
});

// Test users array
export const testUsers = (count: number = 10): User[] =>
  Array.from({ length: count }, testUser);

// API response matchers for Jest/Jest-dom
export const toHaveApiResponse = (expected: Partial<ApiResponse>) => {
  return {
    pass: (actual: any) => {
      const hasSuccess = actual.success === expected.success;
      const hasData = actual.data === expected.data;
      const hasMeta = actual.meta
        ? actual.meta.timestamp === expected.meta?.timestamp
        : true;
      return hasSuccess && hasData && hasMeta;
    },
    message: () =>
      `Expected API response to match, got: ${JSON.stringify(actual)}`,
  };
};

// API error matchers
export const toHaveApiError = (expectedCode: string) => {
  return {
    pass: (actual: any) => {
      return (
        !actual.success &&
        actual.error?.code === expectedCode
      );
    },
    message: () =>
      `Expected API error with code ${expectedCode}, got: ${JSON.stringify(actual)}`,
  };
};

// Wait for element with timeout utility
export const waitForElement = async (
  fn: () => Promise<boolean>,
  options: { timeout?: number; interval?: number } = {}
) => {
  const {
    timeout = 5000,
    interval = 100,
  } = options;

  const start = Date.now();
  while (Date.now() - start < timeout) {
    const result = await fn();
    if (result) return true;
    await new Promise((resolve) => setTimeout(resolve, interval));
  }
  return false;
};

// Deep equality for test objects
export const deepEqual = (a: any, b: any) => {
  const aStr = JSON.stringify(a);
  const bStr = JSON.stringify(b);
  return aStr === bStr;
};

// Generate test data builders
export const userBuilder = (overrides: Partial<User> = {}) => ({
  id: overrides.id || faker.string.uuid(),
  name: overrides.name || faker.person.firstName(),
  email: overrides.email || faker.person.email(),
  createdAt: overrides.createdAt || faker.date.past().toISOString(),
});

// Export types
export type { User } from '@repo/types';