import {configureStore} from "@reduxjs/toolkit";
import productSlice from "./slise/ProductSlice.js";
import singleProductSlice from "./slise/singleProductSlice.js";
import cartSlice from "./slise/cartSlice.js";
import likeProductsSlice from "./slise/likeProductsSlice.js";
import userSlice from "./slise/userSlice.js";

const store = configureStore({
    reducer: {
        products: productSlice,
        singleProduct: singleProductSlice,
        cart: cartSlice,
        likeProduct: likeProductsSlice,
        user: userSlice,
    },
})

export default store;