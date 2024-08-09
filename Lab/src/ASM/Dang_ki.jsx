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
// import axios from 'axios';
// import { AppContext } from '../../ultil/AppContext';
import CustomButton from './Custom/CustomButton'

const Dang_ki = ({ navigation }) => {

    // const {navigation} = props;

    const [Username, setUsername] = useState();
    const [Ho_ten, setHo_ten] = useState();
    const [SDT, setSDT] = useState();
    const [Dia_chi, setDia_chi] = useState();
    const [Pass, setPass] = useState();

    // const {setEmail} = useContext(AppContext);
    // const {setName} = useContext(AppContext);
    const [IsFocusInputName, setIsFocusInputName] = useState(false);
    const [IsFocusInputEmail, setIsFocusInputEmail] = useState(false);
    const [IsFocusInputPhoneNumber, setIsFocusInputPhoneNumber] = useState(false);
    const [IsFocusInputDiaChi, setIsFocusInputDiaChi] = useState(false);
    const [IsFocusInputPass, setIsFocusInputPass] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const Dang_ki = () => {
        //check null
        if (Username == "" || Username == null) {
            alert("Chưa nhập Username");
            return;
        }
        if (Pass == "" || Pass == null) {
            alert("Chưa nhập Pass");
            return;
        }

        // axios.post(`https://cro101-b166e76cc76a.herokuapp.com/users/login`,{email: Username, password: Pass})
        // .then(function (response) {
        //     if(response.data.status == true) {
        //         console.log(response.data.status);
        //         navigation.navigate('Bottom_home');
        //         setEmail(Username);
        //         setName(response.data.user.name);
        //         setPass("");
        //     }
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //     alert("Đăng nhập không thành công");
        //     setPass("");
        //   });

    }


    return (
        <SafeAreaView style={{ width: '100%', height: '100%', backgroundColor: '#FFFF', alignItems: 'center' }}>

            <View style={styles.container}>

                <Image
                    style={{ width: 150, height: 150, marginTop: 10 }}
                    source={require('../img/Logo_ko_nen.png')}
                    resizeMode='contain'
                />
                <Text style={{ textAlign: 'center', fontSize: 31, color: 'black', fontWeight: 'bold', margin: 10 }}>
                    Đăng ký
                </Text>
                <Text style={{ textAlign: 'center', fontSize: 19, color: 'black', marginBottom: 10 }}>
                    Tạo tài khoản
                </Text>


                <View style={styles.inputWrap}>
                    <TextInput
                        placeholderTextColor={'#a8a8ab'}
                        style={[styles.text_input, IsFocusInputEmail && styles.text_input_focus]}
                        placeholder='Tài khoản'
                        keyboardType='text'
                        onChangeText={setUsername}
                        onFocus={() => setIsFocusInputEmail(!IsFocusInputEmail)}
                        onBlur={() => setIsFocusInputEmail(!IsFocusInputEmail)}
                    />
                    <TextInput
                        placeholderTextColor={'#a8a8ab'}
                        style={[styles.text_input, IsFocusInputName && styles.text_input_focus]}
                        placeholder='Họ tên'
                        keyboardType='text'
                        onChangeText={setUsername}
                        onFocus={() => setIsFocusInputName(!IsFocusInputName)}
                        onBlur={() => setIsFocusInputName(!IsFocusInputName)}
                    />
                    <TextInput
                        placeholderTextColor={'#a8a8ab'}
                        style={[styles.text_input, IsFocusInputPhoneNumber && styles.text_input_focus]}
                        placeholder='Số điện thoại'
                        keyboardType='text'
                        onChangeText={setUsername}
                        onFocus={() => setIsFocusInputPhoneNumber(!IsFocusInputPhoneNumber)}
                        onBlur={() => setIsFocusInputPhoneNumber(!IsFocusInputPhoneNumber)}
                    />
                    <TextInput
                        placeholderTextColor={'#a8a8ab'}
                        style={[styles.text_input, IsFocusInputDiaChi && styles.text_input_focus]}
                        placeholder='Địa chỉ'
                        keyboardType='text'
                        onChangeText={setUsername}
                        onFocus={() => setIsFocusInputDiaChi(!IsFocusInputDiaChi)}
                        onBlur={() => setIsFocusInputDiaChi(!IsFocusInputDiaChi)}
                    />
                    <TextInput
                        placeholderTextColor={'#a8a8ab'}
                        style={[styles.text_input, IsFocusInputPass && styles.text_input_focus]} placeholder='Mật khẩu'
                        secureTextEntry={!showPassword}
                        keyboardType='text'
                        onChangeText={setPass}
                        onFocus={() => setIsFocusInputPass(!IsFocusInputPass)}
                        onBlur={() => setIsFocusInputPass(!IsFocusInputPass)}
                    />
                    <TouchableOpacity onPress={toggleShowPassword}>
                        {/* <Icon
                        name={showPassword ? 'eye-off' : 'eye'}
                        style={styles.eyeIcon}
                    /> */}
                    </TouchableOpacity>

                    <View style={{ width: 340, margin: 10 }}>
                        <Text
                            style={{ color: 'black', fontSize: 14, textAlign: "center" }}>
                            Để đăng ký tài khoản, bạn đồng ý
                            <Text style={{ color: '#e28075', textDecorationLine: 'underline' }}> Terms & Conditions </Text>
                            and
                            <Text style={{ color: '#e28075', textDecorationLine: 'underline' }}> Privacy Policy </Text>
                        </Text>
                    </View>

                </View>


                <CustomButton title={'Đăng ký'} />

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
                    style={{ color: 'black', fontSize: 14, margin: 10 }}>
                    Tôi đã có tài khoản <Text style={{ color: '#e28075' }} onPress={() => { navigation.navigate('Login'); }}>   Đăng nhập</Text>
                </Text>


            </View>
        </SafeAreaView>
    )
}

export default Dang_ki

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFF', //mã màu nền
        alignItems: 'center'
    },
    text_input: {
        margin: 5,
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
        margin: 5,
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
})