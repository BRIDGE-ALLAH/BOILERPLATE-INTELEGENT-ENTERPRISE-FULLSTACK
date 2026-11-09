// @repo/auth - ABAC (Attribute-Based Access Control) policy engine
import { TokenPayload, UserRole, Permission } from './types';

export interface PolicyCondition {
  attribute: string;
  operator: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'gte' | 'lt' | 'lte' | 'contains' | 'startsWith' | 'endsWith';
  value: any;
}

export interface PolicyRule {
  id: string;
  name: string;
  description?: string;
  effect: 'allow' | 'deny';
  conditions: PolicyCondition[];
  resources?: string[];
  actions?: string[];
  priority: number;
}

export interface PolicyContext {
  user: TokenPayload;
  resource?: {
    type: string;
    id?: string;
    ownerId?: string;
    tenantId?: string;
    [key: string]: any;
  };
  action: string;
  environment?: Record<string, any>;
}

export interface PermissionMatrixEntry {
  role: UserRole;
  permissions: Permission[];
  resources: string[];
  conditions?: PolicyCondition[];
}

export interface RoleHierarchyEntry {
  role: UserRole;
  inherits: UserRole[];
  description?: string;
}

export class PolicyEngine {
  private rules: Map<string, PolicyRule> = new Map();
  private roleHierarchy: Map<UserRole, RoleHierarchyEntry> = new Map();
  private permissionMatrix: Map<UserRole, PermissionMatrixEntry> = new Map();

  constructor() {
    this.initializeDefaultRoleHierarchy();
    this.initializeDefaultPermissionMatrix();
    this.initializeDefaultPolicies();
  }

  private initializeDefaultRoleHierarchy() {
    const hierarchy: RoleHierarchyEntry[] = [
      { role: UserRole.SUPER_ADMIN, inherits: [UserRole.ADMIN, UserRole.MODERATOR, UserRole.USER], description: 'Full system access' },
      { role: UserRole.ADMIN, inherits: [UserRole.MODERATOR, UserRole.USER], description: 'Administrative access' },
      { role: UserRole.MODERATOR, inherits: [UserRole.USER], description: 'Moderation access' },
      { role: UserRole.USER, inherits: [], description: 'Standard user access' },
      { role: UserRole.GUEST, inherits: [], description: 'Guest access' },
    ];

    hierarchy.forEach(entry => this.roleHierarchy.set(entry.role, entry));
  }

  private initializeDefaultPermissionMatrix() {
    const matrix: PermissionMatrixEntry[] = [
      {
        role: UserRole.SUPER_ADMIN,
        permissions: [
          Permission.USER_READ, Permission.USER_WRITE, Permission.USER_DELETE,
          Permission.ADMIN_READ, Permission.ADMIN_WRITE,
          Permission.SYSTEM_CONFIG
        ],
        resources: ['*'],
      },
      {
        role: UserRole.ADMIN,
        permissions: [
          Permission.USER_READ, Permission.USER_WRITE,
          Permission.ADMIN_READ, Permission.ADMIN_WRITE,
        ],
        resources: ['users', 'admin', 'system'],
      },
      {
        role: UserRole.MODERATOR,
        permissions: [Permission.USER_READ, Permission.USER_WRITE],
        resources: ['users'],
      },
      {
        role: UserRole.USER,
        permissions: [Permission.USER_READ],
        resources: ['users'],
        conditions: [
          { attribute: 'user.id', operator: 'eq', value: '{{user.id}}' },
        ],
      },
      {
        role: UserRole.GUEST,
        permissions: [],
        resources: [],
      },
    ];

    matrix.forEach(entry => this.permissionMatrix.set(entry.role, entry));
  }

  private initializeDefaultPolicies() {
    const defaultPolicies: PolicyRule[] = [
      {
        id: 'super-admin-all',
        name: 'Super Admin Full Access',
        description: 'Super admins have access to all resources and actions',
        effect: 'allow',
        conditions: [
          { attribute: 'user.role', operator: 'eq', value: UserRole.SUPER_ADMIN },
        ],
        priority: 100,
      },
      {
        id: 'owner-access',
        name: 'Resource Owner Access',
        description: 'Users can access their own resources',
        effect: 'allow',
        conditions: [
          { attribute: 'resource.ownerId', operator: 'eq', value: '{{user.id}}' },
        ],
        priority: 50,
      },
      {
        id: 'tenant-isolation',
        name: 'Tenant Isolation',
        description: 'Users can only access resources within their tenant',
        effect: 'allow',
        conditions: [
          { attribute: 'resource.tenantId', operator: 'eq', value: '{{user.tenantId}}' },
        ],
        priority: 75,
      },
      {
        id: 'deny-guest-write',
        name: 'Deny Guest Write Access',
        description: 'Guests cannot perform write operations',
        effect: 'deny',
        conditions: [
          { attribute: 'user.role', operator: 'eq', value: UserRole.GUEST },
        ],
        resources: ['*'],
        actions: ['write', 'delete', 'update', 'create'],
        priority: 25,
      },
    ];

    defaultPolicies.forEach(policy => this.addRule(policy));
  }

  addRule(rule: PolicyRule): void {
    this.rules.set(rule.id, rule);
  }

  removeRule(ruleId: string): void {
    this.rules.delete(ruleId);
  }

  getRule(ruleId: string): PolicyRule | undefined {
    return this.rules.get(ruleId);
  }

