import { UserSchema } from "../types/user.type";

import { z } from "zod";
import { CreatePersonDTO } from "./person.dto";

export const CreateUserDto = UserSchema.pick({
  firstName: true,
  lastName: true,
  email: true,
  username: true,
  password: true,
});
export type CreateUserDto = z.infer<typeof CreateUserDto>;
