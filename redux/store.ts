import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import authSlice from "./slices/authSlice";
import languageSlice from "./slices/languageSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    lang: languageSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
