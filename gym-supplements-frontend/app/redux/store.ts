// // // Gym__site\app\redux\store.ts
// // import { configureStore } from "@reduxjs/toolkit";
// // import cartReducer from "./slices/cartSlice";

// // export const store = configureStore({
// //   reducer: {
// //     cart: cartReducer, // ✅ Add your cart slice
// //   },
// // });

// // export type RootState = ReturnType<typeof store.getState>;
// // export type AppDispatch = typeof store.dispatch;



// // Gym__site\app\redux\store.ts
// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./slices/cartSlice";
// import authReducer from "./slices/authSlice"; // ✅ Added authSlice

// export const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//     auth: authReducer, // ✅ Added auth reducer
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;


import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import authReducer from "./slices/authSlice"; // ✅ Import auth slice

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer, // ✅ Add auth reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
