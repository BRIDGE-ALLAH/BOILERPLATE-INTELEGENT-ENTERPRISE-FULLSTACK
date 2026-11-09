 import { env } from './env';
 
 // Fastify app configuration
 export const fastifyConfig = {
   logger: env.NODE_ENV === 'development' ? true : false,
   requestLog: true,
 };
 
 // CORS configuration
 export const corsConfig = {
   origin: env.CORS_ORIGIN.split(','),
   credentials: env.CORS_CREDENTIALS,
   methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
   allowedHeaders: ['Content-Type', 'Authorization'],
 };
 
 // Swagger/OpenAPI configuration
 export const swaggerConfig = {
   swagger: {
     info: {
       title: 'MOONWITNESS API',
       description: 'Enterprise REST API',
       version: env.API_VERSION,
     },
     servers: [
       {
         url: `http://${env.HOST}:${env.PORT}`,
         description: `${env.NODE_ENV} Server`,
       },
     ],
     schemes: ['http'],
     consumes: ['application/json'],
     produces: ['application/json'],
   },
 };
 
 // Next.js app configuration
 export const nextConfig = {
   images: {
     domains: ['localhost'],
   },
   experimental: {
     appDir: true,
   },
 };
