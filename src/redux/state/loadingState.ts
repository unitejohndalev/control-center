import { createSlice } from "@reduxjs/toolkit";

type loadingState = {
  isLoading: boolean;
};

const initialState: loadingState = {
  isLoading: true,
};

const loadingState = createSlice({
  name: "loading",
  initialState: initialState,
  reducers: {
    // setUserProfile: (state, action: PayloadAction<User[]>) => {
    //   state.personValue = action.payload;
    // },
    setLoadingFalse: (state) => {
      console.log("Loading state set to false"); // Add this console log
      state.isLoading = false;
    },
  },
});

export const { setLoadingFalse } = loadingState.actions;
export const loadingReducer = loadingState.reducer;
