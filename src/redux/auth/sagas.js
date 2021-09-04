import { removeToken, setToken } from './reducer';
import { takeLatest, spawn } from 'redux-saga/effects'

function* onSetToken(action) {
  console.log(action)
  yield window.localStorage.setItem("token", action.payload);
}

function* onRemoveToken() {
  yield window.localStorage.removeItem("token");
}

function* listenActions() {
  yield takeLatest(setToken, onSetToken);
  yield takeLatest(removeToken, onRemoveToken);
}

function* initSaga() {
  yield spawn(listenActions);
}

export default initSaga;
