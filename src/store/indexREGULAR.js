import { configureStore } from "@reduxjs/toolkit";
import cardSelection from "./cardSelection";
import memsWorker from "./memsWorker";
import todoWorker from "./todoWorker";

const store = configureStore({
    reducer: {
        cardSelection: cardSelection,
        memsWorker: memsWorker,
        todoWorker: todoWorker
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
})
export default store;