import { Request, Response } from "express";
import { CreateProductDTO, UpdateProductDTO } from "../dtos/product.dto";
import { HttpException } from "../exceptions/http-exception";
import z, { string } from "zod";
import { products } from "../models/product.model";

export class ProductController {
  async createProduct(req: Request, res: Response) {
    const parseResult = CreateProductDTO.safeParse(req.body);
    if (!parseResult.success) {
      throw new HttpException(400, z.prettifyError(parseResult.error));
    }
    const { name, price, category } = req.body;
    const newProduct = {
      id: `${products.length + 1}`,
      name,
      price,
      ...(category && { category }),
    };
    products.push(newProduct);
    res.status(200).json(newProduct);
  }

  async updateProduct(req: Request, res: Response) {
    const parseResult = UpdateProductDTO.safeParse(req.body);
    if (!parseResult.success) {
      throw new HttpException(400, z.prettifyError(parseResult.error));
    }
    const { id } = req.params;
    const { name, price, category } = req.body;

    const productIndex = products.findIndex((p) => p.id === id);

    if (productIndex == null || productIndex == -1)
      return res.status(404).json({ message: "Product not found" });
    const updatedProduct = {
      name: name,
      price: price,
      ...(category && { category }), //only add if exists
    };
    products[productIndex] = { ...products[productIndex], ...updatedProduct };
    res.status(200).json(products[productIndex]);
  }
}
