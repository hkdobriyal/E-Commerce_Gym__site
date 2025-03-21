// gym-supplements-backend\src\routes\orderRoutes.ts
import express from "express";
import { createOrder, getOrdersByUser ,updateOrderStatus  } from "../controllers/orderController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/", protect, createOrder);
router.get("/user/:userId", protect, getOrdersByUser);
router.put('/update-status', protect, updateOrderStatus);

export default router;
