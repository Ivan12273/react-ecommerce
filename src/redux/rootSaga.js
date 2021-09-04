import { spawn } from "redux-saga/effects";

import authSaga from "./auth/sagas";
import productSaga from "./product/sagas";

export default function* root() {
  yield spawn(authSaga);
  yield spawn(productSaga);
}
