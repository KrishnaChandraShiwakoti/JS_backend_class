import { z } from "zod";
export const ProductSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Name is required").default("Unnamed Product"),
  price: z.number().min(0, "Price is required"),
  category: z.string().optional().default("Unknown Product"),
});

export type Product = z.infer<typeof ProductSchema>;
