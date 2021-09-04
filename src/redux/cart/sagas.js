import { getProducts } from '../../api/product';
import { call, takeLatest, put, spawn } from "redux-saga/effects";
import { addItem, removeItem, addToCart, removeFromCart } from "../cart/reducer";

function* displayError(msg) {
    yield call(console.error, msg);
}

function* onAddToCart (action) {
    try {
        const data = yield call(getProducts);
        const product = yield data.find(x => x.item_id == action.payload.id);
        const qty = yield action.payload.qty;

        yield put(addItem({
            col_id: product.col_id,
            title: product.title,
            item_id: product.item_id,
            name: product.name,
            price: product.price,
            imageUrl: product.imageUrl,
            qty,
        }));
    } catch (error) {
        yield displayError(error.message);
    }
}

function* onRemoveFromCart(action) {
    yield put(removeItem(action.payload));
}

function* listenActions() {
    yield takeLatest(addToCart, onAddToCart);
    yield takeLatest(removeFromCart, onRemoveFromCart);
}
  
function* cartSaga() {
    yield spawn(listenActions);
}

export default cartSaga;