"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Audit Trail System Tests
const globals_1 = require("@jest/globals");
const audit_1 = require("./audit");
(0, globals_1.describe)('InMemoryAuditLogger', () => {
    let logger;
    (0, globals_1.beforeEach)(() => {
        logger = new audit_1.InMemoryAuditLogger();
    });
    (0, globals_1.describe)('log', () => {
        (0, globals_1.it)('should create and return audit log entry with id and timestamp', async () => {
            const entry = await logger.log({
                action: audit_1.AuditAction.CREATE,
                severity: audit_1.AuditSeverity.INFO,
                principalId: 'user-1',
                tenantId: 'tenant-1',
                resourceType: 'users',
                resourceId: 'user-123',
                success: true,
            });
            (0, globals_1.expect)(entry.id).toBeDefined();
            (0, globals_1.expect)(entry.timestamp).toBeInstanceOf(Date);
            (0, globals_1.expect)(entry.action).toBe(audit_1.AuditAction.CREATE);
            (0, globals_1.expect)(entry.principalId).toBe('user-1');
            (0, globals_1.expect)(entry.tenantId).toBe('tenant-1');
            (0, globals_1.expect)(entry.success).toBe(true);
        });
        (0, globals_1.it)('should include optional fields when provided', async () => {
            const entry = await logger.log({
                action: audit_1.AuditAction.UPDATE,
                severity: audit_1.AuditSeverity.WARNING,
                principalId: 'user-1',
                tenantId: 'tenant-1',
                resourceType: 'users',
                resourceId: 'user-123',
                previousData: { name: 'Old Name' },
                newData: { name: 'New Name' },
                metadata: { source: 'api' },
                correlationId: 'corr-123',
                ipAddress: '192.168.1.1',
                userAgent: 'Mozilla/5.0',
                durationMs: 150,
                success: true,
            });
            (0, globals_1.expect)(entry.previousData).toEqual({ name: 'Old Name' });
            (0, globals_1.expect)(entry.newData).toEqual({ name: 'New Name' });
            (0, globals_1.expect)(entry.metadata).toEqual({ source: 'api' });
            (0, globals_1.expect)(entry.correlationId).toBe('corr-123');
            (0, globals_1.expect)(entry.ipAddress).toBe('192.168.1.1');
            (0, globals_1.expect)(entry.userAgent).toBe('Mozilla/5.0');
            (0, globals_1.expect)(entry.durationMs).toBe(150);
        });
    });
    (0, globals_1.describe)('query', () => {
        (0, globals_1.beforeEach)(async () => {
            await logger.log({ action: audit_1.AuditAction.CREATE, severity: audit_1.AuditSeverity.INFO, principalId: 'user-1', tenantId: 'tenant-1', resourceType: 'users', resourceId: '1', success: true });
            await logger.log({ action: audit_1.AuditAction.READ, severity: audit_1.AuditSeverity.INFO, principalId: 'user-1', tenantId: 'tenant-1', resourceType: 'users', resourceId: '2', success: true });
            await logger.log({ action: audit_1.AuditAction.UPDATE, severity: audit_1.AuditSeverity.WARNING, principalId: 'user-2', tenantId: 'tenant-1', resourceType: 'posts', resourceId: '3', success: true });
            await logger.log({ action: audit_1.AuditAction.DELETE, severity: audit_1.AuditSeverity.ERROR, principalId: 'user-2', tenantId: 'tenant-2', resourceType: 'posts', resourceId: '4', success: false });
        });
        (0, globals_1.it)('should filter by principalId', async () => {
            const results = await logger.query({ principalId: 'user-1' });
            (0, globals_1.expect)(results).toHaveLength(2);
            (0, globals_1.expect)(results.every(r => r.principalId === 'user-1')).toBe(true);
        });
        (0, globals_1.it)('should filter by tenantId', async () => {
            const results = await logger.query({ tenantId: 'tenant-2' });
            (0, globals_1.expect)(results).toHaveLength(1);
            (0, globals_1.expect)(results[0].tenantId).toBe('tenant-2');
        });
        (0, globals_1.it)('should filter by resourceType', async () => {
            const results = await logger.query({ resourceType: 'posts' });
            (0, globals_1.expect)(results).toHaveLength(2);
            (0, globals_1.expect)(results.every(r => r.resourceType === 'posts')).toBe(true);
        });
        (0, globals_1.it)('should filter by action', async () => {
            const results = await logger.query({ action: audit_1.AuditAction.CREATE });
            (0, globals_1.expect)(results).toHaveLength(1);
            (0, globals_1.expect)(results[0].action).toBe(audit_1.AuditAction.CREATE);
        });
        (0, globals_1.it)('should filter by severity', async () => {
            const results = await logger.query({ severity: audit_1.AuditSeverity.ERROR });
            (0, globals_1.expect)(results).toHaveLength(1);
            (0, globals_1.expect)(results[0].severity).toBe(audit_1.AuditSeverity.ERROR);
        });
        (0, globals_1.it)('should filter by success', async () => {
            const results = await logger.query({ success: false });
            (0, globals_1.expect)(results).toHaveLength(1);
            (0, globals_1.expect)(results[0].success).toBe(false);
        });
        (0, globals_1.it)('should filter by date range', async () => {
            const results = await logger.query({ startDate: new Date(Date.now() - 1000), endDate: new Date(Date.now() + 1000) });
            (0, globals_1.expect)(results.length).toBeGreaterThan(0);
        });
        (0, globals_1.it)('should support pagination', async () => {
            const results = await logger.query({ limit: 2, offset: 1 });
            (0, globals_1.expect)(results).toHaveLength(2);
        });
        (0, globals_1.it)('should sort by timestamp descending by default', async () => {
            const results = await logger.query({});
            (0, globals_1.expect)(results[0].timestamp >= results[1].timestamp).toBe(true);
        });
        (0, globals_1.it)('should sort by custom field and direction', async () => {
            const results = await logger.query({ orderBy: 'principalId', orderDir: 'asc' });
            (0, globals_1.expect)(results[0].principalId <= results[1].principalId).toBe(true);
        });
    });
    (0, globals_1.describe)('getById', () => {
        (0, globals_1.it)('should return entry by id', async () => {
            const entry = await logger.log({ action: audit_1.AuditAction.CREATE, severity: audit_1.AuditSeverity.INFO, principalId: 'user-1', tenantId: 'tenant-1', resourceType: 'users', success: true });
            const found = await logger.getById(entry.id);
            (0, globals_1.expect)(found).not.toBeNull();
            (0, globals_1.expect)(found?.id).toBe(entry.id);
        });
        (0, globals_1.it)('should return null for non-existent id', async () => {
            const found = await logger.getById('non-existent');
            (0, globals_1.expect)(found).toBeNull();
        });
    });
    (0, globals_1.describe)('count', () => {
        (0, globals_1.beforeEach)(async () => {
            await logger.log({ action: audit_1.AuditAction.CREATE, severity: audit_1.AuditSeverity.INFO, principalId: 'user-1', tenantId: 'tenant-1', resourceType: 'users', success: true });
            await logger.log({ action: audit_1.AuditAction.READ, severity: audit_1.AuditSeverity.INFO, principalId: 'user-1', tenantId: 'tenant-1', resourceType: 'users', success: true });
            await logger.log({ action: audit_1.AuditAction.UPDATE, severity: audit_1.AuditSeverity.WARNING, principalId: 'user-2', tenantId: 'tenant-2', resourceType: 'posts', success: false });
        });
        (0, globals_1.it)('should return total count', async () => {
            const count = await logger.count({});
            (0, globals_1.expect)(count).toBe(3);
        });
        (0, globals_1.it)('should count with filters', async () => {
            const count = await logger.count({ principalId: 'user-1' });
            (0, globals_1.expect)(count).toBe(2);
        });
    });
    (0, globals_1.describe)('purgeBefore', () => {
        (0, globals_1.it)('should remove entries before date', async () => {
            const oldDate = new Date(Date.now() - 86400000); // 1 day ago
            const entry = await logger.log({ action: audit_1.AuditAction.CREATE, severity: audit_1.AuditSeverity.INFO, principalId: 'user-1', tenantId: 'tenant-1', resourceType: 'users', success: true });
            // Manually set timestamp for testing
            entry.timestamp = oldDate;
            await logger.log({ action: audit_1.AuditAction.READ, severity: audit_1.AuditSeverity.INFO, principalId: 'user-1', tenantId: 'tenant-1', resourceType: 'users', success: true });
            const purged = await logger.purgeBefore(new Date());
            (0, globals_1.expect)(purged).toBe(1);
            const remaining = await logger.count({});
            (0, globals_1.expect)(remaining).toBe(1);
        });
    });
    (0, globals_1.describe)('clear', () => {
        (0, globals_1.it)('should remove all entries', async () => {
            await logger.log({ action: audit_1.AuditAction.CREATE, severity: audit_1.AuditSeverity.INFO, principalId: 'user-1', tenantId: 'tenant-1', resourceType: 'users', success: true });
            await logger.log({ action: audit_1.AuditAction.READ, severity: audit_1.AuditSeverity.INFO, principalId: 'user-1', tenantId: 'tenant-1', resourceType: 'users', success: true });
            logger.clear();
            const count = await logger.count({});
            (0, globals_1.expect)(count).toBe(0);
        });
    });
});
(0, globals_1.describe)('createAuditLogEntry', () => {
    (0, globals_1.it)('should create entry with defaults', () => {
        const entry = (0, audit_1.createAuditLogEntry)(audit_1.AuditAction.CREATE, {
            principalId: 'user-1',
            tenantId: 'tenant-1',
            resourceType: 'users',
        });
        (0, globals_1.expect)(entry.action).toBe(audit_1.AuditAction.CREATE);
        (0, globals_1.expect)(entry.severity).toBe(audit_1.AuditSeverity.INFO);
        (0, globals_1.expect)(entry.principalId).toBe('user-1');
        (0, globals_1.expect)(entry.tenantId).toBe('tenant-1');
        (0, globals_1.expect)(entry.resourceType).toBe('users');
        (0, globals_1.expect)(entry.success).toBe(true);
    });
    (0, globals_1.it)('should override defaults', () => {
        const entry = (0, audit_1.createAuditLogEntry)(audit_1.AuditAction.DELETE, {
            principalId: 'user-1',
            severity: audit_1.AuditSeverity.CRITICAL,
            success: false,
            errorMessage: 'Failed to delete',
        });
        (0, globals_1.expect)(entry.action).toBe(audit_1.AuditAction.DELETE);
        (0, globals_1.expect)(entry.severity).toBe(audit_1.AuditSeverity.CRITICAL);
        (0, globals_1.expect)(entry.success).toBe(false);
        (0, globals_1.expect)(entry.errorMessage).toBe('Failed to delete');
    });
});
