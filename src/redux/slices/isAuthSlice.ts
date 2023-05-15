import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface userInitialState {
    isAuth: boolean
}

const initialState: userInitialState = {
    isAuth: false
}

export const isAuthSlice = createSlice({
    name: 'isAuth',
    initialState,
    reducers: {
        isAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
        },
    }
})

export const { isAuth } = isAuthSlice.actions;

export default isAuthSlice.reducer;