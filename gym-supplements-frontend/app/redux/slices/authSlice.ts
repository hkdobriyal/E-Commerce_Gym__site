// // // // Gym__site\app\redux\slices\authSlice.ts
// // // import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// // // interface AuthState {
// // //   isAuthenticated: boolean;
// // //   user: { name: string; email: string } | null;
// // // }

// // // const initialState: AuthState = {
// // //   isAuthenticated: false, // Initially, user is not logged in
// // //   user: null,
// // // };

// // // const authSlice = createSlice({
// // //   name: "auth",
// // //   initialState,
// // //   reducers: {
// // //     login: (state, action: PayloadAction<{ name: string; email: string }>) => {
// // //       state.isAuthenticated = true;
// // //       state.user = action.payload;
// // //     },
// // //     logout: (state) => {
// // //       state.isAuthenticated = false;
// // //       state.user = null;
// // //     },
// // //   },
// // // });

// // // export const { login, logout } = authSlice.actions;
// // // export default authSlice.reducer;

// // // gym-supplements-frontend\app\redux\slices\authSlice.ts
// // import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// // interface AuthState {
// //   user: any;
// //   token: string | null;
// // }

// // const initialState: AuthState = {
// //   user: null,
// //   token: null,
// // };

// // const authSlice = createSlice({
// //   name: 'auth',
// //   initialState,
// //   reducers: {
// //     setUser: (state, action: PayloadAction<any>) => {
// //       state.user = action.payload;
// //     },
// //     setToken: (state, action: PayloadAction<string>) => {
// //       state.token = action.payload;
// //     },
// //     logout: (state) => {
// //       state.user = null;
// //       state.token = null;
// //       localStorage.removeItem('token');
// //     },
// //   },
// // });

// // export const { setUser, setToken, logout } = authSlice.actions;
// // export default authSlice.reducer;

// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface AuthState {
//   token: string | null;
//   user: { uname: string } | null;
// }

// const initialState: AuthState = {
//   token: null,
//   user: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setToken: (state, action: PayloadAction<string>) => {
//       state.token = action.payload;
//     },
//     setUser: (state, action: PayloadAction<{ uname: string } | null>) => {
//       state.user = action.payload;
//     },
//     logout: (state) => {
//       state.token = null;
//       state.user = null;
//       localStorage.removeItem("token"); // Clear token on logout
//     },
//   },
// });

// export const { setToken, setUser, logout } = authSlice.actions;
// export default authSlice.reducer;


import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
  user: any;
}

const initialState: AuthState = {
  token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
  user: typeof window !== "undefined"
    ? localStorage.getItem("user") && localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user")!)
      : null
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
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

export const { setUser, setToken, logout } = authSlice.actions;
export default authSlice.reducer;
