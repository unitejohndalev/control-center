//userView state

import { createSlice, createAction } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userView",
  initialState: {
    userView: [],
    isLoading: false,
    userInfoValue: false,
  },
  reducers: {
    getUserInfoFetch: (state) => {
      state.isLoading = true;
    },
    getUserInfoSuccess: (state, action) => {
      state.userView = action.payload;
      state.isLoading = false;
    },
    setUserInfo: (state, action) => {
      state.userInfoValue = !action.payload;
    },
    setUserViewFalse: (state) => {
      state.userInfoValue = false;
    },
  },
});
export const {
  setUserInfo,
  setUserViewFalse,
  getUserInfoSuccess,
} = userInfoSlice.actions;

export const userInfoReducer = userInfoSlice.reducer;
export const getUserInfoFetch = createAction<number>(
  "userInfo/getUserInfoFetch"
);
