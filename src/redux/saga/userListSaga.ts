import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { getRolesSuccess } from "../state/loginState";


// GET ALL
function* fetchRoles(): any {
	const devPhase = yield call(() =>
    axios.get("http://localhost:3000/profile").then((res) => res.data)
  );
	yield put(getRolesSuccess(devPhase));
}

export function* roleSaga() {
	yield takeEvery("roles/getRolesFetch", fetchRoles);
}

