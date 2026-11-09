// @repo/ubme-core - Rate Limiting & Throttling
import { FastifyPluginAsync } from 'fastify';
import redisClient from './redis';

export const rateLimitPlugin: FastifyPluginAsync = async (fastify, options) => {
  // Rate limiting configuration
  const defaultConfig = {
    max: 100,          // max requests per IP per time window
    timeWindow: '1 minute', // time window for rate limiting
    message: 'Too many requests, please try again later',
    standardHeaders: true, // Return rate limit headers in the response
    legacyHeaders: false, // Disable legacy headers
  };

  // Merge user-provided config with defaults
  const config = { ...options, ...defaultConfig };

  // Apply rate limiting to all routes
  fastify.addHook('onRequest', async (request, reply) => {
    if (request.method === 'OPTIONS') {
      // Allow OPTIONS requests without rate limiting
      return;
    }

    const ip = request.ip;
    const cacheKey = `${ip}_${request.method}_${request.url}`;

    // Check if rate limit has been exceeded
    const count = await redisClient.get(cacheKey);
    const current = count ? Number(count) : 0;
    if (current >= config.max) {
      return reply.code(429).send(config.message);
    }

    // Increment count with TTL
    await redisClient.setEx(cacheKey, 60, String(current + 1));
    reply.header('RateLimit-Limit', config.max);
    reply.header('RateLimit-Remaining', config.max - current - 1);
    reply.header('RateLimit-Reset', '60');
  });
};

export default rateLimitPlugin;