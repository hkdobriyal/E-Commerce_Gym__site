// // // "use client";
// // // import React, { useState } from "react";
// // // import Header from "@/app/components/Header";
// // // import Footer from "@/app/components/Footer";
// // // import { Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material";
// // // import { useRouter } from "next/navigation";

// // // const CheckoutPage = () => {
// // //   const [selectedAddress, setSelectedAddress] = useState(null);
// // //   const router = useRouter();

// // //   const addresses = [
// // //     { id: 1, name: "Hmeant Kumar", address: "HYDERABAD, TELANGANA, 500015", phone: "8686545253" },
// // //     // Add more addresses as needed
// // //   ];

// // //   const handleDeliverHere = () => {
// // //     if (selectedAddress) {
// // //       router.push("/order-confirmation");
// // //     } else {
// // //       alert("Please select an address.");
// // //     }
// // //   };

// // //   return (
// // //     <main className="mt-28">
// // //       <Header />
// // //       <div className="container mx-auto mt-10 py-8 flex flex-col md:flex-row justify-between gap-8">
// // //         <div className="w-full md:w-2/3 bg-white p-8 rounded-lg shadow-lg">
// // //           <h1 className="text-3xl font-bold mb-4">Select Delivery Address</h1>
// // //           <FormControl component="fieldset">
// // //             <RadioGroup
// // //               value={selectedAddress}
// // //               onChange={(e) => setSelectedAddress(e.target.value)}
// // //             >
// // //               {addresses.map((addr) => (
// // //                 <div key={addr.id} className="mb-4 p-4 border rounded-lg shadow">
// // //                   <FormControlLabel
// // //                     value={addr.address}
// // //                     control={<Radio />}
// // //                     label={
// // //                       <div>
// // //                         <p className="font-semibold">{addr.name}</p>
// // //                         <p>{addr.address}</p>
// // //                         <p>Mobile no: {addr.phone}</p>
// // //                       </div>
// // //                     }
// // //                   />
// // //                 </div>
// // //               ))}
// // //             </RadioGroup>
// // //             <Button
// // //               variant="contained"
// // //               color="primary"
// // //               className="mt-4 bg-orange-500 hover:bg-orange-600 text-white"
// // //               onClick={handleDeliverHere}
// // //             >
// // //               Deliver Here
// // //             </Button>
// // //           </FormControl>
// // //         </div>
// // //       </div>
// // //       <Footer />
// // //     </main>
// // //   );
// // // };

// // // export default CheckoutPage;



// // "use client";
// // import React, { useState } from "react";
// // import Header from "@/app/components/Header";
// // import Footer from "@/app/components/Footer";
// // import { Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
// // import { useRouter } from "next/navigation";

// // const CheckoutPage = () => {
// //   const [selectedAddress, setSelectedAddress] = useState(null);
// //   const [addresses, setAddresses] = useState([]);
// //   const [openDialog, setOpenDialog] = useState(false);
// //   const [newAddress, setNewAddress] = useState({ name: "", address: "", phone: "" });
// //   const router = useRouter();

// //   const handleDeliverHere = () => {
// //     if (selectedAddress) {
// //       router.push("/order-confirmation");
// //     } else {
// //       alert("Please select an address.");
// //     }
// //   };

// //   const handleAddAddress = () => {
// //     setAddresses([...addresses, newAddress]);
// //     setOpenDialog(false);
// //     setNewAddress({ name: "", address: "", phone: "" });
// //   };

// //   const handleOpenDialog = () => {
// //     setOpenDialog(true);
// //   };

// //   const handleCloseDialog = () => {
// //     setOpenDialog(false);
// //   };

// //   return (
// //     <main className="mt-28">
// //       <Header />
// //       <div className="container mx-auto mt-10 py-8 flex flex-col items-center justify-center">
// //         <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
// //           <h1 className="text-3xl font-bold mb-4 text-center">Select Delivery Address</h1>
// //           {addresses.length > 0 ? (
// //             <FormControl component="fieldset">
// //               <RadioGroup
// //                 value={selectedAddress}
// //                 onChange={(e) => setSelectedAddress(e.target.value)}
// //               >
// //                 {addresses.map((addr, index) => (
// //                   <div key={index} className="mb-4 p-4 border rounded-lg shadow flex justify-between items-center">
// //                     <FormControlLabel
// //                       value={addr.address}
// //                       control={<Radio />}
// //                       label={
// //                         <div>
// //                           <p className="font-semibold">{addr.name}</p>
// //                           <p>{addr.address}</p>
// //                           <p>Mobile no: {addr.phone}</p>
// //                         </div>
// //                       }
// //                     />
// //                     <Button variant="outlined" color="primary" onClick={handleOpenDialog}>
// //                       Edit
// //                     </Button>
// //                   </div>
// //                 ))}
// //               </RadioGroup>
// //               <Button
// //                 variant="contained"
// //                 color="primary"
// //                 className="mt-4 bg-orange-500 hover:bg-orange-600 text-white w-full"
// //                 onClick={handleDeliverHere}
// //               >
// //                 Deliver Here
// //               </Button>
// //             </FormControl>
// //           ) : (
// //             <div className="text-center">
// //               <p className="text-lg font-semibold mb-4">No address added.</p>
// //               <Button
// //                 variant="contained"
// //                 color="primary"
// //                 className="bg-orange-500 hover:bg-orange-600 text-white"
// //                 onClick={handleOpenDialog}
// //               >
// //                 Add New Address
// //               </Button>
// //             </div>
// //           )}
// //         </div>
// //       </div>

