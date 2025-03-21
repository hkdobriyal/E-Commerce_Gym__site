
// // // // // gym-supplements-frontend\app\supplements\[category]\[productName]\page.tsx
// // // // "use client";
// // // // import { useState, useEffect } from "react";
// // // // import { useDispatch, useSelector } from "react-redux";
// // // // import { addToCart, fetchCartItems } from "../../../redux/slices/cartSlice";
// // // // import { useRouter } from "next/navigation";
// // // // import Image from "next/image";
// // // // import Header from "../../../components/Header";
// // // // import Footer from "../../../components/Footer";
// // // // import axios from "axios";
// // // // import { FaHeart, FaRegHeart, FaShareAlt } from "react-icons/fa";

// // // // interface ProductDetailPageProps {
// // // //   params: {
// // // //     category: string;
// // // //     productName: string;
// // // //   };
// // // // }

// // // // interface Product {
// // // //   id: number;
// // // //   name: string;
// // // //   category: string;
// // // //   price: string;
// // // //   old_price: string;
// // // //   discount: string;
// // // //   image: string;
// // // //   description: string;
// // // //   benefits?: string[];
// // // //   nutrition: string;
// // // //   usage: string;
// // // //   flavours: string[];
// // // //   weights: string[];
// // // // }

// // // // export default function ProductDetailPage({ params }: ProductDetailPageProps) {
// // // //   const router = useRouter();
// // // //   const dispatch = useDispatch();
// // // //   const cartItems = useSelector((state: any) => state.cart.items);
// // // //   const userId = useSelector((state: any) => state.auth.user?.id);
// // // //   const { category, productName } = params;
// // // //   const [product, setProduct] = useState<Product | null>(null);
// // // //   const [selectedFlavour, setSelectedFlavour] = useState("");
// // // //   const [selectedWeight, setSelectedWeight] = useState("");
// // // //   const [quantity, setQuantity] = useState(1);
// // // //   const [isWishlisted, setIsWishlisted] = useState(false);
// // // //   const [successMessage, setSuccessMessage] = useState("");

// // // //   useEffect(() => {
// // // //     const fetchProduct = async () => {
// // // //       try {
// // // //         const response = await axios.get("http://localhost:5000/api/products");
// // // //         const products = response.data;
// // // //         const decodedProductName = decodeURIComponent(productName).replace(/-/g, " ");
// // // //         const foundProduct = products.find(
// // // //           (prod: Product) =>
// // // //             prod.name.toLowerCase() === decodedProductName.toLowerCase() &&
// // // //             prod.category === category
// // // //         );
// // // //         if (foundProduct) {
// // // //           setProduct(foundProduct);
// // // //           setSelectedFlavour(foundProduct.flavours ? foundProduct.flavours[0] : "");
// // // //           setSelectedWeight(foundProduct.weights ? foundProduct.weights[0] : "");
// // // //         }
// // // //       } catch (error) {
// // // //         console.error("Failed to fetch product:", error);
// // // //       }
// // // //     };

// // // //     fetchProduct();
// // // //   }, [category, productName]);

// // // //   useEffect(() => {
// // // //     if (userId) {
// // // //       dispatch(fetchCartItems(userId));
// // // //     }
// // // //   }, [userId, dispatch]);

// // // //   useEffect(() => {
// // // //     if (successMessage) {
// // // //       const timer = setTimeout(() => {
// // // //         setSuccessMessage("");
// // // //       }, 3000);
// // // //       return () => clearTimeout(timer);
// // // //     }
// // // //   }, [successMessage]);

// // // //   if (!product) {
// // // //     return <p className="text-center mt-20 text-red-500">Product not found</p>;
// // // //   }

// // // //   const isInCart = cartItems.some(
// // // //     (item: any) =>
// // // //       item.id === product.id
// // // //   );

// // // //   const toggleWishlist = () => {
// // // //     setIsWishlisted(!isWishlisted);
// // // //   };

// // // //   const shareProduct = () => {
// // // //     const productUrl = `${window.location.origin}/supplements/${category}/${productName}`;
// // // //     navigator.clipboard.writeText(productUrl);
// // // //     alert("Product link copied to clipboard!");
// // // //   };

// // // //   const increaseQuantity = () => setQuantity((prev) => prev + 1);
// // // //   const decreaseQuantity = () =>
// // // //     setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

// // // //   const handleAddToCart = () => {
// // // //     if (userId) {
// // // //       dispatch(addToCart(userId, product.id, quantity));
// // // //       setSuccessMessage("Item added to cart successfully!");
// // // //     } else {
// // // //       console.error("User ID is not available");
// // // //       router.push("/login");
// // // //     }
// // // //   };
  

// // // //   return (
// // // //     <div>
// // // //       <Header />
// // // //       <div className="container mx-auto px-4 py-16 pt-32">
// // // //         <div className="max-w-6xl mx-auto flex flex-col md:flex-row bg-white shadow-xl rounded-lg overflow-hidden relative">
// // // //           <div className="absolute top-4 right-4 flex space-x-3">
// // // //             <button
// // // //               onClick={toggleWishlist}
// // // //               className="text-red-500 text-2xl hover:scale-110 transition-transform"
// // // //             >
// // // //               {isWishlisted ? <FaHeart /> : <FaRegHeart />}
// // // //             </button>
// // // //             <button
// // // //               onClick={shareProduct}
// // // //               className="text-gray-600 text-2xl hover:scale-110 transition-transform"
// // // //             >
// // // //               <FaShareAlt />
// // // //             </button>
// // // //           </div>

// // // //           <div className="md:w-1/2">
// // // //             <Image
// // // //               src={product.image}
// // // //               priority
// // // //               alt={product.name}
// // // //               width={400}
// // // //               height={400}
// // // //               className="object-cover w-full h-auto"
// // // //             />
// // // //           </div>

// // // //           <div className="md:w-1/2 p-6">
// // // //             <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
// // // //             <p className="text-gray-500 mb-4">
// // // //               {category.replace("-", " ").toUpperCase()}
// // // //             </p>

// // // //             {product.flavours && (
// // // //               <div className="mb-4">
// // // //                 <label className="block text-gray-700 font-semibold mb-2">
// // // //                   Flavour:
// // // //                 </label>
// // // //                 <select
// // // //                   className="w-full border p-2 rounded"
// // // //                   value={selectedFlavour}
// // // //                   onChange={(e) => setSelectedFlavour(e.target.value)}
// // // //                 >
// // // //                   {product.flavours.map((flavour) => (
// // // //                     <option key={flavour} value={flavour}>
// // // //                       {flavour}
// // // //                     </option>
// // // //                   ))}
// // // //                 </select>
// // // //               </div>
// // // //             )}

