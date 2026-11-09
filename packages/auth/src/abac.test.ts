// ABAC Policy Engine Tests
import { describe, it, expect, beforeEach } from 'bun:test';
import { PolicyEngine, PolicyContext } from '../src/abac';
import { UserRole, Permission } from '../src/types';

describe('PolicyEngine', () => {
  let engine: PolicyEngine;

  beforeEach(() => {
    engine = new PolicyEngine();
  });

  describe('Role Hierarchy', () => {
    it('should return effective roles for super_admin', () => {
      const roles = engine.getEffectiveRoles(UserRole.SUPER_ADMIN);
      expect(roles).toContain(UserRole.SUPER_ADMIN);
      expect(roles).toContain(UserRole.ADMIN);
      expect(roles).toContain(UserRole.MODERATOR);
      expect(roles).toContain(UserRole.USER);
    });

    it('should return effective roles for admin', () => {
      const roles = engine.getEffectiveRoles(UserRole.ADMIN);
      expect(roles).toContain(UserRole.ADMIN);
      expect(roles).toContain(UserRole.MODERATOR);
      expect(roles).toContain(UserRole.USER);
      expect(roles).not.toContain(UserRole.SUPER_ADMIN);
    });

    it('should return only user for user role', () => {
      const roles = engine.getEffectiveRoles(UserRole.USER);
      expect(roles).toEqual([UserRole.USER]);
    });

    it('should return only guest for guest role', () => {
      const roles = engine.getEffectiveRoles(UserRole.GUEST);
      expect(roles).toEqual([UserRole.GUEST]);
    });

    it('should check hasRole correctly', () => {
      expect(engine.hasRole({ role: UserRole.SUPER_ADMIN } as any, UserRole.ADMIN)).toBe(true);
      expect(engine.hasRole({ role: UserRole.ADMIN } as any, UserRole.SUPER_ADMIN)).toBe(false);
      expect(engine.hasRole({ role: UserRole.USER } as any, UserRole.USER)).toBe(true);
    });
  });

  describe('Permission Matrix', () => {
    it('should have permissions for super_admin', () => {
      const matrix = engine.getPermissionMatrix(UserRole.SUPER_ADMIN);
      expect(matrix).toBeDefined();
      expect(matrix?.permissions).toContain(Permission.SYSTEM_CONFIG);
      expect(matrix?.permissions).toContain(Permission.USER_DELETE);
    });

    it('should have limited permissions for user', () => {
      const matrix = engine.getPermissionMatrix(UserRole.USER);
      expect(matrix).toBeDefined();
      expect(matrix?.permissions).toContain(Permission.USER_READ);
      expect(matrix?.permissions).not.toContain(Permission.USER_DELETE);
    });

    it('should have no permissions for guest', () => {
      const matrix = engine.getPermissionMatrix(UserRole.GUEST);
      expect(matrix).toBeDefined();
      expect(matrix?.permissions).toHaveLength(0);
    });

    it('should check hasPermission correctly', () => {
      const adminUser = { role: UserRole.ADMIN } as any;
      expect(engine.hasPermission(adminUser, [Permission.USER_READ, Permission.USER_WRITE])).toBe(true);
      expect(engine.hasPermission(adminUser, [Permission.SYSTEM_CONFIG])).toBe(false);
    });
  });

  describe('Policy Evaluation', () => {
    it('should allow super_admin all access', () => {
      const context: PolicyContext = {
        user: { userId: '1', email: 'admin@test.com', role: UserRole.SUPER_ADMIN, iat: 0, exp: 0 },
        resource: { type: 'users', id: '123' },
        action: 'delete',
      };

      const result = engine.evaluate(context);
      expect(result.allowed).toBe(true);
      expect(result.matchedRules).toContain('super-admin-all');
    });

    it('should deny guest write access', () => {
      const context: PolicyContext = {
        user: { userId: '1', email: 'guest@test.com', role: UserRole.GUEST, iat: 0, exp: 0 },
        resource: { type: 'users', id: '123' },
        action: 'write',
      };

      const result = engine.evaluate(context);
      expect(result.allowed).toBe(false);
      expect(result.matchedRules).toContain('deny-guest-write');
    });

    it('should allow owner access', () => {
      const context: PolicyContext = {
        user: { userId: 'user-1', email: 'user@test.com', role: UserRole.USER, tenantId: 'tenant-1', iat: 0, exp: 0 },
        resource: { type: 'users', id: '123', ownerId: 'user-1', tenantId: 'tenant-1' },
        action: 'write',
      };

      const result = engine.evaluate(context);
      expect(result.allowed).toBe(true);
      expect(result.matchedRules).toContain('tenant-isolation');
    });

    it('should deny access to other users resources in different tenant', () => {
      const context: PolicyContext = {
        user: { userId: 'user-1', email: 'user@test.com', role: UserRole.USER, tenantId: 'tenant-1', iat: 0, exp: 0 },
        resource: { type: 'users', id: '123', ownerId: 'user-2', tenantId: 'tenant-2' },
        action: 'write',
      };

      const result = engine.evaluate(context);
      expect(result.allowed).toBe(false);
    });

    it('should enforce tenant isolation', () => {
      const context: PolicyContext = {
        user: { userId: 'user-1', email: 'user@test.com', role: UserRole.USER, tenantId: 'tenant-1', iat: 0, exp: 0 },
        resource: { type: 'users', id: '123', tenantId: 'tenant-2' },
        action: 'read',
      };

      const result = engine.evaluate(context);
      expect(result.allowed).toBe(false);
    });

    it('should allow same tenant access', () => {
      const context: PolicyContext = {
        user: { userId: 'user-1', email: 'user@test.com', role: UserRole.USER, tenantId: 'tenant-1', iat: 0, exp: 0 },
        resource: { type: 'users', id: '123', tenantId: 'tenant-1' },
        action: 'read',
      };

      const result = engine.evaluate(context);
      expect(result.allowed).toBe(true);
      expect(result.matchedRules).toContain('tenant-isolation');
    });
  });

  describe('Custom Rules', () => {
    it('should add and evaluate custom rules', () => {
      engine.addRule({
        id: 'custom-read-only',
        name: 'Read Only Policy',
        effect: 'allow',
        conditions: [
          { attribute: 'action', operator: 'in', value: ['read', 'get', 'list'] },
        ],
        priority: 60,
      });

      const context: PolicyContext = {
        user: { userId: '1', email: 'test@test.com', role: UserRole.USER, iat: 0, exp: 0 },
        resource: { type: 'users', id: '123' },
        action: 'read',
      };

      const result = engine.evaluate(context);
      expect(result.allowed).toBe(true);
      expect(result.matchedRules).toContain('custom-read-only');
    });

    it('should remove rules', () => {
      engine.addRule({
        id: 'temp-rule',
        name: 'Temp Rule',
        effect: 'allow',
        conditions: [{ attribute: 'action', operator: 'eq', value: 'test' }],
        priority: 10,
      });

      engine.removeRule('temp-rule');
      const rule = engine.getRule('temp-rule');
      expect(rule).toBeUndefined();
    });
  });

  describe('Condition Operators', () => {
    it('should evaluate eq operator', () => {
      const context: PolicyContext = {
        user: { userId: '1', email: 'test@test.com', role: UserRole.USER, iat: 0, exp: 0 },
        resource: { type: 'users', status: 'active' },
        action: 'read',
      };

      engine.addRule({
        id: 'active-only',
        name: 'Active Only',
        effect: 'allow',
        conditions: [
          { attribute: 'resource.status', operator: 'eq', value: 'active' },
        ],
        priority: 50,
      });

      const result = engine.evaluate(context);
      expect(result.allowed).toBe(true);
    });

    it('should evaluate contains operator', () => {
      const context: PolicyContext = {
        user: { userId: '1', email: 'admin@company.com', role: UserRole.USER, iat: 0, exp: 0 },
        resource: { type: 'users' },
        action: 'read',
      };

      engine.addRule({
        id: 'company-email',
        name: 'Company Email',
        effect: 'allow',
        conditions: [
          { attribute: 'user.email', operator: 'contains', value: '@company.com' },
        ],
        priority: 50,
      });

      const result = engine.evaluate(context);
      expect(result.allowed).toBe(true);
    });

    it('should evaluate in operator', () => {
      const context: PolicyContext = {
        user: { userId: '1', email: 'test@test.com', role: UserRole.USER, iat: 0, exp: 0 },
        resource: { type: 'users' },
        action: 'read',
      };

      engine.addRule({
        id: 'allowed-actions',
        name: 'Allowed Actions',
        effect: 'allow',
        conditions: [
          { attribute: 'action', operator: 'in', value: ['read', 'list', 'search'] },
        ],
        priority: 50,
      });

      let result = engine.evaluate(context);
      expect(result.allowed).toBe(true);

      const writeContext = { ...context, action: 'write' };
      result = engine.evaluate(writeContext);
      expect(result.allowed).toBe(false);
    });
  });
});