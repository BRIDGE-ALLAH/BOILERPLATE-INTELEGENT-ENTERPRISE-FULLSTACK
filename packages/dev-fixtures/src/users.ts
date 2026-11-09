// Development fixtures - Users
import type { User } from "@repo/types";

export const fixtureUsers: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    createdAt: "2024-01-16T14:30:00Z",
    updatedAt: "2024-01-16T14:30:00Z",
  },
  {
    id: "3",
    name: "Bob Wilson",
    email: "bob@example.com",
    createdAt: "2024-01-17T09:15:00Z",
    updatedAt: "2024-01-17T09:15:00Z",
  },
];

export const fixtureAdminUser: User = {
  id: "admin",
  name: "Admin User",
  email: "admin@moonwitness.com",
  createdAt: "2024-01-01T00:00:00Z",
  updatedAt: "2024-01-01T00:00:00Z",
};

export function createFixtureUser(overrides: Partial<User> = {}): User {
  return {
    id: `user-${Date.now()}`,
    name: "Test User",
    email: `test-${Date.now()}@example.com`,
    createdAt: new Date().toISOString(),
    ...overrides,
  };
}
