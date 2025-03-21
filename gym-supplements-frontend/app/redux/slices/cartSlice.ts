// // // // // gym-supplements-frontend\app\redux\slices\cartSlice.ts
// // // // import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// // // // import axios from "axios";
// // // // import { AppDispatch } from "../store";

// // // // interface CartItem {
// // // //   id: number;
// // // //   name: string;
// // // //   price: number;
// // // //   oldPrice?: number;
// // // //   discount?: number;
// // // //   image: string;
// // // //   flavour?: string;
// // // //   weight?: string;
// // // //   quantity: number;
// // // // }

// // // // interface CartState {
// // // //   items: CartItem[];
// // // //   loading: boolean;
// // // //   error: string | null;
// // // // }

// // // // const initialState: CartState = {
// // // //   items: [],
// // // //   loading: false,
// // // //   error: null,
// // // // };

// // // // const cartSlice = createSlice({
// // // //   name: "cart",
// // // //   initialState,
// // // //   reducers: {
// // // //     setCartItems: (state, action: PayloadAction<CartItem[]>) => {
// // // //       state.items = action.payload;
// // // //     },
// // // //     setLoading: (state, action: PayloadAction<boolean>) => {
// // // //       state.loading = action.payload;
// // // //     },
// // // //     setError: (state, action: PayloadAction<string | null>) => {
// // // //       state.error = action.payload;
// // // //     },
// // // //   },
// // // // });

// // // // export const { setCartItems, setLoading, setError } = cartSlice.actions;
// // // // export default cartSlice.reducer;

// // // // // Thunk for adding item to cart
// // // // export const addToCart = (userId: number, productId: number, quantity: number) => async (dispatch: AppDispatch) => {
// // // //   const token = localStorage.getItem("token"); // Retrieve token from local storage

// // // //   dispatch(setLoading(true));
// // // //   try {
// // // //     await axios.post(
// // // //       "http://localhost:5000/api/cart",
// // // //       { userId, productId, quantity },
// // // //       {
// // // //         headers: {
// // // //           Authorization: `Bearer ${token}`,
// // // //         },
// // // //       }
// // // //     );
// // // //     dispatch(fetchCartItems(userId));
// // // //   } catch (error) {
// // // //     dispatch(setError(error.message));
// // // //   } finally {
// // // //     dispatch(setLoading(false));
// // // //   }
// // // // };

// // // // // Thunk for fetching cart items
// // // // export const fetchCartItems = (userId: number) => async (dispatch: AppDispatch) => {
// // // //   const token = localStorage.getItem("token"); // Retrieve token from local storage

// // // //   dispatch(setLoading(true));
// // // //   try {
// // // //     const response = await axios.get(`http://localhost:5000/api/cart/${userId}`, {
// // // //       headers: {
// // // //         Authorization: `Bearer ${token}`,
// // // //       },
// // // //     });
// // // //     dispatch(setCartItems(response.data));
// // // //   } catch (error) {
// // // //     dispatch(setError(error.message));
// // // //   } finally {
// // // //     dispatch(setLoading(false));
// // // //   }
// // // // };

// // // // // Thunk for removing item from cart
// // // // export const removeFromCart = (userId: number, productId: number) => async (dispatch: AppDispatch) => {
// // // //   const token = localStorage.getItem("token"); // Retrieve token from local storage

// // // //   dispatch(setLoading(true));
// // // //   try {
// // // //     await axios.delete(
// // // //       "http://localhost:5000/api/cart",
// // // //       {
// // // //         data: { userId, productId },
// // // //         headers: {
// // // //           Authorization: `Bearer ${token}`,
// // // //         },
// // // //       }
// // // //     );
// // // //     dispatch(fetchCartItems(userId));
// // // //   } catch (error) {
// // // //     dispatch(setError(error.message));
// // // //   } finally {
// // // //     dispatch(setLoading(false));
// // // //   }
// // // // };

// // // // // Thunk for updating quantity
// // // // export const updateQuantity = ({ userId, id, quantity }: { userId: number, id: number, quantity: number }) => async (dispatch: AppDispatch) => {
// // // //   const token = localStorage.getItem("token"); // Retrieve token from local storage

// // // //   dispatch(setLoading(true));
// // // //   try {
// // // //     await axios.put(
// // // //       `http://localhost:5000/api/cart/${id}`,
// // // //       { userId, quantity },
// // // //       {
// // // //         headers: {
// // // //           Authorization: `Bearer ${token}`,
// // // //         },
// // // //       }
// // // //     );
// // // //     dispatch(fetchCartItems(userId));
// // // //   } catch (error) {
// // // //     dispatch(setError(error.message));
// // // //   } finally {
// // // //     dispatch(setLoading(false));
// // // //   }
// // // // };

