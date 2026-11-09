"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const businessAction_1 = require("./businessAction");
describe('ActionEngine', () => {
    let engine;
    let mockContext;
    let mockPersistence;
    beforeEach(() => {
        engine = new businessAction_1.ActionEngine();
        mockPersistence = {
            entityManager: {},
            transaction: async (fn) => fn(),
        };
        mockContext = {
            principalId: 'user-1',
            tenantId: 'tenant-1',
            correlationId: 'corr-123',
        };
    });
    test('registers and retrieves an action', () => {
        const action = {
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
        const action = {
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
        const action = {
            name: 'test.action',
            description: 'Test action',
            parameters: { value: 'number' },
            returns: { doubled: 'number' },
            execute: async (_ctx, input) => ({ success: true, data: { doubled: input.value * 2 } }),
        };
        engine.register(action);
        const result = await engine.execute('test.action', mockContext, { value: 5 });
        expect(result.success).toBe(true);
        expect(result.data).toEqual({ doubled: 10 });
    });
    test('execute catches and returns action errors', async () => {
        const action = {
            name: 'fail.action',
            description: 'Fail action',
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
        const action = {
            name: 'txn.action',
            description: 'Txn action',
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
