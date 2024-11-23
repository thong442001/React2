import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
//new
import { useSelector, useDispatch } from 'react-redux'
import { apiEditUser } from '../../rtk/API'

const Chinh_sua_thong_tin_ca_nhan = (props) => {

    const { navigation } = props;

    //new ************************************************
    const user = useSelector(state => state.app.user);
    const token = useSelector(state => state.app.token);
    const dispatch = useDispatch();

    const [HoTen, setHoTen] = useState(user.ho_ten);
    const [SDT, setSDT] = useState(user.sdt);
    const [DiaChi, setDiaChi] = useState(user.dia_chi);
    const [Pass, setPass] = useState(user.password);

    const [ShowPassword, setShowPassword] = useState(true);
    const [IsFocusHoTen, setIsFocusHoTen] = useState(false);
    const [IsFocusSDT, setIsFocusSDT] = useState(false);
    const [IsFocusDiaChi, setIsFocusDiaChi] = useState(false);
    const [IsFocusPass, setIsFocusPass] = useState(false);

    //check sdt
    const isPhone = (number) => {
        return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number);
    }

    const callApiEditUser = () => {
        //check null
        if (HoTen == "" || HoTen == null) {
            alert("Chưa nhập họ tên");
            return;
        }
        if (SDT == "" || SDT == null) {
            alert("Chưa số điện thoại");
            return;
        }
        if (DiaChi == "" || DiaChi == null) {
            alert("Chưa nhập địa chỉ");
            return;
        }
        if (Pass == "" || Pass == null) {
            alert("Chưa nhập Pass");
            return;
        }
        //check sdt
        if (!isPhone(SDT)) {
            alert("Số điện thoại sai định dạng");
            return;
        }

        //call api
        dispatch(apiEditUser({
            username: user?.username,
            password: Pass,
            ho_ten: HoTen,
            sdt: SDT,
            dia_chi: DiaChi,
            avt: user?.avt,
            trang_thai: user?.trang_thai,
            _id_role: user?._id_role,
            token: token,
        }))
        //thành công
        alert("Cập nhật thông tin thành công");
        navigation.goBack();
    }


    return (
        <SafeAreaView>
            <View style={styles.container}>

                {/* header */}
                <View style={{ width: "100%", height: 50, backgroundColor: "white", flexDirection: "row" }}>
                    {/* icon back */}
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={require('../../img/Icon_back.png')}
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                    {/* title */}
                    <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ width: 200, fontSize: 30, marginLeft: -100, alignSelf: "center", textAlign: "center", backgroundColor: "white", }}>Thông tin</Text>
                    </View>
                </View>

                {/* avt */}
                <Image
                    style={{ width: 160, height: 160, margin: 20 }}
                    source={{ uri: user?.avt }} />

                {/* Email ko edit đc */}
                <Text style={{ marginTop: 30, alignSelf: "flex-start", marginLeft: 50, fontSize: 16 }}>Email</Text>
                <TextInput
                    placeholder='Emall'
                    placeholderTextColor='grey'
                    style={{ margin: 10, width: 348, height: 48, fontSize: 14, borderWidth: 2, borderRadius: 8, borderColor: 'grey', color: 'grey', padding: 10 }}
                    keyboardType='text'
                    editable={false}
                    selectTextOnFocus={false}
                >{user?.username}</TextInput>

                {/* Họ tên */}
                <Text style={{ alignSelf: "flex-start", marginLeft: 50, fontSize: 16 }}>Họ tên</Text>
                <TextInput
                    placeholderTextColor={'#a8a8ab'}
                    style={[styles.text_input, IsFocusHoTen && styles.text_input_focus]}
                    placeholder='Nhập họ tên'
                    keyboardType='text'
                    onChangeText={setHoTen}
                    onFocus={() => setIsFocusHoTen(!IsFocusHoTen)}
                    onBlur={() => setIsFocusHoTen(!IsFocusHoTen)}
                >{HoTen}</TextInput>

                {/* Số điện thoại */}
                <Text style={{ alignSelf: "flex-start", marginLeft: 50, fontSize: 16 }}>Số điện thoại</Text>
                <TextInput
                    placeholderTextColor={'#a8a8ab'}
                    style={[styles.text_input, IsFocusSDT && styles.text_input_focus]}
                    placeholder='Nhập Số điện thoại'
                    keyboardType='number-pad'
                    onChangeText={setSDT}
                    onFocus={() => setIsFocusSDT(!IsFocusSDT)}
                    onBlur={() => setIsFocusSDT(!IsFocusSDT)}
                >{SDT}</TextInput>

                {/* Địa chỉ */}
                <Text style={{ alignSelf: "flex-start", marginLeft: 50, fontSize: 16 }}>Địa chỉ</Text>
                <TextInput
                    placeholderTextColor={'#a8a8ab'}
                    style={[styles.text_input, IsFocusDiaChi && styles.text_input_focus]}
                    placeholder='Nhập Địa chỉ'
                    keyboardType='text'
                    onChangeText={setDiaChi}
                    onFocus={() => setIsFocusDiaChi(!IsFocusDiaChi)}
                    onBlur={() => setIsFocusDiaChi(!IsFocusDiaChi)}
                >{DiaChi}</TextInput>

                {/* Password */}
                <Text style={{ alignSelf: "flex-start", marginLeft: 50, fontSize: 16 }}>Password</Text>
                <View>
                    <TextInput
                        placeholderTextColor={'#a8a8ab'}
                        style={[styles.text_input, IsFocusPass && styles.text_input_focus]}
                        placeholder=' Nhập mật khẩu'
                        secureTextEntry={ShowPassword}
                        keyboardType='text'
                        onChangeText={setPass}
                        onFocus={() => setIsFocusPass(!IsFocusPass)}
                        onBlur={() => setIsFocusPass(!IsFocusPass)}
                    >{Pass}</TextInput>
                    <TouchableOpacity onPress={() => setShowPassword(!ShowPassword)}>
                        {
                            ShowPassword ?
                                <Image
                                    style={styles.icon_an_mat_khau}
                                    onPress={() => setIsIconLuuMatKhau(!IsIconLuuMatKhau)}
                                    source={require('../../img/Icon_mat_tac.png')}
                                />
                                : <Image
                                    style={styles.icon_an_mat_khau}
                                    onPress={() => setIsIconLuuMatKhau(!IsIconLuuMatKhau)}
                                    source={require('../../img/Icon_mat_mo.png')}
                                />
                        }
                    </TouchableOpacity>
                </View>

                {/* btn luu */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={callApiEditUser}
                >
                    <Text style={styles.buttonText}>Lưu</Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    )
}

export default Chinh_sua_thong_tin_ca_nhan

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFF', //mã màu nền
        // justifyContent: 'center',
        alignItems: 'center'
    },
    leader: {
        color: 'white',
        fontSize: 30,
        marginLeft: 100,
        marginTop: -10,
        alignSelf: "center",
    },
    button: {
        width: 348,
        backgroundColor: '#ed321d',
        height: 57,
        justifyContent: 'center',
        borderRadius: 20,
        elevation: 5,
        position: "absolute",
        bottom: 20,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
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
    icon_an_mat_khau: {
        width: 30,
        height: 30,
        position: 'absolute',
        right: 0,
        marginRight: 30,
        marginTop: -48,

    }
})