import { PrismaClient, User } from '@prisma/client';
import type { CreateUserDto, UpdateUserDto } from '@repo/types';
import { ERROR_CODES } from '@repo/constants';

const prisma = new PrismaClient();

export class UserService {
  static async getAll(): Promise<User[]> {
    return prisma.user.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  static async create(data: CreateUserDto): Promise<User> {
    const user: User = {
      id: crypto.randomUUID(),
      name: data.name,
      email: data.email,
      emailVerified: null,
      image: null,
      accounts: [],
      sessions: [],
      createdAt: new Date().toISOString(),
    };
    return prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
      },
    });
  }

  static async getById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return user ?? null;
  }

  static async update(id: string, data: UpdateUserDto): Promise<User | null> {
    const existing = await prisma.user.findUnique({
      where: { id },
    });
    if (!existing) return null;

    return prisma.user.update({
      where: { id },
      data: {
        name: data.name,
        email: data.email,
        updatedAt: new Date().toISOString(),
      },
    });
  }

  static async delete(id: string): Promise<boolean> {
    const result = await prisma.user.delete({
      where: { id },
    });
    return !!result;
  }
}