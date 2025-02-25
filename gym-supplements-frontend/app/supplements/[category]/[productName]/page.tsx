// // Gym__site\app\supplements\[category]\[productName]\page.tsx
// "use client";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../../redux/slices/cartSlice";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import Header from "../../../components/Header";
// import Footer from "../../../components/Footer";
// import { allSupplements } from "../../../data/supplementsData";
// import { FaHeart, FaRegHeart, FaShareAlt } from "react-icons/fa"; // Icons for Wishlist & Share


// interface ProductDetailPageProps {
//   params: {
//     category: string;
//     productName: string;
//   };
// }

// export default function ProductDetailPage({ params }: ProductDetailPageProps) {
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const { category, productName } = params;

//   const supplements = allSupplements[category];

//   if (!supplements) {
//     return <p className="text-center mt-20 text-red-500">Category not found</p>;
//   }

//   const decodedProductName = decodeURIComponent(productName).replace(/-/g, " ");
//   const product = supplements.find((supp) => supp.name.toLowerCase() === decodedProductName.toLowerCase());

//   if (!product) {
//     return <p className="text-center mt-20 text-red-500">Product not found</p>;
//   }

//     // States for Flavour, Weight, Wishlist, and Quantity
//   const [selectedFlavour, setSelectedFlavour] = useState(product.flavours ? product.flavours[0] : "");
//   const [selectedWeight, setSelectedWeight] = useState(product.weights ? product.weights[0] : "");
//   const [quantity, setQuantity] = useState(1);
//   // const [selectedFlavour, setSelectedFlavour] = useState(product.flavours ? product.flavours[0] : "");
//   // const [selectedWeight, setSelectedWeight] = useState(product.weights ? product.weights[0] : "");
//   const [isWishlisted, setIsWishlisted] = useState(false);
//   // const [quantity, setQuantity] = useState(1);


  
//   // Toggle Wishlist Function
//   const toggleWishlist = () => {
//     setIsWishlisted(!isWishlisted);
//   };

//   // Share Product Function
//   const shareProduct = () => {
//     const productUrl = `${window.location.origin}/supplements/${category}/${productName}`;
//     navigator.clipboard.writeText(productUrl);
//     alert("Product link copied to clipboard!");
//   };

//   // Update Quantity
//   const increaseQuantity = () => setQuantity((prev) => prev + 1);
//   const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

//   const handleAddToCart = () => {
//     const cartItem = {
//       id: `${product.name}-${selectedFlavour}-${selectedWeight}`,
//       name: product.name,
//       price: product.price,
//       oldPrice: product.oldPrice,
//       discount: product.discount,
//       image: product.image,
//       flavour: selectedFlavour,
//       weight: selectedWeight,
//       quantity,
//     };

//     dispatch(addToCart(cartItem));
//   };

//   return (
//     <div>
//       <Header />     
//          <div className="container mx-auto px-4 py-16 pt-32">
//          <div className="max-w-6xl mx-auto flex flex-col md:flex-row bg-white shadow-xl rounded-lg overflow-hidden relative">
//           {/* Wishlist & Share Icons */}
//           <div className="absolute top-4 right-4 flex space-x-3">
//             <button onClick={toggleWishlist} className="text-red-500 text-2xl hover:scale-110 transition-transform">
//               {isWishlisted ? <FaHeart /> : <FaRegHeart />}
//             </button>
//             <button onClick={shareProduct} className="text-gray-600 text-2xl hover:scale-110 transition-transform">
//               <FaShareAlt />
//             </button>
//           </div>
//                     {/* Product Image */}

//           <div className="md:w-1/2">
//             <Image src={product.image} alt={product.name} width={400} height={400} className="object-cover w-full h-auto" />
//           </div>

//           {/* Product Details */}

//           <div className="md:w-1/2 p-6">
//             <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
//             <p className="text-gray-500 mb-4">{category.replace("-", " ").toUpperCase()}</p>

//             {/* Flavour Selection */}
//             {product.flavours && (
//               <div className="mb-4">
//                 <label className="block text-gray-700 font-semibold mb-2">Flavour:</label>
//                 <select className="w-full border p-2 rounded" value={selectedFlavour} onChange={(e) => setSelectedFlavour(e.target.value)}>
//                   {product.flavours.map((flavour) => (
//                     <option key={flavour} value={flavour}>
//                       {flavour}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             )}

//             {/* Weight Selection */}
//             {product.weights && (
//               <div className="mb-4">
//                 <label className="block text-gray-700 font-semibold mb-2">Weight:</label>
//                 <select className="w-full border p-2 rounded" value={selectedWeight} onChange={(e) => setSelectedWeight(e.target.value)}>
//                   {product.weights.map((weight) => (
//                     <option key={weight} value={weight}>
//                       {weight}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             )}

//             {/* Quantity Selector */}
//             <div className="flex items-center mt-4">
//               <button className="p-2 bg-gray-200 rounded" onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</button>
//               <span className="mx-3 text-lg font-bold">{quantity}</span>
//               <button className="p-2 bg-gray-200 rounded" onClick={() => setQuantity((q) => q + 1)}>+</button>
//             </div>

//             <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full" onClick={handleAddToCart}>
//               Add to Cart
//             </button>


//             {/* Product Details */}
//             <div className="mt-6">
//               <h2 className="text-xl font-bold">Product Description</h2>
//               <p className="text-gray-600 mt-2">{product.description}</p>
//             </div>

