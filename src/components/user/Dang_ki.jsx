import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    View,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../Custom/CustomButton'
import { useDispatch } from 'react-redux'
import { apiDangKi } from '../../rtk/API'
import StyleDangKi from '../Custom/styles/StyleDangKi';
import TextInputHien from '../Custom/TextInputHien';
import TextInputAn from '../Custom/TextInputAn';
import Gach from '../Custom/Gach';
import LogoTron from '../Custom/LogoTron';

const Dang_ki = ({ navigation }) => {

    const [Username, setUsername] = useState();
    const [Ho_ten, setHo_ten] = useState();
    const [SDT, setSDT] = useState();
    const [Dia_chi, setDia_chi] = useState();
    const [Pass, setPass] = useState();

    const [IsFocusInputUsername, setIsFocusInputUsername] = useState(false);
    const [IsFocusInputName, setIsFocusInputName] = useState(false);
    const [IsFocusInputPhoneNumber, setIsFocusInputPhoneNumber] = useState(false);
    const [IsFocusInputDiaChi, setIsFocusInputDiaChi] = useState(false);
    const [IsFocusInputPass, setIsFocusInputPass] = useState(false);

    const [ShowPassword, setShowPassword] = useState(true);

    const dispatch = useDispatch()
    const callApiDangKi = async () => {
        try {
            const result = await dispatch(apiDangKi({
                username: Username,
                password: Pass,
                ho_ten: Ho_ten,
                sdt: SDT,
                dia_chi: Dia_chi,
            }))

            // result.payload có status là api thành công
            // vì api thất bại chỉ có message
            if (result.payload?.status) {
                alert(result.payload.message);
                navigation.navigate('Login');
            } else {
                alert(result.payload);
            }

        } catch (error) {
            console.log(error);
            alert(error);
        }
    }

    //check sdt
    const isPhone = (number) => {
        return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number);
    }

    const Dang_ki = () => {
        //check null
        if (Username == "" || Username == null) {
            alert("Chưa nhập Email");
            return;
        }
        if (Ho_ten == "" || Ho_ten == null) {
            alert("Chưa nhập họ tên");
            return;
        }
        if (SDT == "" || SDT == null) {
            alert("Chưa nhập số điện thoại");
            return;
        }
        if (Dia_chi == "" || Dia_chi == null) {
            alert("Chưa nhập địa chỉ");
            return;
        }
        if (Pass == "" || Pass == null) {
            alert("Chưa nhập Pass");
            return;
        }
        //check @gmail
        if (!Username.includes("@gmail.com")) {
            alert("Nhập Email sai định dạng");
            return;
        }
        //check sdt
        if (!isPhone(SDT)) {
            alert("Số điện thoại sai định dạng");
            return;
        }

        // call api
        callApiDangKi();

    }


    return (
        <SafeAreaView style={StyleDangKi.container}>

            {/* header */}
            <View>
                <Image
                    style={StyleDangKi.logo}
                    source={require('../../img/Logo_ko_nen.png')}
                    resizeMode='contain'
                />
                <Text style={StyleDangKi.title1}>
                    Đăng ký
                </Text>
                <Text style={StyleDangKi.title2}>
                    Tạo tài khoản
                </Text>
            </View>

            {/* input */}
            <View>
                {/* Email */}
                <TextInputHien
                    placeholder='Nhập email'
                    keyboardType='text'
                    onChangeText={setUsername}
                    onFocus={() => setIsFocusInputUsername(!IsFocusInputUsername)}
                    onBlur={() => setIsFocusInputUsername(!IsFocusInputUsername)}
                    text={Username}
                    IsFocusInput={IsFocusInputUsername} />
                {/* ho ten */}
                <TextInputHien
                    placeholder='Họ tên'
                    keyboardType='text'
                    onChangeText={setHo_ten}
                    onFocus={() => setIsFocusInputName(!IsFocusInputName)}
                    onBlur={() => setIsFocusInputName(!IsFocusInputName)}
                    text={Ho_ten}
                    IsFocusInput={IsFocusInputName} />
                {/* sdt */}
                <TextInputHien
                    placeholder='Nhập số điện thoại'
                    keyboardType='text'
                    onChangeText={setSDT}
                    onFocus={() => setIsFocusInputPhoneNumber(!IsFocusInputPhoneNumber)}
                    onBlur={() => setIsFocusInputPhoneNumber(!IsFocusInputPhoneNumber)}
                    text={SDT}
                    IsFocusInput={IsFocusInputPhoneNumber} />
                {/* địa chỉ */}
                <TextInputHien
                    placeholder='Nhập địa chỉ'
                    keyboardType='text'
                    onChangeText={setDia_chi}
                    onFocus={() => setIsFocusInputDiaChi(!IsFocusInputDiaChi)}
                    onBlur={() => setIsFocusInputDiaChi(!IsFocusInputDiaChi)}
                    text={Dia_chi}
                    IsFocusInput={IsFocusInputDiaChi} />
                {/* pass */}
                <TextInputAn
                    IsFocusInput={IsFocusInputPass}
                    placeholder='Nhập mật khẩu'
                    keyboardType='text'
                    onChangeText={setPass}
                    onFocus={() => setIsFocusInputPass(!IsFocusInputPass)}
                    onBlur={() => setIsFocusInputPass(!IsFocusInputPass)}
                    text={Pass}
                    ShowPassword={ShowPassword}
                    onPressTouch={() => setShowPassword(!ShowPassword)} />
            </View>

            {/* txt hỗ trợ */}
            <View style={StyleDangKi.vTxtHoTro}>
                <Text
                    style={StyleDangKi.txtHoTroDen}>
                    Để đăng ký tài khoản, bạn đồng ý
                    <Text style={StyleDangKi.txtHoTroDo}> Terms & Conditions </Text>
                    and
                    <Text style={StyleDangKi.txtHoTroDo}> Privacy Policy </Text>
                </Text>
            </View>

            {/* btn đăng kí */}
            <CustomButton title={'Đăng ký'} onPress={() => { Dang_ki() }} />


            {/* ---------- hoặc ---------- */}
            <Gach text="Hoặc" />

            {/* logo nho */}
            <View style={StyleDangKi.vLogoTron}>
                {/* icon_gg */}
                <LogoTron uri="https://w7.pngwing.com/pngs/338/520/png-transparent-g-suite-google-play-google-logo-google-text-logo-cloud-computing.png" />
                {/* icon_fb */}
                <LogoTron uri="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Logo_2023.png/900px-Facebook_Logo_2023.png?20231011121526" />
            </View>

            {/* footer */}
            <View>
                <Text
                    style={StyleDangKi.footer1}>
                    Tôi đã có tài khoản
                    <Text
                        style={{ color: '#e28075' }}
                        onPress={() => {
                            navigation.navigate('Login');

                        }}>  Đăng nhập</Text>
                </Text>
            </View>


        </SafeAreaView >
    )
}

export default Dang_ki
