// // // // // // Gym__site\app\redux\slices\cartSlice.ts
// // // // // "use client";

// // // // // import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// // // // // interface CartItem {
// // // // //   id: string;
// // // // //   name: string;
// // // // //   price: string;
// // // // //   oldPrice?: string;
// // // // //   discount?: string;
// // // // //   image: string;
// // // // //   flavour?: string;
// // // // //   weight?: string;
// // // // //   quantity: number;
// // // // // }

// // // // // interface CartState {
// // // // //   items: CartItem[];
// // // // // }

// // // // // const initialState: CartState = {
// // // // //   items: [],
// // // // // };

// // // // // const cartSlice = createSlice({
// // // // //   name: "cart",
// // // // //   initialState,
// // // // //   reducers: {
// // // // //     addToCart: (state, action: PayloadAction<CartItem>) => {
// // // // //       const existingItem = state.items.find((item) => item.id === action.payload.id);
// // // // //       if (existingItem) {
// // // // //         existingItem.quantity += action.payload.quantity;
// // // // //       } else {
// // // // //         state.items.push(action.payload);
// // // // //       }
// // // // //     },
// // // // //     removeFromCart: (state, action: PayloadAction<string>) => {
// // // // //       state.items = state.items.filter((item) => item.id !== action.payload);
// // // // //     },
// // // // //     updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
// // // // //       const item = state.items.find((item) => item.id === action.payload.id);
// // // // //       if (item) {
// // // // //         item.quantity = action.payload.quantity;
// // // // //       }
// // // // //     },
// // // // //     clearCart: (state) => {
// // // // //       state.items = [];
// // // // //     },
// // // // //   },
// // // // // });

// // // // // export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
// // // // // export default cartSlice.reducer;



// // // // // "use client";

// // // // // import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// // // // // interface CartItem {
// // // // //   id: string;
// // // // //   name: string;
// // // // //   price: number; // Ensure price is a number
// // // // //   oldPrice?: number; // Ensure oldPrice is a number
// // // // //   discount?: number; // Ensure discount is a number
// // // // //   image: string;
// // // // //   flavour?: string;
// // // // //   weight?: string;
// // // // //   quantity: number;
// // // // // }

// // // // // interface CartState {
// // // // //   items: CartItem[];
// // // // // }

// // // // // const initialState: CartState = {
// // // // //   items: [],
// // // // // };

// // // // // const cartSlice = createSlice({
// // // // //   name: "cart",
// // // // //   initialState,
// // // // //   reducers: {
// // // // //     addToCart: (state, action: PayloadAction<CartItem>) => {
// // // // //       const newItem = {
// // // // //         ...action.payload,
// // // // //         price: parseFloat(action.payload.price.replace(/[^0-9.-]+/g,"")), // Convert price to number
// // // // //         oldPrice: action.payload.oldPrice ? parseFloat(action.payload.oldPrice.replace(/[^0-9.-]+/g,"")) : undefined,
// // // // //         discount: action.payload.discount ? parseFloat(action.payload.discount.replace(/[^0-9.-]+/g,"")) : undefined,
// // // // //       };
// // // // //       const existingItem = state.items.find((item) => item.id === newItem.id);
// // // // //       if (existingItem) {
// // // // //         existingItem.quantity += newItem.quantity;
// // // // //       } else {
// // // // //         state.items.push(newItem);
// // // // //       }
// // // // //     },
// // // // //     removeFromCart: (state, action: PayloadAction<string>) => {
// // // // //       state.items = state.items.filter((item) => item.id !== action.payload);
// // // // //     },
// // // // //     updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
// // // // //       const item = state.items.find((item) => item.id === action.payload.id);
// // // // //       if (item) {
// // // // //         item.quantity = Math.max(1, action.payload.quantity); // Ensure quantity is at least 1
// // // // //       }
// // // // //     },
// // // // //     clearCart: (state) => {
// // // // //       state.items = [];
// // // // //     },
// // // // //   },
// // // // // });

