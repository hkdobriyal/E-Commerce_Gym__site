// import { Request, Response } from "express";
// import pool from "../config/db";
// import { Product } from "../models/productModel";

// export const getAllProducts = async (_req: Request, res: Response) => {
//   try {
//     const [products] = await pool.query("SELECT * FROM products");
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };


// gym-supplements-backend\src\controllers\productController.ts
import { Request, Response, RequestHandler } from "express";
import pool from "../config/db";

// Get all products with details
export const getProducts: RequestHandler = async (req, res): Promise<void> => {
  try {
    const [products]: any = await pool.query("SELECT * FROM products");
    res.status(200).json(products);
  } catch (error) {
    console.error("Error in getProducts:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get product by ID with details
export const getProductById: RequestHandler = async (req, res): Promise<void> => {
  const { id } = req.params;

  try {
    const [products]: any = await pool.query("SELECT * FROM products WHERE id = ?", [id]);

    if (products.length === 0) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    res.status(200).json(products[0]);
  } catch (error) {
    console.error("Error in getProductById:", error);
    res.status(500).json({ message: "Server error" });
  }
};


export const updateStock = async (productId: number, quantity: number) => {
  try {
    await pool.query(
      'UPDATE products SET stock = stock - ? WHERE id = ?',
      [quantity, productId]
    );
  } catch (error) {
    console.error('Error updating stock:', error);
    throw new Error('Stock update failed');
  }
};


export const searchProducts = async (req: Request, res: Response) => {
  const { query } = req.query;

  try {
    const [products]: any = await pool.query(
      'SELECT * FROM products WHERE name LIKE ?',
      [`%${query}%`]
    );

    res.status(200).json(products);
  } catch (error) {
    console.error('Error searching products:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
