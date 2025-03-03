// // // app/cart/page.tsx
// // "use client";
// // import { useSelector } from "react-redux";
// // import { RootState } from "../redux/store";
// // import { useRouter } from "next/navigation";

// // import Header from "@/app/components/Header";
// // import Footer from "@/app/components/Footer";
// // import CartItem from "../components/CartItem";
// // import OrderSummary from "../components/OrderSummary";

// // export default function CartPage() {
// //   const cartItems = useSelector((state: RootState) => state.cart.items);
// //   const router = useRouter();

// //   const handleContinueShopping = () => {
// //     router.push("/"); // Navigate to the home page
// //   };



// //   return (
// //     <main>
// //       <Header />
// //       <div className="container mx-auto mt-10 py-28 flex flex-col md:flex-row justify-between gap-8">
// //         <div className="w-full md:w-2/3">
// //           {cartItems.length > 0 ? (
// //             <>
// //               <div className="bg-blue-100 p-4 mb-4 text-white">
// //                 <p className="text-lg font-semibold">Combo added, you have saved ₹449</p>
// //               </div>
// //               <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
// //               <div className="mt-4">
// //                 {cartItems.map((item) => (
// //                   <CartItem key={item.id} item={item} />
// //                 ))}
// //               </div>
// //             </>
// //           ) : (
// //             <div className="text-center">
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 className="mx-auto mb-4 h-24 w-24 text-gray-400"
// //                 fill="none"
// //                 viewBox="0 0 24 24"
// //                 stroke="currentColor"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth="2"
// //                   d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014-2z"
// //                 />
// //               </svg>
// //               <p className="text-xl font-semibold mb-4">Your cart is empty</p>
// //               <button className="bg-blue-500 text-white py-2 px-4 rounded-lg"
// //                 onClick={handleContinueShopping}
// //               >
// //                 Continue Shopping
// //               </button>
// //             </div>
// //           )}
// //         </div>
// //         {cartItems.length > 0 && (
// //           <div className="w-full md:w-1/3">
// //             <OrderSummary />
// //           </div>
// //         )}
// //       </div>
// //       <Footer />
// //     </main>
// //   );
// // }




// // // gym-supplements-frontend\app\cart\page.tsx
// // "use client";
// // import { useSelector } from "react-redux";
// // import { RootState } from "../redux/store";
// // import { useRouter } from "next/navigation";
// // import Header from "@/app/components/Header";
// // import Footer from "@/app/components/Footer";
// // import CartItem from "../components/CartItem";
// // import OrderSummary from "../components/OrderSummary";

// // export default function CartPage() {
// //   const cartItems = useSelector((state: RootState) => state.cart.items);
// //   const router = useRouter();

// //   const handleContinueShopping = () => {
// //     router.push("/"); // Navigate to the home page
// //   };

// //   const handleCheckout = () => {
// //     router.push("/checkout"); // Navigate to the checkout page
// //   };

// //   return (
// //     <main>
// //       <Header />
// //       <div className="container mx-auto mt-10 py-28 flex flex-col md:flex-row justify-between gap-8">
// //         <div className="w-full md:w-2/3">
// //           {cartItems.length > 0 ? (
// //             <>
// //               <div className="bg-blue-100 p-4 mb-4 text-white">
// //                 <p className="text-lg font-semibold">Combo added, you have saved ₹449</p>
// //               </div>
// //               <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
// //               <div className="mt-4">
// //                 {cartItems.map((item) => (
// //                   <CartItem key={item.id} item={item} />
// //                 ))}
// //               </div>
// //             </>
// //           ) : (
// //             <div className="text-center">
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 className="mx-auto mb-4 h-24 w-24 text-gray-400"
// //                 fill="none"
// //                 viewBox="0 0 24 24"
// //                 stroke="currentColor"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth="2"
// //                   d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014-2z"
// //                 />
// //               </svg>
// //               <p className="text-xl font-semibold mb-4">Your cart is empty</p>
// //               <button
// //                 className="bg-blue-500 text-white py-2 px-4 rounded-lg"
// //                 onClick={handleContinueShopping}
// //               >
// //                 Continue Shopping
// //               </button>
// //             </div>
// //           )}
// //         </div>
// //         {cartItems.length > 0 && (
// //           <div className="w-full md:w-1/3">
// //             <OrderSummary />
// //             <button
// //               className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4"
// //               onClick={handleCheckout}
// //             >
// //               Proceed to Checkout
// //             </button>
// //           </div>
// //         )}
// //       </div>
// //       <Footer />
// //     </main>
// //   );
// // }


// // gym-supplements-frontend\app\cart\page.tsx
// "use client";
// import { useSelector } from "react-redux";
// import { RootState } from "../redux/store";
// import { useRouter } from "next/navigation";
// import Header from "@/app/components/Header";
// import Footer from "@/app/components/Footer";
// import CartItem from "../components/CartItem";
// import OrderSummary from "../components/OrderSummary";

// export default function CartPage() {
//   const cartItems = useSelector((state: RootState) => state.cart.items);
//   const router = useRouter();

//   const handleContinueShopping = () => {
//     router.push("/"); // Navigate to the home page
//   };

//   const handleCheckout = () => {
//     router.push("/checkout"); // Navigate to the checkout page
//   };

//   return (
//     <main>
//       <Header />
//       <div className="container mx-auto mt-10 py-28 flex flex-col md:flex-row justify-between gap-8">
//         <div className="w-full md:w-2/3">
//           {cartItems.length > 0 ? (
//             <>
//               <div className="bg-blue-100 p-4 mb-4 text-white">
//                 <p className="text-lg font-semibold">Combo added, you have saved ₹449</p>
//               </div>
//               <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
//               <div className="mt-4">
//                 {cartItems.map((item) => (
//                   <CartItem key={item.id} item={item} />
//                 ))}
//               </div>
//             </>
//           ) : (
//             <div className="text-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="mx-auto mb-4 h-24 w-24 text-gray-400"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014-2z"
//                 />
//               </svg>
//               <p className="text-xl font-semibold mb-4">Your cart is empty</p>
//               <button
//                 className="bg-blue-500 text-white py-2 px-4 rounded-lg"
//                 onClick={handleContinueShopping}
//               >
//                 Continue Shopping
//               </button>
//             </div>
//           )}
//         </div>
//         {cartItems.length > 0 && (
//           <div className="w-full md:w-1/3">
//             <OrderSummary />
//             <button
//               className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4"
//               onClick={handleCheckout}
//             >
//               Checkout
//             </button>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </main>
//   );
// }


"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems } from "@/app/redux/slices/cartSlice";
import { useRouter } from "next/navigation";
import CartItem from "../components/CartItem";

export default function CartPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { items, status } = useSelector((state) => state.cart);
  const userId = 1; // Replace with actual user ID

  useEffect(() => {
    dispatch(fetchCartItems(userId));
  }, [dispatch]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {status === "loading" ? (
        <p>Loading...</p>
      ) : items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        items.map((item) => <CartItem key={item.id} item={item} />)
      )}

      <button
        onClick={() => router.push("/checkout")}
        className="bg-blue-500 text-white px-6 py-3 rounded mt-4"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}
