import { StyleSheet, Text, View, TouchableOpacity, Alert, TextInput } from 'react-native'
import React, { memo, useState } from 'react'

const Body = memo((props) => {

    const { onUpdateInfor, onClickChangeBgFooter } = props;

    const [name, setName] = useState('');
    const [linkImage, setLinkImage] = useState('');

    const handleChangeInfo = () => {
        if (name.length > 0 && linkImage.length > 0) {
            onUpdateInfor({ name: name, avatar: linkImage });
        } else {
            Alert.alert("Không được để trống");
        }
    };

    return (
        <View style={styles.container}>

            <TextInput
                style={styles.input}                
                placeholder='Nhập tên mới'
                keyboardType='text'
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}                
                placeholder='Dán địa chỉ avt mới'
                keyboardType='text'
                onChangeText={setLinkImage}
            />
            {/* btn cập nhật thông tin header */}
            <TouchableOpacity
                style={styles.btn}
                onPress={handleChangeInfo}
            >
                <Text style={styles.text_btn}>CẬP NHẬT THÔNG TIN</Text>
            </TouchableOpacity>

            {/* btn đổi màu footer */}
            <TouchableOpacity
                style={styles.btn}
                onPress={onClickChangeBgFooter}
            >
                <Text style={styles.text_btn}>ĐỔI MÀU FOOTER</Text>
            </TouchableOpacity>
        </View>
    );
})

export default Body

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        backgroundColor: "blue",
        borderRadius: 10,
        width: 250,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
    },
    text_btn: {
        color: "white",
        fontSize: 18,
    },
    input:{
        borderWidth: 2, 
        borderRadius: 5, 
        width: 400, 
        margin: 5, 
        fontSize: 20,
        padding: 10
      },
})