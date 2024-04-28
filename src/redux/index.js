import {combineSlices, configureStore} from "@reduxjs/toolkit";
import {cartSlice} from "@/redux/ui/cart";

export const store = configureStore({
    reducer: combineSlices(
        cartSlice,
    )
})