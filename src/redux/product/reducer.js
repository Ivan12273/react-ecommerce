import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: true,
    products: [],
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

export const { listRequest, listSuccess, listFail } = productSlice.actions;
export const listProducts = () => async (dispatch) => {
    try {
        dispatch(listRequest());
        const { data } = await axios.get('/api/store/collections');
        dispatch(listSuccess(data.data));
    } catch (error) {
        dispatch(listFail(error.message));
    }
}

export default productSlice.reducer;