// // // // // Thunk for initializing cart items
// // // // export const initializeCart = () => async (dispatch: AppDispatch, getState: any) => {
// // // //   const state = getState();
// // // //   const userId = state.auth.user?.id;
// // // //   if (userId) {
// // // //     dispatch(fetchCartItems(userId));
// // // //   }
// // // // };



// // // // // gym-supplements-frontend\app\redux\slices\cartSlice.ts
// // // // import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// // // // import axios from "axios";
// // // // import { AppDispatch } from "../store";

// // // // interface CartItem {
// // // //   id: number;
// // // //   name: string;
// // // //   price: number;
// // // //   oldPrice?: number;
// // // //   discount?: number;
// // // //   image: string;
// // // //   flavour?: string;
// // // //   weight?: string;
// // // //   quantity: number;
// // // // }

// // // // interface CartState {
// // // //   items: CartItem[];
// // // //   loading: boolean;
// // // //   error: string | null;
// // // // }

// // // // const initialState: CartState = {
// // // //   items: [],
// // // //   loading: false,
// // // //   error: null,
// // // // };

// // // // const cartSlice = createSlice({
// // // //   name: "cart",
// // // //   initialState,
// // // //   reducers: {
// // // //     setCartItems: (state, action: PayloadAction<CartItem[]>) => {
// // // //       state.items = action.payload;
// // // //     },
// // // //     setLoading: (state, action: PayloadAction<boolean>) => {
// // // //       state.loading = action.payload;
// // // //     },
// // // //     setError: (state, action: PayloadAction<string | null>) => {
// // // //       state.error = action.payload;
// // // //     },
// // // //   },
// // // // });

// // // // export const { setCartItems, setLoading, setError } = cartSlice.actions;
// // // // export default cartSlice.reducer;

// // // // // Thunk for adding item to cart
// // // // export const addToCart = (userId: number, productId: number, quantity: number) => async (dispatch: AppDispatch) => {
// // // //   const token = localStorage.getItem("token"); // Retrieve token from local storage

// // // //   dispatch(setLoading(true));
// // // //   try {
// // // //     await axios.post(
// // // //       "http://localhost:5000/api/cart",
// // // //       { userId, productId, quantity },
// // // //       {
// // // //         headers: {
// // // //           Authorization: `Bearer ${token}`,
// // // //         },
// // // //       }
// // // //     );
// // // //     dispatch(fetchCartItems(userId));
// // // //   } catch (error) {
// // // //     dispatch(setError(error.message));
// // // //   } finally {
// // // //     dispatch(setLoading(false));
// // // //   }
// // // // };

// // // // // Thunk for fetching cart items
// // // // export const fetchCartItems = (userId: number) => async (dispatch: AppDispatch) => {
// // // //   const token = localStorage.getItem("token"); // Retrieve token from local storage

// // // //   dispatch(setLoading(true));
// // // //   try {
// // // //     const response = await axios.get(`http://localhost:5000/api/cart/${userId}`, {
// // // //       headers: {
// // // //         Authorization: `Bearer ${token}`,
// // // //       },
// // // //     });
// // // //     dispatch(setCartItems(response.data));
// // // //   } catch (error) {
// // // //     dispatch(setError(error.message));
// // // //   } finally {
// // // //     dispatch(setLoading(false));
// // // //   }
// // // // };

// // // // // Thunk for removing item from cart
// // // // export const removeFromCart = (userId: number, productId: number) => async (dispatch: AppDispatch) => {
// // // //   const token = localStorage.getItem("token"); // Retrieve token from local storage

// // // //   dispatch(setLoading(true));
// // // //   try {
// // // //     await axios.delete(
// // // //       "http://localhost:5000/api/cart",
// // // //       {
// // // //         data: { userId, productId },
// // // //         headers: {
// // // //           Authorization: `Bearer ${token}`,
// // // //         },
// // // //       }
// // // //     );
// // // //     dispatch(fetchCartItems(userId));
// // // //   } catch (error) {
// // // //     dispatch(setError(error.message));
// // // //   } finally {
// // // //     dispatch(setLoading(false));
// // // //   }
// // // // };

