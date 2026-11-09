"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateLimitPlugin = void 0;
const redis_1 = __importDefault(require("./redis"));
const rateLimitPlugin = async (fastify, options) => {
    // Rate limiting configuration
    const defaultConfig = {
        max: 100, // max requests per IP per time window
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
        const count = await redis_1.default.get(cacheKey);
        const current = count ? Number(count) : 0;
        if (current >= config.max) {
            return reply.code(429).send(config.message);
        }
        // Increment count with TTL
        await redis_1.default.setEx(cacheKey, 60, String(current + 1));
        reply.header('RateLimit-Limit', config.max);
        reply.header('RateLimit-Remaining', config.max - current - 1);
        reply.header('RateLimit-Reset', '60');
    });
};
exports.rateLimitPlugin = rateLimitPlugin;
exports.default = exports.rateLimitPlugin;
