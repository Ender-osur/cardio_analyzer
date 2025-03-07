import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string, email: string, name?: string }>) => {
      state.user.token = action.payload.token;
      state.user.email = action.payload.email;
      state.user.name = action.payload.name || state.user.name;
      state.user.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = initialState.user;
    }
  },
});

export const { login, logout } = authSlice.actions;

export const selectUser = (state: { auth: UserState }) => state.auth.user;

export default authSlice.reducer;
