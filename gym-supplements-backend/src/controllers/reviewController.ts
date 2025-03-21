// src/controllers/reviewController.ts
import { Request, Response } from 'express';
import pool from '../config/db';

export const createReview = async (req: Request, res: Response) => {
  const { userId, productId, rating, comment } = req.body;

  try {
    await pool.query(
      'INSERT INTO reviews (user_id, product_id, rating, comment) VALUES (?, ?, ?, ?)',
      [userId, productId, rating, comment]
    );

    res.status(201).json({ message: 'Review created successfully' });
  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
