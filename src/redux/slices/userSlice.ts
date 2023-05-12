import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface userInitialState {
    user: {
        name: string,
        email: string,
        password: string
    } | null
}

const initialState: userInitialState = {
    user: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<any>) => {
                state.user = action.payload;
        },
    }
})

export const { setUser } = userSlice.actions;

export default userSlice.reducer;