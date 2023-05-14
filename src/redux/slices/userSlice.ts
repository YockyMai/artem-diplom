import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface userInitialState {
    user: {
        username: string,
        email: string,
        password?: string,
        role: string,
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
                state.user = action.payload
        },
        removeUser: (state) => {
            state.user = null
        },
    }
})

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;