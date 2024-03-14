import { InputReducer } from "../state/loginState";
import userReducer from "../state/userState";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "../saga/rootSaga";
import { userListReducer } from "../state/userListState";
import { themeReducer } from "../state/navState";
import { loadingReducer } from "../state/loadingState";
import sessionReducer from "../state/sessionState";

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    //navbar
    themeReducer: themeReducer,
    userReducer: userReducer,
    sessionReducer: sessionReducer,
    inputReducer: InputReducer,
    userListReducer: userListReducer,
    loadingReducer: loadingReducer,

    // add more reducers here
  },
  middleware: [saga],
});

saga.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export default store;
