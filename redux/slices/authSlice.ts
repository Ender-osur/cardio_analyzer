import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../types";

const initialState: UserState = {
  user: {
    name: "",
    email: "",
    password: "",
    isAuthenticated: false,
    token: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.user.isAuthenticated = state.user.token !== "";
      state.user.token = state.user.token;
    },
    logout: (state) => {
      state.user = {
        name: "",
        email: "",
        password: "",
        isAuthenticated: false,
        token: "",
      };
    },
  },
});

export const { login, logout } = authSlice.actions;

export const selectUser = (state: UserState) => state.user;

export default authSlice.reducer;
