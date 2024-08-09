import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, { useState, useMemo } from 'react'

// usememo: giúp tối ưu hóa performance
// phép bạn lưu trữ đệm kết quả
// useMemo tương tự giống useCallback 
// nhưng nó sẽ chạy lại chứ ko định nghĩa lại
// bắt buộc phải có return
// VD
// const ten_biến = useMemo(() => {
//     ... xử lí
//     return n;
// }, [dependencies]);
// khi dependencies thay đổi 
// thì giá trị của biến sẽ đc tính toán lại

const Demo_useMemo = () => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)

    const sum1 = () => {
        console.log('sum1 rendering......');
        return number1 + number2;
    }

    const productsFromAPI = useMemo(() => {
        const _products = [
            { id: 1, name: 'product 1', price: 100, quantity: 1 },
            { id: 2, name: 'product 2', price: 200, quantity: 1 },
            { id: 3, name: 'product 3', price: 300, quantity: 1 },
            { id: 4, name: 'product 4', price: 400, quantity: 1 },
            { id: 5, name: 'product 5', price: 500, quantity: 1 },
        ]
        return _products;
    }, [loading])

    console.log('Hook rendering......');

    return (
        <View>
            {
                productsFromAPI.map(product => (
                    <>
                        <Text key={product.id}>{product.name}</Text>
                        <Button title="Add to cart" 
                        onPress={() => setCart([...cart, product])} />
                    </>
                ))
            }
            <Text>Cart: {cart.length}</Text>            
        </View>
    )
}

export default Demo_useMemo

const styles = StyleSheet.create({})