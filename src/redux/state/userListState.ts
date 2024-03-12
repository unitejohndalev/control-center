// userListState.ts
import { createSlice } from "@reduxjs/toolkit";

// export interface User {
//   id: string;
//   username: string;
//   password: string;
// }

// export interface UserState {
//   userList: User[];
// }

// const initialState: UserState = {
//   userList: [],
// };

const userListSlice = createSlice({
  name: "userList",
  initialState: {
    userList: [],
    isLoading: false,
  },
  reducers: {
    getUserListFetch: (state) => {
      state.isLoading = true;
    },
    getUserListSuccess: (state, action) => {
      state.userList = action.payload;
      state.isLoading = false;
    },
  },
});

export const { getUserListFetch,getUserListSuccess } = userListSlice.actions;
export const userListReducer = userListSlice.reducer;