// //       <Dialog open={openDialog} onClose={handleCloseDialog}>
// //         <DialogTitle>Add/Edit Address</DialogTitle>
// //         <DialogContent>
// //           <TextField
// //             label="Name"
// //             value={newAddress.name}
// //             onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
// //             fullWidth
// //             margin="normal"
// //           />
// //           <TextField
// //             label="Address"
// //             value={newAddress.address}
// //             onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })}
// //             fullWidth
// //             margin="normal"
// //           />
// //           <TextField
// //             label="Phone"
// //             value={newAddress.phone}
// //             onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })}
// //             fullWidth
// //             margin="normal"
// //           />
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleCloseDialog} color="primary">
// //             Cancel
// //           </Button>
// //           <Button onClick={handleAddAddress} color="primary">
// //             Save Address
// //           </Button>
// //         </DialogActions>
// //       </Dialog>

// //       <Footer />
// //     </main>
// //   );
// // };

// // export default CheckoutPage;


// "use client";
// import React, { useState } from "react";
// import Header from "@/app/components/Header";
// import Footer from "@/app/components/Footer";
// import { Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
// import { useRouter } from "next/navigation";

// const CheckoutPage = () => {
//   const [selectedAddress, setSelectedAddress] = useState(null);
//   const [addresses, setAddresses] = useState([]);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [newAddress, setNewAddress] = useState({ name: "", address: "", phone: "" });
//   const router = useRouter();

//   const handleDeliverHere = () => {
//     if (selectedAddress) {
//       router.push("/order-confirmation");
//     } else {
//       alert("Please select an address.");
//     }
//   };

//   const handleAddAddress = () => {
//     setAddresses([...addresses, newAddress]);
//     setOpenDialog(false);
//     setNewAddress({ name: "", address: "", phone: "" });
//   };

//   const handleOpenDialog = () => {
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   return (
//     <main className="mt-28">
//       <Header />
//       <div className="container mx-auto mt-10 py-8 flex flex-col items-center justify-center">
//         <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg relative">
//           <h1 className="text-3xl font-bold mb-4 text-center">Select Delivery Address</h1>
//           {addresses.length > 0 ? (
//             <FormControl component="fieldset">
//               <RadioGroup
//                 value={selectedAddress}
//                 onChange={(e) => setSelectedAddress(e.target.value)}
//               >
//                 {addresses.map((addr, index) => (
//                   <div key={index} className="mb-4 p-4 border rounded-lg shadow flex justify-between items-center">
//                     <FormControlLabel
//                       value={addr.address}
//                       control={<Radio />}
//                       label={
//                         <div>
//                           <p className="font-semibold">{addr.name}</p>
//                           <p>{addr.address}</p>
//                           <p>Mobile no: {addr.phone}</p>
//                         </div>
//                       }
//                     />
//                     <Button variant="outlined" color="primary" onClick={handleOpenDialog}>
//                       Edit
//                     </Button>
//                   </div>
//                 ))}
//               </RadioGroup>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 className="mt-4 bg-orange-500 hover:bg-orange-600 text-white w-full"
//                 onClick={handleDeliverHere}
//               >
//                 Deliver Here
//               </Button>
//             </FormControl>
//           ) : (
//             <div className="text-center">
//               <p className="text-lg font-semibold mb-4">No address added.</p>
//             </div>
//           )}
//           <Button
//             variant="contained"
//             color="primary"
//             className="absolute top-4 right-4 bg-orange-500 hover:bg-orange-600 text-white"
//             onClick={handleOpenDialog}
//           >
//             Add New Address
//           </Button>
//         </div>
//       </div>

//       <Dialog open={openDialog} onClose={handleCloseDialog}>
//         <DialogTitle>Add/Edit Address</DialogTitle>
//         <DialogContent>
//           <TextField
//             label="Name"
//             value={newAddress.name}
//             onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Address"
//             value={newAddress.address}
//             onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Phone"
//             value={newAddress.phone}
//             onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })}
//             fullWidth
//             margin="normal"
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleAddAddress} color="primary">
//             Save Address
//           </Button>
//         </DialogActions>
//       </Dialog>

