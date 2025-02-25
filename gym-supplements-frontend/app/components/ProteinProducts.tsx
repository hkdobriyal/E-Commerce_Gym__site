
// // Gym__website\app\components\ProteinProducts.tsx


"use client"; // Needed for animations in Next.js
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Supplement Data

const supplementCategories = {
  "Whey Protein": [
    { id: 1, name: "ON Gold Standard Whey", price: "₹5,199", oldPrice: "₹6,999", discount: "25%", image: "/images/supplement_img/ON_wheyiso.jpg" },
    { id: 2, name: "MuscleBlaze Whey Protein", price: "₹3,999", oldPrice: "₹5,299", discount: "24%", image: "/images/supplement_img/Mb_whey_hydro.png" },
    { id: 3, name: "MyProtein Impact Whey", price: "₹4,499", oldPrice: "₹5,999", discount: "20%", image: "/images/supplement_img/myprotien_wheyiso.jpg" },
    { id: 4, name: "GNC Pro Performance Whey", price: "₹3,799", oldPrice: "₹4,999", discount: "24%", image: "/images/supplement_img/GNC_wheypro.jpg" },
    { id: 5, name: "MyProtein Impact Whey", price: "₹4,499", oldPrice: "₹5,999", discount: "20%", image: "/images/supplement_img/myprotien_wheyiso.jpg" },
  ],
  "Mass Gainers": [
    { id: 6, name: "ON Serious Mass Gainer", price: "₹4,999", oldPrice: "₹6,499", discount: "23%", image: "/images/supplement_img/ON_massgainer.jpg" },
    { id: 7, name: "MuscleBlaze Mass Gainer", price: "₹3,499", oldPrice: "₹4,699", discount: "26%", image: "/images/supplement_img/ON-massgainer.jpg" },
    { id: 8, name: "MuscleBlaze Mass Gainer", price: "₹3,499", oldPrice: "₹4,699", discount: "26%", image: "/images/supplement_img/ON-massgainer.jpg" },
    { id: 9, name: "BigMuscles Lean Mass Gainer", price: "₹2,999", oldPrice: "₹3,899", discount: "23%", image: "/images/supplement_img/BM_masgainer.jpg" },
    { id: 10, name: "MuscleBlaze Mass Gainer", price: "₹3,499", oldPrice: "₹4,699", discount: "26%", image: "/images/supplement_img/ON-massgainer.jpg" },
  ],
  "BCAA (Intra-workout)": [
    { id: 11, name: "Xtend BCAA", price: "₹2,499", oldPrice: "₹3,299", discount: "24%", image: "/images/supplement_img/xtend1.png" },
    { id: 12, name: "MuscleBlaze BCAA Pro", price: "₹1,999", oldPrice: "₹2,699", discount: "26%", image: "/images/supplement_img/jymBCAA.jpg" },
    { id: 13, name: "GNC AMP BCAA", price: "₹2,299", oldPrice: "₹3,099", discount: "26%", image: "/images/supplement_img/xtend1.png" },
    { id: 14, name: "Xtend BCAA", price: "₹2,499", oldPrice: "₹3,299", discount: "24%", image: "/images/supplement_img/xtend1.png" },
    { id: 15, name: "MuscleBlaze BCAA Pro", price: "₹1,999", oldPrice: "₹2,699", discount: "26%", image: "/images/supplement_img/jymBCAA.jpg" },
  ],
  "Pre-Workout": [
    { id: 16, name: "C4 Pre-Workout", price: "₹2,499", oldPrice: "₹3,199", discount: "22%", image: "/images/supplement_img/c4_preworkout.webp" },
    { id: 17, name: "MuscleBlaze Pre-Workout Ripped", price: "₹1,999", oldPrice: "₹2,699", discount: "26%", image: "/images/supplement_img/MB_preworkout.webp" },
    { id: 18, name: "C4 Pre-Workout", price: "₹2,499", oldPrice: "₹3,199", discount: "22%", image: "/images/supplement_img/c4_preworkout.webp" },
    { id: 19, name: "MuscleBlaze Pre-Workout Ripped", price: "₹1,999", oldPrice: "₹2,699", discount: "26%", image: "/images/supplement_img/MB_preworkout.webp" },
    { id: 20, name: "C4 Pre-Workout", price: "₹2,499", oldPrice: "₹3,199", discount: "22%", image: "/images/supplement_img/c4_preworkout.webp" },
  ],
  "Creatine": [
    { id: 21, name: "ON Micronized Creatine", price: "₹1,499", oldPrice: "₹1,999", discount: "25%", image: "/images/supplement_img/ON_creatine.png" },
    { id: 22, name: "MuscleBlaze Creatine Monohydrate", price: "₹1,299", oldPrice: "₹1,799", discount: "28%", image: "/images/supplement_img/On_creatine.webp" },
    { id: 23, name: "ON Micronized Creatine", price: "₹1,499", oldPrice: "₹1,999", discount: "25%", image: "/images/supplement_img/ON_creatine.png" },
    { id: 24, name: "MuscleBlaze Creatine Monohydrate", price: "₹1,299", oldPrice: "₹1,799", discount: "28%", image: "/images/supplement_img/On_creatine.webp" },
    { id: 25, name: "ON Micronized Creatine", price: "₹1,499", oldPrice: "₹1,999", discount: "25%", image: "/images/supplement_img/ON_creatine.png" },
  ],
};


