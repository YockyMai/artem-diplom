import { StringLike } from "@firebase/util";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProduct {
    product: [
        {
            name: string,
            description: string,
            img: string,
            price: string,
        }
    ]
}

const initialState: State = {
    product: [],
};

interface State {

    product: IProduct[];
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct(state, action: PayloadAction<IProduct>) {
            state.product.push(action.payload);
        },
        removeProduct(state, action: PayloadAction<string>) {
            state.product = state.items.filter((obj) => obj.name !== action.payload);
        },
        clearProduct(state) {
            state.product = [];
        },
    },
});

export const { addProduct, removeProduct, clearProduct } = productSlice.actions;

export default productSlice.reducer;