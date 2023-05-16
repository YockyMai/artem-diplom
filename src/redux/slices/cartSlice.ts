import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

type IProduct = {
    id: number;
    name: string;
    img?:string;
    description: string
    price: number
    info: {
        description: string;
    }[],
    type: {
        id: number,
        name: string
    }
    count: number
}

interface State {
    totalPrice: number;
    cart: IProduct[];
}

const initialState: State = {
    totalPrice: 0,
    cart: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<IProduct>) => {
            const candidate = state.cart.find((item) => item.id === action.payload.id)

            if (candidate) {
                state.cart = state.cart.map((product)=>{
                    if (product.id === candidate.id) {
                        return {...product, count: product.count + 1}
                    }
                    return {...product, count: 0}
                })
            } else {
                state.cart = [...state.cart, {...action.payload, count: 0}]
            }
            state.totalPrice = state.totalPrice + Number(action.payload.price)
        },
        removeItem: (state, action: PayloadAction<IProduct>) => {
            const removedItem = state.cart.find((item) => item.id === action.payload.id)
            if (!removedItem) return
            if (removedItem.count === 0) {
                state.cart = state.cart.filter((cartItem)=> cartItem.id !== action.payload.id)
            } else {
                state.cart = state.cart.map((cartItem)=>{
                    if (cartItem.id === action.payload.id) {
                        return {...cartItem, count: cartItem.count - 1}
                    } else {
                        return cartItem
                    }
                })
            }
            state.totalPrice = state.totalPrice - Number(action.payload.price)
        },
        clearItems:(state) => {
            state.cart = [];
            state.totalPrice = 0;
        },
    },
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;