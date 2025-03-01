// // // // // app/components/OrderSummary.tsx
// // // // import React from "react";
// // // // import { useSelector } from "react-redux";
// // // // import { RootState } from "../redux/store";

// // // // const OrderSummary: React.FC = () => {
// // // //   const cartItems = useSelector((state: RootState) => state.cart.items);
// // // //   const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
// // // //   const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
// // // //   const totalDiscount = cartItems.reduce((total, item) => total + (item.discount || 0), 0);

// // // //   return (
// // // //     <div className="bg-white p-6 rounded-lg shadow-md">
// // // //       <h2 className="text-xl font-semibold mb-4">Order Summary ({totalQuantity} Items)</h2>
// // // //       <div className="mb-4">
// // // //         <p className="text-gray-600">Price</p>
// // // //         <p className="text-gray-800 font-bold">₹{totalAmount + totalDiscount}</p>
// // // //       </div>
// // // //       <div className="mb-4">
// // // //         <p className="text-gray-600">Discount</p>
// // // //         <p className="text-green-600 font-bold">-₹{totalDiscount}</p>
// // // //       </div>
// // // //       <div className="mb-4">
// // // //         <p className="text-gray-600">Total Amount</p>
// // // //         <p className="text-gray-800 font-bold">₹{totalAmount}</p>
// // // //       </div>
// // // //       <div className="mb-4">
// // // //         <p className="text-gray-600">You will earn ₹60 MB Cash on this purchase.</p>
// // // //       </div>
// // // //       <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg w-full">
// // // //         Checkout
// // // //       </button>
// // // //       <div className="mt-4">
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Enter Coupon/Gift Code"
// // // //           className="w-full p-2 border rounded-lg"
// // // //         />
// // // //         <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full mt-2">
// // // //           Apply
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default OrderSummary;

// // // "use client";

// // // import React from "react";
// // // import { useSelector } from "react-redux";
// // // import { useRouter } from "next/navigation"; // App Router navigation
// // // import { RootState } from "../redux/store";

// // // const OrderSummary: React.FC = () => {
// // //   const router = useRouter();
// // //   const cartItems = useSelector((state: RootState) => state.cart.items);
// // //   const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
// // //   const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
// // //   const totalDiscount = cartItems.reduce((total, item) => total + (item.discount || 0), 0);

// // //   const handleCheckout = () => {
// // //     router.push("/checkout/success"); // Navigate to success page
// // //   };

// // //   return (
// // //     <div className="bg-white p-6 rounded-lg shadow-md">
// // //       <h2 className="text-xl font-semibold mb-4">Order Summary ({totalQuantity} Items)</h2>

// // //       <div className="mb-4">
// // //         <p className="text-gray-600">Price</p>
// // //         <p className="text-gray-800 font-bold">₹{totalAmount + totalDiscount}</p>
// // //       </div>

// // //       <div className="mb-4">
// // //         <p className="text-gray-600">Discount</p>
// // //         <p className="text-green-600 font-bold">-₹{totalDiscount}</p>
// // //       </div>

// // //       <div className="mb-4">
// // //         <p className="text-gray-600">Total Amount</p>
// // //         <p className="text-gray-800 font-bold">₹{totalAmount}</p>
// // //       </div>

// // //       <div className="mb-4">
// // //         <p className="text-gray-600">You will earn ₹60 MB Cash on this purchase.</p>
// // //       </div>

// // //       {/* Checkout Button */}
// // //       <button
// // //         onClick={handleCheckout}
// // //         className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg w-full transition-all duration-300"
// // //       >
// // //         Checkout
// // //       </button>

// // //       {/* Coupon Input */}
// // //       <div className="mt-4">
// // //         <input
// // //           type="text"
// // //           placeholder="Enter Coupon/Gift Code"
// // //           className="w-full p-2 border rounded-lg"
// // //         />
// // //         <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg w-full mt-2 transition-all duration-300">
// // //           Apply
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default OrderSummary;

// // "use client";

// // import React from "react";
// // import { useSelector } from "react-redux";
// // import { useRouter } from "next/navigation";
// // import { RootState } from "../redux/store";

// // const OrderSummary: React.FC = () => {
// //   const router = useRouter();
// //   const cartItems = useSelector((state: RootState) => state.cart.items);
// //   const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
// //   const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
// //   const totalDiscount = cartItems.reduce((total, item) => total + (item.discount || 0), 0);

// //   const handleCheckout = () => {
// //     const isPaymentSuccess = Math.random() > 0.5; // Simulating success/failure
// //     if (isPaymentSuccess) {
// //       router.push("/checkout/success");
// //     } else {
// //       router.push("/checkout/failure");
// //     }
// //   };