// // // //             {product.weights && (
// // // //               <div className="mb-4">
// // // //                 <label className="block text-gray-700 font-semibold mb-2">
// // // //                   Weight:
// // // //                 </label>
// // // //                 <select
// // // //                   className="w-full border p-2 rounded"
// // // //                   value={selectedWeight}
// // // //                   onChange={(e) => setSelectedWeight(e.target.value)}
// // // //                 >
// // // //                   {product.weights.map((weight) => (
// // // //                     <option key={weight} value={weight}>
// // // //                       {weight}
// // // //                     </option>
// // // //                   ))}
// // // //                 </select>
// // // //               </div>
// // // //             )}

// // // //             <div className="flex items-center mt-4">
// // // //               <button
// // // //                 className="p-2 bg-gray-200 rounded"
// // // //                 onClick={decreaseQuantity}
// // // //               >
// // // //                 -
// // // //               </button>
// // // //               <span className="mx-3 text-lg font-bold">{quantity}</span>
// // // //               <button
// // // //                 className="p-2 bg-gray-200 rounded"
// // // //                 onClick={increaseQuantity}
// // // //               >
// // // //                 +
// // // //               </button>
// // // //             </div>

// // // //             <button
// // // //               className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full"
// // // //               onClick={isInCart ? () => router.push("/cart") : handleAddToCart}
// // // //             >
// // // //               {isInCart ? "Go to Cart" : "Add to Cart"}
// // // //             </button>

// // // //             {successMessage && (
// // // //               <p className="text-green-500 mt-2">{successMessage}</p>
// // // //             )}

// // // //             <div className="mt-6">
// // // //               <h2 className="text-xl font-bold">Product Description</h2>
// // // //               <p className="text-gray-600 mt-2">{product.description}</p>
// // // //             </div>

// // // //             {Array.isArray(product.benefits) && product.benefits.length > 0 && (
// // // //               <div className="mt-6">
// // // //                 <h2 className="text-xl font-bold">Key Benefits</h2>
// // // //                 <ul className="list-disc pl-5 text-gray-600">
// // // //                   {product.benefits.map((benefit, index) => (
// // // //                     <li key={index}>{benefit}</li>
// // // //                   ))}
// // // //                 </ul>
// // // //               </div>
// // // //             )}

// // // //             <div className="mt-6">
// // // //               <h2 className="text-xl font-bold">Nutritional Information</h2>
// // // //               <p className="text-gray-600">{product.nutrition}</p>
// // // //             </div>

// // // //             <div className="mt-6">
// // // //               <h2 className="text-xl font-bold">How to Use</h2>
// // // //               <p className="text-gray-600">{product.usage}</p>
// // // //             </div>

// // // //             <div className="mt-6">
// // // //               <h2 className="text-xl font-bold">Customer Reviews</h2>
// // // //               <p className="text-gray-600 italic">
// // // //                 No reviews yet. Be the first to leave a review!
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //       <Footer />
// // // //     </div>
// // // //   );
// // // // }


// // // // // // // ------------------------------------------------------

// // // // gym-supplements-frontend\app\supplements\[category]\[productName]\page.tsx
// // // "use client";
// // // import { useState, useEffect } from "react";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { addToCart, fetchCartItems } from "../../../redux/slices/cartSlice";
// // // import { useRouter } from "next/navigation";
// // // import Image from "next/image";
// // // import Header from "../../../components/Header";
// // // import Footer from "../../../components/Footer";
// // // import axios from "axios";
// // // import { FaHeart, FaRegHeart, FaShareAlt } from "react-icons/fa";
// // // import { motion, AnimatePresence } from "framer-motion";

// // // interface ProductDetailPageProps {
// // //   params: {
// // //     category: string;
// // //     productName: string;
// // //   };
// // // }

// // // interface Product {
// // //   id: number;
// // //   name: string;
// // //   category: string;
// // //   price: string;
// // //   old_price: string;
// // //   discount: string;
// // //   image: string;
// // //   description: string;
// // //   benefits?: string[];
// // //   nutrition: string;
// // //   usage: string;
// // //   flavours: string[];
// // //   weights: string[];
// // // }

// // // export default function ProductDetailPage({ params }: ProductDetailPageProps) {
// // //   const router = useRouter();
// // //   const dispatch = useDispatch();
// // //   const cartItems = useSelector((state: any) => state.cart.items);
// // //   const userId = useSelector((state: any) => state.auth.user?.id);
// // //   const { category, productName } = params;
// // //   const [product, setProduct] = useState<Product | null>(null);
// // //   const [selectedFlavour, setSelectedFlavour] = useState("");
// // //   const [selectedWeight, setSelectedWeight] = useState("");
// // //   const [quantity, setQuantity] = useState(1);
// // //   const [isWishlisted, setIsWishlisted] = useState(false);
// // //   const [successMessage, setSuccessMessage] = useState("");
// // //   const [showLoginMessage, setShowLoginMessage] = useState(false);
// // //   const [isInCart, setIsInCart] = useState(false);

// // //   useEffect(() => {
// // //     const fetchProduct = async () => {
// // //       try {
// // //         const response = await axios.get("http://localhost:5000/api/products");
// // //         const products = response.data;
// // //         const decodedProductName = decodeURIComponent(productName).replace(/-/g, " ");
// // //         const foundProduct = products.find(
// // //           (prod: Product) =>
// // //             prod.name.toLowerCase() === decodedProductName.toLowerCase() &&
// // //             prod.category === category
// // //         );
// // //         if (foundProduct) {
// // //           setProduct(foundProduct);
// // //           setSelectedFlavour(foundProduct.flavours ? foundProduct.flavours[0] : "");
// // //           setSelectedWeight(foundProduct.weights ? foundProduct.weights[0] : "");
// // //         }
// // //       } catch (error) {
// // //         console.error("Failed to fetch product:", error);
// // //       }
// // //     };

// // //     fetchProduct();
// // //   }, [category, productName]);
// // //   useEffect(() => {
// // //   }, [isInCart]);
  
// // //   useEffect(() => {
// // //     if (product) {
// // //         console.log("cartItems:", cartItems);
// // //         console.log("product.id:", product.id);
// // //         cartItems.forEach((item, index) => {
// // //             console.log(`item[${index}].id:`, item.id, typeof item.id);
// // //         });
// // //         const isProductInCart = cartItems.some((item: any) => parseInt(item.id) === product.id);
// // //         setIsInCart(isProductInCart);
// // //         console.log("isProductInCart:", isProductInCart);
// // //         console.log("isInCart:", isInCart);
// // //     }
// // // }, [cartItems, product]);

// // //   useEffect(() => {
// // //     if (userId) {
// // //       dispatch(fetchCartItems(userId));
// // //     }
// // //   }, [userId, dispatch]);

// // //   useEffect(() => {
// // //     if (successMessage) {
// // //       const timer = setTimeout(() => {
// // //         setSuccessMessage("");
// // //       }, 3000);
// // //       return () => clearTimeout(timer);
// // //     }
// // //   }, [successMessage]);

