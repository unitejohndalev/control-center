// rootSaga.ts
import { all } from "redux-saga/effects";
import { userListSaga } from "./userListSaga";
import { loginSaga } from "./loginSaga";

export default function* rootSaga() {
  yield all([userListSaga(), loginSaga()]);
}
