// Audit Trail System Tests
import { describe, it, expect, beforeEach } from '@jest/globals';
import { InMemoryAuditLogger, AuditAction, AuditSeverity, createAuditLogEntry } from './audit';

describe('InMemoryAuditLogger', () => {
  let logger: InMemoryAuditLogger;

  beforeEach(() => {
    logger = new InMemoryAuditLogger();
  });

  describe('log', () => {
    it('should create and return audit log entry with id and timestamp', async () => {
      const entry = await logger.log({
        action: AuditAction.CREATE,
        severity: AuditSeverity.INFO,
        principalId: 'user-1',
        tenantId: 'tenant-1',
        resourceType: 'users',
        resourceId: 'user-123',
        success: true,
      });

      expect(entry.id).toBeDefined();
      expect(entry.timestamp).toBeInstanceOf(Date);
      expect(entry.action).toBe(AuditAction.CREATE);
      expect(entry.principalId).toBe('user-1');
      expect(entry.tenantId).toBe('tenant-1');
      expect(entry.success).toBe(true);
    });

    it('should include optional fields when provided', async () => {
      const entry = await logger.log({
        action: AuditAction.UPDATE,
        severity: AuditSeverity.WARNING,
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

      expect(entry.previousData).toEqual({ name: 'Old Name' });
      expect(entry.newData).toEqual({ name: 'New Name' });
      expect(entry.metadata).toEqual({ source: 'api' });
      expect(entry.correlationId).toBe('corr-123');
      expect(entry.ipAddress).toBe('192.168.1.1');
      expect(entry.userAgent).toBe('Mozilla/5.0');
      expect(entry.durationMs).toBe(150);
    });
  });

  describe('query', () => {
    beforeEach(async () => {
      await logger.log({ action: AuditAction.CREATE, severity: AuditSeverity.INFO, principalId: 'user-1', tenantId: 'tenant-1', resourceType: 'users', resourceId: '1', success: true });
      await logger.log({ action: AuditAction.READ, severity: AuditSeverity.INFO, principalId: 'user-1', tenantId: 'tenant-1', resourceType: 'users', resourceId: '2', success: true });
      await logger.log({ action: AuditAction.UPDATE, severity: AuditSeverity.WARNING, principalId: 'user-2', tenantId: 'tenant-1', resourceType: 'posts', resourceId: '3', success: true });
      await logger.log({ action: AuditAction.DELETE, severity: AuditSeverity.ERROR, principalId: 'user-2', tenantId: 'tenant-2', resourceType: 'posts', resourceId: '4', success: false });
    });

    it('should filter by principalId', async () => {
      const results = await logger.query({ principalId: 'user-1' });
      expect(results).toHaveLength(2);
      expect(results.every(r => r.principalId === 'user-1')).toBe(true);
    });

    it('should filter by tenantId', async () => {
      const results = await logger.query({ tenantId: 'tenant-2' });
      expect(results).toHaveLength(1);
      expect(results[0].tenantId).toBe('tenant-2');
    });

    it('should filter by resourceType', async () => {
      const results = await logger.query({ resourceType: 'posts' });
      expect(results).toHaveLength(2);
      expect(results.every(r => r.resourceType === 'posts')).toBe(true);
    });

    it('should filter by action', async () => {
      const results = await logger.query({ action: AuditAction.CREATE });
      expect(results).toHaveLength(1);
      expect(results[0].action).toBe(AuditAction.CREATE);
    });

    it('should filter by severity', async () => {
      const results = await logger.query({ severity: AuditSeverity.ERROR });
      expect(results).toHaveLength(1);
      expect(results[0].severity).toBe(AuditSeverity.ERROR);
    });

    it('should filter by success', async () => {
      const results = await logger.query({ success: false });
      expect(results).toHaveLength(1);
      expect(results[0].success).toBe(false);
    });

    it('should filter by date range', async () => {
      const results = await logger.query({ startDate: new Date(Date.now() - 1000), endDate: new Date(Date.now() + 1000) });
      expect(results.length).toBeGreaterThan(0);
    });

    it('should support pagination', async () => {
      const results = await logger.query({ limit: 2, offset: 1 });
      expect(results).toHaveLength(2);
    });

    it('should sort by timestamp descending by default', async () => {
      const results = await logger.query({});
      expect(results[0].timestamp >= results[1].timestamp).toBe(true);
    });

    it('should sort by custom field and direction', async () => {
      const results = await logger.query({ orderBy: 'principalId', orderDir: 'asc' });
      expect(results[0].principalId <= results[1].principalId).toBe(true);
    });
  });

  describe('getById', () => {
    it('should return entry by id', async () => {
      const entry = await logger.log({ action: AuditAction.CREATE, severity: AuditSeverity.INFO, principalId: 'user-1', tenantId: 'tenant-1', resourceType: 'users', success: true });
      const found = await logger.getById(entry.id);
      expect(found).not.toBeNull();
      expect(found?.id).toBe(entry.id);
    });

    it('should return null for non-existent id', async () => {
      const found = await logger.getById('non-existent');
      expect(found).toBeNull();
    });
  });

  describe('count', () => {
    beforeEach(async () => {
      await logger.log({ action: AuditAction.CREATE, severity: AuditSeverity.INFO, principalId: 'user-1', tenantId: 'tenant-1', resourceType: 'users', success: true });
      await logger.log({ action: AuditAction.READ, severity: AuditSeverity.INFO, principalId: 'user-1', tenantId: 'tenant-1', resourceType: 'users', success: true });
      await logger.log({ action: AuditAction.UPDATE, severity: AuditSeverity.WARNING, principalId: 'user-2', tenantId: 'tenant-2', resourceType: 'posts', success: false });
    });

    it('should return total count', async () => {
      const count = await logger.count({});
      expect(count).toBe(3);
    });

    it('should count with filters', async () => {
      const count = await logger.count({ principalId: 'user-1' });
      expect(count).toBe(2);
    });
  });

  describe('purgeBefore', () => {
    it('should remove entries before date', async () => {
      const oldDate = new Date(Date.now() - 86400000); // 1 day ago
      const entry = await logger.log({ action: AuditAction.CREATE, severity: AuditSeverity.INFO, principalId: 'user-1', tenantId: 'tenant-1', resourceType: 'users', success: true });
      // Manually set timestamp for testing
      (entry as any).timestamp = oldDate;
      await logger.log({ action: AuditAction.READ, severity: AuditSeverity.INFO, principalId: 'user-1', tenantId: 'tenant-1', resourceType: 'users', success: true });

      const purged = await logger.purgeBefore(new Date());
      expect(purged).toBe(1);
      const remaining = await logger.count({});
      expect(remaining).toBe(1);
    });
  });

  describe('clear', () => {
    it('should remove all entries', async () => {
      await logger.log({ action: AuditAction.CREATE, severity: AuditSeverity.INFO, principalId: 'user-1', tenantId: 'tenant-1', resourceType: 'users', success: true });
      await logger.log({ action: AuditAction.READ, severity: AuditSeverity.INFO, principalId: 'user-1', tenantId: 'tenant-1', resourceType: 'users', success: true });
      logger.clear();
      const count = await logger.count({});
      expect(count).toBe(0);
    });
  });
});

describe('createAuditLogEntry', () => {
  it('should create entry with defaults', () => {
    const entry = createAuditLogEntry(AuditAction.CREATE, {
      principalId: 'user-1',
      tenantId: 'tenant-1',
      resourceType: 'users',
    });

    expect(entry.action).toBe(AuditAction.CREATE);
    expect(entry.severity).toBe(AuditSeverity.INFO);
    expect(entry.principalId).toBe('user-1');
    expect(entry.tenantId).toBe('tenant-1');
    expect(entry.resourceType).toBe('users');
    expect(entry.success).toBe(true);
  });

  it('should override defaults', () => {
    const entry = createAuditLogEntry(AuditAction.DELETE, {
      principalId: 'user-1',
      severity: AuditSeverity.CRITICAL,
      success: false,
      errorMessage: 'Failed to delete',
    });

    expect(entry.action).toBe(AuditAction.DELETE);
    expect(entry.severity).toBe(AuditSeverity.CRITICAL);
    expect(entry.success).toBe(false);
    expect(entry.errorMessage).toBe('Failed to delete');
  });
});