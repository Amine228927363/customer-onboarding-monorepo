import bcrypt from "bcrypt";
import { hashPassword } from "../../utils/hash";
import prisma from "../../utils/prisma";
import { createUserInput } from "./user.schema";
export async function createUser(input: createUserInput) {
  const { password, ...rest } = input;
  const hashedPassword = await hashPassword(password);
  const user = await prisma.user.create({
    data: { ...rest, password: hashedPassword },
  });
  return user;
}
export async function getUsers() {
  const users = prisma.user.findMany();
  return users;
}
