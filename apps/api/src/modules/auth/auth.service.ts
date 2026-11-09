import { PrismaClient, User, Account } from '@prisma/client';
import { sign, verify } from 'jsonwebtoken';
import { ERROR_CODES } from '@repo/constants';

const prisma = new PrismaClient();

interface JWTPayload {
  userId: string;
  email: string;
  iat?: number;
  exp?: number;
}

export class AuthService {
  static async validateUser(email: string, password: string): Promise<User | null> {
    // TODO: Implement real password verification
    // For now, find user by email
    const user = await prisma.user.findUnique({
      where: { email },
      include: { accounts: true },
    });

    if (!user) return null;

    // Placeholder: return user without password check
    // In production, use bcrypt or similar for password verification
    return user;
  }

  static async login(user: User): Promise<{ token: string; user: Omit<User, 'password'> }> {
    const payload: JWTPayload = {
      userId: user.id,
      email: user.email,
    };

    const token = sign(payload, process.env.JWT_SECRET || 'secret', {
      expiresIn: process.env.JWT_EXPIRATION || '24h',
    });

    const { password, ...userWithoutPass } = user as any;
    return { token, user: userWithoutPass };
  }

  static async verifyToken(token: string): Promise<JWTPayload | null> {
    try {
      const decoded = verify(token, process.env.JWT_SECRET || 'secret') as JWTPayload;
      return decoded;
    } catch {
      return null;
    }
  }

  static async getUserById(userId: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { id: userId },
      include: { accounts: true, sessions: true },
    });
  }

  static async createAccount(
    userId: string,
    provider: string,
    providerAccountId: string,
    type: string,
    token?: string,
    refreshToken?: string,
    expires_at?: number,
    tokenType?: string,
    scope?: string,
    idToken?: string,
    sessionState?: string
  ): Promise<Account> {
    return prisma.account.create({
      data: {
        userId,
        provider,
        providerAccountId,
        type,
        ...(token && { token }),
        ...(refreshToken && { refresh_token: refreshToken }),
        ...(expires_at && { expires_at }),
        ...(tokenType && { token_type: tokenType }),
        ...(scope && { scope }),
        ...(idToken && { id_token: idToken }),
        ...(sessionState && { session_state: sessionState }),
      },
    });
  }
}