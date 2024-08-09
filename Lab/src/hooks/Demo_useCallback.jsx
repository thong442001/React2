import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState, useCallback } from 'react'

// usecallback: giúp tối ưu hóa performance
// cache các định nghĩa hàm, chỉ tạo ra 1 hàm mới 
// khi dependencies thay đổi

// VD:
// const ten_ham = useCallback(() => {
//      hàm xử lý phức tạp---> usecallback
// },[dependencies]);
// khi dependencies thay đổi hàm sẽ đc đỉnh nghĩa lại

//set chỉ lưu trữ các value ko trùng nhau
const set1 = new Set();
const set2 = new Set();

const Demo_useCallback = () => {
    const [number1, setNumber1] = useState(1);
    const [number2, setNumber2] = useState(2);

    const changeNumber1 = () => {
        console.log('Change Number1 running.....');
        setNumber1(number1 + 1);
    }

    const changeNumber2 = useCallback(() => {
        // hàm xử lý phức tạp---> usecallback
        console.log('Change Number2 running.....');
        setNumber2(number2 + 1);
    },[number2]);

    set1.add(changeNumber1);
    set2.add(changeNumber2);

    console.log('Hook rendering......');
    console.log('Set1: ', set1);
    console.log('Set2: ', set2);

    return (
        <View>
            <Text>Number1: {number1}</Text>
            <Text>Number2: {number2}</Text>
            <Button title="Tăng Number1"
                onPress={changeNumber1} />
            <Button title='Tăng Number2'
                onPress={changeNumber2}/>
        </View>
    )
}

export default Demo_useCallback

const styles = StyleSheet.create({})