"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenantRegistry = exports.TenantRegistry = exports.HeaderTenantResolver = exports.DomainTenantResolver = exports.TenantStatus = void 0;
exports.createTenantMiddleware = createTenantMiddleware;
exports.requireTenant = requireTenant;
exports.filterByTenant = filterByTenant;
exports.createTenantScopedQuery = createTenantScopedQuery;
var TenantStatus;
(function (TenantStatus) {
    TenantStatus["ACTIVE"] = "active";
    TenantStatus["SUSPENDED"] = "suspended";
    TenantStatus["ARCHIVED"] = "archived";
    TenantStatus["PENDING"] = "pending";
})(TenantStatus || (exports.TenantStatus = TenantStatus = {}));
class DomainTenantResolver {
    constructor(tenantRegistry) {
        this.tenantRegistry = tenantRegistry;
    }
    async resolve(req) {
        const host = req.headers.host?.split(':')[0];
        if (!host)
            return null;
        // Check for subdomain
        const parts = host.split('.');
        if (parts.length >= 3) {
            const subdomain = parts[0];
            const tenant = this.tenantRegistry.getByDomain(subdomain);
            if (tenant)
                return this.createContext(tenant);
        }
        // Check for custom domain
        const tenant = this.tenantRegistry.getByDomain(host);
        if (tenant)
            return this.createContext(tenant);
        return null;
    }
    createContext(tenant) {
        return {
            tenantId: tenant.id,
            tenant,
            isSystem: false,
        };
    }
}
exports.DomainTenantResolver = DomainTenantResolver;
class HeaderTenantResolver {
    constructor(tenantRegistry, headerName = 'x-tenant-id') {
        this.tenantRegistry = tenantRegistry;
        this.headerName = headerName;
    }
    async resolve(req) {
        const tenantId = req.headers[this.headerName];
        if (!tenantId)
            return null;
        const tenant = this.tenantRegistry.getById(tenantId);
        if (!tenant)
            return null;
        return {
            tenantId: tenant.id,
            tenant,
            isSystem: false,
        };
    }
}
exports.HeaderTenantResolver = HeaderTenantResolver;
class TenantRegistry {
    constructor() {
        this.tenants = new Map();
        this.bySlug = new Map();
        this.byDomain = new Map();
    }
    register(tenant) {
        this.tenants.set(tenant.id, tenant);
        this.bySlug.set(tenant.slug, tenant);
        if (tenant.domain) {
            this.byDomain.set(tenant.domain, tenant);
        }
    }
    getById(id) {
        return this.tenants.get(id);
    }
    getBySlug(slug) {
        return this.bySlug.get(slug);
    }
    getByDomain(domain) {
        return this.byDomain.get(domain);
    }
    getAll() {
        return Array.from(this.tenants.values());
    }
    getActive() {
        return Array.from(this.tenants.values()).filter(t => t.status === TenantStatus.ACTIVE);
    }
    update(id, updates) {
        const tenant = this.tenants.get(id);
        if (!tenant)
            return undefined;
        const updated = { ...tenant, ...updates, updatedAt: new Date() };
        this.tenants.set(id, updated);
        if (tenant.slug !== updated.slug) {
            this.bySlug.delete(tenant.slug);
        }
        this.bySlug.set(updated.slug, updated);
        if (tenant.domain && tenant.domain !== updated.domain) {
            this.byDomain.delete(tenant.domain);
        }
        if (updated.domain)
            this.byDomain.set(updated.domain, updated);
        return updated;
    }
    delete(id) {
        const tenant = this.tenants.get(id);
        if (!tenant)
            return false;
        this.tenants.delete(id);
        this.bySlug.delete(tenant.slug);
        if (tenant.domain)
            this.byDomain.delete(tenant.domain);
        return true;
    }
}
exports.TenantRegistry = TenantRegistry;
exports.tenantRegistry = new TenantRegistry();
function createTenantMiddleware(resolvers = []) {
    return async (req, rep, next) => {
        for (const resolver of resolvers) {
            const context = await resolver.resolve(req);
            if (context) {
                req.tenant = context;
                break;
            }
        }
        // Fallback to header resolver if no tenant found
        if (!req.tenant) {
            const headerResolver = new HeaderTenantResolver(exports.tenantRegistry);
            const context = await headerResolver.resolve(req);
            if (context)
                req.tenant = context;
        }
        next();
    };
}
function requireTenant() {
    return (req, rep, next) => {
        if (!req.tenant) {
            return rep.status(400).send({
                success: false,
                error: { code: 'TENANT_REQUIRED', message: 'Tenant context required' },
                meta: { timestamp: new Date().toISOString(), version: 'v1' },
            });
        }
        next();
    };
}
function filterByTenant(items, tenantId) {
    if (!tenantId)
        return items;
    return items.filter(item => item.tenantId === tenantId);
}
function createTenantScopedQuery(baseQuery, tenantId) {
    if (!tenantId)
        return baseQuery;
    return {
        ...baseQuery,
        where: {
            ...baseQuery.where,
            tenantId,
        },
    };
}
