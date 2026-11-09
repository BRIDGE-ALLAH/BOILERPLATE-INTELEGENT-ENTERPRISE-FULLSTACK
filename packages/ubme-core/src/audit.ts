// @repo/ubme-core - Audit Trail System
import { RecordId } from './types.js';

export enum AuditAction {
  CREATE = 'CREATE',
  READ = 'READ',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  EXPORT = 'EXPORT',
  IMPORT = 'IMPORT',
  ERROR = 'ERROR',
}

export enum AuditSeverity {
  INFO = 'INFO',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
  CRITICAL = 'CRITICAL',
}

export interface AuditLogEntry {
  id: RecordId;
  timestamp: Date;
  action: AuditAction;
  severity: AuditSeverity;
  principalId: string;
  tenantId: string | null;
  resourceType: string;
  resourceId?: RecordId;
  previousData?: Record<string, any>;
  newData?: Record<string, any>;
  metadata?: Record<string, any>;
  correlationId?: string;
  ipAddress?: string;
  userAgent?: string;
  durationMs?: number;
  success: boolean;
  errorMessage?: string;
}

export interface AuditQuery {
  principalId?: string;
  tenantId?: string;
  resourceType?: string;
  resourceId?: RecordId;
  action?: AuditAction;
  severity?: AuditSeverity;
  startDate?: Date;
  endDate?: Date;
  success?: boolean;
  limit?: number;
  offset?: number;
  orderBy?: 'timestamp' | 'action' | 'principalId';
  orderDir?: 'asc' | 'desc';
}

export interface AuditLogger {
  log(entry: Omit<AuditLogEntry, 'id' | 'timestamp'>): Promise<AuditLogEntry>;
  query(query: AuditQuery): Promise<AuditLogEntry[]>;
  getById(id: RecordId): Promise<AuditLogEntry | null>;
  count(query: AuditQuery): Promise<number>;
  purgeBefore(date: Date): Promise<number>;
}

export interface RetentionPolicy {
  action: AuditAction;
  resourceType?: string;
  retentionDays: number;
  archiveAfterDays?: number;
}

export class InMemoryAuditLogger implements AuditLogger {
  private logs: AuditLogEntry[] = [];
  private idCounter = 0;

  private generateId(): RecordId {
    return `audit_${Date.now()}_${++this.idCounter}`;
  }

  async log(entry: Omit<AuditLogEntry, 'id' | 'timestamp'>): Promise<AuditLogEntry> {
    const logEntry: AuditLogEntry = {
      ...entry,
      id: this.generateId(),
      timestamp: new Date(),
    };
    this.logs.push(logEntry);
    return logEntry;
  }

  async query(query: AuditQuery): Promise<AuditLogEntry[]> {
    let filtered = [...this.logs];

    if (query.principalId) {
      filtered = filtered.filter(l => l.principalId === query.principalId);
    }
    if (query.tenantId) {
      filtered = filtered.filter(l => l.tenantId === query.tenantId);
    }
    if (query.resourceType) {
      filtered = filtered.filter(l => l.resourceType === query.resourceType);
    }
    if (query.resourceId) {
      filtered = filtered.filter(l => l.resourceId === query.resourceId);
    }
    if (query.action) {
      filtered = filtered.filter(l => l.action === query.action);
    }
    if (query.severity) {
      filtered = filtered.filter(l => l.severity === query.severity);
    }
    if (query.startDate) {
      filtered = filtered.filter(l => l.timestamp >= query.startDate!);
    }
    if (query.endDate) {
      filtered = filtered.filter(l => l.timestamp <= query.endDate!);
    }
    if (query.success !== undefined) {
      filtered = filtered.filter(l => l.success === query.success);
    }

    const orderBy = query.orderBy || 'timestamp';
    const orderDir = query.orderDir || 'desc';

    filtered.sort((a, b) => {
      const aVal = a[orderBy];
      const bVal = b[orderBy];
      if (aVal < bVal) return orderDir === 'asc' ? -1 : 1;
      if (aVal > bVal) return orderDir === 'asc' ? 1 : -1;
      return 0;
    });

    const offset = query.offset || 0;
    const limit = query.limit || 100;

    return filtered.slice(offset, offset + limit);
  }

