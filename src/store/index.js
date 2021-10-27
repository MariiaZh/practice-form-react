import { configureStore } from "@reduxjs/toolkit";
import cardSelection from "./cardSelection";
import memsWorker from "./memsWorker";
import todoWorker from "./todoWorker";
import userAuth from "./userAuth";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { combineReducers } from "redux";

const reducers = combineReducers({
    cardSelection,
    memsWorker,
    todoWorker,
    userAuth,
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
});

export default store;