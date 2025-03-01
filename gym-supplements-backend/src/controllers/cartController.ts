import { Request, Response, RequestHandler } from "express";
import pool from "../config/db";

// Add item to cart
export const addToCart: RequestHandler = async (req, res): Promise<void> => {
  const { userId, productId, quantity } = req.body;

  try {
    const [result]: any = await pool.query(
      "INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE quantity = quantity + VALUES(quantity)",
      [userId, productId, quantity]
    );

    res.status(201).json({ message: "Item added to cart successfully" });
  } catch (error) {
    console.error("Error in addToCart:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get cart items for a user
export const getCartItems: RequestHandler = async (req, res): Promise<void> => {
  const { userId } = req.params;

  try {
    const [cartItems]: any = await pool.query(
      `
      SELECT c.id, c.quantity, p.name, p.price
      FROM cart c
      JOIN products p ON c.product_id = p.id
      WHERE c.user_id = ?
      `,
      [userId]
    );

    res.status(200).json(cartItems);
  } catch (error) {
    console.error("Error in getCartItems:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Remove item from cart
export const removeFromCart: RequestHandler = async (req, res): Promise<void> => {
  const { userId, productId } = req.body;

  try {
    const [result]: any = await pool.query(
      "DELETE FROM cart WHERE user_id = ? AND product_id = ?",
      [userId, productId]
    );

    if (result.affectedRows === 0) {
      res.status(404).json({ message: "Item not found in cart" });
      return;
    }

    res.status(200).json({ message: "Item removed from cart successfully" });
  } catch (error) {
    console.error("Error in removeFromCart:", error);
    res.status(500).json({ message: "Server error" });
  }
};
