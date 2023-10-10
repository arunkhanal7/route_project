import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../src/routes/cartSlice"

export default configureStore({
    reducer: {
        cart:cartReducer,
    },
})