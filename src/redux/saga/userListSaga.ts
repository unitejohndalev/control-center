// userListSaga.ts
import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { getUserListSuccess } from "../state/userListState";

// Fetch User List
function* fetchUserList(): any {
  try {
    const userList = yield call(() =>
      axios.get("http://localhost:8080/user/user-table").then((res) => res.data)
    );
    yield put(getUserListSuccess(userList));
  } catch (error) {
    // Handle error if needed
    console.error("Error fetching user list:", error);
  }
}

export function* userListSaga() {
  yield takeEvery("userList/getUserListFetch", fetchUserList);
}
