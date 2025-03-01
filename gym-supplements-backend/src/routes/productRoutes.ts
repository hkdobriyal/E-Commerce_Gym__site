// gym-supplements-backend\src\routes\productRoutes.ts
import express from "express";
import { getProducts, getProductById } from "../controllers/productController";
import pool from "../config/db";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById);

router.post("/insert", async (req, res) => {
  const products = [
    { name: "Protein Powder", category: "Supplements", price: 29.99, stock: 50 },
    { name: "Vitamin C", category: "Vitamins", price: 9.99, stock: 100 },
    { name: "Yoga Mat", category: "Accessories", price: 19.99, stock: 30 },
  ];

  try {
    for (const product of products) {
      await pool.query(
        "INSERT INTO products (name, category, price, stock) VALUES (?, ?, ?, ?)",
        [product.name, product.category, product.price, product.stock]
      );
    }
    res.status(201).json({ message: "Products inserted successfully" });
  } catch (error) {
    console.error("Error inserting products:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
