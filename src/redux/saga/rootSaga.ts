import { all } from "redux-saga/effects";
import { fetchUserList } from "./userListSaga";

export default function* rootSaga()
{
  yield all([fetchUserList()]);
}
