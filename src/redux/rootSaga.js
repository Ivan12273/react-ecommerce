import { spawn } from "redux-saga/effects";

import authSaga from "./auth/sagas";

export default function* root() {
  yield spawn(authSaga);
}