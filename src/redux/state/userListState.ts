import { createSlice } from "@reduxjs/toolkit";

export interface UserList {
  id: string,
  username:string,
  password:string
}

export interface UserState {
  userListValue: UserList[]
}
const userInitialState : UserState = {
    userListValue:[]
}

const userListSlice = createSlice({
  name: "userList",
  initialState: userInitialState,
  reducers: {
    getUserListSuccess: (state, action) => {
      state.userListValue = action.payload;
      
    },
  },
});

export const { getUserListSuccess } = userListSlice.actions
export const userListReducer = userListSlice.reducer