  getAllRules(): PolicyRule[] {
    return Array.from(this.rules.values()).sort((a, b) => b.priority - a.priority);
  }

  getRoleHierarchy(role: UserRole): RoleHierarchyEntry | undefined {
    return this.roleHierarchy.get(role);
  }

  getAllRoles(): RoleHierarchyEntry[] {
    return Array.from(this.roleHierarchy.values());
  }

  getPermissionMatrix(role: UserRole): PermissionMatrixEntry | undefined {
    return this.permissionMatrix.get(role);
  }

  getAllPermissions(): PermissionMatrixEntry[] {
    return Array.from(this.permissionMatrix.values());
  }

  getEffectiveRoles(role: UserRole): UserRole[] {
    const entry = this.roleHierarchy.get(role);
    if (!entry) return [role];

    const inherited = entry.inherits.flatMap(r => this.getEffectiveRoles(r));
    return [role, ...new Set(inherited)];
  }

  hasRole(user: TokenPayload, requiredRole: UserRole): boolean {
    const userRole = user.role as UserRole;
    if (userRole === requiredRole) return true;

    const effectiveRoles = this.getEffectiveRoles(userRole);
    return effectiveRoles.includes(requiredRole);
  }

  hasPermission(user: TokenPayload, requiredPermissions: Permission[]): boolean {
    const effectiveRoles = this.getEffectiveRoles(user.role as UserRole);

    for (const role of effectiveRoles) {
      const matrixEntry = this.permissionMatrix.get(role);
      if (!matrixEntry) continue;

      const hasAllPerms = requiredPermissions.every(p => matrixEntry.permissions.includes(p));
      if (hasAllPerms) return true;
    }

    return false;
  }

  evaluate(context: PolicyContext): { allowed: boolean; reason: string; matchedRules: string[] } {
    const sortedRules = this.getAllRules();
    const matchedRules: string[] = [];

    for (const rule of sortedRules) {
      if (this.matchesRule(rule, context)) {
        matchedRules.push(rule.id);
        if (rule.effect === 'deny') {
          return { allowed: false, reason: `Denied by policy: ${rule.name}`, matchedRules };
        }
        if (rule.effect === 'allow') {
          return { allowed: true, reason: `Allowed by policy: ${rule.name}`, matchedRules };
        }
      }
    }

    return { allowed: false, reason: 'No matching policy (default deny)', matchedRules };
  }

  private matchesRule(rule: PolicyRule, context: PolicyContext): boolean {
    if (rule.resources && rule.resources.length > 0 && rule.resources[0] !== '*') {
      if (!context.resource || !rule.resources.includes(context.resource.type)) {
        return false;
      }
    }

    if (rule.actions && rule.actions.length > 0) {
      if (!rule.actions.includes(context.action)) {
        return false;
      }
    }

    return rule.conditions.every(condition => this.evaluateCondition(condition, context));
  }

  private evaluateCondition(condition: PolicyCondition, context: PolicyContext): boolean {
    const value = this.resolveValue(condition.value, context);
    const targetValue = this.getAttributeValue(condition.attribute, context);

    if (targetValue === undefined || targetValue === null) {
      return false;
    }

    switch (condition.operator) {
      case 'eq': return targetValue === value;
      case 'neq': return targetValue !== value;
      case 'in': return Array.isArray(value) && value.includes(targetValue);
      case 'nin': return Array.isArray(value) && !value.includes(targetValue);
      case 'gt': return targetValue > value;
      case 'gte': return targetValue >= value;
      case 'lt': return targetValue < value;
      case 'lte': return targetValue <= value;
      case 'contains': return String(targetValue).includes(String(value));
      case 'startsWith': return String(targetValue).startsWith(String(value));
      case 'endsWith': return String(targetValue).endsWith(String(value));
      default: return false;
    }
  }

  private resolveValue(value: any, context: PolicyContext): any {
    if (typeof value === 'string' && value.startsWith('{{') && value.endsWith('}}')) {
      const path = value.slice(2, -2);
      return this.getAttributeValue(path, context);
    }
    return value;
  }

  private getAttributeValue(path: string, context: PolicyContext): any {
    const parts = path.split('.');
    let current: any = context;

    for (const part of parts) {
      if (current === undefined || current === null) return undefined;
      current = current[part];
    }

    return current;
  }
}

export const policyEngine = new PolicyEngine();

export function requirePolicy(policyId: string) {
  return async (req: any, rep: any, next: any) => {
    const user = req.user;
    if (!user) {
      return rep.status(401).send({
        success: false,
        error: { code: 'UNAUTHORIZED', message: 'Authentication required' },
        meta: { timestamp: new Date().toISOString(), version: 'v1' },
      });
    }

    const context: PolicyContext = {
      user,
      resource: req.resource,
      action: req.method.toLowerCase(),
      environment: { ip: req.ip, url: req.url },
    };

    const result = policyEngine.evaluate(context);

    if (!result.allowed) {
      return rep.status(403).send({
        success: false,
        error: { code: 'FORBIDDEN', message: result.reason },
        meta: { timestamp: new Date().toISOString(), version: 'v1', policy: policyId },
      });
    }

    next();
  };
}

export function attachResource(resourceType: string, resourceIdParam: string = 'id') {
  return async (req: any, rep: any, next: any) => {
    const resourceId = req.params[resourceIdParam];
    req.resource = {
      type: resourceType,
      id: resourceId,
    };
    next();
  };
}