// // //   useEffect(() => {
// // //     if (product) {
// // //       setIsInCart(cartItems.some((item: any) => item.id === product.id));
// // //     }
// // //   }, [cartItems, product]);

// // //   if (!product) {
// // //     return <p className="text-center mt-20 text-red-500">Product not found</p>;
// // //   }

// // //   const toggleWishlist = () => {
// // //     setIsWishlisted(!isWishlisted);
// // //   };

// // //   const shareProduct = () => {
// // //     const productUrl = `${window.location.origin}/supplements/${category}/${productName}`;
// // //     navigator.clipboard.writeText(productUrl);
// // //     alert("Product link copied to clipboard!");
// // //   };

// // //   const increaseQuantity = () => setQuantity((prev) => prev + 1);
// // //   const decreaseQuantity = () =>
// // //     setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

// // //   const handleAddToCart = () => {
// // //     if (userId) {
// // //       dispatch(addToCart(userId, product?.id, quantity));
// // //       setIsInCart(true);
// // //       setSuccessMessage("Item added to cart!");
// // //       console.log("Item added to cart, isInCart:", isInCart); // Debugging line

// // //     } else {
// // //       setShowLoginMessage(true);
// // //       setTimeout(() => {
// // //         setShowLoginMessage(false);
// // //         router.push("/login");
// // //       }, 3500);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <Header />
// // //       <AnimatePresence>
// // //         {showLoginMessage && (
// // //           <motion.div
// // //             initial={{ x: "100%" }}
// // //             animate={{ x: 0 }}
// // //             exit={{ x: "100%" }}
// // //             transition={{ duration: 1 }}
// // //             className="fixed top-10 z-[9999] right-0 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg"
// // //           >
// // //             Please login to add items to cart.
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //       <div className="container mx-auto px-4 py-16 pt-32">
// // //         <div className="max-w-6xl mx-auto flex flex-col md:flex-row bg-white shadow-xl rounded-lg overflow-hidden relative">
// // //           <div className="absolute top-4 right-4 flex space-x-3">
// // //             <button
// // //               onClick={toggleWishlist}
// // //               className="text-red-500 text-2xl hover:scale-110 transition-transform"
// // //             >
// // //               {isWishlisted ? <FaHeart /> : <FaRegHeart />}
// // //             </button>
// // //             <button
// // //               onClick={shareProduct}
// // //               className="text-gray-600 text-2xl hover:scale-110 transition-transform"
// // //             >
// // //               <FaShareAlt />
// // //             </button>
// // //           </div>

// // //           <div className="md:w-1/2">
// // //             <Image
// // //               src={product.image}
// // //               priority
// // //               alt={product.name}
// // //               width={400}
// // //               height={400}
// // //               className="object-cover w-full h-auto"
// // //             />
// // //           </div>

// // //           <div className="md:w-1/2 p-6">
// // //             <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
// // //             <p className="text-gray-500 mb-4">
// // //               {category.replace("-", " ").toUpperCase()}
// // //             </p>

// // //             {product.flavours && (
// // //               <div className="mb-4">
// // //                 <label className="block text-gray-700 font-semibold mb-2">
// // //                   Flavour:
// // //                 </label>
// // //                 <select
// // //                   className="w-full border p-2 rounded"
// // //                   value={selectedFlavour}
// // //                   onChange={(e) => setSelectedFlavour(e.target.value)}
// // //                 >
// // //                   {product.flavours.map((flavour) => (
// // //                     <option key={flavour} value={flavour}>
// // //                       {flavour}
// // //                     </option>
// // //                   ))}
// // //                 </select>
// // //               </div>
// // //             )}

// // //             {product.weights && (
// // //               <div className="mb-4">
// // //                 <label className="block text-gray-700 font-semibold mb-2">
// // //                   Weight:
// // //                 </label>
// // //                 <select
// // //                   className="w-full border p-2 rounded"
// // //                   value={selectedWeight}
// // //                   onChange={(e) => setSelectedWeight(e.target.value)}
// // //                 >
// // //                   {product.weights.map((weight) => (
// // //                     <option key={weight} value={weight}>
// // //                       {weight}
// // //                     </option>
// // //                   ))}
// // //                 </select>
// // //               </div>
// // //             )}

// // //             <div className="flex items-center mt-4">
// // //               <button
// // //                 className="p-2 bg-gray-200 rounded"
// // //                 onClick={decreaseQuantity}
// // //               >
// // //                 -
// // //               </button>
// // //               <span className="mx-3 text-lg font-bold">{quantity}</span>
// // //               <button
// // //                 className="p-2 bg-gray-200 rounded"
// // //                 onClick={increaseQuantity}
// // //               >
// // //                 +
// // //               </button>
// // //             </div>

// // //             <button
// // //               className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full"
// // //               onClick={isInCart ? () => router.push("/cart") : handleAddToCart}
// // //             >
// // //               {isInCart ? "Go to Cart" : "Add to Cart"}
// // //             </button>

// // //             {successMessage && (
// // //               <p className="text-green-500 mt-2">{successMessage}</p>
// // //             )}

// // //             <div className="mt-6">
// // //               <h2 className="text-xl font-bold">Product Description</h2>
// // //               <p className="text-gray-600 mt-2">{product.description}</p>
// // //             </div>

// // //             {Array.isArray(product.benefits) && product.benefits.length > 0 && (
// // //               <div className="mt-6">
// // //                 <h2 className="text-xl font-bold">Key Benefits</h2>
// // //                 <ul className="list-disc pl-5 text-gray-600">
// // //                   {product.benefits.map((benefit, index) => (
// // //                     <li key={index}>{benefit}</li>
// // //                   ))}
// // //                 </ul>
// // //               </div>
// // //             )}

// // //             <div className="mt-6">
// // //               <h2 className="text-xl font-bold">Nutritional Information</h2>
// // //               <p className="text-gray-600">{product.nutrition}</p>
// // //             </div>

// // //             <div className="mt-6">
// // //               <h2 className="text-xl font-bold">How to Use</h2>
// // //               <p className="text-gray-600">{product.usage}</p>
// // //             </div>

// // //             <div className="mt-6">
// // //               <h2 className="text-xl font-bold">Customer Reviews</h2>
// // //               <p className="text-gray-600 italic">
// // //                 No reviews yet. Be the first to leave a review!
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //       <Footer />
// // //     </div>
// // //   );
// // // }
 
// // // // gym-supplements-frontend\app\supplements\[category]\[productName]\page.tsx
// // // 'use client'
// // // import { useState, useEffect, useCallback } from "react";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { addToCart, fetchCartItems } from "../../../redux/slices/cartSlice";
// // // import { useRouter } from "next/navigation";
// // // import Image from "next/image";
// // // import Header from "../../../components/Header";
// // // import Footer from "../../../components/Footer";
// // // import axios from "axios";
// // // import { FaHeart, FaRegHeart, FaShareAlt } from "react-icons/fa";
// // // import { motion, AnimatePresence } from "framer-motion";

