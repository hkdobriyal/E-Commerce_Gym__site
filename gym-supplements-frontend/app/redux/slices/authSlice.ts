// // // import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// // // import axios from "axios";
// // // import { AppDispatch } from "../store";

// // // interface AuthState {
// // //   token: string | null;
// // //   user: any;
// // // }

// // // const initialState: AuthState = {
// // //   token: null,
// // //   user: null,
// // // };

// // // const authSlice = createSlice({
// // //   name: "auth",
// // //   initialState,
// // //   reducers: {
// // //     hydrateAuthState: (state) => {
// // //       if (typeof window !== "undefined") {
// // //         state.token = localStorage.getItem("token");
// // //         const user = localStorage.getItem("user");
// // //         state.user = user && user !== "undefined" ? JSON.parse(user) : null;
// // //       }
// // //     },
// // //     setUser: (state, action: PayloadAction<any>) => {
// // //       state.user = action.payload;
// // //       localStorage.setItem("user", JSON.stringify(action.payload));
// // //     },
// // //     setToken: (state, action: PayloadAction<string | null>) => {
// // //       state.token = action.payload;
// // //       if (action.payload) {
// // //         localStorage.setItem("token", action.payload);
// // //       } else {
// // //         localStorage.removeItem("token");
// // //       }
// // //     },
// // //     logout: (state, action: PayloadAction<AppDispatch>) => {
// // //       state.user = null;
// // //       state.token = null;
// // //       localStorage.removeItem("user");
// // //       localStorage.removeItem("token");
// // //       action.payload(clearCart()); // Dispatch action to clear cart
// // //     },
// // //   },
// // // });

// // // export const { setUser, setToken, logout, hydrateAuthState } = authSlice.actions;
// // // export default authSlice.reducer;

// // // // Thunk for verifying token and fetching user data
// // // export const verifyTokenAndFetchUser = () => async (dispatch: any, getState: any) => {
// // //   const state = getState();
// // //   const token = state.auth.token;

// // //   if (token) {
// // //     try {
// // //       const response = await axios.post(
// // //         "http://localhost:5000/api/auth/verify-token",
// // //         { token },
// // //         {
// // //           headers: {
// // //             Authorization: `Bearer ${token}`,
// // //           },
// // //         }
// // //       );
// // //       if (response.data.valid) {
// // //         dispatch(setUser(response.data.user));
// // //       }
// // //     } catch (error) {
// // //       console.error("Error verifying token:", error);
// // //       dispatch(logout(dispatch)); // Logout if token is invalid
// // //     }
// // //   }
// // // };

// // // // Action to clear the cart
// // // export const clearCart = () => ({
// // //   type: 'cart/clearCart',
// // // });



// // import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// // import axios from "axios";
// // import { AppDispatch } from "../store";
// // import { clearCart } from "../slices/cartSlice"; // Import clearCart action

// // interface AuthState {
// //   token: string | null;
// //   user: any;
// // }

// // const initialState: AuthState = {
// //   token: null,
// //   user: null,
// // };

// // const authSlice = createSlice({
// //   name: "auth",
// //   initialState,
// //   reducers: {
// //     hydrateAuthState: (state) => {
// //       if (typeof window !== "undefined") {
// //         state.token = localStorage.getItem("token");
// //         const user = localStorage.getItem("user");
// //         state.user = user && user !== "undefined" ? JSON.parse(user) : null;
// //       }
// //     },
// //     setUser: (state, action: PayloadAction<any>) => {
// //       state.user = action.payload;
// //       localStorage.setItem("user", JSON.stringify(action.payload));
// //     },
// //     setToken: (state, action: PayloadAction<string | null>) => {
// //       state.token = action.payload;
// //       if (action.payload) {
// //         localStorage.setItem("token", action.payload);
// //       } else {
// //         localStorage.removeItem("token");
// //       }
// //     },
// //     logout: (state) => {
// //       state.user = null;
// //       state.token = null;
// //       localStorage.removeItem("user");
// //       localStorage.removeItem("token");
// //     },
// //   },
// // });

