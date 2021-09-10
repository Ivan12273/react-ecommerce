import { getProducts } from '../../api/product';
import { call, takeLatest, takeEvery, put, spawn } from "redux-saga/effects";
import { addItem, removeItem, addToCart, removeFromCart, removeAll } from "./reducer";
import cartDB from "../../db/cartDB";
import { Product } from '../../types/Product';

function* displayError(msg: string) {
    yield call(console.error, msg);
}

function* onAddToCart (action: { payload: { id: string | number; qty?: number; doNotSave?: boolean; }; }): any {
    try {
        const data = yield call(getProducts);
        const product = yield data.find((x: { item_id: string; }) => x.item_id == action.payload.id);
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
            const id = action.payload.id.toString();
            const quantity = action.payload.qty || 0;
            let itemOnDB: Product;
            yield cartDB.table('items').get(id)
                .then((item) => itemOnDB = item)
                .catch((err) => console.error(err))
            if (itemOnDB) {
                console.log(itemOnDB);
                yield cartDB.table('items').update(id, {qty: itemOnDB.qty + quantity})
            } else {
                yield cartDB.table('items').add({
                    id,
                    qty: quantity,
                })
            }
        }
    } catch (error: any) {
        yield displayError(error.message);
    }
}

function* onRemoveFromCart(action: { payload: string | number }) {
    yield put(removeItem(action.payload));
    yield cartDB.table('items').delete(action.payload.toString());
}

function* onRemoveAll() {
    yield cartDB.table('items').clear();
    yield window.location.assign("/payment-confirmation");
}

function* listenActions() {
    yield takeEvery(addToCart, onAddToCart);
    yield takeLatest(removeFromCart, onRemoveFromCart);
    yield takeLatest(removeAll, onRemoveAll);
}
  
function* cartSaga() {
    yield spawn(listenActions);
}

export default cartSaga;