// // // interface ProductDetailPageProps {
// // //   params: {
// // //     category: string;
// // //     productName: string;
// // //   };
// // // }

// // // interface Product {
// // //   id: number;
// // //   name: string;
// // //   category: string;
// // //   price: string;
// // //   old_price: string;
// // //   discount: string;
// // //   image: string;
// // //   description: string;
// // //   benefits?: string[];
// // //   nutrition: string;
// // //   usage: string;
// // //   flavours: string[];
// // //   weights: string[];
// // // }

// // // export default function ProductDetailPage({ params }: ProductDetailPageProps) {
// // //   const router = useRouter();
// // //   const dispatch = useDispatch();
// // //   const cartItems = useSelector((state: any) => state.cart.items);
// // //   const userId = useSelector((state: any) => state.auth.user?.id);
// // //   const { category, productName } = params;
// // //   const [product, setProduct] = useState<Product | null>(null);
// // //   const [selectedFlavour, setSelectedFlavour] = useState("");
// // //   const [selectedWeight, setSelectedWeight] = useState("");
// // //   const [quantity, setQuantity] = useState(1);
// // //   const [isWishlisted, setIsWishlisted] = useState(false);
// // //   const [successMessage, setSuccessMessage] = useState("");
// // //   const [showLoginMessage, setShowLoginMessage] = useState(false);
// // //   const [showAlreadyInCartMessage, setShowAlreadyInCartMessage] = useState(false);
// // //   const [isInCart, setIsInCart] = useState(false);

// // //   useEffect(() => {
// // //     const fetchProduct = async () => {
// // //       try {
// // //         const response = await axios.get("http://localhost:5000/api/products");
// // //         const products = response.data;
// // //         const decodedProductName = decodeURIComponent(productName).replace(/-/g, " ");
// // //         const foundProduct = products.find(
// // //           (prod: Product) =>
// // //             prod.name.toLowerCase() === decodedProductName.toLowerCase() &&
// // //             prod.category === category
// // //         );
// // //         if (foundProduct) {
// // //           setProduct(foundProduct);
// // //           setSelectedFlavour(foundProduct.flavours ? foundProduct.flavours[0] : "");
// // //           setSelectedWeight(foundProduct.weights ? foundProduct.weights[0] : "");
// // //         }
// // //       } catch (error) {
// // //         console.error("Failed to fetch product:", error);
// // //       }
// // //     };

// // //     fetchProduct();
// // //   }, [category, productName]);

// // //   useEffect(() => {
// // //     if (userId) {
// // //       dispatch(fetchCartItems(userId));
// // //     }
// // //   }, [userId, dispatch]);

// // //   useEffect(() => {
// // //     if (successMessage) {
// // //       const timer = setTimeout(() => {
// // //         setSuccessMessage("");
// // //       }, 3000);
// // //       return () => clearTimeout(timer);
// // //     }
// // //   }, [successMessage]);

// // //   useEffect(() => {
// // //     if (showAlreadyInCartMessage) {
// // //       const timer = setTimeout(() => {
// // //         setShowAlreadyInCartMessage(false);
// // //       }, 3000);
// // //       return () => clearTimeout(timer);
// // //     }
// // //   }, [showAlreadyInCartMessage]);

// // //   const updateIsInCart = useCallback(() => {
// // //     if (product) {
// // //       setIsInCart(cartItems.some((item: any) => item.id === product.id));
// // //       console.log("isInCart updated:", isInCart); // Debugging line
// // //     }
// // //   }, [cartItems, product]);

// // //   useEffect(() => {
// // //     updateIsInCart();
// // //   }, [cartItems, product, updateIsInCart]);

// // //   if (!product) {
// // //     return <p className="text-center mt-20 text-red-500">Product not found</p>;
// // //   }

// // //   const toggleWishlist = () => {
// // //     setIsWishlisted(!isWishlisted);
// // //   };

// // //   const shareProduct = () => {
// // //     const productUrl = `${window.location.origin}/supplements/${category}/${productName}`;
// // //     navigator.clipboard.writeText(productUrl);
// // //     alert("Product link copied to clipboard!");
// // //   };

// // //   const increaseQuantity = () => setQuantity((prev) => prev + 1);
// // //   const decreaseQuantity = () =>
// // //     setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

// // //   const handleAddToCart = () => {
// // //     if (userId) {
// // //       if (isInCart) {
// // //         setShowAlreadyInCartMessage(true);
// // //       } else {
// // //         dispatch(addToCart(userId, product?.id, quantity));
// // //         setSuccessMessage("Item added to cart!");
// // //         console.log("Item added to cart, isInCart:", isInCart); // Debugging line
// // //       }
// // //     } else {
// // //       setShowLoginMessage(true);
// // //       setTimeout(() => {
// // //         setShowLoginMessage(false);
// // //         router.push("/login");
// // //       }, 3500);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <Header />
// // //       <AnimatePresence>
// // //         {showLoginMessage && (
// // //           <motion.div
// // //             initial={{ x: "100%" }}
// // //             animate={{ x: 0 }}
// // //             exit={{ x: "100%" }}
// // //             transition={{ duration: 1 }}
// // //             className="fixed top-10 z-[9999] right-0 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg"
// // //           >
// // //             Please login to add items to cart.
// // //           </motion.div>
// // //         )}
// // //         {showAlreadyInCartMessage && (
// // //           <motion.div
// // //             initial={{ x: "100%" }}
// // //             animate={{ x: 0 }}
// // //             exit={{ x: "100%" }}
// // //             transition={{ duration: 1 }}
// // //             className="fixed top-10 z-[9999] right-0 bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg"
// // //           >
// // //             Item is already in the cart.
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //       <div className="container mx-auto px-4 py-16 pt-32">
// // //         <div className="max-w-6xl mx-auto flex flex-col md:flex-row bg-white shadow-xl rounded-lg overflow-hidden relative">
// // //           <div className="absolute top-4 right-4 flex space-x-3">
// // //             <button
// // //               onClick={toggleWishlist}
// // //               className="text-red-500 text-2xl hover:scale-110 transition-transform"
// // //             >
// // //               {isWishlisted ? <FaHeart /> : <FaRegHeart />}
// // //             </button>
// // //             <button
// // //               onClick={shareProduct}
// // //               className="text-gray-600 text-2xl hover:scale-110 transition-transform"
// // //             >
// // //               <FaShareAlt />
// // //             </button>
// // //           </div>

// // //           <div className="md:w-1/2">
// // //             <Image
// // //               src={product.image}
// // //               priority
// // //               alt={product.name}
// // //               width={400}
// // //               height={400}
// // //               className="object-cover w-full h-auto"
// // //             />
// // //           </div>

