
import { userReducer, InputReducer } from "../state/loginState";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "../saga/rootSaga";
import { userListReducer } from "../state/userListState";


const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    userReducer: userReducer,
    inputReducer: InputReducer,
    userListReducer: userListReducer,

    // add more reducers here
  },
  middleware: [saga],
});

saga.run(rootSaga);





export type RootState = ReturnType<typeof store.getState>;
export default store;
