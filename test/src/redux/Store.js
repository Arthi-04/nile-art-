import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterSlice"
import CartSlice from "./CartSlice"

export const Store = configureStore({
    reducer : {
        flowers:CounterReducer,
        cart:CartSlice
    },
})