// // // // // Thunk for updating quantity
// // // // export const updateQuantity = ({ userId, id, quantity }: { userId: number, id: number, quantity: number }) => async (dispatch: AppDispatch) => {
// // // //   const token = localStorage.getItem("token"); // Retrieve token from local storage

// // // //   dispatch(setLoading(true));
// // // //   try {
// // // //     await axios.put(
// // // //       `http://localhost:5000/api/cart/${id}`,
// // // //       { userId, quantity },
// // // //       {
// // // //         headers: {
// // // //           Authorization: `Bearer ${token}`,
// // // //         },
// // // //       }
// // // //     );
// // // //     dispatch(fetchCartItems(userId));
// // // //   } catch (error) {
// // // //     dispatch(setError(error.message));
// // // //   } finally {
// // // //     dispatch(setLoading(false));
// // // //   }
// // // // };

// // // // // Thunk for initializing cart items
// // // // export const initializeCart = () => async (dispatch: AppDispatch, getState: any) => {
// // // //   const state = getState();
// // // //   const userId = state.auth.user?.id;
// // // //   if (userId) {
// // // //     dispatch(fetchCartItems(userId));
// // // //   }
// // // // };



// // // // gym-supplements-frontend\app\redux\slices\cartSlice.ts
// // // import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
// // // import axios from "axios";
// // // import { AppDispatch } from "../store";

// // // interface CartItem {
// // //   id: number;
// // //   name: string;
// // //   price: number;
// // //   oldPrice?: number;
// // //   discount?: number;
// // //   image: string;
// // //   flavour?: string;
// // //   weight?: string;
// // //   quantity: number;
// // // }

// // // interface CartState {
// // //   items: CartItem[];
// // //   loading: boolean;
// // //   error: string | null;
// // // }

// // // const initialState: CartState = {
// // //   items: [],
// // //   loading: false,
// // //   error: null,
// // // };

// // // export const fetchCartItems = createAsyncThunk(
// // //   "cart/fetchCartItems",
// // //   async (userId: number, { getState }) => {
// // //     const token = localStorage.getItem("token");
// // //     const response = await axios.get(`http://localhost:5000/api/cart/${userId}`, {
// // //       headers: {
// // //         Authorization: `Bearer ${token}`,
// // //       },
// // //     });
// // //     return response.data;
// // //   }
// // // );

// // // const cartSlice = createSlice({
// // //   name: "cart",
// // //   initialState,
// // //   reducers: {
// // //     setLoading: (state, action: PayloadAction<boolean>) => {
// // //       state.loading = action.payload;
// // //     },
// // //     setError: (state, action: PayloadAction<string | null>) => {
// // //       state.error = action.payload;
// // //     },
// // //   },
// // //   extraReducers: (builder) => {
// // //     builder.addCase(fetchCartItems.pending, (state) => {
// // //       state.loading = true;
// // //       state.error = null;
// // //     });
// // //     builder.addCase(fetchCartItems.fulfilled, (state, action) => {
// // //       state.loading = false;
// // //       state.items = action.payload;
// // //     });
// // //     builder.addCase(fetchCartItems.rejected, (state, action) => {
// // //       state.loading = false;
// // //       state.error = action.error.message || "Failed to fetch cart items.";
// // //     });
// // //   },
// // // });

// // // export const { setLoading, setError } = cartSlice.actions;
// // // export default cartSlice.reducer;

// // // export const addToCart = (userId: number, productId: number, quantity: number) => async (dispatch: AppDispatch) => {
// // //   const token = localStorage.getItem("token");
// // //   dispatch(setLoading(true));
// // //   try {
// // //     await axios.post(
// // //       "http://localhost:5000/api/cart",
// // //       { userId, productId, quantity },
// // //       {
// // //         headers: {
// // //           Authorization: `Bearer ${token}`,
// // //         },
// // //       }
// // //     );
// // //     dispatch(fetchCartItems(userId));
// // //   } catch (error: any) {
// // //     dispatch(setError(error.message));
// // //   } finally {
// // //     dispatch(setLoading(false));
// // //   }
// // // };

// // // export const removeFromCart = (userId: number, productId: number) => async (dispatch: AppDispatch) => {
// // //   const token = localStorage.getItem("token");
// // //   dispatch(setLoading(true));
// // //   try {
// // //     await axios.delete(
// // //       "http://localhost:5000/api/cart",
// // //       {
// // //         data: { userId, productId },
// // //         headers: {
// // //           Authorization: `Bearer ${token}`,
// // //         },
// // //       }
// // //     );
// // //     dispatch(fetchCartItems(userId));
// // //   } catch (error: any) {
// // //     dispatch(setError(error.message));
// // //   } finally {
// // //     dispatch(setLoading(false));
// // //   }
// // // };

