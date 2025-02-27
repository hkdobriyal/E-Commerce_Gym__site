// // gym-supplements-frontend\app\components\Orders.tsx
// "use client";
// import React from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "../redux/store";
// import { Container, Typography, Button } from "@mui/material";

// const Orders = () => {
//   const orders = useSelector((state: RootState) => state.order.orders);

//   return (
//     <Container className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100">
//       <Typography variant="h4" className="mb-4">
//         Your Orders
//       </Typography>
//       {orders.length > 0 ? (
//         <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//           {orders.map((order, index) => (
//             <div key={index} className="mb-4">
//               <Typography variant="h6" className="mb-2">
//                 Order ID: {order.id}
//               </Typography>
//               <Typography variant="body1" className="mb-2">
//                 Date: {new Date(order.date).toLocaleDateString()}
//               </Typography>
//               <Typography variant="body1" className="mb-2">
//                 Total: ${order.total.toFixed(2)}
//               </Typography>
//               <Typography variant="body1" className="mb-4">
//                 Status: {order.status}
//               </Typography>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="text-center">
//           <Typography variant="h5" className="font-bold mb-4">
//             You don't have any orders.
//           </Typography>
//           <Button 
//           className="bg-blu"
//             variant="contained"
//             color="primary"
//             onClick={() => {
//               const element = document.getElementById("SupplementsSection");
//               if (element) {
//                 element.scrollIntoView({ behavior: "smooth" });
//               }
//             }}
//           >
//             Explore Supplements
//           </Button>
//         </div>
//       )}
//     </Container>
//   );
// };

// export default Orders;


"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Container, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

const Orders = () => {
  const orders = useSelector((state: RootState) => state.order.orders);
  const router = useRouter();

  const handleExploreSupplements = () => {
    router.push("/"); // Navigate to the home page
    setTimeout(() => {
      const element = document.getElementById("SupplementsSection");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Delay to ensure navigation completes before scrolling
  };

  return (
    <Container className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100">
      <Typography variant="h4" className="mb-4">
        Your Orders
      </Typography>
      {orders.length > 0 ? (
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          {orders.map((order, index) => (
            <div key={index} className="mb-4">
              <Typography variant="h6" className="mb-2">
                Order ID: {order.id}
              </Typography>
              <Typography variant="body1" className="mb-2">
                Date: {new Date(order.date).toLocaleDateString()}
              </Typography>
              <Typography variant="body1" className="mb-2">
                Total: ${order.total.toFixed(2)}
              </Typography>
              <Typography variant="body1" className="mb-4">
                Status: {order.status}
              </Typography>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <Typography variant="h5" className="font-bold mb-4">
            You don't have any orders.
          </Typography>
          <Button
            className="bg-blu"
            variant="contained"
            color="primary"
            onClick={handleExploreSupplements}
          >
            Explore Supplements
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Orders;
