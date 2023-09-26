import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getSingleProducts = createAsyncThunk("singleProduct/getSingleProducts",
    async (id) => {
        const {data} = await  axios('https://api.escuelajs.co/api/v1/products/' +id);
        return data;
    }
)


const singleProductSlice = createSlice({
    name: 'singleProduct',
    initialState : {
        singleProductsData: [],
        isLoading: false,
        error: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSingleProducts.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(getSingleProducts.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.singleProductsData = payload;
            })

            .addCase(getSingleProducts.rejected, (state, {payload}) => {
                state.isLoading = false;
                state.error = payload;
            })
    },
});

export default singleProductSlice.reducer