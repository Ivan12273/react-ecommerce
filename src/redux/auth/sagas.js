import { login } from '../../api/auth';
import { removeToken, setToken } from './reducer';
import { call, put, takeLatest, spawn } from 'redux-saga/effects'

function* displayError(message) {
  yield call(console.error, message);
}

function* onLogin(action) {
  const result = yield call(login, action.payload);
  const { success, data, message } = result;
  if (success) {
    yield put(setToken(data.token));
    yield window.localStorage.setItem("token", data.token);
    yield call(Window.nav.push, "/dashboard");
  } else {
    yield call(displayError, message);
  }
}

function* onSignOut() {
  yield window.localStorage.removeItem("token");
  yield call(Window.nav.push, "/");
}

function* listenActions() {
  yield takeLatest(setToken, onLogin);
  yield takeLatest(removeToken, onSignOut);
}

function* initSaga() {
  yield spawn(listenActions);
}

export default initSaga;
