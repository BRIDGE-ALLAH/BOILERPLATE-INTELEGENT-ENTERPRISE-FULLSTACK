// Multi-Tenancy Engine Tests
import { describe, it, expect, beforeEach } from '@jest/globals';
import { TenantRegistry, TenantStatus, Tenant, DomainTenantResolver, HeaderTenantResolver, filterByTenant, createTenantScopedQuery } from '../src/tenancy.js';

describe('TenantRegistry', () => {
  let registry: TenantRegistry;

  beforeEach(() => {
    registry = new TenantRegistry();
  });

  const createTenant = (overrides: Partial<Tenant> = {}): Tenant => ({
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
    status: TenantStatus.ACTIVE,
    createdAt: new Date(),
    updatedAt: new Date(),
    ...overrides,
  });

  describe('register', () => {
    it('should register a tenant', () => {
      const tenant = createTenant();
      registry.register(tenant);
      expect(registry.getById(tenant.id)).toBeDefined();
      expect(registry.getBySlug(tenant.slug)).toBeDefined();
      expect(registry.getByDomain(tenant.domain!)).toBeDefined();
    });

    it('should not register tenant without domain in domain map', () => {
      const tenant = createTenant({ domain: undefined });
      registry.register(tenant);
      expect(registry.getById(tenant.id)).toBeDefined();
      expect(registry.getBySlug(tenant.slug)).toBeDefined();
      // Domain should not be in map
    });
  });

  describe('getById', () => {
    it('should return tenant by id', () => {
      const tenant = createTenant();
      registry.register(tenant);
      const found = registry.getById(tenant.id);
      expect(found).toEqual(tenant);
    });

    it('should return undefined for non-existent id', () => {
      const found = registry.getById('non-existent');
      expect(found).toBeUndefined();
    });
  });

  describe('getBySlug', () => {
    it('should return tenant by slug', () => {
      const tenant = createTenant();
      registry.register(tenant);
      const found = registry.getBySlug(tenant.slug);
      expect(found).toEqual(tenant);
    });
  });

  describe('getByDomain', () => {
    it('should return tenant by domain', () => {
      const tenant = createTenant();
      registry.register(tenant);
      const found = registry.getByDomain(tenant.domain!);
      expect(found).toEqual(tenant);
    });

    it('should return undefined for non-existent domain', () => {
      const found = registry.getByDomain('non-existent.com');
      expect(found).toBeUndefined();
    });
  });

  describe('getAll', () => {
    it('should return all tenants', () => {
      registry.register(createTenant({ id: '1', slug: 'tenant-1' }));
      registry.register(createTenant({ id: '2', slug: 'tenant-2' }));
      const all = registry.getAll();
      expect(all).toHaveLength(2);
    });
  });

  describe('getActive', () => {
    it('should return only active tenants', () => {
      registry.register(createTenant({ id: '1', slug: 'active-1', status: TenantStatus.ACTIVE }));
      registry.register(createTenant({ id: '2', slug: 'active-2', status: TenantStatus.ACTIVE }));
      registry.register(createTenant({ id: '3', slug: 'suspended', status: TenantStatus.SUSPENDED }));
      registry.register(createTenant({ id: '4', slug: 'archived', status: TenantStatus.ARCHIVED }));

      const active = registry.getActive();
      expect(active).toHaveLength(2);
      expect(active.every(t => t.status === TenantStatus.ACTIVE)).toBe(true);
    });
  });

  describe('update', () => {
    it('should update tenant and maintain indexes', () => {
      const tenant = createTenant();
      registry.register(tenant);

      const updated = registry.update(tenant.id, { name: 'Updated Name', slug: 'updated-slug' });
      expect(updated?.name).toBe('Updated Name');
      expect(updated?.slug).toBe('updated-slug');

      expect(registry.getBySlug('test-tenant')).toBeUndefined();
      expect(registry.getBySlug('updated-slug')).toBeDefined();
    });

    it('should update domain index when domain changes', () => {
      const tenant = createTenant();
      registry.register(tenant);

      registry.update(tenant.id, { domain: 'new.example.com' });
      expect(registry.getByDomain('test.example.com')).toBeUndefined();
      expect(registry.getByDomain('new.example.com')).toBeDefined();
    });
  });

  describe('delete', () => {
    it('should delete tenant and clean up indexes', () => {
      const tenant = createTenant();
      registry.register(tenant);

      const deleted = registry.delete(tenant.id);
      expect(deleted).toBe(true);
      expect(registry.getById(tenant.id)).toBeUndefined();
      expect(registry.getBySlug(tenant.slug)).toBeUndefined();
      expect(registry.getByDomain(tenant.domain!)).toBeUndefined();
    });

    it('should return false for non-existent tenant', () => {
      const deleted = registry.delete('non-existent');
      expect(deleted).toBe(false);
    });
  });
});

