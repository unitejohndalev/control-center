import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState, UserInput } from "../../types/Types";

const userInitialState: UserState = {
  personValue: [
    {
      id: 1,
      username: "junite",
      password: "tsukiden+",
    },
  ],
};

const UserSlice = createSlice({
  name: "person",
  initialState: userInitialState,
  reducers: {
    // setUserProfile: (state, action: PayloadAction<User[]>) => {
    //   state.personValue = action.payload;
    // },
    getRolesSuccess: (state, action) => {
      state.personValue = action.payload;
   
    },
  },
});

export const { getRolesSuccess } = UserSlice.actions
export const userReducer = UserSlice.reducer;

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
