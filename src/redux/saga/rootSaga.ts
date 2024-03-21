// rootSaga.ts
import { all } from "redux-saga/effects";
import { userListSaga } from "./userListSaga";
// import { loginSaga } from "./loginSaga";
import userSaga, {
  userPrincipalSaga,
  userSagaAdd,
  userSagaDelete,
  userSagaDeleteBatch,
  userSagaFetchUserRoles,
  userSagaPass,
  userSagaUpdate,
  userSagaFetchUserInfo,
} from "./userSaga";
import { sessionSaga } from "./sessionSaga";
import { userInfoSaga } from "./userInfoSaga";

export default function* rootSaga() {
  yield all([
    userListSaga(),
    // loginSaga(),
    userSagaFetchUserInfo(),
    userSagaFetchUserRoles(),
    userSagaAdd(),
    userSagaUpdate(),
    userSagaDeleteBatch(),
    userSagaDelete(),
    userSagaPass(),
    userPrincipalSaga(),

    sessionSaga(),

    userInfoSaga(),
    // userSagaFetchUserInfo()
  ]);
}
