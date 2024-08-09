import { createSlice } from "@reduxjs/toolkit";
import { listProducts } from "./API";

const initialState = {
    products: [],
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: { // chạy trong app

        clearProducts: (state, action) => {
            state.products = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(listProducts.pending, (state, action) => {
            console.log("...Pending");
        });
        builder.addCase(listProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            //console.log(action.payload);
        });
        builder.addCase(listProducts.rejected, (state, action) => {
            console.log("...Rejected");
            state.products = null;
        });
    }
});

export const { clearProducts } = appSlice.actions;
export default appSlice.reducer;




