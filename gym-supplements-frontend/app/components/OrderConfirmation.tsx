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
//           <Typography variant="body1">
//             <p>Address: 123 Street, City, State, 12345</p>
//             <p>Items: Item1, Item2, ...</p>
//             <p>Total: $100</p>
//           </Typography>
//           <Button
//             variant="contained"
//             color="primary"
//             className="mt-4"
//             onClick={handlePlaceOrder}
//           >
//             Place Order
//           </Button>
//         </div>
//       </div>
//       <Footer />
//     </main>
//   );
// };

// export default OrderConfirmationPage;
