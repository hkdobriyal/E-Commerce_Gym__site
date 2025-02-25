// // Gym__site\app\redux\slices\cartSlice.ts
// "use client";

// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface CartItem {
//   id: string;
//   name: string;
//   price: string;
//   oldPrice?: string;
//   discount?: string;
//   image: string;
//   flavour?: string;
//   weight?: string;
//   quantity: number;
// }

// interface CartState {
//   items: CartItem[];
// }

// const initialState: CartState = {
//   items: [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action: PayloadAction<CartItem>) => {
//       const existingItem = state.items.find((item) => item.id === action.payload.id);
//       if (existingItem) {
//         existingItem.quantity += action.payload.quantity;
//       } else {
//         state.items.push(action.payload);
//       }
//     },
//     removeFromCart: (state, action: PayloadAction<string>) => {
//       state.items = state.items.filter((item) => item.id !== action.payload);
//     },
//     updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
//       const item = state.items.find((item) => item.id === action.payload.id);
//       if (item) {
//         item.quantity = action.payload.quantity;
//       }
//     },
//     clearCart: (state) => {
//       state.items = [];
//     },
//   },
// });

// export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;



// "use client";

// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface CartItem {
//   id: string;
//   name: string;
//   price: number; // Ensure price is a number
//   oldPrice?: number; // Ensure oldPrice is a number
//   discount?: number; // Ensure discount is a number
//   image: string;
//   flavour?: string;
//   weight?: string;
//   quantity: number;
// }

// interface CartState {
//   items: CartItem[];
// }

// const initialState: CartState = {
//   items: [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action: PayloadAction<CartItem>) => {
//       const newItem = {
//         ...action.payload,
//         price: parseFloat(action.payload.price.replace(/[^0-9.-]+/g,"")), // Convert price to number
//         oldPrice: action.payload.oldPrice ? parseFloat(action.payload.oldPrice.replace(/[^0-9.-]+/g,"")) : undefined,
//         discount: action.payload.discount ? parseFloat(action.payload.discount.replace(/[^0-9.-]+/g,"")) : undefined,
//       };
//       const existingItem = state.items.find((item) => item.id === newItem.id);
//       if (existingItem) {
//         existingItem.quantity += newItem.quantity;
//       } else {
//         state.items.push(newItem);
//       }
//     },
//     removeFromCart: (state, action: PayloadAction<string>) => {
//       state.items = state.items.filter((item) => item.id !== action.payload);
//     },
//     updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
//       const item = state.items.find((item) => item.id === action.payload.id);
//       if (item) {
//         item.quantity = Math.max(1, action.payload.quantity); // Ensure quantity is at least 1
//       }
//     },
//     clearCart: (state) => {
//       state.items = [];
//     },
//   },
// });

// export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;


"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  name: string;
  price: number; // Ensure price is a number
  oldPrice?: number; // Ensure oldPrice is a number
  discount?: number; // Ensure discount is a number
  image: string;
  flavour?: string;
  weight?: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = {
        ...action.payload,
        price: parseFloat(action.payload.price.replace(/[^0-9.-]+/g,"")), // Convert price to number
        oldPrice: action.payload.oldPrice ? parseFloat(action.payload.oldPrice.replace(/[^0-9.-]+/g,"")) : undefined,
        discount: action.payload.discount ? parseFloat(action.payload.discount.replace(/[^0-9.-]+/g,"")) : undefined,
      };
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.items.push(newItem);
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        if (item.quantity <= 0) {
          state.items = state.items.filter((item) => item.id !== action.payload.id);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
