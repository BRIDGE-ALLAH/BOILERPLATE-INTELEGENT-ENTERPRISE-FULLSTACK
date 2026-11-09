// @repo/ubme-core - Multi-Tenancy Engine
import { RecordId } from './types';

export interface Tenant {
  id: RecordId;
  name: string;
  slug: string;
  domain?: string;
  settings: TenantSettings;
  status: TenantStatus;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export interface TenantSettings {
  features: Record<string, boolean>;
  limits: Record<string, number>;
  branding: Record<string, any>;
  localization: {
    defaultLocale: string;
    supportedLocales: string[];
    timezone: string;
  };
}

export enum TenantStatus {
  ACTIVE = 'active',
  SUSPENDED = 'suspended',
  ARCHIVED = 'archived',
  PENDING = 'pending',
}

export interface TenantContext {
  tenantId: RecordId;
  tenant: Tenant;
  isSystem: boolean;
}

export interface TenantResolver {
  resolve(req: any): Promise<TenantContext | null>;
}

export class DomainTenantResolver implements TenantResolver {
  constructor(private tenantRegistry: TenantRegistry) {}

  async resolve(req: any): Promise<TenantContext | null> {
    const host = req.headers.host?.split(':')[0];
    if (!host) return null;

    // Check for subdomain
    const parts = host.split('.');
    if (parts.length >= 3) {
      const subdomain = parts[0];
      const tenant = this.tenantRegistry.getByDomain(subdomain);
      if (tenant) return this.createContext(tenant);
    }

    // Check for custom domain
    const tenant = this.tenantRegistry.getByDomain(host);
    if (tenant) return this.createContext(tenant);

    return null;
  }

  private createContext(tenant: Tenant): TenantContext {
    return {
      tenantId: tenant.id,
      tenant,
      isSystem: false,
    };
  }
}

export class HeaderTenantResolver implements TenantResolver {
  constructor(private tenantRegistry: TenantRegistry, private headerName = 'x-tenant-id') {}

  async resolve(req: any): Promise<TenantContext | null> {
    const tenantId = req.headers[this.headerName];
    if (!tenantId) return null;

    const tenant = this.tenantRegistry.getById(tenantId);
    if (!tenant) return null;

    return {
      tenantId: tenant.id,
      tenant,
      isSystem: false,
    };
  }
}

export class TenantRegistry {
  private tenants: Map<RecordId, Tenant> = new Map();
  private bySlug: Map<string, Tenant> = new Map();
  private byDomain: Map<string, Tenant> = new Map();

  register(tenant: Tenant): void {
    this.tenants.set(tenant.id, tenant);
    this.bySlug.set(tenant.slug, tenant);
    if (tenant.domain) {
      this.byDomain.set(tenant.domain, tenant);
    }
  }

  getById(id: RecordId): Tenant | undefined {
    return this.tenants.get(id);
  }

  getBySlug(slug: string): Tenant | undefined {
    return this.bySlug.get(slug);
  }

  getByDomain(domain: string): Tenant | undefined {
    return this.byDomain.get(domain);
  }

  getAll(): Tenant[] {
    return Array.from(this.tenants.values());
  }

  getActive(): Tenant[] {
    return Array.from(this.tenants.values()).filter(t => t.status === TenantStatus.ACTIVE);
  }

  update(id: RecordId, updates: Partial<Tenant>): Tenant | undefined {
    const tenant = this.tenants.get(id);
    if (!tenant) return undefined;

    const updated = { ...tenant, ...updates, updatedAt: new Date() };
    this.tenants.set(id, updated);
    if (tenant.slug !== updated.slug) {
      this.bySlug.delete(tenant.slug);
    }
    this.bySlug.set(updated.slug, updated);
    if (tenant.domain && tenant.domain !== updated.domain) {
      this.byDomain.delete(tenant.domain);
    }
    if (updated.domain) this.byDomain.set(updated.domain, updated);
    return updated;
  }

  delete(id: RecordId): boolean {
    const tenant = this.tenants.get(id);
    if (!tenant) return false;

    this.tenants.delete(id);
    this.bySlug.delete(tenant.slug);
    if (tenant.domain) this.byDomain.delete(tenant.domain);
    return true;
  }
}

export const tenantRegistry = new TenantRegistry();

export function createTenantMiddleware(resolvers: TenantResolver[] = []) {
  return async (req: any, rep: any, next: any) => {
    for (const resolver of resolvers) {
      const context = await resolver.resolve(req);
      if (context) {
        req.tenant = context;
        break;
      }
    }

    // Fallback to header resolver if no tenant found
    if (!req.tenant) {
      const headerResolver = new HeaderTenantResolver(tenantRegistry);
      const context = await headerResolver.resolve(req);
      if (context) req.tenant = context;
    }

    next();
  };
}

export function requireTenant() {
  return (req: any, rep: any, next: any) => {
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

export function filterByTenant<T extends { tenantId?: RecordId }>(
  items: T[],
  tenantId: RecordId | undefined
): T[] {
  if (!tenantId) return items;
  return items.filter(item => item.tenantId === tenantId);
}

export function createTenantScopedQuery<T>(
  baseQuery: any,
  tenantId: RecordId | undefined
): any {
  if (!tenantId) return baseQuery;
  return {
    ...baseQuery,
    where: {
      ...baseQuery.where,
      tenantId,
    },
  };
}