// //   return (
// //     <div className="bg-white p-6 rounded-lg shadow-lg">
// //       <h2 className="text-xl font-semibold mb-4">Order Summary ({totalQuantity} Items)</h2>

// //       <div className="mb-4 flex justify-between">
// //         <p className="text-gray-600">Price</p>
// //         <p className="text-gray-800 font-bold">₹{totalAmount + totalDiscount}</p>
// //       </div>

// //       <div className="mb-4 flex justify-between">
// //         <p className="text-gray-600">Discount</p>
// //         <p className="text-green-600 font-bold">-₹{totalDiscount}</p>
// //       </div>

// //       <div className="mb-4 flex justify-between">
// //         <p className="text-gray-600">Total Amount</p>
// //         <p className="text-gray-800 font-bold">₹{totalAmount}</p>
// //       </div>

// //       <button
// //         onClick={handleCheckout}
// //         className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg w-full transition-transform transform hover:scale-105"
// //       >
// //         Checkout
// //       </button>
// //     </div>
// //   );
// // };

// // export default OrderSummary;


// // gym-supplements-frontend\app\components\OrderSummary.tsx
// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "../redux/store";
// import { useRouter } from "next/navigation";
// import Header from "@/app/components/Header";
// import Footer from "@/app/components/Footer";
// import CartItem from "../components/CartItem";
// const OrderSummary: React.FC = () => {
//   const cartItems = useSelector((state: RootState) => state.cart.items);

//   const totalQuantity = cartItems.reduce(
//     (total, item) => total + item.quantity,
//     0
//   );
//   const totalAmount = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );
//   const totalDiscount = cartItems.reduce(
//     (total, item) => total + (item.discount || 0),
//     0
//   );
//   const finalAmount = totalAmount - totalDiscount;
//   const [loading, setLoading] = useState(false);

//   const router = useRouter();

//   const handleProceedToPayment = () => {
//     if (cartItems.length === 0) {
//       alert("Your cart is empty. Please add items before proceeding.");
//       return;
//     }

//     setLoading(true);

//     setTimeout(() => {
//       const isPaymentSuccess = Math.random() > 0.5; // Simulated success/failure
//       if (isPaymentSuccess) {
//         router.push("/checkout/success");
//       } else {
//         router.push("/checkout/failure");
//       }
//       setLoading(false);
//     }, 1500); // Simulating a delay
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-xl font-semibold mb-4">
//         Order Summary ({totalQuantity} Items)
//       </h2>
//       <div className="mb-4 flex justify-between">
//         <p className="text-gray-600">Total Price</p>
//         <p className="text-gray-800 font-bold">₹{totalAmount}</p>
//       </div>
//       <div className="mb-4 flex justify-between">
//         <p className="text-gray-600">Discount</p>
//         <p className="text-green-600 font-bold">-₹{totalDiscount}</p>
//       </div>
//       <div className="mb-4 flex justify-between">
//         <p className="text-gray-600">Total Payable</p>
//         <p className="text-gray-800 font-bold">₹{finalAmount}</p>
//       </div>

//       <button 
//       // className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg w-full transition-transform transform hover:scale-105"
//         onClick={handleProceedToPayment}
//                     disabled={loading}
//                     // className={`mt-4 text-white py-2 px-4 rounded-lg w-full transition-transform transform hover:scale-105 ${
//                     className={`bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg w-full transition-transform transform hover:scale-105 ${
//                       loading ? "bg-gray-400 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-600"
//                     }`}
//       >
//         Proceed to Payment
//       </button>
//     </div>
//   );
// };

// export default OrderSummary;

// gym-supplements-frontend\app\components\OrderSummary.tsx
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const OrderSummary: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalDiscount = cartItems.reduce(
    (total, item) => total + (item.discount || 0),
    0
  );
  const finalAmount = totalAmount - totalDiscount;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">
        Order Summary ({totalQuantity} Items)
      </h2>
      <div className="mb-4 flex justify-between">
        <p className="text-gray-600">Total Price</p>
        <p className="text-gray-800 font-bold">₹{totalAmount.toFixed(2)}</p>
      </div>
      <div className="mb-4 flex justify-between">
        <p className="text-gray-600">Discount</p>
        <p className="text-green-600 font-bold">-₹{totalDiscount.toFixed(2)}</p>
      </div>
      <div className="mb-4 flex justify-between">
        <p className="text-gray-600">Total Payable</p>
        <p className="text-gray-800 font-bold">₹{finalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default OrderSummary;
