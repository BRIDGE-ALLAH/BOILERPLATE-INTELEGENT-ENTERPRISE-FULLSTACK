// @repo/auth - JWT utilities

import { env } from '@repo/config';

export interface TokenPayload {
  userId: string;
  email: string;
  role?: string;
  iat?: number;
  exp?: number;
}

export enum UserRole {
  SUPER_ADMIN = 'super_admin',
  ADMIN = 'admin',
  MODERATOR = 'moderator',
  USER = 'user',
  GUEST = 'guest',
}

export enum Permission {
  USER_READ = 'user:read',
  USER_WRITE = 'user:write',
  USER_DELETE = 'user:delete',
  ADMIN_READ = 'admin:read',
  ADMIN_WRITE = 'admin:write',
  SYSTEM_CONFIG = 'system:config',
}

export class JwtService {
  private secret: string;
  private expiration: string;

  constructor() {
    this.secret = env.JWT_SECRET;
    this.expiration = env.JWT_EXPIRATION;
  }

  sign(payload: Omit<TokenPayload, 'iat' | 'exp'>): string {
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const now = Math.floor(Date.now() / 1000);
    const exp = now + this.parseExpiration(this.expiration);

    const data: TokenPayload = {
      ...payload,
      iat: now,
      exp,
    };

    const payloadStr = btoa(JSON.stringify(data));
    const signature = btoa(`${header}.${payloadStr}.${this.secret}`);

    return `${header}.${payloadStr}.${signature}`;
  }

  verify(token: string): TokenPayload | null {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) return null;

      const payloadStr = atob(parts[1]);
      const payload = JSON.parse(payloadStr) as TokenPayload;

      if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
        return null;
      }

      return payload;
    } catch {
      return null;
    }
  }

  private parseExpiration(exp: string): number {
    const match = exp.match(/^(\d+)([smhd])$/);
    if (!match) return 86400;

    const value = parseInt(match[1]);
    const unit = match[2];

    switch (unit) {
      case 's': return value;
      case 'm': return value * 60;
      case 'h': return value * 60 * 60;
      case 'd': return value * 60 * 60 * 24;
      default: return 86400;
    }
  }
}

export const jwtService = new JwtService();

// Extract token from Authorization header
export function extractTokenFromHeader(authHeader: string | undefined): string | null {
  if (!authHeader) return null;
  if (!authHeader.startsWith('Bearer ')) return null;
  return authHeader.slice(7);
}

// Check if user has role
export function hasRole(user: TokenPayload, allowedRoles: string[]): boolean {
  if (!user.role) return false;
  return allowedRoles.includes(user.role);
}

// Check if user has permission
export function hasPermission(user: TokenPayload, requiredPermissions: string[]): boolean {
  if (!user.role) return false;

  // Admin has all permissions
  if (user.role === UserRole.ADMIN || user.role === UserRole.SUPER_ADMIN) {
    return true;
  }

  // Map roles to permissions (simplified)
  const rolePermissions: Record<string, string[]> = {
    [UserRole.USER]: [Permission.USER_READ],
    [UserRole.MODERATOR]: [Permission.USER_READ, Permission.USER_WRITE],
    [UserRole.ADMIN]: Object.values(Permission),
    [UserRole.SUPER_ADMIN]: Object.values(Permission),
  };

  const userPermissions = rolePermissions[user.role] || [];
  return requiredPermissions.every(perm => userPermissions.includes(perm));
}