// userListState.ts
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

//userList Slice
const userListSlice = createSlice({
  name: "userList",
  initialState: {
    userList: [],
    isLoading: false,
    userInfo: {
      emp_id: "",
      username: "",
      password: "",
      confirm_password: "",
      current_password: "",
      new_password: "",
      confirm_new_password: "",
      fname: "",
      mname: "",
      lname: "",
      position_name: "",
      email: "",
      title: "",
      section_name: "",
      dept_name: "",
      position_id: 0,
      dept_id: 0,
      section_id: 0,
      status_code: "",
      img_src: "",
    },
  },
  reducers: {
    getUserListFetch: (state) => {
      state.isLoading = true;
    },
    getUserListSuccess: (state, action) => {
      state.userList = action.payload;
      state.isLoading = false;
    },
    setUserField: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});
export const { getUserListFetch, getUserListSuccess, setUserField } =
  userListSlice.actions;
export const userListReducer = userListSlice.reducer;

//showTopBar Slice
const topBarSlice = createSlice({
  name: "showTopBar",
  initialState: {
    showTopBarValue: true,
  },
  reducers: {
    setShowTopBar: (state) => {
      state.showTopBarValue = !state.showTopBarValue;
    },
  },
});

export const { setShowTopBar } = topBarSlice.actions;
export const topBarReducer = topBarSlice.reducer;

//searchOptions Slice
const searchOptionsSlice = createSlice({
  name: "searchOptions",
  initialState: {
    searchOptionsValue: false,
  },
  reducers: {
    setSearchOptions: (state) => {
      state.searchOptionsValue = !state.searchOptionsValue;
    },
    setSearchOptionsFalse: (state) => {
      state.searchOptionsValue = false;
    },
  },
});

export const { setSearchOptions, setSearchOptionsFalse } = searchOptionsSlice.actions;
export const searchOptionsReducer = searchOptionsSlice.reducer;

//addUserHover Slice
const addUserHoverSlice = createSlice({
  name: "addUserHover",
  initialState: {
    addUserHoverValue: false,
  },
  reducers: {
    setAddUserHover: (state) => {
      state.addUserHoverValue = !state.addUserHoverValue;
    },
  },
});

export const { setAddUserHover } = addUserHoverSlice.actions;
export const addUserHoverReducer = addUserHoverSlice.reducer;

//showMore Slice
const showMoreSlice = createSlice({
  name: "showMore",
  initialState: {
    showMoreValue: false,
  },
  reducers: {
    setShowMore: (state) => {
      state.showMoreValue = !state.showMoreValue;
    },
    setShowMoreFalse: (state) => {
      state.showMoreValue = false;
    },
  },
});

export const { setShowMore, setShowMoreFalse } = showMoreSlice.actions;
export const showMoreReducer = showMoreSlice.reducer;

//showSearchUserInput Slice
const showSearchUserInputSlice = createSlice({
name: "showSearchUserInput",
initialState: {
  showSearchUserInputValue:true,
},
reducers: {
  setShowSearchUserInputToggle: (state) => {
    state.showSearchUserInputValue =!state.showSearchUserInputValue;
  },
  setShowSearchUserInputFalse: (state) => {
    state.showSearchUserInputValue = false;
  },
  setShowSearchUserInputTrue: (state) => { 
    state.showSearchUserInputValue = true
  }
}
})

export const {
  setShowSearchUserInputToggle,
  setShowSearchUserInputFalse,
  setShowSearchUserInputTrue,
} = showSearchUserInputSlice.actions;
export const showSearchUserInputReducer = showSearchUserInputSlice.reducer

//nameIcon Slice
const nameIconSlice = createSlice({
  name: "nameIcon",
  initialState: {
    nameIconValue: false,
  },
  reducers: {
    setNameIconToggle: (state) => {
      state.nameIconValue = !state.nameIconValue;
    },
    setNameIconFalse: (state) => {
      state.nameIconValue = false;
    },
    setNameIconTrue: (state) => {
      state.nameIconValue = true;
    },
  },
});

export const { setNameIconToggle, setNameIconFalse, setNameIconTrue } =
  nameIconSlice.actions;
export const nameIconReducer = nameIconSlice.reducer;

//showNameInput Slice
const showNameInputSlice = createSlice({
  name: "showNameInput",
  initialState: {
    showNameInputValue: false,
  },
  reducers: {
    setShowNameInputToggle: (state) => {
      state.showNameInputValue =!state.showNameInputValue;
    },
    setShowNameInputFalse: (state) => {
      state.showNameInputValue = false;
    },
    setShowNameInputTrue: (state) => {
      state.showNameInputValue = true;
    },
  },
});

export const { setShowNameInputToggle, setShowNameInputFalse, setShowNameInputTrue } =
  showNameInputSlice.actions;
export const showNameInputReducer = showNameInputSlice.reducer

//positionIcon Slice
const positionIconSlice = createSlice({
  name: "positionIcon",
  initialState: {
    positionIconValue: false,
  },
  reducers: {
    setPositionIconToggle: (state) => {
      state.positionIconValue = !state.positionIconValue;
    },
    setPositionIconFalse: (state) => {
      state.positionIconValue = false;
    },
    setPositionIconTrue: (state) => {
      state.positionIconValue = true;
    },
  },
});

export const { setPositionIconToggle, setPositionIconFalse, setPositionIconTrue } =
  positionIconSlice.actions;
export const positionIconReducer = positionIconSlice.reducer;

//showPositionInput Slice

const showPositionInputSlice = createSlice({
  name: "showPositionInput",
  initialState: {
    showPositionInputValue: false,
  },
  reducers: {
    setShowPositionInputToggle: (state) => {
      state.showPositionInputValue =!state.showPositionInputValue;
    },
    setShowPositionInputFalse: (state) => {
      state.showPositionInputValue = false;
    },
    setShowPositionInputTrue: (state) => {
      state.showPositionInputValue = true;
    },
  },
});

export const {
  setShowPositionInputToggle,
  setShowPositionInputFalse,
  setShowPositionInputTrue,
} = showPositionInputSlice.actions;
export const showPositionInputReducer = showPositionInputSlice.reducer

//businessIcon Slice
const businessIconSlice = createSlice({
  name: "businessIcon",
  initialState: {
    businessIconValue: false,
  },
  reducers: {
    setBusinessIconToggle: (state) => {
      state.businessIconValue = !state.businessIconValue;
    },
    setBusinessIconFalse: (state) => {
      state.businessIconValue = false;
    },
    setBusinessIconTrue: (state) => {
      state.businessIconValue = true;
    },
  },
});

export const { setBusinessIconToggle, setBusinessIconFalse, setBusinessIconTrue } =
  businessIconSlice.actions;
export const businessIconReducer = businessIconSlice.reducer;

//showBusinessInput Slice
const showBusinessInputSlice = createSlice({
  name: "showBusinessInput",
  initialState: {
    showBusinessInputValue: false,
  },
  reducers: {
    setShowBusinessInputToggle: (state) => {
      state.showBusinessInputValue =!state.showBusinessInputValue;
    },
    setShowBusinessInputFalse: (state) => {
      state.showBusinessInputValue = false;
    },
    setShowBusinessInputTrue: (state) => {
      state.showBusinessInputValue = true;
    },
  },
});

export const {
  setShowBusinessInputToggle,
  setShowBusinessInputFalse,
  setShowBusinessInputTrue,
} = showBusinessInputSlice.actions;
export const showBusinessInputReducer = showBusinessInputSlice.reducer;

//departmentIcon Slice
const departmentIconSlice = createSlice({
  name: "departmentIcon",
  initialState: {
    departmentIconValue: false,
  },
  reducers: {
    setDepartmentIconToggle: (state) => {
      state.departmentIconValue = !state.departmentIconValue;
    },
    setDepartmentIconFalse: (state) => {
      state.departmentIconValue = false;
    },
    setDepartmentIconTrue: (state) => {
      state.departmentIconValue = true;
    },
  },
});

export const {
  setDepartmentIconToggle,
  setDepartmentIconFalse,
  setDepartmentIconTrue,
} = departmentIconSlice.actions;
export const departmentIconReducer = departmentIconSlice.reducer;

//showDepartmentInput Slice
const showDepartmentInputSlice = createSlice({
  name: "showDepartmentInput",
  initialState: {
    showDepartmentInputValue: false,
  },
  reducers: {
    setShowDepartmentInputToggle: (state) => {
      state.showDepartmentInputValue =!state.showDepartmentInputValue;
    },
    setShowDepartmentInputFalse: (state) => {
      state.showDepartmentInputValue = false;
    },
    setShowDepartmentInputTrue: (state) => {
      state.showDepartmentInputValue = true;
    },
  },
});

export const {
  setShowDepartmentInputToggle,
  setShowDepartmentInputFalse,
  setShowDepartmentInputTrue,
} = showDepartmentInputSlice.actions;
export const showDepartmentInputReducer = showDepartmentInputSlice.reducer;



