import { createAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../types/Product';

const initialState = {
    cartItems: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state: { cartItems: Product[]}, action: { payload: Product }) {
            const item: Product = action.payload;
            const product: Product = state.cartItems.find((x: Product) => x?.item_id === item?.item_id);
            if (product) {
                state.cartItems = state.cartItems.map((x: Product) => x?.item_id === product?.item_id ? {...product, qty: product?.qty + item!.qty} : x) 
            } else {
                state.cartItems = [...state.cartItems, item] 
            }
        },
        removeItem(state, action) {
            state.cartItems = state.cartItems.filter((x: Product) => x?.item_id !== action.payload);
        },
        removeAll(state) {
            state.cartItems = [];
        }
    }
});

export const addToCart = createAction<{ id: string | number; qty?: number; doNotSave?: boolean; }>("cart/addToCart");
export const removeFromCart = createAction<string | number>("cart/removeFromCart");

export default cartSlice.reducer;
export const { addItem, removeItem, removeAll } = cartSlice.actions;
