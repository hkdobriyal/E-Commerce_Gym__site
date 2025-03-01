// // E-Commerce_Gym__site\gym-supplements-backend\src\app.ts
// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import helmet from "helmet";
// import morgan from "morgan";
// import authRoutes from "./routes/authRoutes";
// import productRoutes from "./routes/productRoutes";
// import cartRoutes from "./routes/cartRoutes";
// import orderRoutes from "./routes/orderRoutes";


// dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(cors());
// app.use(helmet());
// app.use(morgan("dev"));
// import pool from "./config/db";

// app.use("/api/auth", authRoutes);
// app.use("/api/products", productRoutes);
// app.use("/api/cart", cartRoutes);
// app.use("/api/orders", orderRoutes);

// pool.getConnection()
//   .then((conn) => {
//     console.log("✅ MySQL Database Connected!");
//     conn.release();
//   })
//   .catch((err) => {
//     console.error("❌ MySQL Connection Failed:", err);
//   });
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// gym-supplements-backend\src\app.ts
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import authRoutes from "./routes/authRoutes";
import productRoutes from "./routes/productRoutes";
import orderRoutes from "./routes/orderRoutes";
import cartRoutes from "./routes/cartRoutes";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
import pool from "./config/db";

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/cart", cartRoutes);

pool.getConnection()
  .then((conn) => {
    console.log("✅ MySQL Database Connected!");
    conn.release();
  })
  .catch((err) => {
    console.error("❌ MySQL Connection Failed:", err);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
