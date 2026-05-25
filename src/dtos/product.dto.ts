import { z } from "zod";
import { ProductSchema } from "../types/product.type";

//DTO- data transfer object (can be any input/output to client)
export const CreateProductDTO = ProductSchema.omit({ id: true });
//for create id is not required
export type CreateProductDTO = z.infer<typeof CreateProductDTO>;

export const UpdateProductDTO = ProductSchema.partial();
export type UpdateProductDTO = z.infer<typeof UpdateProductDTO>;
