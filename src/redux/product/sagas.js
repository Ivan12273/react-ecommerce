import { getProducts } from '../../api/product';
import { call, takeLatest, put, spawn } from "redux-saga/effects";
import { listRequest, listSuccess, listFail, listProducts } from "../product/reducer";

function* onListProducts () {
    try {
        yield put(listRequest());
        const data = yield call(getProducts);
        yield put(listSuccess(data));
    } catch (error) {
        yield put(listFail(error.message));
    }
}

function* listenActions() {
    yield takeLatest(listProducts, onListProducts);
}
  
function* productSaga() {
    yield spawn(listenActions);
}

export default productSaga;
