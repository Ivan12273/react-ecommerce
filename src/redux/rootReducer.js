import { combineReducers } from '@reduxjs/toolkit';

import { cartReducer } from "./cart/cartReducer";
import productReducer from "./product/reducer";

const rootReducer = combineReducers({
    productList: productReducer,
    cart: cartReducer,
});

export default rootReducer;
