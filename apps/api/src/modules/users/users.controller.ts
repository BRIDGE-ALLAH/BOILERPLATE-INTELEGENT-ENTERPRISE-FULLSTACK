import { FastifyInstance } from 'fastify';
import { UserService } from './user.service.js';
import {
  createSuccessResponse,
  createErrorResponse,
  paginate,
  getPaginationParams,
} from '@repo/utils';
import type { CreateUserDto, UpdateUserDto } from '@repo/types';
import { ERROR_CODES } from '@repo/constants';

export async function usersController(app: FastifyInstance) {
  app.get('/users', async (req, rep) => {
    const { page, pageSize } = getPaginationParams(
      req.query as Record<string, unknown>
    );
    const all = await UserService.getAll();
    const paginatedList = paginate(all, page, pageSize);
    return rep.send(createSuccessResponse(paginatedList));
  });

  app.post<{ Body: CreateUserDto }>('/users', async (req, rep) => {
    const data = await UserService.create(req.body);
    return rep.status(201).send(createSuccessResponse(data));
  });

  app.get<{ Params: { id: string } }>('/users/:id', async (req, rep) => {
    const data = await UserService.getById(req.params.id);
    if (!data) {
      return rep
        .status(404)
        .send(createErrorResponse(ERROR_CODES.NOT_FOUND, 'User not found'));
    }
    return rep.send(createSuccessResponse(data));
  });

  app.put<{ Params: { id: string }; Body: UpdateUserDto }>(
    '/users/:id',
    async (req, rep) => {
      const data = await UserService.update(req.params.id, req.body);
      if (!data) {
        return rep
          .status(404)
          .send(createErrorResponse(ERROR_CODES.NOT_FOUND, 'User not found'));
      }
      return rep.send(createSuccessResponse(data));
    }
  );

  app.delete<{ Params: { id: string } }>('/users/:id', async (req, rep) => {
    const success = await UserService.delete(req.params.id);
    if (!success) {
      return rep
        .status(404)
        .send(createErrorResponse(ERROR_CODES.NOT_FOUND, 'User not found'));
    }
    return rep.status(204).send();
  });
}