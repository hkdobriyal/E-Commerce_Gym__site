// // gym-supplements-frontend\app\redux\slices\authSlice.ts
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface AuthState {
//   token: string | null;
//   user: any;
// }

// const initialState: AuthState = {
//   token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
//   user: typeof window !== "undefined"
//     ? localStorage.getItem("user") && localStorage.getItem("user") !== "undefined"
//       ? JSON.parse(localStorage.getItem("user")!)
//       : null
//     : null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
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

// export const { setUser, setToken, logout } = authSlice.actions;
// export default authSlice.reducer;


// -------------------------------above code works fine --------------------------------------------


// gym-supplements-frontend\app\redux\slices\authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
