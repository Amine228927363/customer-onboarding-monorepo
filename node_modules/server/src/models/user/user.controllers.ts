import Fastify,{ FastifyReply, FastifyRequest } from "fastify";
import { createUser, getUsers } from "./user.service";
import { createUserInput } from "./user.schema";
// Handler pour l'enregistrement d'un utilisateur
export async function registerUserHandler(request: FastifyRequest<{ Body: createUserInput }>, reply: FastifyReply) {
  const body = request.body;

  try {
    const user = await createUser(body);
    reply.status(201).send({ message: "User created successfully", data: user });
  } catch (error) {
    reply.status(400).send({ error: "Error creating user" });
  }
}

// Handler pour obtenir tous les utilisateurs
export async function getAllUsersHandler(req:FastifyRequest, reply: FastifyReply) {
  try {
    const users = await getUsers();
    reply.send(users);
  } catch (error) {
    reply.status(500).send({ error: "Error fetching users" });
  }
}

// Handler pour la connexion d'un utilisateur
export async function loginUserHandler(req: FastifyRequest, reply: FastifyReply) {
  try {
    reply.send({ message: "User logged in successfully" });
  } catch (error) {
    reply.status(401).send({ error: "Unauthorized" });
  }
}
