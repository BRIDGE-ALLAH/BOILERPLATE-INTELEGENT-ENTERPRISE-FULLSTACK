"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Multi-Tenancy Engine Tests
const globals_1 = require("@jest/globals");
const tenancy_1 = require("./tenancy");
(0, globals_1.describe)('TenantRegistry', () => {
    let registry;
    (0, globals_1.beforeEach)(() => {
        registry = new tenancy_1.TenantRegistry();
    });
    const createTenant = (overrides = {}) => ({
        id: 'tenant-1',
        name: 'Test Tenant',
        slug: 'test-tenant',
        domain: 'test.example.com',
        settings: {
            features: {},
            limits: {},
            branding: {},
            localization: {
                defaultLocale: 'en',
                supportedLocales: ['en', 'es'],
                timezone: 'UTC',
            },
        },
        status: tenancy_1.TenantStatus.ACTIVE,
        createdAt: new Date(),
        updatedAt: new Date(),
        ...overrides,
    });
    (0, globals_1.describe)('register', () => {
        (0, globals_1.it)('should register a tenant', () => {
            const tenant = createTenant();
            registry.register(tenant);
            (0, globals_1.expect)(registry.getById(tenant.id)).toBeDefined();
            (0, globals_1.expect)(registry.getBySlug(tenant.slug)).toBeDefined();
            (0, globals_1.expect)(registry.getByDomain(tenant.domain)).toBeDefined();
        });
        (0, globals_1.it)('should not register tenant without domain in domain map', () => {
            const tenant = createTenant({ domain: undefined });
            registry.register(tenant);
            (0, globals_1.expect)(registry.getById(tenant.id)).toBeDefined();
            (0, globals_1.expect)(registry.getBySlug(tenant.slug)).toBeDefined();
            // Domain should not be in map
        });
    });
    (0, globals_1.describe)('getById', () => {
        (0, globals_1.it)('should return tenant by id', () => {
            const tenant = createTenant();
            registry.register(tenant);
            const found = registry.getById(tenant.id);
            (0, globals_1.expect)(found).toEqual(tenant);
        });
        (0, globals_1.it)('should return undefined for non-existent id', () => {
            const found = registry.getById('non-existent');
            (0, globals_1.expect)(found).toBeUndefined();
        });
    });
    (0, globals_1.describe)('getBySlug', () => {
        (0, globals_1.it)('should return tenant by slug', () => {
            const tenant = createTenant();
            registry.register(tenant);
            const found = registry.getBySlug(tenant.slug);
            (0, globals_1.expect)(found).toEqual(tenant);
        });
    });
    (0, globals_1.describe)('getByDomain', () => {
        (0, globals_1.it)('should return tenant by domain', () => {
            const tenant = createTenant();
            registry.register(tenant);
            const found = registry.getByDomain(tenant.domain);
            (0, globals_1.expect)(found).toEqual(tenant);
        });
        (0, globals_1.it)('should return undefined for non-existent domain', () => {
            const found = registry.getByDomain('non-existent.com');
            (0, globals_1.expect)(found).toBeUndefined();
        });
    });
    (0, globals_1.describe)('getAll', () => {
        (0, globals_1.it)('should return all tenants', () => {
            registry.register(createTenant({ id: '1', slug: 'tenant-1' }));
            registry.register(createTenant({ id: '2', slug: 'tenant-2' }));
            const all = registry.getAll();
            (0, globals_1.expect)(all).toHaveLength(2);
        });
    });
    (0, globals_1.describe)('getActive', () => {
        (0, globals_1.it)('should return only active tenants', () => {
            registry.register(createTenant({ id: '1', slug: 'active-1', status: tenancy_1.TenantStatus.ACTIVE }));
            registry.register(createTenant({ id: '2', slug: 'active-2', status: tenancy_1.TenantStatus.ACTIVE }));
            registry.register(createTenant({ id: '3', slug: 'suspended', status: tenancy_1.TenantStatus.SUSPENDED }));
            registry.register(createTenant({ id: '4', slug: 'archived', status: tenancy_1.TenantStatus.ARCHIVED }));
            const active = registry.getActive();
            (0, globals_1.expect)(active).toHaveLength(2);
            (0, globals_1.expect)(active.every(t => t.status === tenancy_1.TenantStatus.ACTIVE)).toBe(true);
        });
    });
    (0, globals_1.describe)('update', () => {
        (0, globals_1.it)('should update tenant and maintain indexes', () => {
            const tenant = createTenant();
            registry.register(tenant);
            const updated = registry.update(tenant.id, { name: 'Updated Name', slug: 'updated-slug' });
            (0, globals_1.expect)(updated?.name).toBe('Updated Name');
            (0, globals_1.expect)(updated?.slug).toBe('updated-slug');
            (0, globals_1.expect)(registry.getBySlug('test-tenant')).toBeUndefined();
            (0, globals_1.expect)(registry.getBySlug('updated-slug')).toBeDefined();
        });
        (0, globals_1.it)('should update domain index when domain changes', () => {
            const tenant = createTenant();
            registry.register(tenant);
            registry.update(tenant.id, { domain: 'new.example.com' });
            (0, globals_1.expect)(registry.getByDomain('test.example.com')).toBeUndefined();
            (0, globals_1.expect)(registry.getByDomain('new.example.com')).toBeDefined();
        });
    });
    (0, globals_1.describe)('delete', () => {
        (0, globals_1.it)('should delete tenant and clean up indexes', () => {
            const tenant = createTenant();
            registry.register(tenant);
            const deleted = registry.delete(tenant.id);
            (0, globals_1.expect)(deleted).toBe(true);
            (0, globals_1.expect)(registry.getById(tenant.id)).toBeUndefined();
            (0, globals_1.expect)(registry.getBySlug(tenant.slug)).toBeUndefined();
            (0, globals_1.expect)(registry.getByDomain(tenant.domain)).toBeUndefined();
        });
        (0, globals_1.it)('should return false for non-existent tenant', () => {
            const deleted = registry.delete('non-existent');
            (0, globals_1.expect)(deleted).toBe(false);
        });
    });
});
(0, globals_1.describe)('DomainTenantResolver', () => {
    let registry;
    let resolver;
    (0, globals_1.beforeEach)(() => {
        registry = new tenancy_1.TenantRegistry();
        resolver = new tenancy_1.DomainTenantResolver(registry);
        registry.register({
            id: 'tenant-1',
            name: 'Test Tenant',
            slug: 'test-tenant',
            domain: 'test.example.com',
            settings: { features: {}, limits: {}, branding: {}, localization: { defaultLocale: 'en', supportedLocales: ['en'], timezone: 'UTC' } },
            status: tenancy_1.TenantStatus.ACTIVE,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    });
    (0, globals_1.it)('should resolve tenant from subdomain', async () => {
        const req = { headers: { host: 'test.example.com' } };
        const context = await resolver.resolve(req);
        (0, globals_1.expect)(context).not.toBeNull();
        (0, globals_1.expect)(context?.tenantId).toBe('tenant-1');
    });
    (0, globals_1.it)('should resolve tenant from custom domain', async () => {
        const req = { headers: { host: 'test.example.com:3000' } };
        const context = await resolver.resolve(req);
        (0, globals_1.expect)(context).not.toBeNull();
        (0, globals_1.expect)(context?.tenantId).toBe('tenant-1');
    });
    (0, globals_1.it)('should return null for unknown domain', async () => {
        const req = { headers: { host: 'unknown.example.com' } };
        const context = await resolver.resolve(req);
        (0, globals_1.expect)(context).toBeNull();
    });
    (0, globals_1.it)('should return null when no host header', async () => {
        const req = { headers: {} };
        const context = await resolver.resolve(req);
        (0, globals_1.expect)(context).toBeNull();
    });
});
(0, globals_1.describe)('HeaderTenantResolver', () => {
    let registry;
    let resolver;
    (0, globals_1.beforeEach)(() => {
        registry = new tenancy_1.TenantRegistry();
        resolver = new tenancy_1.HeaderTenantResolver(registry);
        registry.register({
            id: 'tenant-1',
            name: 'Test Tenant',
            slug: 'test-tenant',
            settings: { features: {}, limits: {}, branding: {}, localization: { defaultLocale: 'en', supportedLocales: ['en'], timezone: 'UTC' } },
            status: tenancy_1.TenantStatus.ACTIVE,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    });
    (0, globals_1.it)('should resolve tenant from header', async () => {
        const req = { headers: { 'x-tenant-id': 'tenant-1' } };
        const context = await resolver.resolve(req);
        (0, globals_1.expect)(context).not.toBeNull();
        (0, globals_1.expect)(context?.tenantId).toBe('tenant-1');
    });
    (0, globals_1.it)('should return null when header missing', async () => {
        const req = { headers: {} };
        const context = await resolver.resolve(req);
        (0, globals_1.expect)(context).toBeNull();
    });
    (0, globals_1.it)('should return null for unknown tenant id', async () => {
        const req = { headers: { 'x-tenant-id': 'unknown' } };
        const context = await resolver.resolve(req);
        (0, globals_1.expect)(context).toBeNull();
    });
    (0, globals_1.it)('should use custom header name', async () => {
        const customResolver = new tenancy_1.HeaderTenantResolver(registry, 'x-custom-tenant');
        const req = { headers: { 'x-custom-tenant': 'tenant-1' } };
        const context = await customResolver.resolve(req);
        (0, globals_1.expect)(context).not.toBeNull();
        (0, globals_1.expect)(context?.tenantId).toBe('tenant-1');
    });
});
(0, globals_1.describe)('filterByTenant', () => {
    (0, globals_1.it)('should filter items by tenantId', () => {
        const items = [
            { id: '1', tenantId: 'tenant-1', name: 'Item 1' },
            { id: '2', tenantId: 'tenant-2', name: 'Item 2' },
            { id: '3', tenantId: 'tenant-1', name: 'Item 3' },
        ];
        const filtered = (0, tenancy_1.filterByTenant)(items, 'tenant-1');
        (0, globals_1.expect)(filtered).toHaveLength(2);
        (0, globals_1.expect)(filtered.every(i => i.tenantId === 'tenant-1')).toBe(true);
    });
    (0, globals_1.it)('should return all items when tenantId is undefined', () => {
        const items = [
            { id: '1', tenantId: 'tenant-1', name: 'Item 1' },
            { id: '2', tenantId: 'tenant-2', name: 'Item 2' },
        ];
        const filtered = (0, tenancy_1.filterByTenant)(items, undefined);
        (0, globals_1.expect)(filtered).toHaveLength(2);
    });
    (0, globals_1.it)('should handle items without tenantId', () => {
        const items = [
            { id: '1', name: 'Item 1' },
            { id: '2', tenantId: 'tenant-1', name: 'Item 2' },
        ];
        const filtered = (0, tenancy_1.filterByTenant)(items, 'tenant-1');
        (0, globals_1.expect)(filtered).toHaveLength(1);
        (0, globals_1.expect)(filtered[0].tenantId).toBe('tenant-1');
    });
});
(0, globals_1.describe)('createTenantScopedQuery', () => {
    (0, globals_1.it)('should add tenantId to query where clause', () => {
        const baseQuery = { where: { status: 'active' } };
        const scoped = (0, tenancy_1.createTenantScopedQuery)(baseQuery, 'tenant-1');
        (0, globals_1.expect)(scoped.where.tenantId).toBe('tenant-1');
        (0, globals_1.expect)(scoped.where.status).toBe('active');
    });
    (0, globals_1.it)('should return base query when tenantId is undefined', () => {
        const baseQuery = { where: { status: 'active' } };
        const scoped = (0, tenancy_1.createTenantScopedQuery)(baseQuery, undefined);
        (0, globals_1.expect)(scoped).toEqual(baseQuery);
        (0, globals_1.expect)(scoped.where.tenantId).toBeUndefined();
    });
});