// // //           <div className="md:w-1/2 p-6">
// // //             <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
// // //             <p className="text-gray-500 mb-4">
// // //               {category.replace("-", " ").toUpperCase()}
// // //             </p>

// // //             {product.flavours && (
// // //               <div className="mb-4">
// // //                 <label className="block text-gray-700 font-semibold mb-2">
// // //                   Flavour:
// // //                 </label>
// // //                 <select
// // //                   className="w-full border p-2 rounded"
// // //                   value={selectedFlavour}
// // //                   onChange={(e) => setSelectedFlavour(e.target.value)}
// // //                 >
// // //                   {product.flavours.map((flavour) => (
// // //                     <option key={flavour} value={flavour}>
// // //                       {flavour}
// // //                     </option>
// // //                   ))}
// // //                 </select>
// // //               </div>
// // //             )}

// // //             {product.weights && (
// // //               <div className="mb-4">
// // //                 <label className="block text-gray-700 font-semibold mb-2">
// // //                   Weight:
// // //                 </label>
// // //                 <select
// // //                   className="w-full border p-2 rounded"
// // //                   value={selectedWeight}
// // //                   onChange={(e) => setSelectedWeight(e.target.value)}
// // //                 >
// // //                   {product.weights.map((weight) => (
// // //                     <option key={weight} value={weight}>
// // //                       {weight}
// // //                     </option>
// // //                   ))}
// // //                 </select>
// // //               </div>
// // //             )}

// // //             <div className="flex items-center mt-4">
// // //               <button
// // //                 className="p-2 bg-gray-200 rounded"
// // //                 onClick={decreaseQuantity}
// // //               >
// // //                 -
// // //               </button>
// // //               <span className="mx-3 text-lg font-bold">{quantity}</span>
// // //               <button
// // //                 className="p-2 bg-gray-200 rounded"
// // //                 onClick={increaseQuantity}
// // //               >
// // //                 +
// // //               </button>
// // //             </div>

// // //             <button
// // //               className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full"
// // //               onClick={handleAddToCart}
// // //               disabled={isInCart}
// // //             >
// // //               {isInCart ? "Item in Cart" : "Add to Cart"}
// // //             </button>

// // //             {successMessage && (
// // //               <p className="text-green-500 mt-2">{successMessage}</p>
// // //             )}

// // //             <div className="mt-6">
// // //               <h2 className="text-xl font-bold">Product Description</h2>
// // //               <p className="text-gray-600 mt-2">{product.description}</p>
// // //             </div>

// // //             {Array.isArray(product.benefits) && product.benefits.length > 0 && (
// // //               <div className="mt-6">
// // //                 <h2 className="text-xl font-bold">Key Benefits</h2>
// // //                 <ul className="list-disc pl-5 text-gray-600">
// // //                   {product.benefits.map((benefit, index) => (
// // //                     <li key={index}>{benefit}</li>
// // //                   ))}
// // //                 </ul>
// // //               </div>
// // //             )}

// // //             <div className="mt-6">
// // //               <h2 className="text-xl font-bold">Nutritional Information</h2>
// // //               <p className="text-gray-600">{product.nutrition}</p>
// // //             </div>

// // //             <div className="mt-6">
// // //               <h2 className="text-xl font-bold">How to Use</h2>
// // //               <p className="text-gray-600">{product.usage}</p>
// // //             </div>

// // //             <div className="mt-6">
// // //               <h2 className="text-xl font-bold">Customer Reviews</h2>
// // //               <p className="text-gray-600 italic">
// // //                 No reviews yet. Be the first to leave a review!
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //       <Footer />
// // //     </div>
// // //   );
// // // }




// // // "use client";
// // // import { useState, useEffect, useCallback } from "react";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { addToCart, fetchCartItems } from "../../../redux/slices/cartSlice";
// // // import { useRouter } from "next/navigation";
// // // import Image from "next/image";
// // // import Header from "../../../components/Header";
// // // import Footer from "../../../components/Footer";
// // // import axios from "axios";
// // // import { FaHeart, FaRegHeart, FaShareAlt } from "react-icons/fa";
// // // import { motion, AnimatePresence } from "framer-motion";

// // // interface ProductDetailPageProps {
// // //   params: {
// // //     category: string;
// // //     productName: string;
// // //   };
// // // }

// // // interface Product {
// // //   id: number;
// // //   name: string;
// // //   category: string;
// // //   price: string;
// // //   old_price: string;
// // //   discount: string;
// // //   image: string;
// // //   description: string;
// // //   benefits?: string[];
// // //   nutrition: string;
// // //   usage: string;
// // //   flavours: string[];
// // //   weights: string[];
// // // }

// // // export default function ProductDetailPage({ params }: ProductDetailPageProps) {
// // //   const router = useRouter();
// // //   const dispatch = useDispatch();
// // //   const cartItems = useSelector((state: any) => state.cart.items);
// // //   const userId = useSelector((state: any) => state.auth.user?.id);
// // //   const { category, productName } = params;
// // //   const [product, setProduct] = useState<Product | null>(null);
// // //   const [selectedFlavour, setSelectedFlavour] = useState("");
// // //   const [selectedWeight, setSelectedWeight] = useState("");
// // //   const [quantity, setQuantity] = useState(1);
// // //   const [isWishlisted, setIsWishlisted] = useState(false);
// // //   const [successMessage, setSuccessMessage] = useState("");
// // //   const [showLoginMessage, setShowLoginMessage] = useState(false);
// // //   const [isInCart, setIsInCart] = useState(false);

// // //   useEffect(() => {
// // //     const fetchProduct = async () => {
// // //       try {
// // //         const response = await axios.get("http://localhost:5000/api/products");
// // //         const products = response.data;
// // //         const decodedProductName = decodeURIComponent(productName).replace(/-/g, " ");
// // //         const foundProduct = products.find(
// // //           (prod: Product) =>
// // //             prod.name.toLowerCase() === decodedProductName.toLowerCase() &&
// // //             prod.category === category
// // //         );
// // //         if (foundProduct) {
// // //           setProduct(foundProduct);
// // //           setSelectedFlavour(foundProduct.flavours ? foundProduct.flavours[0] : "");
// // //           setSelectedWeight(foundProduct.weights ? foundProduct.weights[0] : "");
// // //         }
// // //       } catch (error) {
// // //         console.error("Failed to fetch product:", error);
// // //       }
// // //     };

// // //     fetchProduct();
// // //   }, [category, productName]);

// // //   useEffect(() => {
// // //     if (userId) {
// // //       dispatch(fetchCartItems(userId));
// // //     }
// // //   }, [userId, dispatch]);

// // //   useEffect(() => {
// // //     if (successMessage) {
// // //       const timer = setTimeout(() => {
// // //         setSuccessMessage("");
// // //       }, 3000);
// // //       return () => clearTimeout(timer);
// // //     }
// // //   }, [successMessage]);

