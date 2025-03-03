// // import { useEffect, useState } from "react";

// // interface Product {
// //   id: number;
// //   name: string;
// //   category: string;
// //   price: string;
// //   old_price: string;
// //   discount: string;
// //   image: string;
// //   description: string;
// //   benefits: string;
// //   nutrition: string;
// // }

// // const ProductList = () => {
// //   const [products, setProducts] = useState<Product[]>([]);
// //   const [loading, setLoading] = useState<boolean>(true);

// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       try {
// //         const response = await fetch("http://localhost:5000/api/products");
// //         const data = await response.json();
// //         setProducts(data);
// //       } catch (error) {
// //         console.error("Error fetching products:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchProducts();
// //   }, []);

// //   if (loading) return <p>Loading products...</p>;

// //   return (
// //     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
// //       {products.map((product) => (
// //         <div key={product.id} className="border p-4 rounded-lg shadow-md">
// //           <img
// //             src={product.image}
// //             alt={product.name}
// //             className="w-full h-48 object-cover rounded-md"
// //           />
// //           <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
// //           <p className="text-gray-500">{product.category}</p>
// //           <p className="text-gray-700">{product.description}</p>
// //           <p className="text-green-600 font-bold">₹{product.price}</p>
// //           <p className="text-red-500 line-through">₹{product.old_price}</p>
// //           <p className="text-blue-500">{product.discount} OFF</p>
// //           <p className="text-gray-600">{product.benefits}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default ProductList;


// import { useEffect, useState } from "react";

// interface Product {
//   id: number;
//   name: string;
//   category: string;
//   price: number;
//   stock: number;
// }

// const ProductList = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:5000/api/products") // Keep backend endpoint same
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError("Failed to fetch products");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading products...</p>;
//   if (error) return <p className="text-red-500">{error}</p>;

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Product List</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {products.map((product) => (
//           <div key={product.id} className="border p-4 rounded shadow">
//             <h3 className="text-lg font-semibold">{product.name}</h3>
//             <p>Category: {product.category}</p>
//             <p>Price: ${product.price.toFixed(2)}</p>
//             <p>Stock: {product.stock}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;
