// @repo/ubme-core - Security Headers & Hardening
import { FastifyPluginAsync } from 'fastify';

export const securityHeadersPlugin: FastifyPluginAsync = async (fastify) => {
  // Security headers configuration
  const headers = {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-Content-Security-Policy': "default-src 'self'; script-src 'self' https://cdn.jsdelivr.net; script-src 'self' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; img-src 'self' data:; font-src 'self'; connect-src 'self' https://api.example.com; img-src 'self' data:; object-src 'none';",
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'geolocation=(), microphone=(), camera=(), payment=()',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    'Content-Security-Policy': "default-src 'self'; script-src 'self' https://cdn.jsdelivr.net; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; img-src 'self' data:; font-src 'self'; connect-src 'self' https://api.example.com; img-src 'self' data:; object-src 'none';",
    'Content-Security-Policy-Report-Only': "default-src 'self'; script-src 'self' https://cdn.jsdelivr.net; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; img-src 'self' data:; font-src 'self'; connect-src 'self' https://api.example.com; img-src 'self' data:; object-src 'none'; report-uri /csp-report",
  };

  // Apply security headers to all responses
  fastify.addHook('onSend', (request, reply, payload) => {
    for (const [key, value] of Object.entries(headers)) {
      payload.headers[key] = value;
    };
    return payload;
  });

  // Additional security middleware
  fastify.addHook('onRequest', async (request, reply, next) => {
    // Enforce HTTPS for production
    if (process.env.NODE_ENV === 'production' && !request.url.startsWith('https://')) {
      return reply.redirect(`https://${request.headers.host}${request.url}`);
    }
    next();
  });

  // Additional security headers for API endpoints
  fastify.addHook('onSend', (request, reply, payload) => {
    if (request.url.startsWith('/api/')) {
      payload.headers['X-Frame-Options'] = 'DENY';
      payload.headers['X-Content-Type-Options'] = 'nosniff';
    }
  });
};

export { securityHeadersPlugin };