import { createSlice } from '@reduxjs/toolkit';

const values = {
    message: "",
    error: false,
}

export const messageModalSlice = createSlice({
    name: "messageModal",
    initialState: {
        values,
    },
    reducers : {
        modalMsg: (state, action) => {
            state.values.message = action.payload
        },
        resetModalMsg: (state) => {
            state.values = values
        },
        setError: (state, action) => {
            state.values.error = action.payload
        },
    }
})

export const {modalMsg, resetModalMsg, setError} = messageModalSlice.actions
export const messageModalState = state => state.msgModal.values
export default messageModalSlice.reducer