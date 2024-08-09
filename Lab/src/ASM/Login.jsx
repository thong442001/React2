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
import React, { useContext, useState } from 'react';
import axios from 'axios';
// import { AppContext } from '../../ultil/AppContext';
import CustomButton from './Custom/CustomButton'

const Login = ({ navigation }) => {

    const [Username, setUsername] = useState("");
    const [Pass, setPass] = useState("");
    // const {setEmail} = useContext(AppContext);
    // const {setName} = useContext(AppContext);

    const [IsFocusInputUsername, setIsFocusInputUsername] = useState(false);
    const [IsFocusInputPass, setIsFocusInputPass] = useState(false);
    const [ShowPassword, setShowPassword] = useState(true);
    const [IsIconLuuMatKhau, setIsIconLuuMatKhau] = useState(false);
    const [IsTextLuuMatKhau, setIsTextLuuMatKhau] = useState(false);


    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

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

        axios.post(`http://localhost:3000/tai_khoan/Login`, {
            username: Username,
            password: Pass
        })
            .then(function (response) {
                if (response.data.status == true) {
                    console.log(response.data.status);
                    navigation.navigate('Bottom_home');
                    //setEmail(Username);
                    // setName(response.data.user.name);
                    setPass("");
                }else{
                    alert(response.data.message);
                }
                
            })
            .catch(function (error) {
                console.log(error);
                alert("Đăng nhập không thành công");
                setPass("");
            });

    }


    return (
        <SafeAreaView style={{ width: '100%', height: '100%', backgroundColor: '#FFFF', alignItems: 'center' }}>

            <View style={styles.container}>

                <Image
                    style={{ width: 200, height: 200, marginTop: 50 }}
                    source={require("../img/Logo_ko_nen.png")}
                    resizeMode='contain'
                />
                <Text style={{ textAlign: 'center', fontSize: 31, color: 'black', fontWeight: 'bold', margin: 10 }}>
                    Chào mừng bạn
                </Text>
                <Text style={{ textAlign: 'center', fontSize: 19, color: 'black', marginBottom: 10 }}>
                    Đăng nhập tài khoản
                </Text>


                <View style={styles.inputWrap}>
                    <TextInput
                        placeholderTextColor={'#a8a8ab'}
                        style={[styles.text_input, IsFocusInputUsername && styles.text_input_focus]}
                        placeholder='Nhập email hoặc số điện thoại'
                        keyboardType='text'
                        onChangeText={setUsername}
                        onFocus={() => setIsFocusInputUsername(!IsFocusInputUsername)}
                        onBlur={() => setIsFocusInputUsername(!IsFocusInputUsername)}
                    >{Username}</TextInput>
                    <TextInput
                        placeholderTextColor={'#a8a8ab'}
                        style={[styles.text_input, IsFocusInputPass && styles.text_input_focus]}
                        placeholder='Mật khẩu'
                        secureTextEntry={ShowPassword}
                        keyboardType='text'
                        onChangeText={setPass}
                        onFocus={() => setIsFocusInputPass(!IsFocusInputPass)}
                        onBlur={() => setIsFocusInputPass(!IsFocusInputPass)}
                    >{Pass}</TextInput>
                    <TouchableOpacity onPress={() => setShowPassword(!ShowPassword)}>
                        {
                            ShowPassword ?
                                <Image
                                    style={styles.icon_an_mat_khau}
                                    onPress={() => setIsIconLuuMatKhau(!IsIconLuuMatKhau)}
                                    source={require('../img/Icon_mat_tac.png')}
                                />
                                : <Image
                                    style={styles.icon_an_mat_khau}
                                    onPress={() => setIsIconLuuMatKhau(!IsIconLuuMatKhau)}
                                    source={require('../img/Icon_mat_mo.png')}
                                />
                        }
                    </TouchableOpacity>
                </View>


                <View style={{ width: 348, flexDirection: "row", justifyContent: 'space-between', margin: 10, marginBottom: 20 }}>

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
                                    style={styles.icon_luu_mat_khau}
                                    onPress={() => setIsIconLuuMatKhau(!IsIconLuuMatKhau)}
                                    source={require('../img/Icon_luu_mat_khau_xanh.png')}
                                />
                                : <Image
                                    style={styles.icon_luu_mat_khau}
                                    onPress={() => setIsIconLuuMatKhau(!IsIconLuuMatKhau)}
                                    source={require('../img/Icon_luu_mat_khau_xam.png')}
                                />
                        }
                        <Text style={[{ color: 'grey' }, { paddingLeft: 5 }, IsTextLuuMatKhau && { color: 'green' }]}>Nhớ tài khoản</Text>
                    </TouchableOpacity>

                    <Text style={{ color: '#e28075' }}>Quên mật khẩu ?</Text>

                </View>



                {/* btn login */}
                <CustomButton title={'Đăng nhập'} onPress={() => {dangnhap()}} />
                <View style={styles.slice}>
                    <Text style={styles.sliceSign}>__________________</Text>
                    <Text style={styles.sliceText}> Hoặc </Text>
                    <Text style={styles.sliceSign}>__________________</Text>
                </View>

                <View style={{ flexDirection: "row", justifyContent: 'space-between', margin: 20 }}>
                    {/* icon_gg */}
                    <TouchableOpacity>
                        <Image
                            style={styles.loginIcon}
                            source={{ uri: "https://w7.pngwing.com/pngs/338/520/png-transparent-g-suite-google-play-google-logo-google-text-logo-cloud-computing.png" }} />
                    </TouchableOpacity>
                    {/* icon_fb */}
                    <TouchableOpacity>
                        <Image
                            style={styles.loginIcon}
                            source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Logo_2023.png/900px-Facebook_Logo_2023.png?20231011121526" }} />
                    </TouchableOpacity>
                </View>

                <Text
                    style={{ color: 'black', fontSize: 14, margin: 30 }}>
                    Bạn không có tài khoản <Text style={{ color: '#e28075' }} onPress={() => { navigation.navigate('Dang_ki'); }}>   Tạo tài khoán</Text>
                </Text>


            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFF', //mã màu nền
        alignItems: 'center'
    },
    text_input: {
        margin: 10,
        width: 348,
        height: 48,
        fontSize: 16,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: 'grey',
        color: 'black',
        padding: 10
    },
    text_input_focus: {
        margin: 10,
        width: 348,
        height: 48,
        fontSize: 16,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: '#e28075',
        color: 'black',
        padding: 10
    },
    slice: {
        flexDirection: 'row',
        marginTop: 15,
    },
    sliceSign: {
        color: '#e28075',
        fontWeight: '500'
    },
    sliceText: {
        fontSize: 13,
        fontWeight: '600',
        color: 'black',
        marginTop: 5,
        marginHorizontal: 6
    },
    loginIcon: {
        width: 45,
        height: 45,
        borderRadius: 25,
        marginHorizontal: 20
    },
    icon_luu_mat_khau: {
        width: 22,
        height: 22,
        marginTop: -2
    },
    icon_an_mat_khau: {
        width: 30,
        height: 30,
        position: 'absolute',
        right: 0,
        marginRight: 30,
        marginTop: -48,

    }
})