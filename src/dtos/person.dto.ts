import { z } from "zod";
import { PersonSchema } from "../types/person.type";

//DTO- data transfer object (can be any input/output to client)
export const CreatePersonDTO = PersonSchema.omit({ id: true });
export const UpdatePersonDTO = PersonSchema.omit({ id: true });
//for create id is not required
export type CreatePersonDTO = z.infer<typeof CreatePersonDTO>;
export type UpdatePersonDTO = z.infer<typeof UpdatePersonDTO>;
