// // // // import { configureStore } from "@reduxjs/toolkit";
// // // // import { persistStore, persistReducer } from "redux-persist";
// // // // import storage from "redux-persist/lib/storage";
// // // // import authReducer from "./slices/authSlice";
// // // // import cartReducer from "./slices/cartSlice";
// // // // import orderReducer from "./slices/orderSlice";

// // // // const persistConfig = {
// // // //   key: "root",
// // // //   storage,
// // // //   whitelist: ["auth", "cart"], // Persist both auth and cart state
// // // // };

// // // // const persistedAuthReducer = persistReducer(persistConfig, authReducer);
// // // // const persistedCartReducer = persistReducer(persistConfig, cartReducer);

// // // // export const store = configureStore({
// // // //   reducer: {
// // // //     auth: persistedAuthReducer,
// // // //     cart: persistedCartReducer,
// // // //     order: orderReducer,
// // // //   },
// // // //   middleware: getDefaultMiddleware =>
// // // //     getDefaultMiddleware({
// // // //       serializableCheck: {
// // // //         ignoredActions: ['persist/PERSIST'],
// // // //         ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
// // // //         ignoredPaths: ['items.dates'],
// // // //       },
// // // //     }),
// // // // });

// // // // export const persistor = persistStore(store);
// // // // export type RootState = ReturnType<typeof store.getState>;
// // // // export type AppDispatch = typeof store.dispatch;

// // // // gym-supplements-frontend\app\redux\store.ts
// // // import { configureStore } from "@reduxjs/toolkit";
// // // import { persistStore, persistReducer } from "redux-persist";
// // // import storage from "redux-persist/lib/storage";
// // // import authReducer from "./slices/authSlice";
// // // import cartReducer from "./slices/cartSlice";
// // // import orderReducer from "./slices/orderSlice";

// // // const persistConfig = {
// // //   key: "root",
// // //   storage,
// // //   whitelist: ["auth", "cart"], // Persist both auth and cart state
// // // };

// // // const persistedAuthReducer = persistReducer(persistConfig, authReducer);
// // // const persistedCartReducer = persistReducer(persistConfig, cartReducer);

// // // export const store = configureStore({
// // //   reducer: {
// // //     auth: persistedAuthReducer,
// // //     cart: persistedCartReducer,
// // //     order: orderReducer,
// // //   },
// // //   middleware: getDefaultMiddleware =>
// // //     getDefaultMiddleware({
// // //       serializableCheck: {
// // //         ignoredActions: ['persist/PERSIST'],
// // //         ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
// // //         ignoredPaths: ['items.dates'],
// // //       },
// // //     }),
// // // });

// // // export const persistor = persistStore(store);
// // // export type RootState = ReturnType<typeof store.getState>;
// // // export type AppDispatch = typeof store.dispatch;

// // // gym-supplements-frontend\app\redux\store.ts
// // import { configureStore } from "@reduxjs/toolkit";
// // import { persistStore, persistReducer } from "redux-persist";
// // import storage from "redux-persist/lib/storage";
// // import authReducer from "./slices/authSlice";
// // import cartReducer from "./slices/cartSlice";
// // import orderReducer from "./slices/orderSlice";

// // const persistConfig = {
// //   key: "root",
// //   storage,
// //   whitelist: ["auth", "cart"], // Persist both auth and cart state
// // };

// // const persistedAuthReducer = persistReducer(persistConfig, authReducer);
// // const persistedCartReducer = persistReducer(persistConfig, cartReducer);

// // export const store = configureStore({
// //   reducer: {
// //     auth: persistedAuthReducer,
// //     cart: persistedCartReducer,
// //     order: orderReducer,
// //   },
// //   middleware: getDefaultMiddleware =>
// //     getDefaultMiddleware({
// //       serializableCheck: {
// //         ignoredActions: ['persist/PERSIST'],
// //         ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
// //         ignoredPaths: ['items.dates'],
// //       },
// //     }),
// // });

// // export const persistor = persistStore(store);
// // export type RootState = ReturnType<typeof store.getState>;
// // export type AppDispatch = typeof store.dispatch;

// // gym-supplements-frontend\app\redux\store.ts
// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import authReducer from "./slices/authSlice";
// import cartReducer from "./slices/cartSlice";
// import orderReducer from "./slices/orderSlice";

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["auth", "cart"],
// };

// const persistedAuthReducer = persistReducer(persistConfig, authReducer);
// const persistedCartReducer = persistReducer(persistConfig, cartReducer);

// export const store = configureStore({
//   reducer: {
//     auth: persistedAuthReducer,
//     cart: persistedCartReducer,
//     order: orderReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: ['persist/PERSIST'],
//         ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
//         ignoredPaths: ['items.dates'],
//       },
//     }),
// });

// export const persistor = persistStore(store);
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;



import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";
import orderReducer from "./slices/orderSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "cart"],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedCartReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    cart: persistedCartReducer,
    order: orderReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        ignoredPaths: ['items.dates'],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
