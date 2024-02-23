import { FastifyInstance, RouteShorthandOptions } from 'fastify';
import { registerUserHandler, getAllUsersHandler, loginUserHandler } from './user.controllers';
import { createUserInput } from './user.schema';



export async function userRoutes(fastify: FastifyInstance) {
  fastify.post('/register', registerUserHandler);
  fastify.get('/users', getAllUsersHandler);
  fastify.post('/login', loginUserHandler);
}

export default userRoutes;
