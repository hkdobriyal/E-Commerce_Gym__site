// // // // import mysql from "mysql2";
// // // // import dotenv from "dotenv";

// // // // dotenv.config();

// // // // const pool = mysql.createPool({
// // // //   host: process.env.MYSQL_HOST,
// // // //   user: process.env.MYSQL_USER,
// // // //   password: process.env.MYSQL_PASSWORD,
// // // //   database: process.env.MYSQL_DB,
// // // //   connectionLimit: 10,
// // // // }).promise();

// // // // export default pool;


// // // import mysql from "mysql2/promise";
// // // import dotenv from "dotenv";

// // // dotenv.config();

// // // const pool = mysql.createPool({
// // //   host: process.env.DB_HOST,
// // //   user: process.env.DB_USER,
// // //   password: process.env.DB_PASS,
// // //   database: process.env.DB_NAME,
// // //   waitForConnections: true,
// // //   connectionLimit: 10,
// // //   queueLimit: 0,
// // // });

// // // export default pool;


// // import mysql from "mysql2/promise";
// // import dotenv from "dotenv";

// // dotenv.config();

// // const pool = mysql.createPool({
// //   host: process.env.DB_HOST,
// //   user: process.env.DB_USER,
// //   password: process.env.DB_PASSWORD,
// //   database: process.env.DB_NAME,
// //   port: Number(process.env.DB_PORT) || 3306,
// //   waitForConnections: true,
// //   connectionLimit: 10,
// //   queueLimit: 0,
// // });

// // export default pool;

// // gym-supplements-backend\src\config\db.ts
// import mysql from 'mysql2/promise';
// import dotenv from 'dotenv';

// dotenv.config();

// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });

// // Create tables if they don't exist
// (async () => {
//   const conn = await pool.getConnection();
//   try {
//     // Function to create a table and log the result
//     const createTable = async (query: string, tableName: string) => {
//       try {
//         await conn.query(query);
//         console.log(`✅ Table "${tableName}" created successfully or already exists.`);
//       } catch (error) {
//         // Cast error to any or handle it appropriately
//         const err = error as { message?: string };
//         console.error(`❌ Error creating table "${tableName}":`, err.message);
//       }
//     };

//     // Create each table separately
//     await createTable(`
//       CREATE TABLE IF NOT EXISTS users (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         uname VARCHAR(255) NOT NULL,
//         email VARCHAR(255) NOT NULL UNIQUE,
//         password VARCHAR(255) NOT NULL,
//         phone_number VARCHAR(20),
//         address TEXT
//       );
//     `, 'users');

//     await createTable(`
     
// CREATE TABLE IF NOT EXISTS products (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   name VARCHAR(255) NOT NULL,
//   category VARCHAR(255),
//   price DECIMAL(10, 2) NOT NULL,
//   old_price DECIMAL(10, 2),
//   discount VARCHAR(50),
//   image VARCHAR(255),
//   description TEXT,
//   benefits TEXT,
//   nutrition VARCHAR(255)
//       );
//     `, 'products');

//     await createTable(`
//       CREATE TABLE IF NOT EXISTS orders (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         user_id INT NOT NULL,
//         total DECIMAL(10, 2) NOT NULL,
//         status VARCHAR(50) NOT NULL,
//         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//         FOREIGN KEY (user_id) REFERENCES users(id)
//       );
//     `, 'orders');

//     await createTable(`
//       CREATE TABLE IF NOT EXISTS order_items (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         order_id INT NOT NULL,
//         product_id INT NOT NULL,
//         quantity INT NOT NULL,
//         price DECIMAL(10, 2) NOT NULL,
//         FOREIGN KEY (order_id) REFERENCES orders(id),
//         FOREIGN KEY (product_id) REFERENCES products(id)
//       );
//     `, 'order_items');

//     await createTable(`
//       CREATE TABLE IF NOT EXISTS cart (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         user_id INT NOT NULL,
//         product_id INT NOT NULL,
//         quantity INT NOT NULL,
//         FOREIGN KEY (user_id) REFERENCES users(id),
//         FOREIGN KEY (product_id) REFERENCES products(id)
//       );
//     `, 'cart');
//   } finally {
//     conn.release();
//   }
// })();

// export default pool;


import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Function to check if a table exists
const tableExists = async (conn: mysql.PoolConnection, tableName: string) => {
  const [rows] = await conn.query(`SHOW TABLES LIKE ?`, [tableName]);
  return (rows as any[]).length > 0;
};

// Function to create a table only if it does not exist
const createTableIfNotExists = async (conn: mysql.PoolConnection, query: string, tableName: string) => {
  if (await tableExists(conn, tableName)) {
    console.log(`✅ Table "${tableName}" already exists. Skipping creation.`);
    return;
  }
  try {
    await conn.query(query);
    console.log(`✅ Table "${tableName}" created successfully.`);
  } catch (error) {
    console.error(`❌ Error creating table "${tableName}":`, (error as { message?: string }).message);
  }
};

// Create tables only if they don't exist
(async () => {
  const conn = await pool.getConnection();
  try {
    await createTableIfNotExists(conn, `
      CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        uname VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        phone_number VARCHAR(20),
        address TEXT
      );
    `, 'users');

    await createTableIfNotExists(conn, `
      CREATE TABLE products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        category VARCHAR(255),
        price DECIMAL(10, 2) NOT NULL,
        old_price DECIMAL(10, 2),
        discount VARCHAR(50),
        image VARCHAR(255),
        description TEXT,
        benefits TEXT,
        nutrition VARCHAR(255)
      );
    `, 'products');

    await createTableIfNotExists(conn, `
      CREATE TABLE orders (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        total DECIMAL(10, 2) NOT NULL,
        status VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
      );
    `, 'orders');

    await createTableIfNotExists(conn, `
      CREATE TABLE order_items (
        id INT AUTO_INCREMENT PRIMARY KEY,
        order_id INT NOT NULL,
        product_id INT NOT NULL,
        quantity INT NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        FOREIGN KEY (order_id) REFERENCES orders(id),
        FOREIGN KEY (product_id) REFERENCES products(id)
      );
    `, 'order_items');

    await createTableIfNotExists(conn, `
      CREATE TABLE cart (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        product_id INT NOT NULL,
        quantity INT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (product_id) REFERENCES products(id)
      );
    `, 'cart');
  } finally {
    conn.release();
  }
})();

export default pool;
