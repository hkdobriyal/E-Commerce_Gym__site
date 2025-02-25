// // gym-supplements-backend\src\middleware\authMiddleware.ts
// import { Request, Response, NextFunction } from "express";
// import jwt from "jsonwebtoken";

// export const protect = (req: Request, res: Response, next: NextFunction) => {
//   const token = req.header("Authorization")?.split(" ")[1];

//   if (!token) return res.status(401).json({ message: "Unauthorized access" });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: number };
//     (req as any).userId = decoded.id;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: "Invalid token" });
//   }
// };

// E-Commerce_Gym__site\gym-supplements-backend\src\middleware\authMiddleware.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import pool from "../config/db";

interface AuthenticatedRequest extends Request {
  user?: any;
}

export const protect = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);

      const [rows]: any = await pool.query("SELECT id, uname, email FROM users WHERE id = ?", [decoded.id]);

      if (rows.length === 0) {
        res.status(401).json({ message: "User not found" });
        return;
      }

      req.user = rows[0];

      next(); // Ensure next() is called if authentication succeeds
      return;
    } catch (error) {
      console.error("Error in protect middleware:", error);
      res.status(401).json({ message: "Invalid token" });
      return;
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token" });
    return;
  }
};