// // export const { setUser, setToken, logout, hydrateAuthState } = authSlice.actions;
// // export default authSlice.reducer;

// // // Thunk for verifying token and fetching user data
// // export const verifyTokenAndFetchUser = () => async (dispatch: any, getState: any) => {
// //   const state = getState();
// //   const token = state.auth.token;

// //   if (token) {
// //     try {
// //       const response = await axios.post(
// //         "http://localhost:5000/api/auth/verify-token",
// //         { token },
// //         {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //         }
// //       );
// //       if (response.data.valid) {
// //         dispatch(setUser(response.data.user));
// //       }
// //     } catch (error) {
// //       console.error("Error verifying token:", error);
// //       dispatch(logout()); // Logout if token is invalid
// //       dispatch(clearCart()); // Clear cart when logging out
// //     }
// //   }
// // };


// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import axios from "axios";
// import { AppDispatch } from "../store";
// import { fetchCartItems, setCartItems } from "../slices/cartSlice";

// interface AuthState {
//   token: string | null;
//   user: any;
// }

// const initialState: AuthState = {
//   token: null,
//   user: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     hydrateAuthState: (state) => {
//       if (typeof window !== "undefined") {
//         state.token = localStorage.getItem("token");
//         const user = localStorage.getItem("user");
//         state.user = user && user !== "undefined" ? JSON.parse(user) : null;
//       }
//     },
//     setUser: (state, action: PayloadAction<any>) => {
//       state.user = action.payload;
//       localStorage.setItem("user", JSON.stringify(action.payload));
//     },
//     setToken: (state, action: PayloadAction<string | null>) => {
//       state.token = action.payload;
//       if (action.payload) {
//         localStorage.setItem("token", action.payload);
//       } else {
//         localStorage.removeItem("token");
//       }
//     },
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//       localStorage.removeItem("user");
//       localStorage.removeItem("token");
//     },
//   },
// });

// export const { setUser, setToken, logout, hydrateAuthState } = authSlice.actions;
// export default authSlice.reducer;

// export const verifyTokenAndFetchUser = () => async (dispatch: AppDispatch, getState: any) => {
//   const state = getState();
//   const token = state.auth.token;

//   if (token) {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/verify-token",
//         { token },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       if (response.data.valid) {
//         dispatch(setUser(response.data.user));
//         const localCart = JSON.parse(localStorage.getItem("cart") || "[]");
//         if (localCart.length > 0) {
//           await axios.post("http://localhost:5000/api/cart/sync", {
//             userId: response.data.user.id,
//             items: localCart,
//           }, {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           });
//         } else {
//           dispatch(fetchCartItems(response.data.user.id));
//         }
//       }
//     } catch (error) {
//       console.error("Error verifying token:", error);
//       dispatch(logout());
//     }
//   }
// };


import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "../store";
import { clearCart, setCartItems, fetchCartItems } from "../slices/cartSlice";

interface AuthState {
  token: string | null;
  user: any;
}

const initialState: AuthState = {
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    hydrateAuthState: (state) => {
      if (typeof window !== "undefined") {
        state.token = localStorage.getItem("token");
        const user = localStorage.getItem("user");
        state.user = user && user !== "undefined" ? JSON.parse(user) : null;
      }
    },
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
      if (action.payload) {
        localStorage.setItem("token", action.payload);
      } else {
        localStorage.removeItem("token");
      }
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});

export const { setUser, setToken, logout, hydrateAuthState } = authSlice.actions;
export default authSlice.reducer;

export const verifyTokenAndFetchUser = () => async (dispatch: AppDispatch, getState: any) => {
  const state = getState();
  const token = state.auth.token;

  if (token) {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/verify-token",
        { token },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.valid) {
        dispatch(setUser(response.data.user));
        const localCart = JSON.parse(localStorage.getItem("cart") || "[]");
        if (localCart.length > 0) {
          dispatch(setCartItems(localCart));
        } else {
          dispatch(fetchCartItems(response.data.user.id));
        }
      }
    } catch (error) {
      console.error("Error verifying token:", error);
      dispatch(logout());
      dispatch(clearCart());
    }
  }
};
