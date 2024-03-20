import { InputReducer } from "../state/loginState";
import userReducer from "../state/userState";

import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "../saga/rootSaga";
import {
  addUserHoverReducer,
  showMoreReducer,
  topBarReducer,
  userListReducer,
} from "../state/userListState";
import { navbarDropDownReducer, themeReducer } from "../state/navBarState";
import { loadingReducer } from "../state/loadingState";
import sessionReducer from "../state/sessionState";
import { searchOptionsReducer } from "../state/userListState";

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    //navbar state
    themeReducer: themeReducer,
    navbarDropDownReducer : navbarDropDownReducer,

    //user data for log in
    userReducer: userReducer,

    //user authentication
    sessionReducer: sessionReducer,

    //user input state
    inputReducer: InputReducer,

    //userList state
    userListReducer: userListReducer,

    //showTopBar state
    topBarReducer: topBarReducer,

    //searchOption state
    searchOptionsReducer: searchOptionsReducer,

    //addUserHover state
    addUserHoverReducer: addUserHoverReducer,

    //showMore state
    showMoreReducer: showMoreReducer,

    //loading state
    loadingReducer: loadingReducer,

    // add more reducers here
  },
  middleware: [saga],
});

saga.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export default store;