// // // // // export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
// // // // // export default cartSlice.reducer;

// // // // // gym-supplements-frontend\app\redux\slices\cartSlice.ts
// // // // "use client";

// // // // import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// // // // interface CartItem {
// // // //   id: string;
// // // //   name: string;
// // // //   price: number; // Ensure price is a number
// // // //   oldPrice?: number; // Ensure oldPrice is a number
// // // //   discount?: number; // Ensure discount is a number
// // // //   image: string;
// // // //   flavour?: string;
// // // //   weight?: string;
// // // //   quantity: number;
// // // // }

// // // // interface CartState {
// // // //   items: CartItem[];
// // // // }

// // // // const initialState: CartState = {
// // // //   items: [],
// // // // };

// // // // const cartSlice = createSlice({
// // // //   name: "cart",
// // // //   initialState,
// // // //   reducers: {
// // // //     addToCart: (state, action: PayloadAction<CartItem>) => {
// // // //       const newItem = {
// // // //         ...action.payload,
// // // //         price: parseFloat(action.payload.price.replace(/[^0-9.-]+/g,"")), // Convert price to number
// // // //         oldPrice: action.payload.oldPrice ? parseFloat(action.payload.oldPrice.replace(/[^0-9.-]+/g,"")) : undefined,
// // // //         discount: action.payload.discount ? parseFloat(action.payload.discount.replace(/[^0-9.-]+/g,"")) : undefined,
// // // //       };
// // // //       const existingItem = state.items.find((item) => item.id === newItem.id);
// // // //       if (existingItem) {
// // // //         existingItem.quantity += newItem.quantity;
// // // //       } else {
// // // //         state.items.push(newItem);
// // // //       }
// // // //     },
// // // //     removeFromCart: (state, action: PayloadAction<string>) => {
// // // //       state.items = state.items.filter((item) => item.id !== action.payload);
// // // //     },
// // // //     updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
// // // //       const item = state.items.find((item) => item.id === action.payload.id);
// // // //       if (item) {
// // // //         item.quantity = action.payload.quantity;
// // // //         if (item.quantity <= 0) {
// // // //           state.items = state.items.filter((item) => item.id !== action.payload.id);
// // // //         }
// // // //       }
// // // //     },
// // // //     clearCart: (state) => {
// // // //       state.items = [];
// // // //     },
// // // //   },
// // // // });

// // // // export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
// // // // export default cartSlice.reducer;



// // // import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// // // import axios from "axios";

// // // const API_BASE_URL = "http://localhost:5000/api/cart"; // Replace with actual backend URL

// // // // ✅ Fetch cart items from backend
// // // export const fetchCartItems = createAsyncThunk(
// // //   "cart/fetchCartItems",
// // //   async (userId, { rejectWithValue }) => {
// // //     try {
// // //       const response = await axios.get(`${API_BASE_URL}/${userId}`, {
// // //         headers: { Authorization: `Bearer your_jwt_token` },
// // //       });
// // //       return response.data; // Expected response: Array of cart items
// // //     } catch (error) {
// // //       return rejectWithValue(error.response?.data || "Error fetching cart items");
// // //     }
// // //   }
// // // );

// // // // ✅ Add item to cart (Backend: POST /api/cart)
// // // export const addToCart = createAsyncThunk(
// // //   "cart/addToCart",
// // //   async ({ userId, productId, quantity }, { rejectWithValue }) => {
// // //     try {
// // //       const response = await axios.post(
// // //         API_BASE_URL,
// // //         { userId, productId, quantity },
// // //         {
// // //           headers: { Authorization: `Bearer your_jwt_token` },
// // //         }
// // //       );
// // //       return { productId, quantity, message: response.data.message };
// // //     } catch (error) {
// // //       return rejectWithValue(error.response?.data || "Error adding item to cart");
// // //     }
// // //   }
// // // );

