import { createSlice } from '@reduxjs/toolkit'
// khai báo các dữ liệu dùng chung cho toàn app
const initialState = {
    cart: [], // {id, name, price, quantity}
}
export const cartSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    // hàm xử lý action
    reducers: {
        // thêm, cập nhật số lượng
        changeItem: (state, action) => {
            // action.payload = {id, name, price, quantity}
            // kiểm tra xem item đã có trong giỏ hàng chưa
            const index = state.cart.findIndex(item => 
                item.id === action.payload.id)
            // nếu chưa có
            if (index === -1) {
                state.cart.push(action.payload)
            } else {
                // nếu có rồi
                // cập nhật số lượng
                let quantity = state.cart[index].quantity + 
                                action.payload.quantity
                // kiểm tra số lượng
                if (quantity <= 0) {
                    // xóa item khỏi giỏ hàng
                    state.cart = state.cart.filter(item => 
                        item.id !== action.payload.id)
                } else {
                    // cập nhật số lượng
                    state.cart[index].quantity = quantity
                }
            }
        },
        // xóa item khỏi giỏ hàng
        removeItem: (state, action) => {
            // action.payload = id
            state.cart = state.cart.filter(item => 
                item.id !== action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { changeItem, removeItem } = cartSlice.actions

export default cartSlice.reducer