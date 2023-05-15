import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import isAuthSlice from "./slices/isAuthSlice";
import cartSlice from "./slices/cartSlice";
import searchSlice from "./slices/searchSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        isAuth: isAuthSlice,
        cart: cartSlice,
        search: searchSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;