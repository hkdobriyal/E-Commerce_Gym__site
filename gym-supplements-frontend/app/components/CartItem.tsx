// // // // app/components/CartItem.tsx
// // // import React from "react";

// // // interface CartItemProps {
// // //   item: {
// // //     id: string;
// // //     name: string;
// // //     flavour: string;
// // //     weight: string;
// // //     quantity: number;
// // //     price: number;
// // //     image: string;
// // //   };
// // // }

// // // const CartItem: React.FC<CartItemProps> = ({ item }) => {
// // //   return (
// // //     <div className="flex items-center mb-4 p-4 border-b">
// // //       <img src={item.image} alt={item.name} className="w-20 h-20 object-cover mr-4" />
// // //       <div className="flex-1">
// // //         <h2 className="text-lg font-semibold">{item.name}</h2>
// // //         <p className="text-gray-600">{item.flavour} - {item.weight}</p>
// // //         <p className="text-gray-600">Quantity: {item.quantity}</p>
// // //         <p className="text-gray-800 font-bold">₹{item.price}</p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CartItem;



// // // app/components/CartItem.tsx
// // import React from "react";
// // import { useDispatch } from "react-redux";
// // import { removeFromCart } from "../redux/slices/cartSlice";

// // interface CartItemProps {
// //   item: {
// //     id: string;
// //     name: string;
// //     flavour: string;
// //     weight: string;
// //     quantity: number;
// //     price: number;
// //     image: string;
// //   };
// // }

// // const CartItem: React.FC<CartItemProps> = ({ item }) => {
// //   const dispatch = useDispatch();

// //   const handleRemoveFromCart = () => {
// //     dispatch(removeFromCart(item.id));
// //   };

// //   const handleQuantityChange = (amount: number) => {
// //     // Implement quantity change logic here
// //   };

// //   return (
// //     <div className="flex items-center mb-4 p-4 border-b">
// //       <img src={item.image} alt={item.name} className="w-20 h-20 object-cover mr-4" />
// //       <div className="flex-1">
// //         <h2 className="text-lg font-semibold">{item.name}</h2>
// //         <p className="text-gray-600">{item.flavour} - {item.weight}</p>
// //         <div className="flex items-center mt-2">
// //           <button
// //             className="px-2 py-1 bg-gray-200 rounded"
// //             onClick={() => handleQuantityChange(-1)}
// //           >
// //             -
// //           </button>
// //           <span className="mx-2">{item.quantity}</span>
// //           <button
// //             className="px-2 py-1 bg-gray-200 rounded"
// //             onClick={() => handleQuantityChange(1)}
// //           >
// //             +
// //           </button>
// //         </div>
// //         <p className="text-gray-800 font-bold">₹{item.price * item.quantity}</p>
// //         <button
// //           className="text-blue-500 mt-2"
// //           onClick={handleRemoveFromCart}
// //         >
// //           Move to Wishlist
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CartItem;



// // app/components/CartItem.tsx
// import React from "react";
// import { useDispatch } from "react-redux";
// import { removeFromCart, updateQuantity } from "../redux/slices/cartSlice";

// interface CartItemProps {
//   item: {
//     id: string;
//     name: string;
//     flavour: string;
//     weight: string;
//     quantity: number;
//     price: number; // Ensure price is a number
//     image: string;
//   };
// }

// const CartItem: React.FC<CartItemProps> = ({ item }) => {
//   const dispatch = useDispatch();

//   const handleRemoveFromCart = () => {
//     dispatch(removeFromCart(item.id));
//   };

//   const handleQuantityChange = (amount: number) => {
//     dispatch(updateQuantity({ id: item.id, quantity: item.quantity + amount }));
//   };

//   return (
//     <div className="flex items-center mb-4 p-4 border-b">
//       <img src={item.image} alt={item.name} className="w-20 h-20 object-cover mr-4" />
//       <div className="flex-1">
//         <h2 className="text-lg font-semibold">{item.name}</h2>
//         <p className="text-gray-600">{item.flavour} - {item.weight}</p>
//         <div className="flex items-center mt-2">
//           <button
//             className="px-2 py-1 bg-gray-200 rounded"
//             onClick={() => handleQuantityChange(-1)}
//           >
//             -
//           </button>
//           <span className="mx-2">{item.quantity}</span>
//           <button
//             className="px-2 py-1 bg-gray-200 rounded"
//             onClick={() => handleQuantityChange(1)}
//           >
//             +
//           </button>
//         </div>
//         <p className="text-gray-800 font-bold">₹{item.price * item.quantity}</p>
//         <button
//           className="text-blue-500 mt-2"
//           onClick={handleRemoveFromCart}
//         >
//           Move to Wishlist
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartItem;



// app/components/CartItem.tsx
import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/slices/cartSlice";

interface CartItemProps {
  item: {
    id: string;
    name: string;
    flavour: string;
    weight: string;
    quantity: number;
    price: number; // Ensure price is a number
    discount?: number; // Ensure discount is a number
    image: string;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleQuantityChange = (amount: number) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + amount }));
  };

  return (
    <div className="flex items-center mb-4 p-4 border-b">
      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover mr-4" />
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{item.name}</h2>
        <p className="text-gray-600">{item.flavour} - {item.weight}</p>
        <div className="flex items-center mt-2">
          <button
            className="px-2 py-1 bg-gray-200 rounded"
            onClick={() => handleQuantityChange(-1)}
          >
            -
          </button>
          <span className="mx-2">{item.quantity}</span>
          <button
            className="px-2 py-1 bg-gray-200 rounded"
            onClick={() => handleQuantityChange(1)}
          >
            +
          </button>
        </div>
        <p className="text-gray-800 font-bold">₹{item.price * item.quantity}</p>
        {item.discount && (
          <p className="text-green-600 font-bold">Discount: -₹{item.discount}</p>
        )}
        <button
          className="text-blue-500 mt-2"
          onClick={handleRemoveFromCart}
        >
          Move to Wishlist
        </button>
      </div>
    </div>
  );
};

export default CartItem;