// // //   const updateIsInCart = useCallback(() => {
// // //     if (product) {
// // //       setIsInCart(cartItems.some((item: any) => item.id === product.id));
// // //       console.log("isInCart updated:", isInCart); // Debugging line
// // //     }
// // //   }, [cartItems, product]);

// // //   useEffect(() => {
// // //     updateIsInCart();
// // //   }, [cartItems, product, updateIsInCart]);

// // //   if (!product) {
// // //     return <p className="text-center mt-20 text-red-500">Product not found</p>;
// // //   }

// // //   const toggleWishlist = () => {
// // //     setIsWishlisted(!isWishlisted);
// // //   };

// // //   const shareProduct = () => {
// // //     const productUrl = `${window.location.origin}/supplements/${category}/${productName}`;
// // //     navigator.clipboard.writeText(productUrl);
// // //     alert("Product link copied to clipboard!");
// // //   };

// // //   const increaseQuantity = () => setQuantity((prev) => prev + 1);
// // //   const decreaseQuantity = () =>
// // //     setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

// // //   const handleAddToCart = async () => {
// // //     if (userId) {
// // //       if (isInCart) {
// // //         router.push("/cart");
// // //       } else {
// // //         await dispatch(addToCart(userId, product?.id, quantity));
// // //         setSuccessMessage("Item added to cart!");
// // //       }
// // //     } else {
// // //       setShowLoginMessage(true);
// // //       setTimeout(() => {
// // //         setShowLoginMessage(false);
// // //         router.push("/login");
// // //       }, 3500);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <Header />
// // //       <AnimatePresence>
// // //         {showLoginMessage && (
// // //           <motion.div
// // //             initial={{ x: "100%" }}
// // //             animate={{ x: 0 }}
// // //             exit={{ x: "100%" }}
// // //             transition={{ duration: 1 }}
// // //             className="fixed top-10 z-[9999] right-0 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg"
// // //           >
// // //             Please login to add items to cart.
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //       <div className="container mx-auto px-4 py-16 pt-32">
// // //         <div className="max-w-6xl mx-auto flex flex-col md:flex-row bg-white shadow-xl rounded-lg overflow-hidden relative">
// // //           <div className="absolute top-4 right-4 flex space-x-3">
// // //             <button
// // //               onClick={toggleWishlist}
// // //               className="text-red-500 text-2xl hover:scale-110 transition-transform"
// // //             >
// // //               {isWishlisted ? <FaHeart /> : <FaRegHeart />}
// // //             </button>
// // //             <button
// // //               onClick={shareProduct}
// // //               className="text-gray-600 text-2xl hover:scale-110 transition-transform"
// // //             >
// // //               <FaShareAlt />
// // //             </button>
// // //           </div>

// // //           <div className="md:w-1/2">
// // //             <Image
// // //               src={product.image}
// // //               priority
// // //               alt={product.name}
// // //               width={400}
// // //               height={400}
// // //               className="object-cover w-full h-auto"
// // //             />
// // //           </div>

// // //           <div className="md:w-1/2 p-6">
// // //             <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
// // //             <p className="text-gray-500 mb-4">
// // //               {category.replace("-", " ").toUpperCase()}
// // //             </p>

// // //             {product.flavours && (
// // //               <div className="mb-4">
// // //                 <label className="block text-gray-700 font-semibold mb-2">
// // //                   Flavour:
// // //                 </label>
// // //                 <select
// // //                   className="w-full border p-2 rounded"
// // //                   value={selectedFlavour}
// // //                   onChange={(e) => setSelectedFlavour(e.target.value)}
// // //                 >
// // //                   {product.flavours.map((flavour) => (
// // //                     <option key={flavour} value={flavour}>
// // //                       {flavour}
// // //                     </option>
// // //                   ))}
// // //                 </select>
// // //               </div>
// // //             )}

// // //             {product.weights && (
// // //               <div className="mb-4">
// // //                 <label className="block text-gray-700 font-semibold mb-2">
// // //                   Weight:
// // //                 </label>
// // //                 <select
// // //                   className="w-full border p-2 rounded"
// // //                   value={selectedWeight}
// // //                   onChange={(e) => setSelectedWeight(e.target.value)}
// // //                 >
// // //                   {product.weights.map((weight) => (
// // //                     <option key={weight} value={weight}>
// // //                       {weight}
// // //                     </option>
// // //                   ))}
// // //                 </select>
// // //               </div>
// // //             )}

// // //             <div className="flex items-center mt-4">
// // //               <button
// // //                 className="p-2 bg-gray-200 rounded"
// // //                 onClick={decreaseQuantity}
// // //               >
// // //                 -
// // //               </button>
// // //               <span className="mx-3 text-lg font-bold">{quantity}</span>
// // //               <button
// // //                 className="p-2 bg-gray-200 rounded"
// // //                 onClick={increaseQuantity}
// // //               >
// // //                 +
// // //               </button>
// // //             </div>

// // //             <button
// // //               className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full"
// // //               onClick={isInCart ? () => router.push("/cart") : handleAddToCart}
// // //               disabled={isInCart}
// // //             >
// // //               {isInCart ? "Go to Cart" : "Add to Cart"}
// // //             </button>

// // //             {successMessage && (
// // //               <p className="text-green-500 mt-2">{successMessage}</p>
// // //             )}

// // //             <div className="mt-6">
// // //               <h2 className="text-xl font-bold">Product Description</h2>
// // //               <p className="text-gray-600 mt-2">{product.description}</p>
// // //             </div>

// // //             {Array.isArray(product.benefits) && product.benefits.length > 0 && (
// // //               <div className="mt-6">
// // //                 <h2 className="text-xl font-bold">Key Benefits</h2>
// // //                 <ul className="list-disc pl-5 text-gray-600">
// // //                   {product.benefits.map((benefit, index) => (
// // //                     <li key={index}>{benefit}</li>
// // //                   ))}
// // //                 </ul>
// // //               </div>
// // //             )}

// // //             <div className="mt-6">
// // //               <h2 className="text-xl font-bold">Nutritional Information</h2>
// // //               <p className="text-gray-600">{product.nutrition}</p>
// // //             </div>

// // //             <div className="mt-6">
// // //               <h2 className="text-xl font-bold">How to Use</h2>
// // //               <p className="text-gray-600">{product.usage}</p>
// // //             </div>

// // //             <div className="mt-6">
// // //               <h2 className="text-xl font-bold">Customer Reviews</h2>
// // //               <p className="text-gray-600 italic">
// // //                 No reviews yet. Be the first to leave a review!
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //       <Footer />
// // //     </div>
// // //   );
// // // }




// // gym-supplements-frontend\app\supplements\[category]\[productName]\page.tsx
// 'use client'
// import { useState, useEffect, useCallback } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, fetchCartItems } from "../../../redux/slices/cartSlice";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import Header from "../../../components/Header";
// import Footer from "../../../components/Footer";
// import axios from "axios";
// import { FaHeart, FaRegHeart, FaShareAlt } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";

