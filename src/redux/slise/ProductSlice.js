import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("products/getProducts",
    async () => {
     const {data} = await  axios('https://api.escuelajs.co/api/v1/products/');
     return data;
    }
    )


const productSlice = createSlice({
    name: 'products',
    initialState : {
        productsData: [],
        isLoading: false,
        error: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(getProducts.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.productsData = payload;
            })

            .addCase(getProducts.rejected, (state, {payload}) => {
                state.isLoading = false;
                state.error = payload;
            })
    },
});

export default productSlice.reducer