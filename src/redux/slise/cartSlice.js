import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartData: [],
        isLoading: false,
        error: '',
    },
    reducers: {
        deleteItem(state, { payload }) {
            state.cartData = state.cartData.filter(el => el.id !== payload);
            localStorage.setItem("cartStorage", JSON.stringify(state.cartData));
        },

        increaseQuantity(state, action) {
            const item = state.cartData.find((el) => el.id === action.payload.id);
            if (item) {
                item.count += 1;
                item.totalPrice = item.price * item.count;
            }
            localStorage.setItem("cartStorage", JSON.stringify(state.cartData));
        },

        decgreaseQuantity(state, action) {
            const item = state.cartData.find((el) => el.id === action.payload.id);
            if (item) {
                item.count -= 1;
                item.totalPrice = item.price / item.count;
            }
            localStorage.setItem("cartStorage", JSON.stringify(state.cartData));
        },


        addItemToCart(state, action) {
            const item = {...action.payload, count:1}
            const haslInCart = state.cartData.find((el)=> el.id === action.payload.id);
            if (haslInCart === undefined){
                state.cartData.push(item)
            } else {
                haslInCart.count ++
            }
            localStorage.setItem('cartStorage', JSON.stringify(state.cartData))
        },
    },
    extraReducers: {},
});

export const {addItemToCart,increaseQuantity, decgreaseQuantity , deleteItem, addItemToLike } = cartSlice.actions
export default cartSlice.reducer