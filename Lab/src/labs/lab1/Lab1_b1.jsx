import {
    Text, View,
    TextInput, TouchableOpacity,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import AppStyle from './AppStyle'
import CustomButton from './CustomButton'
import CustomText from './CustomText'

const Lab1_b1 = () => {
    
    const [diem, setDiem] = useState(0);
    const [caoNhat, setCaoNhat] = useState(0);
    const [soThuNhat, setSoThuNhat] = useState(0);
    const [soThuHai, setSoThuHai] = useState(0);
    const [ketQua1, setKetQua1] = useState(0);
    const [ketQua2, setKetQua2] = useState(0);
    const [ketQua3, setKetQua3] = useState(0);

    useEffect(() => {
        rd()
    }, [diem]);

    const rd = () => {

        let _soThuNhat = Math.floor(Math.random() * 10);
        let _soThuHai = Math.floor(Math.random() * 10);
        setSoThuNhat(_soThuNhat);
        setSoThuHai(_soThuHai);
        // random vị trí hiện kết quả đúng
        const viTri = Math.floor(Math.random() * 3);
        let kq_true = _soThuNhat + _soThuHai;
        let rd1, rd2, rd3;
        if (viTri == 0) {

            setKetQua1(kq_true);
            //check trùng
            do {
                rd2 = Math.floor(Math.random() * 20);
            } while (rd2 == kq_true);
            setKetQua2(rd2);
            do {
                rd3 = Math.floor(Math.random() * 20);
            } while (rd3 == kq_true || rd3 == rd2);
            setKetQua3(rd3);

        }
        else if (viTri == 1) {

            setKetQua2(kq_true);
            //check trùng
            do {
                rd1 = Math.floor(Math.random() * 20);
            } while (rd1 == kq_true);
            setKetQua1(rd1);
            do {
                rd3 = Math.floor(Math.random() * 20);
            } while (rd3 == kq_true || rd3 == rd1);
            setKetQua3(rd3);

        }
        else {

            setKetQua3(kq_true);
            //check trùng
            do {
                rd1 = Math.floor(Math.random() * 20);
            } while (rd1 == kq_true);
            setKetQua1(rd1);
            do {
                rd2 = Math.floor(Math.random() * 20);
            } while (rd2 == kq_true || rd2 == rd1);
            setKetQua2(rd2);

        }
    }
    const onPress = (value) => {
        if (value == (soThuHai + soThuNhat)) {
            //thắng
            let diem_now = diem + 1;
            setDiem(diem_now);
            if (diem >= caoNhat) {
                setCaoNhat(diem_now);
            }
        } else {
            //thua
            alert("Sai");
            setDiem(0);
        }
    }

    return (
        <View style={AppStyle.container}>

            <View style={AppStyle.row}>
                <CustomText text={"Điểm: " + diem} />
                <CustomText text={"Điểm cao nhất: " + caoNhat} />
            </View>
            <CustomText text={soThuNhat + " + " + soThuHai + " = ?"} />

            <CustomButton title={ketQua1}
                onPress={() => onPress(ketQua1)} />
            <CustomButton title={ketQua2}
                onPress={() => onPress(ketQua2)} />
            <CustomButton title={ketQua3}
                onPress={() => onPress(ketQua3)} />

        </View>
    )
}

export default Lab1_b1