// "use client";

// import React from "react";
// import { useRouter } from "next/navigation";
// import CancelIcon from "@mui/icons-material/Cancel";

// const CheckoutFailure: React.FC = () => {
//   const router = useRouter();

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg text-center animate-fadeIn">
//         <CancelIcon className="text-red-500" style={{ fontSize: 60 }} />
//         <h2 className="text-2xl font-semibold mt-4">Payment Failed!</h2>
//         <p className="text-gray-600 mt-2">
//           Something went wrong with your payment. Please try again or use a different payment method.
//         </p>

//         <button 
//           onClick={() => router.push("/checkout")}
//           className="mt-6 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-transform transform hover:scale-105"
//         >
//           Try Again
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CheckoutFailure;



"use client";

import { useRouter } from "next/navigation";

const PaymentFailure = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-red-100">
      <h1 className="text-3xl font-bold text-red-700">❌ Payment Failed!</h1>
      <p className="text-gray-600 mt-2">Something went wrong. Please try again.</p>

      <button
        onClick={() => router.push("/cart")}
        className="mt-6 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-transform transform hover:scale-105"
      >
        Retry Payment
      </button>
    </div>
  );
};

export default PaymentFailure;