// Function to convert category name to slug format
const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

export default function SupplementsSection() {
  return (
    <section id="SupplementsSection" className="w-full px-4 py-8 bg-gray-100">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl font-bold text-center mb-6 text-gray-900"
      >
        Top Supplements
      </motion.h2>

      {Object.entries(supplementCategories).map(([category, products]) => {
        const categorySlug = slugify(category);
        const rows = [];

        for (let i = 0; i < products.length; i += 5) {
          rows.push(products.slice(i, i + 5));
        }

        return (
          <div key={category} className="mb-8">
            {/* Category Title */}
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl font-semibold mb-4 text-gray-800"
            >
              {category}
            </motion.h3>

            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex items-center space-x-4 mb-4">
                {row.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05}}
                    transition={{ duration: 0.1, ease: "easeOut" }}
                    className="w-[220px] h-[330px] flex flex-col justify-between border rounded-lg shadow-lg p-4 bg-gray-200 transition-transform duration-300 transform will-change-transform"
                    style={{ perspective: "1000px", height: "330px" }} // Prevents height changes
                  >
                    {/* Image with Animation */}
                    <div className="relative w-full h-36 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1  }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <Image src={product.image} alt={product.name} width={140} height={140} className="object-contain" />
                      </motion.div>
                      <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                        Upto {product.discount} OFF
                      </span>
                    </div>

                    {/* Product Details */}
                    <h3 className="text-sm font-semibold text-center mt-2">{product.name}</h3>
                    <div className="text-center">
                      <p className="text-lg font-bold text-green-700">{product.price}</p>
                      <p className="text-sm text-gray-500 line-through">{product.oldPrice}</p>
                    </div>
                  </motion.div>
                ))}

                {/* "Explore More" Button after the 5th Card */}
                {rowIndex === rows.length - 1 && (
                  <Link
                    href={`/supplements/${categorySlug}`}
                    className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-full shadow-md hover:bg-blue-600 transition duration-300"
                  >
                    Explore More →
                  </Link>
                )}
              </div>
            ))}
          </div>
        );
      })}
    </section>
  );
}



// "use client"; // Needed for animations in Next.js
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import { Button } from "@/app/components/ui/button";
// import { Heart, HeartOff } from "lucide-react";

// // Supplement Data
// const supplementCategories = {
//   "Whey Protein": [
//     { id: 1, name: "ON Gold Standard Whey", price: "₹5,199", oldPrice: "₹6,999", discount: "25%", image: "/images/supplement_img/ON_wheyiso.jpg" },
//     { id: 2, name: "MuscleBlaze Whey Protein", price: "₹3,999", oldPrice: "₹5,299", discount: "24%", image: "/images/supplement_img/Mb_whey_hydro.png" },
//     { id: 3, name: "MyProtein Impact Whey", price: "₹4,499", oldPrice: "₹5,999", discount: "20%", image: "/images/supplement_img/myprotien_wheyiso.jpg" },
//     { id: 4, name: "GNC Pro Performance Whey", price: "₹3,799", oldPrice: "₹4,999", discount: "24%", image: "/images/supplement_img/GNC_wheypro.jpg" },
//     { id: 5, name: "MyProtein Impact Whey", price: "₹4,499", oldPrice: "₹5,999", discount: "20%", image: "/images/supplement_img/myprotien_wheyiso.jpg" },
//   ],
// };