// // // // ✅ Remove item from cart (Backend: DELETE /api/cart)
// // // export const removeFromCart = createAsyncThunk(
// // //   "cart/removeFromCart",
// // //   async ({ userId, productId }, { rejectWithValue }) => {
// // //     try {
// // //       const response = await axios.delete(API_BASE_URL, {
// // //         headers: { Authorization: `Bearer your_jwt_token` },
// // //         data: { userId, productId },
// // //       });
// // //       return { productId, message: response.data.message };
// // //     } catch (error) {
// // //       return rejectWithValue(error.response?.data || "Error removing item from cart");
// // //     }
// // //   }
// // // );

// // // // ✅ Cart Slice
// // // const cartSlice = createSlice({
// // //   name: "cart",
// // //   initialState: {
// // //     items: [],
// // //     status: "idle",
// // //     error: null,
// // //   },
// // //   reducers: {},
// // //   extraReducers: (builder) => {
// // //     builder
// // //       .addCase(fetchCartItems.pending, (state) => {
// // //         state.status = "loading";
// // //       })
// // //       .addCase(fetchCartItems.fulfilled, (state, action) => {
// // //         state.status = "succeeded";
// // //         state.items = action.payload; // Update cart with fetched items
// // //       })
// // //       .addCase(fetchCartItems.rejected, (state, action) => {
// // //         state.status = "failed";
// // //         state.error = action.payload;
// // //       })
// // //       .addCase(addToCart.fulfilled, (state, action) => {
// // //         const { productId, quantity } = action.payload;
// // //         const existingItem = state.items.find((item) => item.id === productId);
// // //         if (existingItem) {
// // //           existingItem.quantity += quantity;
// // //         } else {
// // //           state.items.push({ id: productId, quantity });
// // //         }
// // //       })
// // //       .addCase(removeFromCart.fulfilled, (state, action) => {
// // //         state.items = state.items.filter((item) => item.id !== action.payload.productId);
// // //       });
// // //   },
// // // });

// // // export default cartSlice.reducer;

// // // cartSlice.ts
// // import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// // import axios from "axios";

// // interface CartItem {
// //   id: string;
// //   name: string;
// //   price: number;
// //   oldPrice?: number;
// //   discount?: number;
// //   image: string;
// //   flavour?: string;
// //   weight?: string;
// //   quantity: number;
// // }

// // interface CartState {
// //   items: CartItem[];
// //   loading: boolean;
// //   error: string | null;
// // }

// // const initialState: CartState = {
// //   items: [],
// //   loading: false,
// //   error: null,
// // };

// // const cartSlice = createSlice({
// //   name: "cart",
// //   initialState,
// //   reducers: {
// //     setCartItems: (state, action: PayloadAction<CartItem[]>) => {
// //       state.items = action.payload;
// //     },
// //     setLoading: (state, action: PayloadAction<boolean>) => {
// //       state.loading = action.payload;
// //     },
// //     setError: (state, action: PayloadAction<string | null>) => {
// //       state.error = action.payload;
// //     },
// //   },
// // });

// // export const { setCartItems, setLoading, setError } = cartSlice.actions;
// // export default cartSlice.reducer;

// // // Thunk for adding item to cart
// // export const addToCart = (userId: number, productId: number, quantity: number) => async (dispatch: any) => {
// //   dispatch(setLoading(true));
// //   try {
// //     await axios.post(
// //       "http://localhost:5000/api/cart",
// //       { userId, productId, quantity },
// //       {
// //         headers: {
// //           Authorization: `Bearer your_jwt_token`,
// //         },
// //       }
// //     );
// //     dispatch(fetchCartItems(userId));
// //   } catch (error) {
// //     dispatch(setError(error.message));
// //   } finally {
// //     dispatch(setLoading(false));
// //   }
// // };

