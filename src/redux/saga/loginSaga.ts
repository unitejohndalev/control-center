// userListSaga.ts
import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { getUserSuccess } from "../state/loginState";

// Fetch User List
function* fetchUser(): any {
  try {
    const userValue = yield call(() =>
      axios.get("http://localhost:8081/profile").then((res) => res.data)
    );
    yield put(getUserSuccess(userValue));
  } catch (error) {
    // Handle error if needed
    console.error("Error fetching user list:", error);
  }
}

export function* loginSaga() {
  yield takeEvery("userValue/getUserFetch", fetchUser);
}


