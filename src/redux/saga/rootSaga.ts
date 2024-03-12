// rootSaga.ts
import { all } from "redux-saga/effects";
import { userListSaga } from "./userListSaga";

export default function* rootSaga() {
  yield all([userListSaga()]);
}
