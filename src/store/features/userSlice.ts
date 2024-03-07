import { createSlice } from "@reduxjs/toolkit";

export interface User {
  id: number;
  name: string;
  password: string;
}

export interface UserState {
  users: User[];
}

export interface UserInput {
  username: string;
  password: string;
}


export const UserSlice = createSlice({
  name: "person",
  initialState: {
    personValue: [
      {
        name: "junite", // Example name
        password: "tsukiden+", // Example password
      },
    ],
  },
  reducers: {
    showPerson: (state) => {
        state.personValue
    }
  },
});

// export const InputSlice = createSlice({
//     name:"userInput",
//     initialState: {
//         personInput:[

//             username: "",
//             password: ""
        
//     ]
//     }
// })

export const { showPerson } = UserSlice.actions;
export default UserSlice.reducer;
