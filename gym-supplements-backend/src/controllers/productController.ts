import { Request, Response } from "express";
import pool from "../config/db";
import { Product } from "../models/productModel";

export const getAllProducts = async (_req: Request, res: Response) => {
  try {
    const [products] = await pool.query("SELECT * FROM products");
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
