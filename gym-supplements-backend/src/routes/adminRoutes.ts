// src/routes/adminRoutes.ts
import express from 'express';
import { getUsers, getOrdersByUser } from '../controllers/adminController';
import { protect, admin } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/users', protect, admin, getUsers);
router.get('/orders', protect, admin, getOrdersByUser);

export default router;
