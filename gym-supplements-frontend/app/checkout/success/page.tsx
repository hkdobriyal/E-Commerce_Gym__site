// "use client";
// import { Button } from "@/app/components/ui/button";
// import PaymentIcon from "@mui/icons-material/Payment";

// export default function CheckoutPage() {
//   return (
//     <div className="container mx-auto mt-10 text-center">
//       <h1 className="text-3xl font-bold">Checkout</h1>
//       <p className="text-gray-500 mt-2">Proceed to secure payment.</p>
//       <Button className="mt-4 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white">
//         <PaymentIcon /> Pay Now
//       </Button>
//     </div>
//   );
// }


"use client";

import { useRouter } from "next/navigation";

const PaymentSuccess = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-100">
      <h1 className="text-3xl font-bold text-green-700">🎉 Payment Successful!</h1>
      <p className="text-gray-600 mt-2">Thank you for your purchase. Your order is confirmed.</p>

      <button
        onClick={() => router.push("/")}
        className="mt-6 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-transform transform hover:scale-105"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default PaymentSuccess;
