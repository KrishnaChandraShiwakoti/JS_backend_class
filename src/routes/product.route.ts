import { Router } from "express";
import { ProductController } from "../controllers/product.controller";
const productController = new ProductController();

const router = Router();

router.post("/", productController.createProduct);
router.put("/:id", productController.updateProduct);

export default router;
