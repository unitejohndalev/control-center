import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState, UserInput } from "../../types/Types";

// const userInitialState: UserState = {
//   personValue: [
//     {
//       id: 1,
//       username: "junite",
//       password: "tsukiden+",
//     },
//   ],
// };

// const UserValueSlice = createSlice({
//   name: "userValue",
//   initialState: {
//     userValue:[],
//     isLoading: false,
//   },
//   reducers: {
//     getUserFetch: (state) => {
//       state.isLoading = true;
//     },
//     getUserSuccess: (state, action) => {
//       state.userValue = action.payload;
//       state.isLoading = false;
//     },
//   }
// });

// export const { getUserFetch, getUserSuccess } = UserValueSlice.actions
// export const userReducer = UserValueSlice.reducer;

const inputInitialState: UserInput = {
  username: "",
  password: "",
};

const InputSlice = createSlice({
  name: "userInput",
  initialState: inputInitialState,
  reducers: {
    setUserField: (state, action: PayloadAction<Partial<UserInput>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUserField } = InputSlice.actions;
export const InputReducer = InputSlice.reducer;
