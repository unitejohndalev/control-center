import { InputReducer } from "../state/loginState";
import userReducer from "../state/userState";

import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "../saga/rootSaga";
import {
  addUserHoverReducer,
  businessIconReducer,
  departmentIconReducer,
  nameIconReducer,
  positionIconReducer,
  showBusinessInputReducer,
  showDepartmentInputReducer,
  showMoreReducer,
  showNameInputReducer,
  showPositionInputReducer,
  showSearchUserInputReducer,
  topBarReducer,
  userListReducer,
} from "../state/userListState";
import { navbarDropDownReducer, themeReducer } from "../state/navBarState";
import { loadingReducer } from "../state/loadingState";
import sessionReducer from "../state/sessionState";
import { searchOptionsReducer } from "../state/userListState";
import {
  hoverDashBoardTextReducer,
  hoverOthersTextReducer,
  hoverProjectTextReducer,
  hoverRoleTextReducer,
  hoverUserTextReducer,
  otherSideBarText1Reducer,
  otherSideBartText2Reducer,
  sideBarTextReducer,
} from "../state/sidebarState";
import { userInfoReducer } from "../state/userInfoState";

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    //navbar state
    themeReducer: themeReducer,
    navbarDropDownReducer: navbarDropDownReducer,
    topBarReducer: topBarReducer,

    //user data for log in
    userReducer: userReducer,
    sessionReducer: sessionReducer,
    inputReducer: InputReducer,

    //userList states
    userListReducer: userListReducer,
    searchOptionsReducer: searchOptionsReducer,
    addUserHoverReducer: addUserHoverReducer,
    showMoreReducer: showMoreReducer,

    //userList SearchBar states
    showSearchUserInputReducer: showSearchUserInputReducer,
    nameIconReducer: nameIconReducer,
    showNameInputReducer: showNameInputReducer,
    positionIconReducer: positionIconReducer,
    showPositionInputReducer: showPositionInputReducer,
    businessIconReducer: businessIconReducer,
    showBusinessInputReducer:showBusinessInputReducer,
    departmentIconReducer: departmentIconReducer,
    showDepartmentInputReducer:showDepartmentInputReducer,

    //sidebar state
    sideBarTextReducer: sideBarTextReducer,
    otherSideBarText1Reducer: otherSideBarText1Reducer,
    otherSideBartText2Reducer: otherSideBartText2Reducer,
    hoverDashBoardTextReducer: hoverDashBoardTextReducer,
    hoverUserTextReducer: hoverUserTextReducer,
    hoverProjectTextReducer: hoverProjectTextReducer,
    hoverRoleTextReducer: hoverRoleTextReducer,
    hoverOthersTextReducer: hoverOthersTextReducer,

    //loading state
    loadingReducer: loadingReducer,

    userInfoReducer: userInfoReducer,

    // add more reducers here
  },
  middleware: [saga],
});

saga.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export default store;