// // // export const updateQuantity = ({ userId, id, quantity }: { userId: number, id: number, quantity: number }) => async (dispatch: AppDispatch) => {
// // //   const token = localStorage.getItem("token");
// // //   dispatch(setLoading(true));
// // //   try {
// // //     await axios.put(
// // //       `http://localhost:5000/api/cart/${id}`,
// // //       { userId, quantity },
// // //       {
// // //         headers: {
// // //           Authorization: `Bearer ${token}`,
// // //         },
// // //       }
// // //     );
// // //     dispatch(fetchCartItems(userId));
// // //   } catch (error: any) {
// // //     dispatch(setError(error.message));
// // //   } finally {
// // //     dispatch(setLoading(false));
// // //   }
// // // };

// // // export const initializeCart = () => async (dispatch: AppDispatch, getState: any) => {
// // //   const state = getState();
// // //   const userId = state.auth.user?.id;
// // //   if (userId) {
// // //     dispatch(fetchCartItems(userId));
// // //   }
// // // };

// // // gym-supplements-frontend\app\redux\slices\cartSlice.ts
// // import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
// // import axios from "axios";
// // import { AppDispatch } from "../store";

// // interface CartItem {
// //   id: number;
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

// // export const fetchCartItems = createAsyncThunk(
// //   "cart/fetchCartItems",
// //   async (userId: number, { getState }) => {
// //     const token = localStorage.getItem("token");
// //     const response = await axios.get(`http://localhost:5000/api/cart/${userId}`, {
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //       },
// //     });
// //     return response.data;
// //   }
// // );

// // const cartSlice = createSlice({
// //   name: "cart",
// //   initialState,
// //   reducers: {
// //     setLoading: (state, action: PayloadAction<boolean>) => {
// //       state.loading = action.payload;
// //     },
// //     setError: (state, action: PayloadAction<string | null>) => {
// //       state.error = action.payload;
// //     },
// //   },
// //   extraReducers: (builder) => {
// //     builder.addCase(fetchCartItems.pending, (state) => {
// //       state.loading = true;
// //       state.error = null;
// //     });
// //     builder.addCase(fetchCartItems.fulfilled, (state, action) => {
// //       state.loading = false;
// //       state.items = action.payload;
// //     });
// //     builder.addCase(fetchCartItems.rejected, (state, action) => {
// //       state.loading = false;
// //       state.error = action.error.message || "Failed to fetch cart items.";
// //     });
// //   },
// // });

// // export const { setLoading, setError } = cartSlice.actions;
// // export default cartSlice.reducer;

// // export const addToCart = (userId: number, productId: number, quantity: number) => async (dispatch: AppDispatch) => {
// //   const token = localStorage.getItem("token");
// //   dispatch(setLoading(true));
// //   try {
// //     await axios.post(
// //       "http://localhost:5000/api/cart",
// //       { userId, productId, quantity },
// //       {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       }
// //     );
// //     dispatch(fetchCartItems(userId));
// //   } catch (error: any) {
// //     dispatch(setError(error.message));
// //   } finally {
// //     dispatch(setLoading(false));
// //   }
// // };

// // export const removeFromCart = (userId: number, productId: number) => async (dispatch: AppDispatch) => {
// //   const token = localStorage.getItem("token");
// //   dispatch(setLoading(true));
// //   try {
// //     await axios.delete(
// //       "http://localhost:5000/api/cart",
// //       {
// //         data: { userId, productId },
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       }
// //     );
// //     dispatch(fetchCartItems(userId));
// //   } catch (error: any) {
// //     dispatch(setError(error.message));
// //   } finally {
// //     dispatch(setLoading(false));
// //   }
// // };

// // export const updateQuantity = ({ userId, id, quantity }: { userId: number, id: number, quantity: number }) => async (dispatch: AppDispatch) => {
// //   const token = localStorage.getItem("token");
// //   dispatch(setLoading(true));
// //   try {
// //     await axios.put(
// //       `http://localhost:5000/api/cart/${id}`,
// //       { userId, quantity },
// //       {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       }
// //     );
// //     dispatch(fetchCartItems(userId));
// //   } catch (error: any) {
// //     dispatch(setError(error.message));
// //   } finally {
// //     dispatch(setLoading(false));
// //   }
// // };

