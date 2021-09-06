import { getProducts } from '../../api/product';
import { call, takeLatest, takeEvery, put, spawn } from "redux-saga/effects";
import { addItem, removeItem, addToCart, removeFromCart } from "../cart/reducer";
import cartDB from "../../db/cartDB";

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

        if (!action.payload.doNotSave) {
            const id = parseInt(action.payload.id);
            const quantity = action.payload.qty;
            let itemOnDB;
            yield cartDB.items.get(id)
                .then((item) => itemOnDB = item)
                .catch((err) => console.log(err))
            if (itemOnDB) {
                yield cartDB.items.update(id, {qty: itemOnDB.qty + quantity})
            } else {
                yield cartDB.items.add({
                    id,
                    qty: quantity,
                })
            }
        }
    } catch (error) {
        yield displayError(error.message);
    }
}

function* onRemoveFromCart(action) {
    yield put(removeItem(action.payload));
    yield cartDB.items.delete(action.payload);
}

function* listenActions() {
    yield takeEvery(addToCart, onAddToCart);
    yield takeLatest(removeFromCart, onRemoveFromCart);
}
  
function* cartSaga() {
    yield spawn(listenActions);
}

export default cartSaga;