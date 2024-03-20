// userListState.ts
import { createSlice } from "@reduxjs/toolkit";

//userList Slice
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
export const { getUserListFetch, getUserListSuccess } = userListSlice.actions;
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
