"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
describe('ExecutionContext', () => {
    const principal = {
        id: 'user-1',
        roles: ['admin'],
    };
    const persistenceContext = {
        entityManager: {},
        transaction: async (fn) => fn(),
    };
    const context = {
        principal,
        tenantId: 'tenant-1',
        organizationIds: ['org-1', 'org-2'],
        activeOrganizationId: 'org-1',
        locale: 'en_US',
        timeZone: 'UTC',
        correlationId: 'corr-123',
        capabilities: new Set(['read', 'write']),
        persistence: persistenceContext,
    };
    test('contains required fields', () => {
        expect(context.principal).toEqual(principal);
        expect(context.tenantId).toBe('tenant-1');
        expect(context.organizationIds).toEqual(['org-1', 'org-2']);
        expect(context.activeOrganizationId).toBe('org-1');
        expect(context.locale).toBe('en_US');
        expect(context.timeZone).toBe('UTC');
        expect(context.correlationId).toBe('corr-123');
        expect(context.capabilities.has('read')).toBe(true);
        expect(context.capabilities.has('write')).toBe(true);
        expect(context.persistence).toEqual(persistenceContext);
    });
    test('capabilities is a ReadonlySet', () => {
        expect(context.capabilities.size).toBe(2);
    });
});
