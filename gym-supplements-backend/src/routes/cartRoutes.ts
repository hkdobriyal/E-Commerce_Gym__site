import express from "express";
import { addToCart, getCartItems, removeFromCart } from "../controllers/cartController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/", protect, addToCart);
router.get("/:userId", protect, getCartItems);
router.delete("/", protect, removeFromCart);

export default router;
