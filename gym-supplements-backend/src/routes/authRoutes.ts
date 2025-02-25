// // // // gym-supplements-backend\src\routes\authRoutes.ts
// // // import express from "express";
// // // import { register, login } from "../controllers/authController";

// // // const router = express.Router();

// // // router.post("/register", register);
// // // router.post("/login", login);

// // // export default router;

// // // gym-supplements-backend\src\routes\authRoutes.ts
// // import express from "express";
// // import { registerUser, loginUser } from "../controllers/authController";

// // const router = express.Router();

// // router.post("/register", registerUser);
// // router.post("/login", loginUser);

// // export default router;



// // gym-supplements-backend\src\routes\authRoutes.ts
// import express from "express";
// import { 
//   registerUser, 
//   loginUser, 
//   getUsers, 
//   getUserById, 
//   updateUser, 
//   deleteUser 
// } from "../controllers/authController";

// const router = express.Router();

// // Authentication routes
// router.post("/register", registerUser);
// router.post("/login", loginUser);

// // CRUD routes
// router.get("/users", getUsers);         // Get all users
// router.get("/users/:id", getUserById);  // Get user by ID
// router.put("/users/:id", updateUser);   // Update user
// router.delete("/users/:id", deleteUser); // Delete user

// export default router;



// gym-supplements-backend\src\routes\authRoutes.ts
import express from "express";
import { 
  registerUser, 
  loginUser, 
  getUsers, 
  getUserById, 
  updateUser, 
  deleteUser 
} from "../controllers/authController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

// Authentication routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// CRUD routes (Protected)
router.get("/users", protect, getUsers);         // Get all users (Requires auth)
router.get("/users/:id", protect, getUserById);  // Get user by ID (Requires auth)
router.put("/users/:id", protect, updateUser);   // Update user (Requires auth)
router.delete("/users/:id", protect, deleteUser); // Delete user (Requires auth)

export default router;