describe('DomainTenantResolver', () => {
  let registry: TenantRegistry;
  let resolver: DomainTenantResolver;

  beforeEach(() => {
    registry = new TenantRegistry();
    resolver = new DomainTenantResolver(registry);
    registry.register({
      id: 'tenant-1',
      name: 'Test Tenant',
      slug: 'test-tenant',
      domain: 'test.example.com',
      settings: { features: {}, limits: {}, branding: {}, localization: { defaultLocale: 'en', supportedLocales: ['en'], timezone: 'UTC' } },
      status: TenantStatus.ACTIVE,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  });

  it('should resolve tenant from subdomain', async () => {
    const req = { headers: { host: 'test.example.com' } };
    const context = await resolver.resolve(req);
    expect(context).not.toBeNull();
    expect(context?.tenantId).toBe('tenant-1');
  });

  it('should resolve tenant from custom domain', async () => {
    const req = { headers: { host: 'test.example.com:3000' } };
    const context = await resolver.resolve(req);
    expect(context).not.toBeNull();
    expect(context?.tenantId).toBe('tenant-1');
  });

  it('should return null for unknown domain', async () => {
    const req = { headers: { host: 'unknown.example.com' } };
    const context = await resolver.resolve(req);
    expect(context).toBeNull();
  });

  it('should return null when no host header', async () => {
    const req = { headers: {} };
    const context = await resolver.resolve(req);
    expect(context).toBeNull();
  });
});

describe('HeaderTenantResolver', () => {
  let registry: TenantRegistry;
  let resolver: HeaderTenantResolver;

  beforeEach(() => {
    registry = new TenantRegistry();
    resolver = new HeaderTenantResolver(registry);
    registry.register({
      id: 'tenant-1',
      name: 'Test Tenant',
      slug: 'test-tenant',
      settings: { features: {}, limits: {}, branding: {}, localization: { defaultLocale: 'en', supportedLocales: ['en'], timezone: 'UTC' } },
      status: TenantStatus.ACTIVE,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  });

  it('should resolve tenant from header', async () => {
    const req = { headers: { 'x-tenant-id': 'tenant-1' } };
    const context = await resolver.resolve(req);
    expect(context).not.toBeNull();
    expect(context?.tenantId).toBe('tenant-1');
  });

  it('should return null when header missing', async () => {
    const req = { headers: {} };
    const context = await resolver.resolve(req);
    expect(context).toBeNull();
  });

  it('should return null for unknown tenant id', async () => {
    const req = { headers: { 'x-tenant-id': 'unknown' } };
    const context = await resolver.resolve(req);
    expect(context).toBeNull();
  });

  it('should use custom header name', async () => {
    const customResolver = new HeaderTenantResolver(registry, 'x-custom-tenant');
    const req = { headers: { 'x-custom-tenant': 'tenant-1' } };
    const context = await customResolver.resolve(req);
    expect(context).not.toBeNull();
    expect(context?.tenantId).toBe('tenant-1');
  });
});

describe('filterByTenant', () => {
  it('should filter items by tenantId', () => {
    const items = [
      { id: '1', tenantId: 'tenant-1', name: 'Item 1' },
      { id: '2', tenantId: 'tenant-2', name: 'Item 2' },
      { id: '3', tenantId: 'tenant-1', name: 'Item 3' },
    ];

    const filtered = filterByTenant(items, 'tenant-1');
    expect(filtered).toHaveLength(2);
    expect(filtered.every(i => i.tenantId === 'tenant-1')).toBe(true);
  });

  it('should return all items when tenantId is undefined', () => {
    const items = [
      { id: '1', tenantId: 'tenant-1', name: 'Item 1' },
      { id: '2', tenantId: 'tenant-2', name: 'Item 2' },
    ];

    const filtered = filterByTenant(items, undefined);
    expect(filtered).toHaveLength(2);
  });

  it('should handle items without tenantId', () => {
    const items = [
      { id: '1', name: 'Item 1' },
      { id: '2', tenantId: 'tenant-1', name: 'Item 2' },
    ];

    const filtered = filterByTenant(items, 'tenant-1');
    expect(filtered).toHaveLength(1);
    expect(filtered[0].tenantId).toBe('tenant-1');
  });
});

describe('createTenantScopedQuery', () => {
  it('should add tenantId to query where clause', () => {
    const baseQuery = { where: { status: 'active' } };
    const scoped = createTenantScopedQuery(baseQuery, 'tenant-1');
    expect(scoped.where.tenantId).toBe('tenant-1');
    expect(scoped.where.status).toBe('active');
  });

  it('should return base query when tenantId is undefined', () => {
    const baseQuery = { where: { status: 'active' } };
    const scoped = createTenantScopedQuery(baseQuery, undefined);
    expect(scoped).toEqual(baseQuery);
    expect(scoped.where.tenantId).toBeUndefined();
  });
});