import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: any = {
    product: null
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProduct: (state, action: PayloadAction<any>) => {
            state.product = action.payload
        },
        clearProduct: (state) => {
            state.product = null
        },
    }
})

export const { setProduct, clearProduct } = productSlice.actions;

export default productSlice.reducer;