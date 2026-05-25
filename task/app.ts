// Like the app.ts make the following api endpoinds for the products.

// type Product = {
//     id: number;
//     name: string;
//     price: number;
//     category?: string;
// }
// const products: Product[] = [];
// task fill this products array with 5 products
// 1. Make all 5 api endpoints for products
// On create and update, request.body, if name and price is not provided
// default to "Unknown Product" and 0 respectively
// On each find query, if not found return 404 with message "Product not found"

// Add/Test these endpoints in Postman

import express, { Application, Request, Response } from "express";

const app: Application = express();
app.use(express.json()); //use json as request
app.use(express.urlencoded({ extended: true })); //use form-urlencoded as request

type Product = {
  id: number;
  name: string;
  price: number;
  category?: string;
};

const products: Product[] = [
  { id: 1, name: "lenovo", price: 200000, category: "Tech" },
  {
    id: 2,
    name: "Tuff gaming 15",
    price: 200000,
  },
  {
    id: 3,
    name: "LOQ 15",
    price: 150000,
  },
  {
    id: 4,
    name: "Ideapad",
    price: 80000,
  },
  {
    id: 5,
    name: "Predator",
    price: 220000,
  },
];

// Get all Products
app.get("/api/products", (req: Request, res: Response) => {
  try {
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Internal server Error" });
  }
});
// get Product by id
app.get("/api/products/:id", (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const productIndex = products.findIndex(
      (p) => p.id === parseInt(id as string),
    );
    console.log(productIndex);

    if (productIndex == null || productIndex == -1)
      return res.status(404).json({ message: "Product not found" });
    res.status(200).json(products[productIndex]);
  } catch (error) {
    res.status(500).json({ message: "Internal server Error" });
  }
});
// Create Product
const PORT: number = 3000;
app.post("/api/products", (req: Request, res: Response) => {
  try {
    const { name, price, category } = req.body;
    const newProduct: Product = {
      id: products.length + 1,
      name: name || "Unknown",
      price: price || 0,
      ...(category && { category }), // only add if exists
    };
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Internal server Error" });
  }
});

app.put("/api/products/:id", (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, price, category } = req.body;

    const productIndex = products.findIndex(
      (p) => p.id === parseInt(id as string),
    );

    if (productIndex == null || productIndex == -1)
      return res.status(404).json({ message: "Product not found" });
    const updatedProduct = {
      name: name || "Unknown",
      price: price || 0,
      ...(category && { category }), //only add if exists
    };
    products[productIndex] = { ...products[productIndex], ...updatedProduct };
    res.status(200).json(products[productIndex]);
  } catch (error) {
    res.status(500).json({ message: "Internal server Error" });
  }
});

app.delete("/api/products/:id", (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const productIndex = products.findIndex(
      (p) => p.id === parseInt(id as string),
    );

    if (productIndex == null || productIndex == -1)
      return res.status(404).json({ message: "Product not found" });
    products.splice(productIndex, 1);
    res.status(200).json({ message: "Product deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server Error" });
  }
});
