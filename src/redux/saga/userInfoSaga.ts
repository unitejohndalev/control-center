// userInfoSaga.ts
import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { getUserInfoSuccess } from "../state/userInfoState";
import { PayloadAction } from "@reduxjs/toolkit";

// Fetch User Info
function* fetchUserInfo(action: PayloadAction<number>): any {
  const empId = action.payload; // Extract empId from action payload
  try {
    const userInfo = yield call(() => {
      return axios
        .get(`http://localhost:8080/user/info/${empId}`)
        .then((res) => res.data);
    });
    yield put(getUserInfoSuccess(userInfo));
  } catch (error) {
    console.error("Error fetching user info:", error);
  }
}

export function* userInfoSaga() {
  yield takeEvery("userInfo/getUserInfoFetch", fetchUserInfo);
}
