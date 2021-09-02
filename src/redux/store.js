import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

export const store = configureStore({
    devTools: true,
    reducer: rootReducer,
    middleware: [thunk],
});

export default store;
