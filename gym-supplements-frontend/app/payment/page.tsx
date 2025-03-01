// // "use client";
// // import React, { useState } from "react";
// // import Header from "@/app/components/Header";
// // import Footer from "@/app/components/Footer";
// // import { Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Typography } from "@mui/material";

// // const PaymentPage = () => {
// //   const [paymentMethod, setPaymentMethod] = useState("");

// //   const handlePayment = () => {
// //     if (paymentMethod) {
// //       alert(`Payment successful with ${paymentMethod}`);
// //     } else {
// //       alert("Please select a payment method.");
// //     }
// //   };

// //   return (
// //     <main>
// //       <Header />
// //       <div className="container mx-auto mt-10 py-28 flex flex-col md:flex-row justify-between gap-8">
// //         <div className="w-full md:w-2/3 bg-white p-8 rounded-lg shadow-lg">
// //           <h1 className="text-3xl font-bold mb-4">Payment</h1>
// //           <FormControl component="fieldset">
// //             <FormLabel component="legend">Select Payment Method</FormLabel>
// //             <RadioGroup
// //               value={paymentMethod}
// //               onChange={(e) => setPaymentMethod(e.target.value)}
// //             >
// //               <FormControlLabel value="credit-card" control={<Radio />} label="Credit/Debit Card" />
// //               <FormControlLabel value="upi" control={<Radio />} label="UPI" />
// //               <FormControlLabel value="net-banking" control={<Radio />} label="Net Banking" />
// //               <FormControlLabel value="wallets" control={<Radio />} label="Wallets (Paytm, PhonePe, etc.)" />
// //             </RadioGroup>
// //             <Button
// //               variant="contained"
// //               color="primary"
// //               className="mt-4 bg-blu"
// //               onClick={handlePayment}
// //             >
// //               Make Payment
// //             </Button>
// //           </FormControl>
// //         </div>
// //         <div className="w-full md:w-1/3 bg-gray-100 p-8 rounded-lg shadow-lg">
// //           <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
// //           <Typography variant="body1">
// //             <p>Subtotal: $80</p>
// //             <p>Shipping: $10</p>
// //             <p>Discount: -$5</p>
// //             <p>Total: $85</p>
// //           </Typography>
// //         </div>
// //       </div>
// //       <Footer />
// //     </main>
// //   );
// // };

// // export default PaymentPage;



// "use client";
// import React, { useState } from "react";
// import Header from "@/app/components/Header";
// import Footer from "@/app/components/Footer";
// import { Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Typography } from "@mui/material";

// const PaymentPage = () => {
//   const [paymentMethod, setPaymentMethod] = useState("upi");

//   const handlePayment = () => {
//     if (paymentMethod) {
//       alert(`Payment successful with ${paymentMethod}`);
//     } else {
//       alert("Please select a payment method.");
//     }
//   };

//   return (
//     <main>
//       <Header />
//       <div className="container mx-auto mt-10 py-28 flex flex-col md:flex-row justify-between gap-8">
//         <div className="w-full md:w-2/3 bg-white p-8 rounded-lg shadow-lg">
//           <h1 className="text-3xl font-bold mb-4">Select Payment Method</h1>
//           <FormControl component="fieldset">
//             <RadioGroup
//               value={paymentMethod}
//               onChange={(e) => setPaymentMethod(e.target.value)}
//             >
//               <FormControlLabel
//                 value="upi"
//                 control={<Radio />}
//                 label="UPI (Paytm, PhonePe, Google Pay & more)"
//               />
//               <FormControlLabel
//                 value="debit-credit"
//                 control={<Radio />}
//                 label="Debit & Credit Cards (MasterCard, RuPay, VISA, Amex)"
//               />
//               <FormControlLabel
//                 value="wallets"
//                 control={<Radio />}
//                 label="Wallets (Amazon Pay, PhonePe, Paytm & more)"
//               />
//               <FormControlLabel
//                 value="net-banking"
//                 control={<Radio />}
//                 label="Net Banking (Select from a list of banks)"
//               />
//               <FormControlLabel
//                 value="cash-on-delivery"
//                 control={<Radio />}
//                 label="Pay on delivery (Pay using cash or digitally with SMS paylink at the time of delivery)"
//               />
//             </RadioGroup>
//             <Button
//               variant="contained"
//               color="primary"
//               className="mt-4"
//               onClick={handlePayment}
//             >
//               Place Order
//             </Button>
//           </FormControl>
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

// export default PaymentPage;



"use client";
import React, { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePayment = () => {
    if (paymentMethod) {
      alert(`Payment successful with ${paymentMethod}`);
    } else {
      alert("Please select a payment method.");
    }
  };

  return (
    <main className="mt-28">
      <Header />
      <div className="container mx-auto mt-10 py-8 flex flex-col md:flex-row justify-between gap-8">
        <div className="w-full md:w-2/3 bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Select Payment Method</h1>
          <FormControl component="fieldset">
            <RadioGroup
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <FormControlLabel
                value="upi"
                control={<Radio />}
                label="UPI (Paytm, PhonePe, Google Pay & more)"
              />
              <FormControlLabel
                value="debit-credit"
                control={<Radio />}
                label="Debit & Credit Cards (MasterCard, RuPay, VISA, Amex)"
              />
              <FormControlLabel
                value="wallets"
                control={<Radio />}
                label="Wallets (Amazon Pay, PhonePe, Paytm & more)"
              />
              <FormControlLabel
                value="net-banking"
                control={<Radio />}
                label="Net Banking (Select from a list of banks)"
              />
              <FormControlLabel
                value="cash-on-delivery"
                control={<Radio />}
                label="Pay on delivery (Pay using cash or digitally with SMS paylink at the time of delivery)"
              />
            </RadioGroup>
            <Button
              variant="contained"
              color="primary"
              className="mt-4 bg-orange-500 hover:bg-orange-600 text-white"
              onClick={handlePayment}
            >
              Place Order
            </Button>
          </FormControl>
        </div>
        <div className="w-full md:w-1/3 bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Price Details</h2>
          <Typography variant="body1">
            <p>Item Total: ₹{totalAmount}</p>
            <p>Shipping Charges: FREE</p>
            <p className="font-bold">Total Payable: ₹{totalAmount}</p>
          </Typography>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default PaymentPage;