  async getById(id: RecordId): Promise<AuditLogEntry | null> {
    return this.logs.find(l => l.id === id) || null;
  }

  async count(query: AuditQuery): Promise<number> {
    let count = 0;
    for (const log of this.logs) {
      if (query.principalId && log.principalId !== query.principalId) continue;
      if (query.tenantId && log.tenantId !== query.tenantId) continue;
      if (query.resourceType && log.resourceType !== query.resourceType) continue;
      if (query.resourceId && log.resourceId !== query.resourceId) continue;
      if (query.action && log.action !== query.action) continue;
      if (query.severity && log.severity !== query.severity) continue;
      if (query.startDate && log.timestamp < query.startDate) continue;
      if (query.endDate && log.timestamp > query.endDate) continue;
      if (query.success !== undefined && log.success !== query.success) continue;
      count++;
    }
    return count;
  }

  async purgeBefore(date: Date): Promise<number> {
    const initialLength = this.logs.length;
    this.logs = this.logs.filter(l => l.timestamp >= date);
    return initialLength - this.logs.length;
  }

  clear(): void {
    this.logs = [];
  }
}

export const auditLogger = new InMemoryAuditLogger();

export function createAuditMiddleware() {
  return async (req: any, rep: any, next: any) => {
    const startTime = Date.now();
    const correlationId = req.correlationId || req.headers['x-correlation-id'] || `req_${Date.now()}`;

    req.audit = {
      correlationId,
      startTime,
    };

    rep.on('finish', async () => {
      const durationMs = Date.now() - startTime;
      const user = req.user;
      const action = mapHttpMethodToAction(req.method);
      const success = rep.statusCode < 400;

      try {
        await auditLogger.log({
          action,
          severity: success ? AuditSeverity.INFO : AuditSeverity.ERROR,
          principalId: user?.userId || 'anonymous',
          tenantId: user?.tenantId || null,
          resourceType: extractResourceType(req.url),
          resourceId: extractResourceId(req.url, req.params),
          metadata: {
            method: req.method,
            url: req.url,
            statusCode: rep.statusCode,
            query: req.query,
            params: req.params,
          },
          correlationId,
          ipAddress: req.ip,
          userAgent: req.headers['user-agent'],
          durationMs,
          success,
          errorMessage: success ? undefined : `HTTP ${rep.statusCode}`,
        });
      } catch (err) {
        console.error('Failed to write audit log:', err);
      }
    });

    next();
  };
}

function mapHttpMethodToAction(method: string): AuditAction {
  switch (method) {
    case 'GET': return AuditAction.READ;
    case 'POST': return AuditAction.CREATE;
    case 'PUT':
    case 'PATCH': return AuditAction.UPDATE;
    case 'DELETE': return AuditAction.DELETE;
    default: return AuditAction.READ;
  }
}

function extractResourceType(url: string): string {
  const match = url.match(/\/api\/v1\/([^/]+)/);
  return match ? match[1] : 'unknown';
}

function extractResourceId(url: string, params: any): string | undefined {
  if (params && params.id) return params.id;
  const match = url.match(/\/([a-f0-9-]{36})(?:[/?]|$)/i);
  return match ? match[1] : undefined;
}

export function createAuditLogEntry(
  action: AuditAction,
  options: Partial<AuditLogEntry>
): Omit<AuditLogEntry, 'id' | 'timestamp'> {
  return {
    action,
    severity: options.severity || AuditSeverity.INFO,
    principalId: options.principalId || 'system',
    tenantId: options.tenantId || null,
    resourceType: options.resourceType || 'unknown',
    resourceId: options.resourceId,
    previousData: options.previousData,
    newData: options.newData,
    metadata: options.metadata,
    correlationId: options.correlationId,
    ipAddress: options.ipAddress,
    userAgent: options.userAgent,
    durationMs: options.durationMs,
    success: options.success ?? true,
    errorMessage: options.errorMessage,
  };
}

export async function logAudit(
  action: AuditAction,
  options: Partial<AuditLogEntry>
): Promise<AuditLogEntry> {
  return auditLogger.log(createAuditLogEntry(action, options));
}