import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

import createSagaMiddleware from "redux-saga";

import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    devTools: true,
    reducer: rootReducer,
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
