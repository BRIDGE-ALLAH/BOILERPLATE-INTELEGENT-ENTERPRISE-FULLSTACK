import fastify from 'fastify';
import fastifyCors from '@fastify/cors';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import { env, corsConfig, swaggerConfig, API_PREFIX } from '@repo/config';
import { healthController } from './modules/health/health.controller.js';
import { usersController } from './modules/users/users.controller.js';
import { authController } from './modules/auth/auth.controller.js';
import { setupErrorHandling, registerAuthPlugin, correlationIdMiddleware } from './core/middleware';
import { logger } from './core/logging';
import { initObservability } from './core/observability';
import { rateLimitPlugin } from '@repo/ubme-core/src/rate-limit';
import { securityHeadersPlugin } from '@repo/ubme-core/src/security-headers';

initObservability();

const fastifyConfig = {
  logger: env.NODE_ENV === 'development',
};

const app = fastify(fastifyConfig);

// Setup centralized error handling
setupErrorHandling(app);

// Apply correlation ID middleware for request tracking
app.use(correlationIdMiddleware());

// Apply rate limiting
await app.register(rateLimitPlugin);

// Apply security headers
await app.register(securityHeadersPlugin);

// Plugins
await app.register(fastifyCors, corsConfig);
await app.register(fastifySwagger, swaggerConfig);
await app.register(fastifySwaggerUi, { routePrefix: '/docs' });

// Register authentication plugin (protects all routes except public ones)
await registerAuthPlugin(app);

// Controllers (routes) with error handling wrapper
await app.register(healthController, { prefix: API_PREFIX });
await app.register(usersController, { prefix: API_PREFIX });
await app.register(authController, { prefix: API_PREFIX });