import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: number;
  username: string;
  password: string;
}

export interface UserState {
  personValue: User[];
}

export interface UserInput {
  username: string;
  password: string;
}

const userInitialState: UserState = {
  personValue: [
    {
      id: 1,
      username: "junite", // Example name
      password: "tsukiden+", // Example password
    },
  ],
};

const UserSlice = createSlice({
  name: "person",
  initialState: userInitialState,
  reducers: {
    // showPerson: (state) => {
    //   return state.personValue;
    // },
  },
});

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

// export const { showPerson } = UserSlice.actions;
export const userReducer = UserSlice.reducer;

export const { setUserField } = InputSlice.actions;
export const InputReducer = InputSlice.reducer;
