// // // ----------------------------------------------------------------------------------------------
// // // gym-supplements-backend\src\controllers\authController.ts
// import { Request, Response, RequestHandler } from "express";
// import bcrypt from "bcryptjs";
// import pool from "../config/db";
// import generateToken from "../utils/generateToken";

// // 📌 1️⃣ Register User (Create)
// export const registerUser: RequestHandler = async (req, res): Promise<void> => {
//   const { uname, email, password, phone_number, address } = req.body; // Include phone_number and address

//   try {
//     const [rows]: any = await pool.query("SELECT * FROM users WHERE email = ?", [email]);

//     if (rows.length > 0) {
//       res.status(400).json({ message: "User already exists" });
//       return;
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const [result]: any = await pool.query(
//       "INSERT INTO users (uname, email, password, phone_number, address) VALUES (?, ?, ?, ?, ?)",
//       [uname, email, hashedPassword, phone_number, address] // Include phone_number and address in the query
//     );

//     // Generate token for the newly registered user
//     const token = generateToken(result.insertId);

//     res.status(201).json({ message: "User registered successfully", token });
//   } catch (error) {
//     console.error("Error in registerUser:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // 📌 2️⃣ Login User (Fixing the missing function)
// export const loginUser: RequestHandler = async (req, res): Promise<void> => {
//   const { email, password } = req.body;

//   try {
//     const [rows]: any = await pool.query("SELECT * FROM users WHERE email = ?", [email]);

//     if (rows.length === 0) {
//       res.status(401).json({ message: "Invalid credentials" });
//       return;
//     }

//     const user = rows[0];

//     // Compare passwords
//     const validPassword = await bcrypt.compare(password, user.password);
//     if (!validPassword) {
//       res.status(401).json({ message: "Invalid credentials" });
//       return;
//     }

//     // Generate token
//     const token = generateToken(user.id);
//     res.json({ message: "Login successful", token });
//   } catch (error) {
//     console.error("Error in loginUser:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // 📌 3️⃣ Get All Users (Read) - Protected
// export const getUsers: RequestHandler = async (req, res): Promise<void> => {
//   try {
//     const [users]: any = await pool.query("SELECT id, uname, email, phone_number, address FROM users"); // Include phone_number and address
//     res.json(users);
//   } catch (error) {
//     console.error("Error in getUsers:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // 📌 4️⃣ Get User By ID (Read) - Protected
// export const getUserById: RequestHandler = async (req, res): Promise<void> => {
//   const { id } = req.params;

//   try {
//     const [users]: any = await pool.query("SELECT id, uname, email, phone_number, address FROM users WHERE id = ?", [id]); // Include phone_number and address

//     if (users.length === 0) {
//       res.status(404).json({ message: "User not found" });
//       return;
//     }

//     res.json(users[0]);
//   } catch (error) {
//     console.error("Error in getUserById:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // 📌 5️⃣ Update User (Update) - Protected
// export const updateUser: RequestHandler = async (req, res): Promise<void> => {
//   const { id } = req.params;
//   const { uname, email, phone_number, address } = req.body; // Include phone_number and address

//   try {
//     const [result]: any = await pool.query(
//       "UPDATE users SET uname = ?, email = ?, phone_number = ?, address = ? WHERE id = ?",
//       [uname, email, phone_number, address, id] // Include phone_number and address in the query
//     );

//     if (result.affectedRows === 0) {
//       res.status(404).json({ message: "User not found" });
//       return;
//     }

//     res.json({ message: "User updated successfully" });
//   } catch (error) {
//     console.error("Error in updateUser:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // 📌 6️⃣ Delete User (Delete) - Protected
// export const deleteUser: RequestHandler = async (req, res): Promise<void> => {
//   const { id } = req.params;

//   try {
//     const [result]: any = await pool.query("DELETE FROM users WHERE id = ?", [id]);

//     if (result.affectedRows === 0) {
//       res.status(404).json({ message: "User not found" });
//       return;
//     }

//     res.json({ message: "User deleted successfully" });
//   } catch (error) {
//     console.error("Error in deleteUser:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };


// gym-supplements-backend\src\controllers\authController.ts
import { Request, Response, RequestHandler } from "express";
import bcrypt from "bcryptjs";
import pool from "../config/db";
import generateToken from "../utils/generateToken";

// 📌 1️⃣ Register User (Create)
export const registerUser: RequestHandler = async (req, res): Promise<void> => {
  const { uname, email, password, phone_number, address } = req.body;

  try {
    const [rows]: any = await pool.query("SELECT * FROM users WHERE email = ?", [email]);

    if (rows.length > 0) {
      res.status(409).json({ message: "User already exists" }); // Conflict status code
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const [result]: any = await pool.query(
      "INSERT INTO users (uname, email, password, phone_number, address) VALUES (?, ?, ?, ?, ?)",
      [uname, email, hashedPassword, phone_number, address]
    );

    const token = generateToken(result.insertId);

    res.status(201).json({ message: "User registered successfully", token }); // Created status code
  } catch (error) {
    console.error("Error in registerUser:", error);
    res.status(500).json({ message: "Server error" }); // Internal Server Error
  }
};


// 📌 2️⃣ Login User
export const loginUser: RequestHandler = async (req, res): Promise<void> => {
  const { email, password } = req.body;

  try {
    const [rows]: any = await pool.query("SELECT * FROM users WHERE email = ?", [email]);

    if (rows.length === 0) {
      res.status(404).json({ message: "User not found" }); // Not Found
      return;
    }

    const user = rows[0];
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      res.status(401).json({ message: "Invalid credentials" }); // Unauthorized
      return;
    }

    const token = generateToken(user.id);
    res.status(200).json({ message: "Login successful", token }); // OK
  } catch (error) {
    console.error("Error in loginUser:", error);
    res.status(500).json({ message: "Server error" }); // Internal Server Error
  }
};

// 📌 3️⃣ Get All Users (Read) - Protected
export const getUsers: RequestHandler = async (req, res): Promise<void> => {
  try {
    const [users]: any = await pool.query("SELECT id, uname, email, phone_number, address FROM users");
    res.status(200).json(users); // OK
  } catch (error) {
    console.error("Error in getUsers:", error);
    res.status(500).json({ message: "Server error" }); // Internal Server Error
  }
};

// 📌 4️⃣ Get User By ID (Read) - Protected
export const getUserById: RequestHandler = async (req, res): Promise<void> => {
  const { id } = req.params;

  try {
    const [users]: any = await pool.query("SELECT id, uname, email, phone_number, address FROM users WHERE id = ?", [id]);

    if (users.length === 0) {
      res.status(404).json({ message: "User not found" }); // Not Found
      return;
    }

    res.status(200).json(users[0]); // OK
  } catch (error) {
    console.error("Error in getUserById:", error);
    res.status(500).json({ message: "Server error" }); // Internal Server Error
  }
};

// 📌 5️⃣ Update User (Update) - Protected
export const updateUser: RequestHandler = async (req, res): Promise<void> => {
  const { id } = req.params;
  const { uname, email, phone_number, address } = req.body;

  try {
    const [result]: any = await pool.query(
      "UPDATE users SET uname = ?, email = ?, phone_number = ?, address = ? WHERE id = ?",
      [uname, email, phone_number, address, id]
    );

    if (result.affectedRows === 0) {
      res.status(404).json({ message: "User not found" }); // Not Found
      return;
    }

    res.status(200).json({ message: "User updated successfully" }); // OK
  } catch (error) {
    console.error("Error in updateUser:", error);
    res.status(500).json({ message: "Server error" }); // Internal Server Error
  }
};

// 📌 6️⃣ Delete User (Delete) - Protected
export const deleteUser: RequestHandler = async (req, res): Promise<void> => {
  const { id } = req.params;

  try {
    const [result]: any = await pool.query("DELETE FROM users WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      res.status(404).json({ message: "User not found" }); // Not Found
      return;
    }

    res.status(200).json({ message: "User deleted successfully" }); // OK
  } catch (error) {
    console.error("Error in deleteUser:", error);
    res.status(500).json({ message: "Server error" }); // Internal Server Error
  }
};
