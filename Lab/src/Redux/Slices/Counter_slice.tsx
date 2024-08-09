import { createSlice } from "@reduxjs/toolkit";

export const Counter_slice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        }
    }
})
export const { increment, decrement } = Counter_slice.actions
export default Counter_slice.reducer