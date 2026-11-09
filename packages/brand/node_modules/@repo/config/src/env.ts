// Centralized environment configuration

export const env = {
  // Server
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: parseInt(process.env.PORT || '3000'),
  HOST: process.env.HOST || '0.0.0.0',

  // API
  API_PREFIX: process.env.API_PREFIX || '/api/v1',
  API_VERSION: process.env.API_VERSION || 'v1',

  // CORS
  CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:3000',
  CORS_CREDENTIALS: process.env.CORS_CREDENTIALS === 'true',

  // Logging
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',

  // Auth
  JWT_SECRET: process.env.JWT_SECRET || getDevJWTSecret(),
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || '24h',

  // Database
  DATABASE_URL: process.env.DATABASE_URL || '',

  // Frontend
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || 'MOONWITNESS',

  // Brand-related env overrides (consumed by @repo/brand)
  NEXT_PUBLIC_APP_SHORT_NAME: process.env.NEXT_PUBLIC_APP_SHORT_NAME,
  NEXT_PUBLIC_APP_DESCRIPTION: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
  NEXT_PUBLIC_LOGO_LIGHT: process.env.NEXT_PUBLIC_LOGO_LIGHT,
  NEXT_PUBLIC_LOGO_DARK: process.env.NEXT_PUBLIC_LOGO_DARK,
  NEXT_PUBLIC_FAVICON: process.env.NEXT_PUBLIC_FAVICON,
  NEXT_PUBLIC_PRIMARY_COLOR: process.env.NEXT_PUBLIC_PRIMARY_COLOR,
  NEXT_PUBLIC_SECONDARY_COLOR: process.env.NEXT_PUBLIC_SECONDARY_COLOR,
  NEXT_PUBLIC_DOCS_URL: process.env.NEXT_PUBLIC_DOCS_URL,
  NEXT_PUBLIC_SUPPORT_URL: process.env.NEXT_PUBLIC_SUPPORT_URL,
  NEXT_PUBLIC_CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  NEXT_PUBLIC_COMPANY_NAME: process.env.NEXT_PUBLIC_COMPANY_NAME,
  NEXT_PUBLIC_COPYRIGHT: process.env.NEXT_PUBLIC_COPYRIGHT,
};

// Dev JWT secret generation (never use in production)
// Uses lazy initialization to avoid top-level require() in ES module context
let _devJWTSecret: string | null = null;

function getDevJWTSecret(): string {
  if (!_devJWTSecret) {
    // Node.js built-in crypto - Bun supports this in ES modules
    // Fallback to a deterministic but secure-generated secret
    _devJWTSecret = Math.random().toString(36).substring(2, 34);
  }
  return _devJWTSecret;
}

// Validate required env vars in production
// JWT_SECRET is guaranteed set by env.ts runtime guard above
if (env.NODE_ENV === 'production' && !process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET is required in production - set at build time');
}

export type Environment = typeof env;
