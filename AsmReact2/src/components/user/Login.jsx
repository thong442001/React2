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
import React, { useState, useEffect } from 'react';
import CustomButton from '../Custom/CustomButton'
//new
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../rtk/API'
import { oStack } from '../../navigations/UserNavigation';
import Gach from '../Custom/Gach';
import LogoTron from '../Custom/LogoTron';
import TextInputHien from '../Custom/TextInputHien';
import TextInputAn from '../Custom/TextInputAn';
import StyleLogin from '../Custom/styles/StyleLogin';

const Login = ({ navigation }) => {

  const [Username, setUsername] = useState("");
  const [Pass, setPass] = useState("");

  const [IsFocusInputUsername, setIsFocusInputUsername] = useState(false);
  const [IsFocusInputPass, setIsFocusInputPass] = useState(false);
  const [IsIconLuuMatKhau, setIsIconLuuMatKhau] = useState(false);
  const [IsTextLuuMatKhau, setIsTextLuuMatKhau] = useState(false);

  const [ShowPassword, setShowPassword] = useState(true);


  const messageLogin = useSelector(state => state.app.messageLogin);
  const dispatch = useDispatch()

  const dangnhap = () => {
    //check null
    if (Username == "" || Username == null) {
      alert("Chưa nhập Username");
      return;
    }
    if (Pass == "" || Pass == null) {
      alert("Chưa nhập Pass");
      return;
    }
    // call api
    dispatch(login({
      username: Username,
      password: Pass
    }))
  }

  useEffect(() => {
    if (messageLogin) {
      alert(messageLogin);
    }
    return () => {
    }
  }, [messageLogin])


  return (
    <SafeAreaView style={StyleLogin.container}>

      {/* header  */}
      <View>
        <Image
          style={StyleLogin.logoChinh}
          source={require("../../img/Logo_ko_nen.png")}
          resizeMode='contain'
        />
        <Text style={StyleLogin.txtChao1}>
          Chào mừng bạn
        </Text>
        <Text style={StyleLogin.txtChao2}>
          Đăng nhập tài khoản
        </Text>
      </View>

      {/* Input */}
      <View>
        <TextInputHien
          placeholder='Nhập email'
          keyboardType='text'
          onChangeText={setUsername}
          onFocus={() => setIsFocusInputUsername(!IsFocusInputUsername)}
          onBlur={() => setIsFocusInputUsername(!IsFocusInputUsername)}
          text={Username}
          IsFocusInput={IsFocusInputUsername} />
        <TextInputAn
          IsFocusInput={IsFocusInputPass}
          placeholder='Mật khẩu'
          keyboardType='text'
          onChangeText={setPass}
          onFocus={() => setIsFocusInputPass(!IsFocusInputPass)}
          onBlur={() => setIsFocusInputPass(!IsFocusInputPass)}
          text={Pass}
          ShowPassword={ShowPassword}
          onPressTouch={() => setShowPassword(!ShowPassword)} />
      </View>

      {/* Luu pass và quên pass */}
      <View style={StyleLogin.vLuuMatKhau}>
        {/* Luu pass  */}
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={() => {
            setIsIconLuuMatKhau(!IsIconLuuMatKhau);
            setIsTextLuuMatKhau(!IsTextLuuMatKhau);
          }}
        >
          {
            IsIconLuuMatKhau ?
              <Image
                style={StyleLogin.icon_luu_mat_khau}
                onPress={() => setIsIconLuuMatKhau(!IsIconLuuMatKhau)}
                source={require('../../img/Icon_luu_mat_khau_xanh.png')}
              />
              : <Image
                style={StyleLogin.icon_luu_mat_khau}
                onPress={() => setIsIconLuuMatKhau(!IsIconLuuMatKhau)}
                source={require('../../img/Icon_luu_mat_khau_xam.png')}
              />
          }
          <Text style={[StyleLogin.nhoTaiKhoan, IsTextLuuMatKhau && { color: 'green' }]}>Nhớ tài khoản</Text>
        </TouchableOpacity>
        {/* quên pass */}
        <Text style={{ color: '#e28075' }}>Quên mật khẩu ?</Text>

      </View>

      {/* btn login */}
      <CustomButton title={'Đăng nhập'} onPress={() => { dangnhap() }} />

      {/* ---------- hoặc ---------- */}
      <Gach text="Hoặc" />

      {/* logo nho */}
      <View style={StyleLogin.vLogoTron}>
        {/* icon_gg */}
        <LogoTron uri="https://w7.pngwing.com/pngs/338/520/png-transparent-g-suite-google-play-google-logo-google-text-logo-cloud-computing.png" />
        {/* icon_fb */}
        <LogoTron uri="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Logo_2023.png/900px-Facebook_Logo_2023.png?20231011121526" />
      </View>

      {/* footer */}
      <View>
        <Text
          style={StyleLogin.footer1}>
          Bạn không có tài khoản
          <Text
            style={{ color: '#e28075' }}
            onPress={() => {
              navigation.navigate(oStack.Dang_ki.name);
            }}>   Tạo tài khoán</Text>
        </Text>
      </View>

    </SafeAreaView>
  )
}

export default Login