// interface ProductDetailPageProps {
//   params: {
//     category: string;
//     productName: string;
//   };
// }

// interface Product {
//   id: number;
//   name: string;
//   category: string;
//   price: string;
//   old_price: string;
//   discount: string;
//   image: string;
//   description: string;
//   benefits?: string[];
//   nutrition: string;
//   usage: string;
//   flavours: string[];
//   weights: string[];
// }

// export default function ProductDetailPage({ params }: ProductDetailPageProps) {
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state: any) => state.cart.items);
//   const userId = useSelector((state: any) => state.auth.user?.id);
//   const { category, productName } = params;
//   const [product, setProduct] = useState<Product | null>(null);
//   const [selectedFlavour, setSelectedFlavour] = useState("");
//   const [selectedWeight, setSelectedWeight] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [isWishlisted, setIsWishlisted] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");
//   const [showLoginMessage, setShowLoginMessage] = useState(false);
//   const [showAlreadyInCartMessage, setShowAlreadyInCartMessage] = useState(false);
//   const [isInCart, setIsInCart] = useState(false);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/products");
//         const products = response.data;
//         const decodedProductName = decodeURIComponent(productName).replace(/-/g, " ");
//         const foundProduct = products.find(
//           (prod: Product) =>
//             prod.name.toLowerCase() === decodedProductName.toLowerCase() &&
//             prod.category === category
//         );
//         if (foundProduct) {
//           setProduct(foundProduct);
//           setSelectedFlavour(foundProduct.flavours ? foundProduct.flavours[0] : "");
//           setSelectedWeight(foundProduct.weights ? foundProduct.weights[0] : "");
//         }
//       } catch (error) {
//         console.error("Failed to fetch product:", error);
//       }
//     };

//     fetchProduct();
//   }, [category, productName]);

//   useEffect(() => {
//     if (userId) {
//       dispatch(fetchCartItems(userId));
//     }
//   }, [userId, dispatch]);

//   useEffect(() => {
//     if (successMessage) {
//       const timer = setTimeout(() => {
//         setSuccessMessage("");
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [successMessage]);

//   useEffect(() => {
//     if (showAlreadyInCartMessage) {
//       const timer = setTimeout(() => {
//         setShowAlreadyInCartMessage(false);
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [showAlreadyInCartMessage]);

//   const updateIsInCart = useCallback(() => {
//     if (product) {
//       setIsInCart(cartItems.some((item: any) => item.id === product.id));
//       console.log("isInCart updated:", isInCart); // Debugging line
//     }
//   }, [cartItems, product]);

//   useEffect(() => {
//     updateIsInCart();
//   }, [cartItems, product, updateIsInCart]);

//   if (!product) {
//     return <p className="text-center mt-20 text-red-500">Product not found</p>;
//   }

//   const toggleWishlist = () => {
//     setIsWishlisted(!isWishlisted);
//   };

//   const shareProduct = () => {
//     const productUrl = `${window.location.origin}/supplements/${category}/${productName}`;
//     navigator.clipboard.writeText(productUrl);
//     alert("Product link copied to clipboard!");
//   };

//   const increaseQuantity = () => setQuantity((prev) => prev + 1);
//   const decreaseQuantity = () =>
//     setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

//   const handleAddToCart = () => {
//     if (userId) {
//       if (isInCart) {
//         setShowAlreadyInCartMessage(true);
//       } else {
//         dispatch(addToCart(userId, product?.id, quantity));
//         setSuccessMessage("Item added to cart!");
//         console.log("Item added to cart, isInCart:", isInCart); // Debugging line
//       }
//     } else {
//       setShowLoginMessage(true);
//       setTimeout(() => {
//         setShowLoginMessage(false);
//         router.push("/login");
//       }, 3500);
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <AnimatePresence>
//         {showLoginMessage && (
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ duration: 1 }}
//             className="fixed top-10 z-[9999] right-0 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg"
//           >
//             Please login to add items to cart.
//           </motion.div>
//         )}
//         {showAlreadyInCartMessage && (
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ duration: 1 }}
//             className="fixed top-10 z-[9999] right-0 bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg"
//           >
//             Item is already in the cart.
//           </motion.div>
//         )}
//       </AnimatePresence>
//       <div className="container mx-auto px-4 py-16 pt-32">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row bg-white shadow-xl rounded-lg overflow-hidden relative">
//           <div className="absolute top-4 right-4 flex space-x-3">
//             <button
//               onClick={toggleWishlist}
//               className="text-red-500 text-2xl hover:scale-110 transition-transform"
//             >
//               {isWishlisted ? <FaHeart /> : <FaRegHeart />}
//             </button>
//             <button
//               onClick={shareProduct}
//               className="text-gray-600 text-2xl hover:scale-110 transition-transform"
//             >
//               <FaShareAlt />
//             </button>
//           </div>

//           <div className="md:w-1/2">
//             <Image
//               src={product.image}
//               priority
//               alt={product.name}
//               width={400}
//               height={400}
//               className="object-cover w-full h-auto"
//             />
//           </div>

//           <div className="md:w-1/2 p-6">
//             <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
//             <p className="text-gray-500 mb-4">
//               {category.replace("-", " ").toUpperCase()}
//             </p>

//             {product.flavours && (
//               <div className="mb-4">
//                 <label className="block text-gray-700 font-semibold mb-2">
//                   Flavour:
//                 </label>
//                 <select
//                   className="w-full border p-2 rounded"
//                   value={selectedFlavour}
//                   onChange={(e) => setSelectedFlavour(e.target.value)}
//                 >
//                   {product.flavours.map((flavour) => (
//                     <option key={flavour} value={flavour}>
//                       {flavour}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             )}

//             {product.weights && (
//               <div className="mb-4">
//                 <label className="block text-gray-700 font-semibold mb-2">
//                   Weight:
//                 </label>
//                 <select
//                   className="w-full border p-2 rounded"
//                   value={selectedWeight}
//                   onChange={(e) => setSelectedWeight(e.target.value)}
//                 >
//                   {product.weights.map((weight) => (
//                     <option key={weight} value={weight}>
//                       {weight}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             )}

//             <div className="flex items-center mt-4">
//               <button
//                 className="p-2 bg-gray-200 rounded"
//                 onClick={decreaseQuantity}
//               >
//                 -
//               </button>
//               <span className="mx-3 text-lg font-bold">{quantity}</span>
//               <button
//                 className="p-2 bg-gray-200 rounded"
//                 onClick={increaseQuantity}
//               >
//                 +
//               </button>
//             </div>

//             <button
//               className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full"
//               onClick={handleAddToCart}
//               disabled={isInCart}
//             >
//               {isInCart ? "Item in Cart" : "Add to Cart"}
//             </button>

//             {successMessage && (
//               <p className="text-green-500 mt-2">{successMessage}</p>
//             )}

