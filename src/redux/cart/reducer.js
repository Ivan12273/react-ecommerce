import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    cartItems: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const item = action.payload;
            const product = state.cartItems.find(x => x.item_id === item.item_id);
            if (product) {
                state.cartItems = state.cartItems.map(x => x.item_id === product.item_id ? item : x) 
            } else {
                state.cartItems = [...state.cartItems, item] 
            }
        },
        removeItem(state, action) {
            state.cartItems = state.cartItems.filter(x => x.item_id !== action.payload);
        },
    }
});

export const { addItem, removeItem } = cartSlice.actions;

export const addToCart = (productId, qty) => async (dispatch) => {
    try {
        const { data } = await axios.get('/api/store/collections');
        const product = data.data.find(x => x.item_id === productId);

        dispatch(addItem({
            col_id: product.col_id,
            title: product.title,
            item_id: product.item_id,
            name: product.name,
            price: product.price,
            imageUrl: product.imageUrl,
            qty,
        }));
    } catch (error) {

    }
}

export const removeFromCart = (id) => (dispatch) => {
    dispatch(removeItem(id));
}

export default cartSlice.reducer;
