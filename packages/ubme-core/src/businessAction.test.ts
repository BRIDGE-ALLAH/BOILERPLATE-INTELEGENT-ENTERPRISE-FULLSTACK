import { ActionEngine, BusinessAction } from './businessAction';
import { ExecutionContext, PersistenceContext, Principal } from './types';

describe('ActionEngine', () => {
  let engine: ActionEngine;
  let mockContext: ExecutionContext;
  let mockPersistence: PersistenceContext;

  beforeEach(() => {
    engine = new ActionEngine();
    mockPersistence = {
      entityManager: {},
      transaction: async (fn: () => Promise<any>) => fn(),
    };
    mockContext = {
      principal: { id: 'user-1', roles: ['admin'] },
      tenantId: 'tenant-1',
      organizationIds: ['org-1'],
      activeOrganizationId: 'org-1',
      locale: 'en_US',
      timeZone: 'UTC',
      correlationId: 'corr-123',
      capabilities: new Set(['action:execute']),
      persistence: mockPersistence,
    };
  });

  test('registers and retrieves an action', () => {
    const action: BusinessAction = {
      name: 'test.action',
      description: 'Test action',
      parameters: { input: 'string' },
      returns: { result: 'string' },
      execute: async () => ({ success: true }),
    };
    engine.register(action);
    expect(engine.get('test.action')).toEqual(action);
  });

  test('throws on duplicate action registration', () => {
    const action: BusinessAction = {
      name: 'dup.action',
      description: 'Duplicate action',
      parameters: {},
      returns: {},
      execute: async () => ({ success: true }),
    };
    engine.register(action);
    expect(() => engine.register(action)).toThrow('already registered');
  });

  test('execute returns error for unknown action', async () => {
    const result = await engine.execute('unknown', mockContext, {});
    expect(result.success).toBe(false);
    expect(result.error).toContain('not found');
  });

  test('execute returns action result', async () => {
    const action: BusinessAction = {
      name: 'test.action',
      parameters: { value: 'number' },
      returns: { doubled: 'number' },
      execute: async (_ctx: ExecutionContext, input: { value: number }) => ({ doubled: input.value * 2 }),
    };
    engine.register(action);
    const result = await engine.execute('test.action', mockContext, { value: 5 });
    expect(result.success).toBe(true);
    expect(result.data).toEqual({ doubled: 10 });
  });

  test('execute catches and returns action errors', async () => {
    const action: BusinessAction = {
      name: 'fail.action',
      parameters: {},
      returns: {},
      execute: async () => { throw new Error('boom'); return { success: false }; },
    };
    engine.register(action);
    const result = await engine.execute('fail.action', mockContext, {});
    expect(result.success).toBe(false);
    expect(result.error).toBe('boom');
  });

  test('executeInTransaction wraps in transaction', async () => {
    let transactionCalled = false;
    const action: BusinessAction = {
      name: 'txn.action',
      parameters: {},
      returns: {},
      execute: async () => {
        transactionCalled = true;
        return { success: true };
      },
    };
    engine.register(action);
    const result = await engine.executeInTransaction('txn.action', mockContext, {});
    expect(result.success).toBe(true);
    expect(transactionCalled).toBe(true);
  });
});