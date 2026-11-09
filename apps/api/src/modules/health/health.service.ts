import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class HealthService {
  static async check() {
    const uptime = process.uptime();
    const memory = process.memoryUsage();

    // Check database connectivity
    try {
      await prisma.$queryRaw`SELECT 1`;
      const db = 'healthy';
      return {
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: Math.round(uptime),
        memory,
        database: db,
      };
    } catch {
      const db = 'unhealthy';
      return {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        uptime: Math.round(uptime),
        memory,
        database: db,
      };
    }
  }
}