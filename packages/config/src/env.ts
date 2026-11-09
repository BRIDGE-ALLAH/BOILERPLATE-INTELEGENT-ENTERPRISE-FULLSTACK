// Centralized environment configuration with Zod validation
import { z } from 'zod';

// Dev JWT secret generation (never use in production)
function getDevJWTSecret(): string {
  return Math.random().toString(36).substring(2, 34);
}

// Zod schema for environment variables
const envSchema = z.object({
  // Server
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().default(3000),
  HOST: z.string().default('0.0.0.0'),

  // API
  API_PREFIX: z.string().default('/api/v1'),
  API_VERSION: z.string().default('v1'),

  // CORS
  CORS_ORIGIN: z.string().default('http://localhost:3000'),
  CORS_CREDENTIALS: z.coerce.boolean().default(true),

  // Logging
  LOG_LEVEL: z.enum(['debug', 'info', 'warn', 'error']).default('info'),

  // Auth
  JWT_SECRET: z.string().min(1, 'JWT_SECRET is required').optional(),
  JWT_EXPIRATION: z.string().default('24h'),

  // Database
  DATABASE_URL: z.string().url('DATABASE_URL must be a valid URL').optional(),

  // Frontend
  NEXT_PUBLIC_API_URL: z.string().url().default('http://localhost:3000'),
  NEXT_PUBLIC_APP_NAME: z.string().default('MOONWITNESS'),
  NEXT_PUBLIC_APP_SHORT_NAME: z.string().default('MOON'),
  NEXT_PUBLIC_APP_DESCRIPTION: z.string().default('Enterprise Intelligent Fullstack Boilerplate'),
  NEXT_PUBLIC_PRIMARY_COLOR: z.string().default('#0ea5e9'),
  NEXT_PUBLIC_SECONDARY_COLOR: z.string().default('#a855f7'),
  NEXT_PUBLIC_DOCS_URL: z.string().url().optional(),
  NEXT_PUBLIC_SUPPORT_URL: z.string().url().optional(),
  NEXT_PUBLIC_CONTACT_EMAIL: z.string().email().optional(),
  NEXT_PUBLIC_COMPANY_NAME: z.string().optional(),
  NEXT_PUBLIC_COPYRIGHT: z.string().optional(),
  NEXT_PUBLIC_LOGO_LIGHT: z.string().optional(),
  NEXT_PUBLIC_LOGO_DARK: z.string().optional(),
  NEXT_PUBLIC_FAVICON: z.string().optional(),

  // Observability
  SENTRY_DSN: z.string().url().optional(),
  SENTRY_ENVIRONMENT: z.string().default('development'),

  // Rate limiting
  RATE_LIMIT_IP: z.coerce.number().default(100),
  RATE_LIMIT_AUTH: z.coerce.number().default(10),
  RATE_LIMIT_UPLOAD: z.coerce.number().default(5),

  // Docker compose
  POSTGRES_DB: z.string().default('moonwitness'),
  POSTGRES_USER: z.string().default('moonwitness'),
  POSTGRES_PASSWORD: z.string().default('moonwitness'),
  POSTGRES_PORT: z.coerce.number().default(5433),

  REDIS_PORT: z.coerce.number().default(6379),
  REDIS_COMMANDER_PORT: z.string().transform((val) => parseInt(val, 10)).default(8081),

  PGADMIN_EMAIL: z.string().email().default('admin@moonwitness.dev'),
  PGADMIN_PASSWORD: z.string().default('admin123'),
  PGADMIN_PORT: z.coerce.number().default(5050),
});

// Parse and validate environment
const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  const missing = Object.keys(parsedEnv.error.flatten().fieldErrors);
  throw new Error(
    `Invalid environment variables: ${missing.join(', ')}. Check .env and .env.example.`
  );
}

const env = parsedEnv.data as z.infer<typeof envSchema>;

// Ensure JWT_SECRET is set in production
if (env.NODE_ENV === 'production' && !env.JWT_SECRET) {
  throw new Error('JWT_SECRET is required in production - set at build time');
}

export type Environment = z.infer<typeof envSchema>;
export { env };