//             <div className="mt-6">
//               <h2 className="text-xl font-bold">Key Benefits</h2>
//               <ul className="list-disc pl-5 text-gray-600">
//                 {product.benefits.map((benefit, index) => (
//                   <li key={index}>{benefit}</li>
//                 ))}
//               </ul>
//             </div>

//             <div className="mt-6">
//               <h2 className="text-xl font-bold">Nutritional Information</h2>
//               <p className="text-gray-600">{product.nutrition}</p>
//             </div>

//             <div className="mt-6">
//               <h2 className="text-xl font-bold">How to Use</h2>
//               <p className="text-gray-600">{product.usage}</p>
//             </div>

//             {/* Placeholder for Reviews */}
//             <div className="mt-6">
//               <h2 className="text-xl font-bold">Customer Reviews</h2>
//               <p className="text-gray-600 italic">No reviews yet. Be the first to leave a review!</p>
//             </div>

//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }


// Gym__site\app\supplements\[category]\[productName]\page.tsx
"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/slices/cartSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { allSupplements } from "../../../data/supplementsData";
import { FaHeart, FaRegHeart, FaShareAlt } from "react-icons/fa"; // Icons for Wishlist & Share

interface ProductDetailPageProps {
  params: {
    category: string;
    productName: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.items);
  const { category, productName } = params;

  const supplements = allSupplements[category];

  if (!supplements) {
    return <p className="text-center mt-20 text-red-500">Category not found</p>;
  }

  const decodedProductName = decodeURIComponent(productName).replace(/-/g, " ");
  const product = supplements.find((supp) => supp.name.toLowerCase() === decodedProductName.toLowerCase());

  if (!product) {
    return <p className="text-center mt-20 text-red-500">Product not found</p>;
  }

  const [selectedFlavour, setSelectedFlavour] = useState(product.flavours ? product.flavours[0] : "");
  const [selectedWeight, setSelectedWeight] = useState(product.weights ? product.weights[0] : "");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const isInCart = cartItems.some(
    (item: any) => item.id === `${product.name}-${selectedFlavour}-${selectedWeight}`
  );

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const shareProduct = () => {
    const productUrl = `${window.location.origin}/supplements/${category}/${productName}`;
    navigator.clipboard.writeText(productUrl);
    alert("Product link copied to clipboard!");
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    const cartItem = {
      id: `${product.name}-${selectedFlavour}-${selectedWeight}`,
      name: product.name,
      price: product.price,
      oldPrice: product.oldPrice,
      discount: product.discount,
      image: product.image,
      flavour: selectedFlavour,
      weight: selectedWeight,
      quantity,
    };

    dispatch(addToCart(cartItem));
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-16 pt-32">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row bg-white shadow-xl rounded-lg overflow-hidden relative">
          {/* Wishlist & Share Icons */}
          <div className="absolute top-4 right-4 flex space-x-3">
            <button onClick={toggleWishlist} className="text-red-500 text-2xl hover:scale-110 transition-transform">
              {isWishlisted ? <FaHeart /> : <FaRegHeart />}
            </button>
            <button onClick={shareProduct} className="text-gray-600 text-2xl hover:scale-110 transition-transform">
              <FaShareAlt />
            </button>
          </div>

          {/* Product Image */}
          <div className="md:w-1/2">
            <Image src={product.image} alt={product.name} width={400} height={400} className="object-cover w-full h-auto" />
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 p-6">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-500 mb-4">{category.replace("-", " ").toUpperCase()}</p>

            {/* Flavour Selection */}
            {product.flavours && (
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Flavour:</label>
                <select className="w-full border p-2 rounded" value={selectedFlavour} onChange={(e) => setSelectedFlavour(e.target.value)}>
                  {product.flavours.map((flavour) => (
                    <option key={flavour} value={flavour}>
                      {flavour}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Weight Selection */}
            {product.weights && (
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Weight:</label>
                <select className="w-full border p-2 rounded" value={selectedWeight} onChange={(e) => setSelectedWeight(e.target.value)}>
                  {product.weights.map((weight) => (
                    <option key={weight} value={weight}>
                      {weight}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="flex items-center mt-4">
              <button className="p-2 bg-gray-200 rounded" onClick={decreaseQuantity}>-</button>
              <span className="mx-3 text-lg font-bold">{quantity}</span>
              <button className="p-2 bg-gray-200 rounded" onClick={increaseQuantity}>+</button>
            </div>

            <button
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full"
              onClick={isInCart ? () => router.push("/cart") : handleAddToCart}
            >
              {isInCart ? "Go to Cart" : "Add to Cart"}
            </button>

            {/* Product Details */}
            <div className="mt-6">
              <h2 className="text-xl font-bold">Product Description</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-bold">Key Benefits</h2>
              <ul className="list-disc pl-5 text-gray-600">
                {product.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-bold">Nutritional Information</h2>
              <p className="text-gray-600">{product.nutrition}</p>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-bold">How to Use</h2>
              <p className="text-gray-600">{product.usage}</p>
            </div>

            {/* Placeholder for Reviews */}
            <div className="mt-6">
              <h2 className="text-xl font-bold">Customer Reviews</h2>
              <p className="text-gray-600 italic">No reviews yet. Be the first to leave a review!</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
