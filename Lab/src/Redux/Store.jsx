import { configureStore } from "@reduxjs/toolkit";
import Count_slice from "./Slices/Counter_slice";
import { api_slice } from "./Slices/api_slice";
import cart_slice from "./Slices/cart_slice";

export const Store = configureStore({
    reducer:{
        counter: Count_slice,
        cart: cart_slice,
        [api_slice.reducerPath]: api_slice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api_slice.middleware)
});
// side effects
// store: chứa toàn bộ dữ liệu của ứng dụng
