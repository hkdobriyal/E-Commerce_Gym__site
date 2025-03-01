// // "use client";
// // import React from "react";
// // import Header from "@/app/components/Header";
// // import Footer from "@/app/components/Footer";
// // import { Button, Typography } from "@mui/material";
// // import { useRouter } from "next/navigation";

// // const OrderConfirmationPage = () => {
// //   const router = useRouter();

// //   const handlePlaceOrder = () => {
// //     router.push("/payment");
// //   };

// //   return (
// //     <main>
// //       <Header />
// //       <div className="container mx-auto mt-10 py-28 flex flex-col md:flex-row justify-between gap-8">
// //         <div className="w-full md:w-2/3 bg-white p-8 rounded-lg shadow-lg">
// //           <h1 className="text-3xl font-bold mb-4">Order Confirmation</h1>
// //           <Typography variant="body1">
// //             <p>Address: 123 Street, City, State, 12345</p>
// //             <p>Items: Item1, Item2, ...</p>
// //             <p>Total: $100</p>
// //           </Typography>
// //           <Button
// //             variant="contained"
// //             color="primary"
// //             className="mt-4 bg-blu"
// //             onClick={handlePlaceOrder}
// //           >
// //             Place Order
// //           </Button>
// //         </div>
// //       </div>
// //       <Footer />
// //     </main>
// //   );
// // };

// // export default OrderConfirmationPage;



// "use client";
// import React from "react";
// import Header from "@/app/components/Header";
// import Footer from "@/app/components/Footer";
// import { Button, Typography } from "@mui/material";
// import { useRouter } from "next/navigation";

// const OrderConfirmationPage = () => {
//   const router = useRouter();

//   const handlePlaceOrder = () => {
//     router.push("/payment");
//   };

//   return (
//     <main>
//       <Header />
//       <div className="container mx-auto mt-10 py-28 flex flex-col md:flex-row justify-between gap-8">
//         <div className="w-full md:w-2/3 bg-white p-8 rounded-lg shadow-lg">
//           <h1 className="text-3xl font-bold mb-4">Order Confirmation</h1>
//           <div className="flex justify-between mb-4">
//             <Typography variant="body1">
//               <p>Shipped within 1 day | Shipping Charges: ₹0</p>
//               <p className="font-semibold">Nutrabay Gold 100% Whey Protein Concentrate</p>
//               <p>1 kg (2.2 lb), Rich Chocolate Creme</p>
//               <p>₹2,099 x 2 = ₹4,198</p>
//             </Typography>
//             <img
//               src="/path/to/product/image.jpg"
//               alt="Product"
//               className="w-32 h-32 object-cover"
//             />
//           </div>
//           <Button
//             variant="contained"
//             color="primary"
//             className="mt-4"
//             onClick={handlePlaceOrder}
//           >
//             Place Order
//           </Button>
//         </div>
//         <div className="w-full md:w-1/3 bg-gray-100 p-8 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-bold mb-4">Price Details</h2>
//           <Typography variant="body1">
//             <p>Item Total (2): ₹4,198</p>
//             <p>Shipping Charges: FREE</p>
//             <p className="font-bold">Total Payable: ₹4,198</p>
//           </Typography>
//         </div>
//       </div>
//       <Footer />
//     </main>
//   );
// };

// export default OrderConfirmationPage;


"use client";
import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useRouter } from "next/navigation";

const OrderConfirmationPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const router = useRouter();

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    router.push("/payment");
  };

  return (
    <main className="mt-28">
      <Header />
      <div className="container mx-auto mt-10 py-8 flex flex-col md:flex-row justify-between gap-8">
        <div className="w-full md:w-2/3 bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Order Confirmation</h1>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between mb-4">
              <div className="flex flex-col">
                <Typography variant="body1" className="font-semibold">
                  {item.name}
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  {item.flavour} - {item.weight}
                </Typography>
                <Typography variant="body2" className="text-gray-800 font-bold">
                  ₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}
                </Typography>
              </div>
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover"
              />
            </div>
          ))}
          <Button
            variant="contained"
            color="primary"
            className="mt-4 bg-orange-500 hover:bg-orange-600 text-white"
            onClick={handlePlaceOrder}
          >
            Place Order
          </Button>
        </div>
        <div className="w-full md:w-1/3 bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Price Details</h2>
          <Typography variant="body1">
            <p>Item Total ({totalQuantity}): ₹{totalAmount}</p>
            <p>Shipping Charges: FREE</p>
            <p className="font-bold">Total Payable: ₹{totalAmount}</p>
          </Typography>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default OrderConfirmationPage;
