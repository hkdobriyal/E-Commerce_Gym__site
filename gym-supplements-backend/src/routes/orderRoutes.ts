import express from "express";
import { createOrder, getOrdersByUser } from "../controllers/orderController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/", protect, createOrder);
router.get("/user/:userId", protect, getOrdersByUser);

export default router;
