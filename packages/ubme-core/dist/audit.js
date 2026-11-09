"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auditLogger = exports.InMemoryAuditLogger = exports.AuditSeverity = exports.AuditAction = void 0;
exports.createAuditMiddleware = createAuditMiddleware;
exports.createAuditLogEntry = createAuditLogEntry;
exports.logAudit = logAudit;
var AuditAction;
(function (AuditAction) {
    AuditAction["CREATE"] = "CREATE";
    AuditAction["READ"] = "READ";
    AuditAction["UPDATE"] = "UPDATE";
    AuditAction["DELETE"] = "DELETE";
    AuditAction["LOGIN"] = "LOGIN";
    AuditAction["LOGOUT"] = "LOGOUT";
    AuditAction["EXPORT"] = "EXPORT";
    AuditAction["IMPORT"] = "IMPORT";
    AuditAction["ERROR"] = "ERROR";
})(AuditAction || (exports.AuditAction = AuditAction = {}));
var AuditSeverity;
(function (AuditSeverity) {
    AuditSeverity["INFO"] = "INFO";
    AuditSeverity["WARNING"] = "WARNING";
    AuditSeverity["ERROR"] = "ERROR";
    AuditSeverity["CRITICAL"] = "CRITICAL";
})(AuditSeverity || (exports.AuditSeverity = AuditSeverity = {}));
class InMemoryAuditLogger {
    constructor() {
        this.logs = [];
        this.idCounter = 0;
    }
    generateId() {
        return `audit_${Date.now()}_${++this.idCounter}`;
    }
    async log(entry) {
        const logEntry = {
            ...entry,
            id: this.generateId(),
            timestamp: new Date(),
        };
        this.logs.push(logEntry);
        return logEntry;
    }
    async query(query) {
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
            filtered = filtered.filter(l => l.timestamp >= query.startDate);
        }
        if (query.endDate) {
            filtered = filtered.filter(l => l.timestamp <= query.endDate);
        }
        if (query.success !== undefined) {
            filtered = filtered.filter(l => l.success === query.success);
        }
        const orderBy = query.orderBy || 'timestamp';
        const orderDir = query.orderDir || 'desc';
        filtered.sort((a, b) => {
            const aVal = a[orderBy];
            const bVal = b[orderBy];
            if (aVal < bVal)
                return orderDir === 'asc' ? -1 : 1;
            if (aVal > bVal)
                return orderDir === 'asc' ? 1 : -1;
            return 0;
        });
        const offset = query.offset || 0;
        const limit = query.limit || 100;
        return filtered.slice(offset, offset + limit);
    }
    async getById(id) {
        return this.logs.find(l => l.id === id) || null;
    }
    async count(query) {
        let count = 0;
        for (const log of this.logs) {
            if (query.principalId && log.principalId !== query.principalId)
                continue;
            if (query.tenantId && log.tenantId !== query.tenantId)
                continue;
            if (query.resourceType && log.resourceType !== query.resourceType)
                continue;
            if (query.resourceId && log.resourceId !== query.resourceId)
                continue;
            if (query.action && log.action !== query.action)
                continue;
            if (query.severity && log.severity !== query.severity)
                continue;
            if (query.startDate && log.timestamp < query.startDate)
                continue;
            if (query.endDate && log.timestamp > query.endDate)
                continue;
            if (query.success !== undefined && log.success !== query.success)
                continue;
            count++;
        }
        return count;
    }
    async purgeBefore(date) {
        const initialLength = this.logs.length;
        this.logs = this.logs.filter(l => l.timestamp >= date);
        return initialLength - this.logs.length;
    }
    clear() {
        this.logs = [];
    }
}
exports.InMemoryAuditLogger = InMemoryAuditLogger;
exports.auditLogger = new InMemoryAuditLogger();
function createAuditMiddleware() {
    return async (req, rep, next) => {
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
                await exports.auditLogger.log({
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
            }
            catch (err) {
                console.error('Failed to write audit log:', err);
            }
        });
        next();
    };
}
function mapHttpMethodToAction(method) {
    switch (method) {
        case 'GET': return AuditAction.READ;
        case 'POST': return AuditAction.CREATE;
        case 'PUT':
        case 'PATCH': return AuditAction.UPDATE;
        case 'DELETE': return AuditAction.DELETE;
        default: return AuditAction.READ;
    }
}
function extractResourceType(url) {
    const match = url.match(/\/api\/v1\/([^/]+)/);
    return match ? match[1] : 'unknown';
}
function extractResourceId(url, params) {
    if (params && params.id)
        return params.id;
    const match = url.match(/\/([a-f0-9-]{36})(?:[/?]|$)/i);
    return match ? match[1] : undefined;
}
function createAuditLogEntry(action, options) {
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
async function logAudit(action, options) {
    return exports.auditLogger.log(createAuditLogEntry(action, options));
}
