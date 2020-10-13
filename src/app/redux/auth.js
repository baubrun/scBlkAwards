import { createSlice } from '@reduxjs/toolkit';

const values = {
        user: "",
        loggedIn: false,
}

export const authSlice = createSlice({
    name: "auth",
    initialState: {
       values,
    },
    reducers: {
        LogIn: (state) => {
            state.values.loggedIn = true
        },
        logOut: (state) => {
            state.values = values
        }
    },
})

export const {LogIn, logOut} = authSlice.actions
export const authState = state => state.auth.values
export default authSlice.reducer