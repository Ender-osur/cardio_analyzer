import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import languageSlice from "./slices/languageSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    lang: languageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
