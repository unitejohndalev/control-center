import createSagaMiddleware from "redux-saga";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootSaga from "../saga/rootSaga";
import { userReducer } from "../state/loginState";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    userReducer: userReducer,
    // add more reducers here
  },
  middleware: getDefaultMiddleware({
    thunk: true,
    serializableCheck: false,
  }),
});

saga.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export default store;
