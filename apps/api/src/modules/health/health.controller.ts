 import { FastifyInstance } from 'fastify';
 import { HealthService } from './health.service.js';
 import { createSuccessResponse } from '@repo/utils';
 
 export async function healthController(app: FastifyInstance) {
   app.get('/health', async (req, rep) => {
     const data = HealthService.check();
     return rep.send(createSuccessResponse(data));
   });
 
   app.get('/health/live', async (req, rep) => {
     return rep.send(createSuccessResponse({ status: 'alive' }));
   });
 
   app.get('/health/ready', async (req, rep) => {
     return rep.send(createSuccessResponse({ ready: true }));
   });
 }
