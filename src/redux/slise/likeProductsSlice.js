import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const getLikeProductsSlice = createAsyncThunk('likeProducts/getLikeProductsSlice',
    async (id) => {
        const {data} = await axios('https://api.escuelajs.co/api/v1/products/' + id);
        return data;
    }
)

const likeProductsSlice = createSlice({
    name: 'likeProduct',
    initialState: {
        likeProductsData: [],
        idLoad: false,
        err: '',
    },
    reducers: {

        addToLike(state, action) {
            state.likeProductsData.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getLikeProductsSlice.pending, (state) => {
                state.isLoading = true
            })

            .addCase(getLikeProductsSlice.fulfilled, (state, payload) => {
                state.isLoading = false
                state.likeProductsData = payload
            })

            .addCase(getLikeProductsSlice.rejected, (state, payload) => {
                state.isLoading = false
                state.err = payload
            })


    }
})

export const { addToLike } = likeProductsSlice.actions;
export default likeProductsSlice.reducer