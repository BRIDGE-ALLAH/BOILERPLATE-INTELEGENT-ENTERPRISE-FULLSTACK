import { FastifyInstance } from 'fastify';
import { AuthService } from './auth.service.js';
import { createSuccessResponse, createErrorResponse } from '@repo/utils';
import type { CreateUserDto } from '@repo/types';
import { ERROR_CODES, HTTP_STATUS } from '@repo/constants';
import { prisma } from '../core/index.js';

export async function authController(app: FastifyInstance) {
  // Login - public route (no auth required)
  app.post<{ Body: { email: string; password: string } }>('/auth/login', async (req, rep) => {
    const { email, password } = req.body;
    const user = await AuthService.validateUser(email, password);

    if (!user) {
      return rep
        .status(HTTP_STATUS.UNAUTHORIZED)
        .send(createErrorResponse(ERROR_CODES.UNAUTHORIZED, 'Invalid credentials'));
    }

    const { token, user: authenticatedUser } = await AuthService.login(user);
    return rep.send(createSuccessResponse({ token, user: authenticatedUser }));
  });

  // Signup - public route
  app.post<{ Body: CreateUserDto }>('/auth/signup', async (req, rep) => {
    const { email, name, password } = req.body;

    // Check if user already exists
    const emailExists = await prisma.user.findUnique({
      where: { email },
    });

    if (emailExists) {
      return rep
        .status(HTTP_STATUS.CONFLICT)
        .send(createErrorResponse(ERROR_CODES.CONFLICT, 'Email already registered'));
    }

    const user = await AuthService.createUser({ name, email, password });
    const { token, user: createdUser } = await AuthService.login(user);
    return rep.status(HTTP_STATUS.CREATED).send(createSuccessResponse({ token, user: createdUser }));
  });

  // Logout
  app.post('/auth/logout', async (req, rep) => {
    // TODO: Implement token revocation
    return rep.send(createSuccessResponse({ message: 'Logged out successfully' }));
  });

  // Get current user - protected route (auth plugin handles auth)
  app.get('/auth/me', async (req, rep) => {
    const user = (req as any).user;

    if (!user) {
      return rep
        .status(HTTP_STATUS.UNAUTHORIZED)
        .send(createErrorResponse(ERROR_CODES.UNAUTHORIZED, 'No authenticated user'));
    }

    const foundUser = await AuthService.getUserById(user.userId);

    if (!foundUser) {
      return rep
        .status(HTTP_STATUS.NOT_FOUND)
        .send(createErrorResponse(ERROR_CODES.NOT_FOUND, 'User not found'));
    }

    return rep.send(createSuccessResponse(foundUser));
  });
}