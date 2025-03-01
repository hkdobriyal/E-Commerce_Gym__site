import { Request, Response, RequestHandler } from "express";
import pool from "../config/db";

// Create a new order
export const createOrder: RequestHandler = async (req, res): Promise<void> => {
  const { userId, items, total } = req.body;

  try {
    const [orderResult]: any = await pool.query(
      "INSERT INTO orders (user_id, total, status) VALUES (?, ?, 'Pending')",
      [userId, total]
    );

    const orderId = orderResult.insertId;

    for (const item of items) {
      await pool.query(
        "INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)",
        [orderId, item.productId, item.quantity, item.price]
      );
    }

    res.status(201).json({ message: "Order created successfully", orderId });
  } catch (error) {
    console.error("Error in createOrder:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get orders by user ID
export const getOrdersByUser: RequestHandler = async (req, res): Promise<void> => {
  const { userId } = req.params;

  try {
    const [orders]: any = await pool.query(
      "SELECT * FROM orders WHERE user_id = ?",
      [userId]
    );

    res.status(200).json(orders);
  } catch (error) {
    console.error("Error in getOrdersByUser:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Add more order-related functions as needed
