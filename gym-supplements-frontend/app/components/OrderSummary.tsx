// // // // app/components/OrderSummary.tsx
// // // import React from "react";
// // // import { useSelector } from "react-redux";
// // // import { RootState } from "../redux/store";

// // // const OrderSummary: React.FC = () => {
// // //   const cartItems = useSelector((state: RootState) => state.cart.items);
// // //   const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
// // //   const discount = 449; // Example discount

// // //   return (
// // //     <div className="bg-white p-6 rounded-lg shadow-md">
// // //       <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
// // //       <div className="mb-4">
// // //         <p className="text-gray-600">Price</p>
// // //         <p className="text-gray-800 font-bold">₹{totalAmount + discount}</p>
// // //       </div>
// // //       <div className="mb-4">
// // //         <p className="text-gray-600">Discount</p>
// // //         <p className="text-green-600 font-bold">-₹{discount}</p>
// // //       </div>
// // //       <div className="mb-4">
// // //         <p className="text-gray-600">Total Amount</p>
// // //         <p className="text-gray-800 font-bold">₹{totalAmount}</p>
// // //       </div>
// // //       <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg w-full">
// // //         Checkout
// // //       </button>
// // //     </div>
// // //   );
// // // };

// // // export default OrderSummary;


// // // app/components/OrderSummary.tsx
// // import React from "react";
// // import { useSelector } from "react-redux";
// // import { RootState } from "../redux/store";

// // const OrderSummary: React.FC = () => {
// //   const cartItems = useSelector((state: RootState) => state.cart.items);
// //   const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
// //   const discount = 449; // Example discount

// //   return (
// //     <div className="bg-white p-6 rounded-lg shadow-md">
// //       <h2 className="text-xl font-semibold mb-4">Order Summary (2 Items)</h2>
// //       <div className="mb-4">
// //         <p className="text-gray-600">Price</p>
// //         <p className="text-gray-800 font-bold">₹{totalAmount + discount}</p>
// //       </div>
// //       <div className="mb-4">
// //         <p className="text-gray-600">Discount</p>
// //         <p className="text-green-600 font-bold">-₹{discount}</p>
// //       </div>
// //       <div className="mb-4">
// //         <p className="text-gray-600">Total Amount</p>
// //         <p className="text-gray-800 font-bold">₹{totalAmount}</p>
// //       </div>
// //       <div className="mb-4">
// //         <p className="text-gray-600">You will earn ₹60 MB Cash on this purchase.</p>
// //       </div>
// //       <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg w-full">
// //         Checkout
// //       </button>
// //       <div className="mt-4">
// //         <input
// //           type="text"
// //           placeholder="Enter Coupon/Gift Code"
// //           className="w-full p-2 border rounded-lg"
// //         />
// //         <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full mt-2">
// //           Apply
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default OrderSummary;



// // app/components/OrderSummary.tsx
// import React from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "../redux/store";

// const OrderSummary: React.FC = () => {
//   const cartItems = useSelector((state: RootState) => state.cart.items);
//   const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
//   const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   const discount = 449; // Example discount

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-xl font-semibold mb-4">Order Summary ({totalQuantity} Items)</h2>
//       <div className="mb-4">
//         <p className="text-gray-600">Price</p>
//         <p className="text-gray-800 font-bold">₹{totalAmount + discount}</p>
//       </div>
//       <div className="mb-4">
//         <p className="text-gray-600">Discount</p>
//         <p className="text-green-600 font-bold">-₹{discount}</p>
//       </div>
//       <div className="mb-4">
//         <p className="text-gray-600">Total Amount</p>
//         <p className="text-gray-800 font-bold">₹{totalAmount}</p>
//       </div>
//       <div className="mb-4">
//         <p className="text-gray-600">You will earn ₹60 MB Cash on this purchase.</p>
//       </div>
//       <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg w-full">
//         Checkout
//       </button>
//       <div className="mt-4">
//         <input
//           type="text"
//           placeholder="Enter Coupon/Gift Code"
//           className="w-full p-2 border rounded-lg"
//         />
//         <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full mt-2">
//           Apply
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OrderSummary;


// app/components/OrderSummary.tsx
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const OrderSummary: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalDiscount = cartItems.reduce((total, item) => total + (item.discount || 0), 0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Order Summary ({totalQuantity} Items)</h2>
      <div className="mb-4">
        <p className="text-gray-600">Price</p>
        <p className="text-gray-800 font-bold">₹{totalAmount + totalDiscount}</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-600">Discount</p>
        <p className="text-green-600 font-bold">-₹{totalDiscount}</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-600">Total Amount</p>
        <p className="text-gray-800 font-bold">₹{totalAmount}</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-600">You will earn ₹60 MB Cash on this purchase.</p>
      </div>
      <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg w-full">
        Checkout
      </button>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Enter Coupon/Gift Code"
          className="w-full p-2 border rounded-lg"
        />
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full mt-2">
          Apply
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
