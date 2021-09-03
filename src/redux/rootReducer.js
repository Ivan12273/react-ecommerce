import { combineReducers } from '@reduxjs/toolkit';

import cartReducer from "./cart/reducer";
import productReducer from "./product/reducer";
import authReducer from "./auth/reducer";

const rootReducer = combineReducers({
    productList: productReducer,
    cart: cartReducer,
    auth: authReducer,
});

export default rootReducer;
