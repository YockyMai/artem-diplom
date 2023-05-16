import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import isAuthSlice from "./slices/isAuthSlice";
import cartSlice from "./slices/cartSlice";
import searchSlice from "./slices/searchSlice";
import productSlice from "./slices/productSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        isAuth: isAuthSlice,
        cart: cartSlice,
        search: searchSlice,
        product: productSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;