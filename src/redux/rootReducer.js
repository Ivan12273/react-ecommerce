import { combineReducers } from '@reduxjs/toolkit';

import cartReducer from "./cart/reducer";
import productReducer from "./product/reducer";

const rootReducer = combineReducers({
    productList: productReducer,
    cart: cartReducer,
});

export default rootReducer;
