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

// gym-supplements-frontend\app\redux\store.ts
// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import authReducer from "./slices/authSlice";
// import cartReducer from "./slices/cartSlice"; // Keeping your cart functionality

// const persistConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["auth"], // Persist only auth state
// };

// const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// export const store = configureStore({
//   reducer: {
//     auth: persistedAuthReducer, // Persisted authentication
//     cart: cartReducer, // Keeping your cart reducer unchanged
//   },
// });

// export const persistor = persistStore(store);
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import authReducer from "./slices/authSlice";
// import cartReducer from "./slices/cartSlice"; // Keeping your cart functionality

// const persistConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["auth"], // Persist only auth state
// };

// const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// export const store = configureStore({
//   reducer: {
//     auth: persistedAuthReducer, // Persisted authentication
//     cart: cartReducer, // Keeping your cart reducer unchanged
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         // Ignore these action types
//         ignoredActions: ['persist/PERSIST'],
//         // Ignore these field paths in all actions
//         ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
//         // Ignore these paths in the state
//         ignoredPaths: ['items.dates'],
//       },
//     }),
// });

// export const persistor = persistStore(store);
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;


// gym-supplements-frontend\app\redux\store.ts
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice"; // Keeping your cart functionality
import orderReducer from "./slices/orderSlice"; // Import the order slice

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
    order: orderReducer, // Add the order reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['persist/PERSIST'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
