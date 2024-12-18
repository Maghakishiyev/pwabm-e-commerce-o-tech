import express from "express";
import { getProducts } from "@/controllers/productController";
import { createProduct, updateProduct, deleteProduct } from "@/controllers/productController";
import { isAdmin } from "@/middleware/adminMiddleware";

const router = express.Router();

router.get("/products", getProducts);

router.post("/product", isAdmin, createProduct);

router.put("/product/:id", isAdmin, updateProduct);

router.delete("/product/:id", deleteProduct);

export default router;