//             <div className="mt-6">
//               <h2 className="text-xl font-bold">Product Description</h2>
//               <p className="text-gray-600 mt-2">{product.description}</p>
//             </div>

//             {Array.isArray(product.benefits) && product.benefits.length > 0 && (
//               <div className="mt-6">
//                 <h2 className="text-xl font-bold">Key Benefits</h2>
//                 <ul className="list-disc pl-5 text-gray-600">
//                   {product.benefits.map((benefit, index) => (
//                     <li key={index}>{benefit}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             <div className="mt-6">
//               <h2 className="text-xl font-bold">Nutritional Information</h2>
//               <p className="text-gray-600">{product.nutrition}</p>
//             </div>

//             <div className="mt-6">
//               <h2 className="text-xl font-bold">How to Use</h2>
//               <p className="text-gray-600">{product.usage}</p>
//             </div>

//             <div className="mt-6">
//               <h2 className="text-xl font-bold">Customer Reviews</h2>
//               <p className="text-gray-600 italic">
//                 No reviews yet. Be the first to leave a review!
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

'use client'
import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchCartItems } from "../../../redux/slices/cartSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import axios from "axios";
import { FaHeart, FaRegHeart, FaShareAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface ProductDetailPageProps {
  params: {
    category: string;
    productName: string;
  };
}

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  old_price: string;
  discount: string;
  image: string;
  description: string;
  benefits?: string[];
  nutrition: string;
  usage: string;
  flavours: string[];
  weights: string[];
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.items);
  const userId = useSelector((state: any) => state.auth.user?.id);
  const { category, productName } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedFlavour, setSelectedFlavour] = useState("");
  const [selectedWeight, setSelectedWeight] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showLoginMessage, setShowLoginMessage] = useState(false);
  const [showAlreadyInCartMessage, setShowAlreadyInCartMessage] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        const products = response.data;
        const decodedProductName = decodeURIComponent(productName).replace(/-/g, " ");
        const foundProduct = products.find(
          (prod: Product) =>
            prod.name.toLowerCase() === decodedProductName.toLowerCase() &&
            prod.category === category
        );
        if (foundProduct) {
          setProduct(foundProduct);
          setSelectedFlavour(foundProduct.flavours ? foundProduct.flavours[0] : "");
          setSelectedWeight(foundProduct.weights ? foundProduct.weights[0] : "");
        }
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    fetchProduct();
  }, [category, productName]);

  useEffect(() => {
    if (userId) {
      dispatch(fetchCartItems(userId));
    }
  }, [userId, dispatch]);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  useEffect(() => {
    if (showAlreadyInCartMessage) {
      const timer = setTimeout(() => {
        setShowAlreadyInCartMessage(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showAlreadyInCartMessage]);

  const updateIsInCart = useCallback(() => {
    if (product) {
      setIsInCart(cartItems.some((item: any) => item.id === product.id));
    }
  }, [cartItems, product]);

  useEffect(() => {
    updateIsInCart();
  }, [cartItems, product, updateIsInCart]);

  if (!product) {
    return <p className="text-center mt-20 text-red-500">Product not found</p>;
  }

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const shareProduct = () => {
    const productUrl = `${window.location.origin}/supplements/${category}/${productName}`;
    navigator.clipboard.writeText(productUrl);
    alert("Product link copied to clipboard!");
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    if (userId) {
      if (isInCart) {
        setShowAlreadyInCartMessage(true);
      } else {
        dispatch(addToCart(userId, product?.id, quantity));
        setSuccessMessage("Item added to cart!");
        setQuantity(1); // Reset quantity to 1
        setIsInCart(true); // Update button text
      }
    } else {
      setShowLoginMessage(true);
      setTimeout(() => {
        setShowLoginMessage(false);
        router.push("/login");
      }, 3500);
    }
  };

  return (
    <div>
      <Header />
      <AnimatePresence>
        {showLoginMessage && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 1 }}
            className="fixed top-10 z-[9999] right-0 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg"
          >
            Please login to add items to cart.
          </motion.div>
        )}
        {showAlreadyInCartMessage && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 1 }}
            className="fixed top-10 z-[9999] right-0 bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg"
          >
            Item is already in the cart.
          </motion.div>
        )}
      </AnimatePresence>
      <div className="container mx-auto px-4 py-16 pt-32">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row bg-white shadow-xl rounded-lg overflow-hidden relative">
          <div className="absolute top-4 right-4 flex space-x-3">
            <button
              onClick={toggleWishlist}
              className="text-red-500 text-2xl hover:scale-110 transition-transform"
            >
              {isWishlisted ? <FaHeart /> : <FaRegHeart />}
            </button>
            <button
              onClick={shareProduct}
              className="text-gray-600 text-2xl hover:scale-110 transition-transform"
            >
              <FaShareAlt />
            </button>
          </div>

          <div className="md:w-1/2">
            <Image
              src={product.image}
              priority
              alt={product.name}
              width={400}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>

          <div className="md:w-1/2 p-6">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-500 mb-4">
              {category.replace("-", " ").toUpperCase()}
            </p>

            {product.flavours && (
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Flavour:
                </label>
                <select
                  className="w-full border p-2 rounded"
                  value={selectedFlavour}
                  onChange={(e) => setSelectedFlavour(e.target.value)}
                >
                  {product.flavours.map((flavour) => (
                    <option key={flavour} value={flavour}>
                      {flavour}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {product.weights && (
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Weight:
                </label>
                <select
                  className="w-full border p-2 rounded"
                  value={selectedWeight}
                  onChange={(e) => setSelectedWeight(e.target.value)}
                >
                  {product.weights.map((weight) => (
                    <option key={weight} value={weight}>
                      {weight}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="flex items-center mt-4">
              <button
                className="p-2 bg-gray-200 rounded"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="mx-3 text-lg font-bold">{quantity}</span>
              <button
                className="p-2 bg-gray-200 rounded"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>

            <button
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full"
              onClick={handleAddToCart}
              disabled={isInCart}
            >
              {isInCart ? "Go to Cart" : "Add to Cart"}
            </button>

            {successMessage && (
              <p className="text-green-500 mt-2">{successMessage}</p>
            )}

            <div className="mt-6">
              <h2 className="text-xl font-bold">Product Description</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
            </div>

            {Array.isArray(product.benefits) && product.benefits.length > 0 && (
              <div className="mt-6">
                <h2 className="text-xl font-bold">Key Benefits</h2>
                <ul className="list-disc pl-5 text-gray-600">
                  {product.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6">
              <h2 className="text-xl font-bold">Nutritional Information</h2>
              <p className="text-gray-600">{product.nutrition}</p>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-bold">How to Use</h2>
              <p className="text-gray-600">{product.usage}</p>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-bold">Customer Reviews</h2>
              <p className="text-gray-600 italic">
                No reviews yet. Be the first to leave a review!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