// // Function to convert category name to slug format
// const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

// export default function SupplementsSection() {
//   const [wishlist, setWishlist] = useState<{ id: number; name: string; price: string; image: string }[]>([]);

//   // Load wishlist from localStorage when component mounts
//   useEffect(() => {
//     const storedWishlist = localStorage.getItem("wishlist");
//     if (storedWishlist) {
//       setWishlist(JSON.parse(storedWishlist));
//     }
//   }, []);

//   // Save wishlist to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
//   }, [wishlist]);

//   // Toggle Wishlist (Add/Remove)
//   const toggleWishlist = (product: { id: number; name: string; price: string; image: string }) => {
//     if (wishlist.some((item) => item.id === product.id)) {
//       setWishlist(wishlist.filter((item) => item.id !== product.id));
//     } else {
//       setWishlist([...wishlist, product]);
//     }
//   };

//   return (
//     <section id="SupplementsSection" className="w-full px-4 py-8 bg-gray-100">
//       {/* Section Title */}
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-3xl font-bold text-center mb-6 text-gray-900"
//       >
//         Top Supplements
//       </motion.h2>

//       {Object.entries(supplementCategories).map(([category, products]) => {
//         const categorySlug = slugify(category);
//         const rows = [];

//         for (let i = 0; i < products.length; i += 5) {
//           rows.push(products.slice(i, i + 5));
//         }

//         return (
//           <div key={category} className="mb-8">
//             {/* Category Title */}
//             <motion.h3
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="text-xl font-semibold mb-4 text-gray-800"
//             >
//               {category}
//             </motion.h3>

//             {rows.map((row, rowIndex) => (
//               <div key={rowIndex} className="flex items-center space-x-4 mb-4">
//                 {row.map((product) => {
//                   const isInWishlist = wishlist.some((item) => item.id === product.id);

//                   return (
//                     <motion.div
//                       key={product.id}
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       whileHover={{ scale: 1.05 }}
//                       transition={{ duration: 0.1, ease: "easeOut" }}
//                       className="w-[220px] h-[360px] flex flex-col justify-between border rounded-lg shadow-lg p-4 bg-gray-200 transition-transform duration-300 transform will-change-transform"
//                       style={{ perspective: "1000px", height: "360px" }} // Prevents height changes
//                     >
//                       {/* Image with Animation */}
//                       <div className="relative w-full h-36 flex items-center justify-center">
//                         <motion.div
//                           initial={{ scale: 1 }}
//                           whileHover={{ scale: 1 }}
//                           transition={{ duration: 0.4, ease: "easeInOut" }}
//                         >
//                           <Image src={product.image} alt={product.name} width={140} height={140} className="object-contain" />
//                         </motion.div>
//                         <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
//                           Upto {product.discount} OFF
//                         </span>
//                       </div>

//                       {/* Product Details */}
//                       <h3 className="text-sm font-semibold text-center mt-2">{product.name}</h3>
//                       <div className="text-center">
//                         <p className="text-lg font-bold text-green-700">{product.price}</p>
//                         <p className="text-sm text-gray-500 line-through">{product.oldPrice}</p>
//                       </div>

//                       {/* Wishlist Button */}
//                       <Button
//                         variant="outline"
//                         className="flex items-center justify-center gap-2 mt-2"
//                         onClick={() => toggleWishlist(product)}
//                       >
//                         {isInWishlist ? <HeartOff className="w-4 h-4 text-red-600" /> : <Heart className="w-4 h-4 text-gray-500" />}
//                         {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
//                       </Button>
//                     </motion.div>
//                   );
//                 })}

//                 {/* "Explore More" Button after the 5th Card */}
//                 {rowIndex === rows.length - 1 && (
//                   <Link
//                     href={`/supplements/${categorySlug}`}
//                     className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-full shadow-md hover:bg-blue-600 transition duration-300"
//                   >
//                     Explore More →
//                   </Link>
//                 )}
//               </div>
//             ))}
//           </div>
//         );
//       })}
//     </section>
//   );
// }
