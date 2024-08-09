import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeItem, removeItem } from './Slices/cart_slice'
import { View, Text, Button } from 'react-native'

export function Test_cart_redux() {
    // lấy các state từ store
    const cart = useSelector((state) => state.cart.cart)
    // lấy hàm dispatch từ store
    const dispatch = useDispatch()
    // hàm thêm, cập nhật số lượng
    const onChangeItem = (id, quantity) => {
        if (!id) {
            dispatch(changeItem({
                id: 2,
                name: 'Sản phẩm 2',
                price: 1300,
                quantity: 12
            }))
        }
        else {
            dispatch(changeItem({
                id: id,
                quantity: quantity
            }))
        }
    }

    return (
        <View>
            {
                cart.map(item => (
                    <View key={item.id}>
                        <Text>{item.name}</Text>
                        <Text>{item.price}</Text>
                        <Text>{item.quantity}</Text>
                        <Button title="+" onPress={() => onChangeItem(item.id, 1)} />
                        <Button title="-" onPress={() => onChangeItem(item.id, -1)} />
                        <Button title="Xóa" onPress={() =>
                            dispatch(removeItem(item.id))} />
                    </View>
                ))
            }
            {
                cart.length === 0 && <Text>Không có sản phẩm nào trong giỏ hàng</Text>
            }
            {
                cart.length > 0 && <Text>Tổng tiền: {
                    cart.reduce((sum, item) =>
                        sum + item.price * item.quantity, 0)}</Text>
            }
            <Button title="Thêm" onPress={() => onChangeItem()} />
        </View>
    )
}