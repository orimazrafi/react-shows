
import {
    configureStore,
} from "@reduxjs/toolkit";
import showsReducers from "../features/shows/showsSlice";
import thunk from "redux-thunk";
const store = configureStore({
    reducer: {
        shows: showsReducers
    },
    middleware: [thunk]
})
export default store
export type AppDispatch = typeof store.dispatch