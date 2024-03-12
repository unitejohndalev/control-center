import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export type ThemeState = {
    themeState:boolean
}

const themeInitialState : ThemeState = {
    themeState:false
}

const themeSlice = createSlice({
  name: "theme",
  initialState: themeInitialState,
  reducers: {
    toggleTheme: (state ) => {
      state.themeState = !state.themeState;
    },
  },
});



export const { toggleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer