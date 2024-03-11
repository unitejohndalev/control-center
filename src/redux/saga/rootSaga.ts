import { all } from "redux-saga/effects";
import { roleSaga } from "./userListSaga";


export default function* rootSaga()
{
  yield all([
    roleSaga()
  ]);
}
