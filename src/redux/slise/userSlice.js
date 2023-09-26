import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk('name/createUser',
    async (userDataParams, {redectWithValue}) => {
   try {
       const {data} = await axios.post("https://api.escuelajs.co/api/v1/users/", userDataParams);
       const loginData = axios.post('https://api.escuelajs.co/api/v1/auth/login', {email: data.email, password: data.password});
       return {...data, token: loginData.data };
   } catch (err) {
       redectWithValue(err)
   }

    });

const userSlice = createSlice({
    name: "user",
    initialState: {
        userData: {},
        load:false,
        error: ''
    },
    reducers: {
        getFromLS(state) {
            const user = localStorage.getItem('user')
            if (user) {
                state.userData = JSON.parse(user)
            }
        },
            signOut(state){
                state.userData = {}
                localStorage.removeItem("user");
            }

    },
    extraReducers:(builder) =>{
        builder
            .addCase(createUser.pending, (state) => {
                state.load = true
            })
            .addCase(createUser.fulfilled, (state, {payload}) => {
                state.load = false
                state.userData = payload
                if (state.userData){
                    localStorage.setItem("user", JSON.stringify(state.userData))
                }
            })
            .addCase(createUser.rejected, (state, {payload}) => {
                state.load = false
                state.error = payload
            })
    },
});

export const {getFromLS, signOut} = userSlice.actions
export default userSlice.reducer