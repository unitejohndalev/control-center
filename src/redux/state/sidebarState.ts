import { createSlice } from "@reduxjs/toolkit";

//sideBarTExt state
const sideBarTextSlice = createSlice({
  name: "sideBarText",
  initialState: {
    sideBarTextValue: true,
  },
  reducers: {
    setShowSideBarText: (state) => {
      state.sideBarTextValue = !state.sideBarTextValue;
    },
    setShowSideBarTextFalse: (state) => {
      state.sideBarTextValue = false;
    },
  },
});

export const { setShowSideBarText, setShowSideBarTextFalse } =
  sideBarTextSlice.actions;
export const sideBarTextReducer = sideBarTextSlice.reducer;

//otherSideBarText1 state
const otherSideBarTextSlice1 = createSlice({
  name: "otherSideBarText1",
  initialState: {
    otherSideBarTextValue: false,
  },
  reducers: {
    setShowOtherSideBarText1: (state) => {
      state.otherSideBarTextValue = !state.otherSideBarTextValue;
    },
    setShowOtherSideBarText1False: (state) => {
      state.otherSideBarTextValue = false;
    },
  },
});

export const { setShowOtherSideBarText1, setShowOtherSideBarText1False } =
  otherSideBarTextSlice1.actions;
export const otherSideBarText1Reducer = otherSideBarTextSlice1.reducer;

//othersSideBarText2 state

const othersSideBarTextSlice2 = createSlice({
  name: "othersSideBarText2",
  initialState: {
    othersSideBarTextValue: false,
  },
  reducers: {
    setShowOthersSideBarText2: (state) => {
      state.othersSideBarTextValue = !state.othersSideBarTextValue;
    },
    setShowOthersSideBarText2False: (state) => {
      state.othersSideBarTextValue = false;
    },
  },
});

export const { setShowOthersSideBarText2, setShowOthersSideBarText2False } =
  othersSideBarTextSlice2.actions;
export const otherSideBartText2Reducer = othersSideBarTextSlice2.reducer;

//hoverDashBoardText state

const hoverDashBoardTextSlice = createSlice({
  name: "hoverDashBoardText",
  initialState: {
    hoverDashBoardTextValue: false,
  },
  reducers: {
    setShowHoverDashBoardText: (state) => {
      state.hoverDashBoardTextValue = !state.hoverDashBoardTextValue;
    },
    setShowHoverDashBoardTextFalse: (state) => {
      state.hoverDashBoardTextValue = false;
    },
    setShowHoverDashBoardTextTrue: (state) => {
      state.hoverDashBoardTextValue = true;
    },
  },
});

export const {
  setShowHoverDashBoardText,
  setShowHoverDashBoardTextFalse,
  setShowHoverDashBoardTextTrue,
} = hoverDashBoardTextSlice.actions;
export const hoverDashBoardTextReducer = hoverDashBoardTextSlice.reducer;

//hoverUserText state

const hoverUserTextSlice = createSlice({
  name: "hoverUserText",
  initialState: {
    hoverUserTextValue: false,
  },
  reducers: {
    setShowHoverUserText: (state) => {
      state.hoverUserTextValue = !state.hoverUserTextValue;
    },
    setShowHoverUserTextFalse: (state) => {
      state.hoverUserTextValue = false;
    },
    setShowHoverUserTextTrue: (state) => {
      state.hoverUserTextValue = true;
    },
  },
});

export const {
  setShowHoverUserText,
  setShowHoverUserTextFalse,
  setShowHoverUserTextTrue,
} = hoverUserTextSlice.actions;
export const hoverUserTextReducer = hoverUserTextSlice.reducer;

//hoverProjectText state

const hoverProjectTextSlice = createSlice({
  name: "hoverProjectText",
  initialState: {
    hoverProjectTextValue: false,
  },
  reducers: {
    setShowHoverProjectText: (state) => {
      state.hoverProjectTextValue = !state.hoverProjectTextValue;
    },
    setShowHoverProjectTextFalse: (state) => {
      state.hoverProjectTextValue = false;
    },
    setShowHoverProjectTextTrue: (state) => {
      state.hoverProjectTextValue = true;
    },
  },
});

export const {
  setShowHoverProjectText,
  setShowHoverProjectTextTrue,
  setShowHoverProjectTextFalse,
} = hoverProjectTextSlice.actions;
export const hoverProjectTextReducer = hoverProjectTextSlice.reducer;

//hoverRoleText state

const hoverRoleTextSlice = createSlice({
  name: "hoverRoleText",
  initialState: {
    hoverRoleTextValue: false,
  },
  reducers: {
    setShowHoverRoleText: (state) => {
      state.hoverRoleTextValue = !state.hoverRoleTextValue;
    },
    setShowHoverRoleTextFalse: (state) => {
      state.hoverRoleTextValue = false;
    },
    setShowHoverRoleTextTrue: (state) => {
      state.hoverRoleTextValue = true;
    },
  },
});

export const { setShowHoverRoleText,setShowHoverRoleTextTrue, setShowHoverRoleTextFalse } =
  hoverRoleTextSlice.actions;
export const hoverRoleTextReducer = hoverRoleTextSlice.reducer;

//hoverOthersText state

const hoverOthersTextSlice = createSlice({
  name: "hoverOthersText",
  initialState: {
    hoverOthersTextValue: false,
  },
  reducers: {
    setShowHoverOthersText: (state) => {
      state.hoverOthersTextValue = !state.hoverOthersTextValue;
    },
    setShowHoverOthersTextFalse: (state) => {
      state.hoverOthersTextValue = false;
    },
    setShowHoverOthersTextTrue: (state) => {
      state.hoverOthersTextValue = true;
    },
  },
});

export const { setShowHoverOthersText,setShowHoverOthersTextTrue, setShowHoverOthersTextFalse } =
  hoverOthersTextSlice.actions;
export const hoverOthersTextReducer = hoverOthersTextSlice.reducer;