// // // Thunk for fetching cart items
// // export const fetchCartItems = (userId: number) => async (dispatch: any) => {
// //   dispatch(setLoading(true));
// //   try {
// //     const response = await axios.get(`http://localhost:5000/api/cart/${userId}`, {
// //       headers: {
// //         Authorization: `Bearer your_jwt_token`,
// //       },
// //     });
// //     dispatch(setCartItems(response.data));
// //   } catch (error) {
// //     dispatch(setError(error.message));
// //   } finally {
// //     dispatch(setLoading(false));
// //   }
// // };


// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import axios from "axios";

// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   oldPrice?: number;
//   discount?: number;
//   image: string;
//   flavour?: string;
//   weight?: string;
//   quantity: number;
// }

// interface CartState {
//   items: CartItem[];
//   loading: boolean;
//   error: string | null;
// }

// const initialState: CartState = {
//   items: [],
//   loading: false,
//   error: null,
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     setCartItems: (state, action: PayloadAction<CartItem[]>) => {
//       state.items = action.payload;
//     },
//     setLoading: (state, action: PayloadAction<boolean>) => {
//       state.loading = action.payload;
//     },
//     setError: (state, action: PayloadAction<string | null>) => {
//       state.error = action.payload;
//     },
//   },
// });

// export const { setCartItems, setLoading, setError } = cartSlice.actions;
// export default cartSlice.reducer;

// // Thunk for adding item to cart
// export const addToCart = (userId: number, productId: number, quantity: number) => async (dispatch: any, getState: any) => {
//   const state = getState();
//   const token = state.auth.token; // Retrieve token from Redux state

//   dispatch(setLoading(true));
//   try {
//     await axios.post(
//       "http://localhost:5000/api/cart",
//       { userId, productId, quantity },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     dispatch(fetchCartItems(userId));
//   } catch (error) {
//     dispatch(setError(error.message));
//   } finally {
//     dispatch(setLoading(false));
//   }
// };

// // Thunk for fetching cart items
// export const fetchCartItems = (userId: number) => async (dispatch: any, getState: any) => {
//   const state = getState();
//   const token = state.auth.token; // Retrieve token from Redux state

//   dispatch(setLoading(true));
//   try {
//     const response = await axios.get(`http://localhost:5000/api/cart/${userId}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     dispatch(setCartItems(response.data));
//   } catch (error) {
//     dispatch(setError(error.message));
//   } finally {
//     dispatch(setLoading(false));
//   }
// };

// gym-supplements-frontend\app\redux\slices\cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface CartItem {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  image: string;
  flavour?: string;
  weight?: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  loading: boolean;
  error: string | null;
}

const initialState: CartState = {
  items: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setCartItems, setLoading, setError } = cartSlice.actions;
export default cartSlice.reducer;

// Thunk for adding item to cart
export const addToCart = (userId: number, productId: number, quantity: number) => async (dispatch: any, getState: any) => {
  const state = getState();
  const token = state.auth.token; // Retrieve token from Redux state

  dispatch(setLoading(true));
  try {
    await axios.post(
      "http://localhost:5000/api/cart",
      { userId, productId, quantity },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(fetchCartItems(userId));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

// Thunk for fetching cart items
export const fetchCartItems = (userId: number) => async (dispatch: any, getState: any) => {
  const state = getState();
  const token = state.auth.token; // Retrieve token from Redux state

  dispatch(setLoading(true));
  try {
    const response = await axios.get(`http://localhost:5000/api/cart/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(setCartItems(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

// Thunk for removing item from cart
export const removeFromCart = (userId: number, productId: number) => async (dispatch: any, getState: any) => {
  const state = getState();
  const token = state.auth.token; // Retrieve token from Redux state

  dispatch(setLoading(true));
  try {
    await axios.delete(
      "http://localhost:5000/api/cart",
      {
        data: { userId, productId },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(fetchCartItems(userId));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
