// // import { configureStore } from "@reduxjs/toolkit";
// // import cartReducer from "./slices/cartSlice";
// // import authReducer from "./slices/authSlice"; // ✅ Import auth slice

// // export const store = configureStore({
// //   reducer: {
// //     cart: cartReducer,
// //     auth: authReducer, // ✅ Add auth reducer
// //   },
// // });

// // export type RootState = ReturnType<typeof store.getState>;
// // export type AppDispatch = typeof store.dispatch;

// // gym-supplements-frontend\app\redux\store.ts
// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './slices/authSlice';
// import cartReducer from './slices/cartSlice';

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     cart: cartReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export default store;


import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice"; // Keeping your cart functionality

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["auth"], // Persist only auth state
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer, // Persisted authentication
    cart: cartReducer, // Keeping your cart reducer unchanged
  },
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
