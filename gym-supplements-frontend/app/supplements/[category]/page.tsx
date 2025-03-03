// // app\supplements\[category]\page.tsx
// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import Footer from "../../components/Footer";
// import Header from "../../components/Header";
// import { useState } from "react";
// import { notFound } from "next/navigation";
// import { useRouter } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../../redux/slices/cartSlice";
// import { allSupplements } from "../../data/supplementsData"; // Import the data

// interface CategoryPageProps {
//   params: { category: string };
// }

// export default function CategoryPage({ params }: CategoryPageProps) {
//   const category = params?.category?.toLowerCase() || "";
//   const supplements = allSupplements[category];
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const cartItems = useSelector((state: any) => state.cart.items);

//   if (!supplements) {
//     notFound();
//   }

//   const [wishlist, setWishlist] = useState<Record<number, boolean>>({});

//   const toggleWishlist = (e: React.MouseEvent, id: number) => {
//     e.stopPropagation(); // Prevent navigation to product detail page
//     setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
//   };

//   const handleAddToCart = (e: React.MouseEvent, product: any) => {
//     e.stopPropagation(); // Prevent navigation to product detail page
//     const cartItem = {
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       oldPrice: product.oldPrice,
//       discount: product.discount,
//       image: product.image,
//       flavour: product.flavours ? product.flavours[0] : "",
//       weight: product.weights ? product.weights[0] : "",
//       quantity: 1,
//     };

//     dispatch(addToCart(cartItem));
//   };

//   return (
//     <div>
//       <Header />

//       <section className="w-full px-4 py-8 pt-28">
//         <h2 className="text-2xl font-bold text-center mb-6">
//           {category.replace("-", " ").toUpperCase()}
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//           {supplements.map((product) => {
//             const isInCart = cartItems.some((item: any) => item.id === product.id);

//             return (
//               <div
//                 key={product.id}
//                 className="relative w-[220px] h-[370px] flex flex-col justify-between border rounded-lg shadow-md p-4 bg-white transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
//               >
//                 <Link
//                   href={`/supplements/${category}/${encodeURIComponent(product.name)}`}
//                   className="absolute inset-0 z-0" // Ensure the link covers the entire card
//                 ></Link>

//                 <button
//                   className="absolute top-2 right-2 p-2 transition z-20 bg-white bg-opacity-60 rounded-full"
//                   onClick={(e) => toggleWishlist(e, product.id)}
//                 >
//                   {wishlist[product.id] ? (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="red"
//                       viewBox="0 0 24 24"
//                       strokeWidth="1.5"
//                       stroke="red"
//                       className="w-6 h-6"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
//                       />
//                     </svg>
//                   ) : (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth="1.5"
//                       stroke="gray"
//                       className="w-6 h-6"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
//                       />
//                     </svg>
//                   )}
//                 </button>

//                 <div className="relative w-full h-36 flex items-center justify-center">
//                   <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded shadow-lg z-10">
//                     Upto {product.discount} OFF
//                   </span>
//                   <Link
//                     href={`/supplements/${category}/${encodeURIComponent(product.name)}`}
//                   >
//                     <Image
//                       src={product.image}
//                       alt={product.name}
//                       width={140}
//                       height={140}
//                       className="object-contain"
//                       priority
//                     />
//                   </Link>
//                 </div>

//                 <h3 className="text-sm font-semibold text-center mt-2">
//                   {product.name}
//                 </h3>

//                 <div className="text-center">
//                   <p className="text-lg font-bold text-green-700">
//                     {product.price}
//                   </p>
//                   <p className="text-sm text-gray-500 line-through">
//                     {product.oldPrice}
//                   </p>
//                 </div>

//                 {/* Add to Cart Button */}
//                 <button
//                   onClick={(e) => isInCart ? router.push("/cart") : handleAddToCart(e, product)}
//                   className="bg-blu/70 text-black/80 px-4 py-2 shadow-lg font-bold rounded-md w-full z-10 relative"
//                 >
//                   {isInCart ? "Go to Cart" : "Add to Cart"}
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// }







"use client";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

interface CategoryPageProps {
  params: { category: string };
}

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  old_price: string;
  discount: string;
  image: string;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = params?.category?.toLowerCase() || "";
  const [supplements, setSupplements] = useState<Product[]>([]);
  const dispatch = useDispatch();
  const router = useRouter();
  const cartItems = useSelector((state: any) => state.cart.items);

  useEffect(() => {
    const fetchSupplements = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const categoryProducts = data.filter((product: Product) => product.category === category);
        setSupplements(categoryProducts);

        // If no products are found for the category, show 404 page
        if (categoryProducts.length === 0) {
          notFound();
        }
      } catch (error) {
        console.error("Failed to fetch supplements:", error);
      }
    };

    fetchSupplements();
  }, [category]);

  const [wishlist, setWishlist] = useState<Record<number, boolean>>({});

  const toggleWishlist = (e: React.MouseEvent, id: number) => {
    e.stopPropagation(); // Prevent navigation to product detail page
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.stopPropagation(); // Prevent navigation to product detail page
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      oldPrice: product.old_price,
      discount: product.discount,
      image: product.image,
      flavour: product.flavours ? product.flavours[0] : "",
      weight: product.weights ? product.weights[0] : "",
      quantity: 1,
    };

    dispatch(addToCart(cartItem));
  };

  return (
    <div>
      <Header />

      <section className="w-full px-4 py-8 pt-28">
        <h2 className="text-2xl font-bold text-center mb-6">
          {category.replace("-", " ").toUpperCase()}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {supplements.map((product) => {
            const isInCart = cartItems.some((item: any) => item.id === product.id);

            return (
              <div
                key={product.id}
                className="relative w-[220px] h-[370px] flex flex-col justify-between border rounded-lg shadow-md p-4 bg-white transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <Link
                  href={`/supplements/${category}/${encodeURIComponent(product.name)}`}
                  className="absolute inset-0 z-0" // Ensure the link covers the entire card
                ></Link>

                <button
                  className="absolute top-2 right-2 p-2 transition z-20 bg-white bg-opacity-60 rounded-full"
                  onClick={(e) => toggleWishlist(e, product.id)}
                >
                  {wishlist[product.id] ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="red"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="red"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="gray"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      />
                    </svg>
                  )}
                </button>

                <div className="relative w-full h-36 flex items-center justify-center">
                  <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded shadow-lg z-10">
                    Upto {product.discount} OFF
                  </span>
                  <Link
                    href={`/supplements/${category}/${encodeURIComponent(product.name)}`}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={140}
                      height={140}
                      className="object-contain"
                      priority
                    />
                  </Link>
                </div>

                <h3 className="text-sm font-semibold text-center mt-2">
                  {product.name}
                </h3>

                <div className="text-center">
                  <p className="text-lg font-bold text-green-700">
                    {product.price}
                  </p>
                  <p className="text-sm text-gray-500 line-through">
                    {product.old_price}
                  </p>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={(e) => isInCart ? router.push("/cart") : handleAddToCart(e, product)}
                  className="bg-blu/70 text-black/80 px-4 py-2 shadow-lg font-bold rounded-md w-full z-10 relative"
                >
                  {isInCart ? "Go to Cart" : "Add to Cart"}
                </button>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
}
