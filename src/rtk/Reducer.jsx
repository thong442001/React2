import { createSlice } from "@reduxjs/toolkit";
import { login, apiEditUser } from "./API";

const initialState = {
    user: null, // thông tin user đăng nhập
    cart: [], // {_id, name, price, image, quantity, isCheckBox}
    messageLogin: null,
    token: '', // token
    refreshToken: '',// refreshToken
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: { // chạy trong app
        addItemToCart: (state, action) => {
            const item = action.payload;
            const index = state.cart.findIndex(e => e._id.toString() == item._id.toString());
            if (index == -1) {
                state.cart.push({ ...item, so_luong: 1 });
            } else {
                state.cart[index].so_luong++;
            }
        },
        changeQuantity: (state, action) => {
            const { _id, so_luong } = action.payload;
            //tìm index cart
            const index = state.cart.findIndex(e => e._id.toString() == _id.toString());
            if (so_luong == -1) {
                if (state.cart[index].so_luong > 1) {
                    state.cart[index].so_luong--;
                } else {
                    state.cart = state.cart.filter(i => i._id.toString() !== _id.toString());
                }
            } else {
                state.cart[index].so_luong++;
            }
        },
        removeItemToCart: (state, action) => {
            // action.payload = id
            state.cart = state.cart.filter(item => item._id !== action.payload)
        },
        changeCheckBox: (state, action) => {
            const { _id, isCheckBox } = action.payload;
            const index = state.cart.findIndex(e => e._id.toString() == _id.toString());
            state.cart[index].isCheckBox = isCheckBox;
        },
        logout: (state, action) => {
            state.user = null;
        },
        clearCart: (state, action) => {
            state.cart = [];
        },
        resetToken: (state, action) => {
            state.token = action.payload;
            //console.log(state.token);
        },
    },
    extraReducers: (builder) => {
        //login
        builder.addCase(login.pending, (state, action) => {
            console.log("...Pending login");
            state.messageLogin = null;
            state.token = '';
            state.refreshToken = '';
        });
        builder.addCase(login.fulfilled, (state, action) => {
            console.log("...fulfilled login");
            state.user = action.payload?.user;
            state.messageLogin = null;
            state.token = action.payload?.token;
            state.refreshToken = action.payload?.refreshToken;
            //console.log('>>>>>', action.payload?.refreshToken);
        });
        builder.addCase(login.rejected, (state, action) => {
            //console.log('=====>>>>>',action.payload);
            console.log("...Rejected login");
            state.user = null;
            state.messageLogin = action?.payload;
            state.token = '';
            state.refreshToken = '';
        });

        //apiEditUser
        builder.addCase(apiEditUser.pending, (state, action) => {
            console.log("...Pending apiEditUser");
        });
        builder.addCase(apiEditUser.fulfilled, (state, action) => {
            state.user = action.payload?.user;
            //console.log('>>>>>',action.payload);
        });
        builder.addCase(apiEditUser.rejected, (state, action) => {
            //console.log('=====>>>>>',action.payload);
            console.log("...Rejected apiEditUser");
        });
    }
});

export const { addItemToCart, logout, clearCart, changeQuantity, removeItemToCart, changeCheckBox, resetToken } = appSlice.actions;
export default appSlice.reducer;