//       <Footer />
//     </main>
//   );
// };

// export default CheckoutPage;


// // pages/checkout.tsx
// import React from 'react';
// import { Button, Typography, Box, Divider } from '@mui/material';

// const CheckoutPage: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-50 to-gray-50 flex items-center justify-center">
//       <Box
//         className="bg-white p-8 rounded-xl shadow-xl w-full max-w-2xl"
//       >
//         <Typography variant="h5" className="mb-6 text-center text-blue-700">
//           Select Delivery Address
//         </Typography>
//         <div className="mb-6">
//           <Typography variant="body1" className="font-semibold text-gray-800">
//             Hmeant Kumar
//           </Typography>
//           <Typography variant="body2" className="text-gray-600">
//             india, india
//           </Typography>
//           <Typography variant="body2" className="text-gray-600">
//             HYDERABAD, TELANGANA, 500015
//           </Typography>
//           <Typography variant="body2" className="text-gray-600">
//             India
//           </Typography>
//           <Typography variant="body2" className="text-gray-600">
//             Mobile no: 8686545253
//           </Typography>
//         </div>
//         <Button
//           variant="contained"
//           color="primary"
//           className="mb-4 w-full"
//         >
//           Deliver here
//         </Button>
//         <Divider className="my-4" />
//         <div className="flex justify-between">
//           <Button
//             variant="outlined"
//             color="primary"
//             className="mr-2"
//           >
//             Edit
//           </Button>
//           <Button
//             variant="outlined"
//             color="secondary"
//           >
//             Delete
//           </Button>
//         </div>
//         <Button
//           variant="outlined"
//           color="primary"
//           className="mt-4 w-full"
//         >
//           Add New Address
//         </Button>
//       </Box>
//     </div>
//   );
// };

// export default CheckoutPage;


"use client";
import React, { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Typography, Box, Divider } from "@mui/material";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [newAddress, setNewAddress] = useState({ name: "", address: "", phone: "" });
  const router = useRouter();

  const handleDeliverHere = () => {
    if (selectedAddress) {
      router.push("/order-confirmation");
    } else {
      alert("Please select an address.");
    }
  };

  const handleAddAddress = () => {
    setAddresses([...addresses, newAddress]);
    setOpenDialog(false);
    setNewAddress({ name: "", address: "", phone: "" });
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <main>
      <Header />
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-gray-50 flex items-center justify-center">
        <Box className="bg-white p-8 rounded-xl shadow-xl w-full max-w-2xl">
          <Typography variant="h5" className="mb-6 text-center text-blue-700">
            Select Delivery Address
          </Typography>
          {addresses.length > 0 ? (
            <FormControl component="fieldset">
              <RadioGroup
                value={selectedAddress}
                onChange={(e) => setSelectedAddress(e.target.value)}
              >
                {addresses.map((addr, index) => (
                  <Box key={index} className="mb-6 p-4 border rounded-lg shadow">
                    <FormControlLabel
                      value={addr.address}
                      control={<Radio />}
                      label={
                        <div>
                          <Typography variant="body1" className="font-semibold text-gray-800">
                            {addr.name}
                          </Typography>
                          <Typography variant="body2" className="text-gray-600">
                            {addr.address}
                          </Typography>
                          <Typography variant="body2" className="text-gray-600">
                            Mobile no: {addr.phone}
                          </Typography>
                        </div>
                      }
                    />
                    <div className="flex justify-between mt-2">
                      <Button variant="outlined" color="primary" onClick={handleOpenDialog}>
                        Edit
                      </Button>
                      <Button variant="outlined" color="secondary">
                        Delete
                      </Button>
                    </div>
                  </Box>
                ))}
              </RadioGroup>
              <Button
                variant="contained"
                color="primary"
                className="mb-4 w-full bg-orange-500 hover:bg-orange-600 text-white"
                onClick={handleDeliverHere}
              >
                Deliver Here
              </Button>
            </FormControl>
          ) : (
            <div className="text-center">
              <Typography variant="body1" className="text-lg font-semibold mb-4 text-gray-600">
                No address added.
              </Typography>
            </div>
          )}
          <Divider className="my-4" />
          <Button
            variant="outlined"
            color="primary"
            className="mt-4 w-full"
            onClick={handleOpenDialog}
          >
            Add New Address
          </Button>
        </Box>
      </div>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Add/Edit Address</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={newAddress.name}
            onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Address"
            value={newAddress.address}
            onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone"
            value={newAddress.phone}
            onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddAddress} color="primary">
            Save Address
          </Button>
        </DialogActions>
      </Dialog>

      <Footer />
    </main>
  );
};

export default CheckoutPage;
