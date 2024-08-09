import { createAsyncThunk } from '@reduxjs/toolkit'
import AxiosHelper from '../helpers/AxiosHelper'

export const listProducts = createAsyncThunk(
    "products",
    async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosHelper()
                .get("/products", data);

            console.log(response);
            return response;


        } catch (error) {
            console.log(error);
            return rejectWithValue(error);
        }
    }
);



