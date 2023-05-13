import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import isAuthSlice from "./slices/isAuthSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        isAuth: isAuthSlice,
        cart: cartSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;