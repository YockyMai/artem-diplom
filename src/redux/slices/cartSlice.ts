import { StringLike } from "@firebase/util";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProduct {
    cart: [
        {
            name: string,
            description: string,
            img: string,
            price: string,
        }
    ]
}

const initialState: State = {
    totalPrice: 0,
    cart: [],
};

interface State {
    totalPrice: number;
    cart: IProduct[];
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<IProduct>) {
            state.cart.push(action.payload);
            state.totalPrice = state.totalPrice + Number(action.payload.price)
        },
        removeItem(state, action: PayloadAction<string>) {
            state.cart = state.items.filter((obj) => obj.name !== action.payload);
        },
        clearItems(state) {
            state.cart = [];
            state.totalPrice = 0;
        },
    },
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;