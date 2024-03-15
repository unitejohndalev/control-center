import { createSlice, PayloadAction } from "@reduxjs/toolkit";



// Get the initial theme state from localStorage or set it to "light" if not found
const initialThemeState = localStorage.getItem("theme") || "light";

export type ThemeState = {
  themeState: string;
};

const themeInitialState: ThemeState = {
  themeState: initialThemeState,
};

const themeSlice = createSlice({
  name: "theme",
  initialState: themeInitialState,
  reducers: {
    toggleTheme: (state) => {
      // Toggle between "light" and "dark"
      state.themeState = state.themeState === "light" ? "dark" : "light";
      // Update localStorage with the new theme state
      localStorage.setItem("theme", state.themeState);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
