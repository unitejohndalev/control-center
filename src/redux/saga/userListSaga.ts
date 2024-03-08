import { call, put, takeEvery } from "redux-saga/effects";
import { getUserListSuccess } from "../state/userListState";
import axios from "axios";

// GET ALL
export function* fetchUserList(): any {
  const client = yield call(() =>
    axios.get("http://localhost:3000/profile").then((res) => res.data)
  );
  yield put(getUserListSuccess(client));
}