// // export const initializeCart = () => async (dispatch: AppDispatch, getState: any) => {
// //   const state = getState();
// //   const userId = state.auth.user?.id;
// //   if (userId) {
// //     dispatch(fetchCartItems(userId));
// //   }
// // };

// // E:\gym_work\new_gym_website\Gym__website\gym-supplements-frontend\app\redux\slices\cartSlice.ts
// import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { AppDispatch } from "../store";

// interface CartItem {
//   id: number;
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
//     setLoading: (state, action: PayloadAction<boolean>) => {
//       state.loading = action.payload;
//     },
//     setError: (state, action: PayloadAction<string | null>) => {
//       state.error = action.payload;
//     },
//     addItemToCart: (state, action: PayloadAction<CartItem>) => {
//       const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
//       if (itemIndex >= 0) {
//         state.items[itemIndex].quantity += action.payload.quantity;
//       } else {
//         state.items.push(action.payload);
//       }
//     },
//     removeItemFromCart: (state, action: PayloadAction<number>) => {
//       state.items = state.items.filter((item) => item.id !== action.payload);
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchCartItems.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     });
//     builder.addCase(fetchCartItems.fulfilled, (state, action) => {
//       state.loading = false;
//       state.items = action.payload;
//     });
//     builder.addCase(fetchCartItems.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.error.message || "Failed to fetch cart items.";
//     });
//   },
// });

// export const { setLoading, setError, addItemToCart, removeItemFromCart } = cartSlice.actions;
// export default cartSlice.reducer;

// export const fetchCartItems = createAsyncThunk(
//   "cart/fetchCartItems",
//   async (userId: number, { getState }) => {
//     const token = localStorage.getItem("token");
//     const response = await axios.get(`http://localhost:5000/api/cart/${userId}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return response.data;
//   }
// );

// export const addToCart = (userId: number, productId: number, quantity: number) => async (dispatch: AppDispatch) => {
//   const token = localStorage.getItem("token");
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
//   } catch (error: any) {
//     dispatch(setError(error.message));
//   } finally {
//     dispatch(setLoading(false));
//   }
// };

// export const removeFromCart = (userId: number, productId: number) => async (dispatch: AppDispatch) => {
//   const token = localStorage.getItem("token");
//   dispatch(setLoading(true));
//   try {
//     await axios.delete(`http://localhost:5000/api/cart`, {
//       data: { userId, productId },
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     dispatch(removeItemFromCart(productId));
//     dispatch(fetchCartItems(userId));
//   } catch (error: any) {
//     dispatch(setError(error.message));
//   } finally {
//     dispatch(setLoading(false));
//   }
// };

// export const initializeCart = () => async (dispatch: AppDispatch, getState: any) => {
//   const state = getState();
//   const userId = state.auth.user?.id;
//   if (userId) {
//     dispatch(fetchCartItems(userId));
//   }
// };


import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "../store";

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
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      // Save to local storage for non-logged-in users
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeItemFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      // Save to local storage for non-logged-in users
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
      // Save to local storage for non-logged-in users
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    setCartItems: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
      // Save to local storage for non-logged-in users
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartItems.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCartItems.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
      // Save to local storage for non-logged-in users
      localStorage.setItem("cart", JSON.stringify(state.items));
    });
    builder.addCase(fetchCartItems.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to fetch cart items.";
    });
  },
});

export const { setLoading, setError, addItemToCart, removeItemFromCart, updateQuantity, setCartItems } = cartSlice.actions;
export default cartSlice.reducer;

export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async (userId: number, { getState }) => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`http://localhost:5000/api/cart/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
);

export const addToCart = (userId: number, productId: number, quantity: number) => async (dispatch: AppDispatch) => {
  const token = localStorage.getItem("token");
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
  } catch (error: any) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const removeFromCart = (userId: number, productId: number) => async (dispatch: AppDispatch) => {
  const token = localStorage.getItem("token");
  dispatch(setLoading(true));
  try {
    await axios.delete(`http://localhost:5000/api/cart`, {
      data: { userId, productId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(removeItemFromCart(productId));
    dispatch(fetchCartItems(userId));
  } catch (error: any) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const initializeCart = () => async (dispatch: AppDispatch, getState: any) => {
  const state = getState();
  const userId = state.auth.user?.id;
  if (userId) {
    dispatch(fetchCartItems(userId));
  } else {
    // Load from local storage for non-logged-in users
    const cartItems = localStorage.getItem("cart");
    if (cartItems) {
      dispatch(setCartItems(JSON.parse(cartItems)));
    }
  }
};
