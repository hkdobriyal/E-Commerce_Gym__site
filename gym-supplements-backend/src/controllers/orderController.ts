// // gym-supplements-backend\src\controllers\orderController.ts
// import { Request, Response, RequestHandler } from "express";
// import pool from "../config/db";
// import { updateStock } from '../controllers/productController';


// // Create a new order
// export const createOrder: RequestHandler = async (req, res): Promise<void> => {
//   const { userId, items, total } = req.body;

//   try {
//     const [orderResult]: any = await pool.query(
//       "INSERT INTO orders (user_id, total, status) VALUES (?, ?, 'Pending')",
//       [userId, total]
//     );

//     const orderId = orderResult.insertId;

//     for (const item of items) {
//       await pool.query(
//         "INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)",
//         [orderId, item.productId, item.quantity, item.price]
//       );
//       await updateStock(item.productId, item.quantity);
//     }

//     res.status(201).json({ message: "Order created successfully", orderId });
//   } catch (error) {
//     console.error("Error in createOrder:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Get orders by user ID
// export const getOrdersByUser: RequestHandler = async (req, res): Promise<void> => {
//   const { userId } = req.params;

//   try {
//     const [orders]: any = await pool.query(
//       "SELECT * FROM orders WHERE user_id = ?",
//       [userId]
//     );

//     res.status(200).json(orders);
//   } catch (error) {
//     console.error("Error in getOrdersByUser:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };


// export const updateOrderStatus = async (req: Request, res: Response) => {
//   const { orderId, status } = req.body;

//   try {
//     const [result]: any = await pool.query(
//       'UPDATE orders SET status = ? WHERE id = ?',
//       [status, orderId]
//     );

//     if (result.affectedRows === 0) {
//       return res.status(404).json({ message: 'Order not found' });
//     }

//     res.status(200).json({ message: 'Order status updated successfully' });
//   } catch (error) {
//     console.error('Error updating order status:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };



// src/controllers/orderController.ts
import { Request, Response, RequestHandler } from "express";
import pool from "../config/db";
import { updateStock } from '../controllers/productController';

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
      await updateStock(item.productId, item.quantity);
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

export const updateOrderStatus: RequestHandler = async (req, res): Promise<void> => {
  const { orderId, status } = req.body;

  try {
    const [result]: any = await pool.query(
      'UPDATE orders SET status = ? WHERE id = ?',
      [status, orderId]
    );

    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Order not found' });
      return;
    }

    res.status(200).json({ message: 'Order status updated successfully' });
  } catch (error) {
    console.error('Error updating order status:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
