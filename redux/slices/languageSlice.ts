import { createSlice } from "@reduxjs/toolkit";
import { LanguageState } from "../types";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    language: "es-ES",
  } as LanguageState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export const selectLanguage = (state: LanguageState) => state.language;

export default languageSlice.reducer;
