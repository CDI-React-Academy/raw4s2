import { call, put, takeLatest } from "redux-saga/effects";
import { ACTION_TYPES } from "./actions";

const Api = {
  fetchUser: name => {
    console.log("Api Fetch User", name);

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          name
        });
      }, 3000);
    });
    return promise;
  }
};

function* fetchUserSaga(action) {
  try {
    console.log("fetchUserSaga", action);

    const user = yield call(Api.fetchUser, action.payload);
    yield put({ type: ACTION_TYPES.LOGIN_SUCCESS, payload: user });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

export default function* rootSaga() {
  yield takeLatest(ACTION_TYPES.LOGIN, fetchUserSaga);
}
