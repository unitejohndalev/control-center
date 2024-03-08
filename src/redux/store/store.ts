import { configureStore } from "@reduxjs/toolkit";
import { userReducer, InputReducer } from "../state/loginState";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { userListReducer } from "../state/userListState";
import rootSaga from "../saga/rootSaga";
import createSagaMiddleware from "redux-saga";

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    user: userReducer,
    userInput: InputReducer,
    userList: userListReducer,
  },
  middleware:[saga],
});

saga.run(rootSaga);
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
