import { PolicyEngine, Policy, RecordRule } from './securityEngine';
import { Principal, RecordId, Predicate } from './types';

describe('PolicyEngine', () => {
  let engine: PolicyEngine;
  let principal: Principal;

  beforeEach(() => {
    engine = new PolicyEngine();
    principal = { id: 'user-1', roles: ['admin', 'manager'] };
  });

  test('checkModelPermission grants when policy matches', async () => {
    const policy: Policy = {
      model: 'test.model',
      action: 'read',
      principal: 'admin',
      grant: true,
    };
    engine.addPolicy(policy);
    const result = await engine.checkModelPermission(principal, 'test.model', 'read');
    expect(result).toBe(true);
  });

  test('checkModelPermission denies when no matching policy', async () => {
    const result = await engine.checkModelPermission(principal, 'test.model', 'read');
    expect(result).toBe(false);
  });

  test('checkModelPermission denies when grant is false', async () => {
    const policy: Policy = {
      model: 'test.model',
      action: 'write',
      principal: 'admin',
      grant: false,
    };
    engine.addPolicy(policy);
    const result = await engine.checkModelPermission(principal, 'test.model', 'write');
    expect(result).toBe(false);
  });

  test('checkRecordPermission grants when record rule matches', async () => {
    const rule: RecordRule = {
      model: 'test.model',
      condition: { field: { segments: ['owner_id'] }, operator: '=', value: 'user-1' },
      grant: true,
    };
    engine.addRecordRule(rule);
    const result = await engine.checkRecordPermission(principal, 'test.model', 'rec-1', 'read');
    expect(result).toBe(true);
  });

  test('checkRecordPermission denies when no matching rule', async () => {
    const result = await engine.checkRecordPermission(principal, 'test.model', 'rec-1', 'read');
    expect(result).toBe(false);
  });

  test('checkFieldPermission always returns true in base implementation', async () => {
    const result = await engine.checkFieldPermission(principal, 'test.model', 'secret_field', 'read');
    expect(result).toBe(true);
  });
});