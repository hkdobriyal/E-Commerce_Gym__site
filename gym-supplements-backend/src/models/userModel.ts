// import db from "../config/db";

// export const findUserByEmail = async (email: string) => {
//   const [rows]: any = await db.execute("SELECT * FROM users WHERE email = ?", [email]);
//   return rows[0];
// };

// export const createUser = async (name: string, email: string, password: string) => {
//   await db.execute("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, password]);
// };

// E-Commerce_Gym__site\gym-supplements-backend\src\models\userModel.ts
export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
}
