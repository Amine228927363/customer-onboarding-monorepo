import { buildJsonSchemas } from 'fastify-zod';
import { z } from 'zod';

const userCore = {
  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Invalid email',
    })
    .email(),
  username: z.string(),
};

const createUserSchema = z.object({
  id: z.number(),
  ...userCore,
  password: z
    .string({
      required_error: 'Password is required',
      invalid_type_error: 'Invalid password',
    })
    .min(8)
    .max(1024),
});

const createUserResponseSchema = z.object({
  ...userCore,
});

export type createUserInput = z.infer<typeof createUserSchema>;
export const { schemas: userSchemas, $ref } = buildJsonSchemas({
  createUserSchema,
  createUserResponseSchema,
});
