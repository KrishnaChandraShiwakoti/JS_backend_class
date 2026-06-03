import { UserSchema } from "../types/user.type";

import { z } from "zod";

export const CreateUserDto = UserSchema.pick({
  firstName: true,
  lastName: true,
  email: true,
  username: true,
  password: true,
});

export const LoginUserDto = UserSchema.pick({
  email: true,
  password: true,
});

export type CreateUserDto = z.infer<typeof CreateUserDto>;
export type LoginUserDto = z.infer<typeof LoginUserDto>;
