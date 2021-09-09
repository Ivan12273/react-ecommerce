import { createAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: true,
    products: [],
    error: false,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        listRequest(state, action) {
            state.loading = true;
        },
        listSuccess(state, action) {
            state.loading = false;
            state.products = action.payload;
        },
        listFail(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    }
});

export const listProducts = createAction("product/listProducts");

export default productSlice.reducer;
export const { listRequest, listSuccess, listFail } = productSlice.actions;
