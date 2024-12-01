import express from "express";
import { getAllProducts } from "../controllers/product.controller.js";
const router = express.Router();

router.get("/products",getAllProducts)

export default router;