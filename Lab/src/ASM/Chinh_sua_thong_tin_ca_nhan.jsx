import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import axios from 'axios';

const Chinh_sua_thong_tin_ca_nhan = (props) => {

    const { navigation } = props;

    // const { Email } = useContext(AppContext);
    // const { Name } = useContext(AppContext);
    // const { setName } = useContext(AppContext);

    // const [Name_setting, setName_setting] = useState(Name);
    // const [Pass, setPass] = useState();
    // const [Pass2, setPass2] = useState();

    // const save = () => {
    //     //check null
    //     if(Pass == "" || Pass == null){
    //         alert("Chưa nhập Password");
    //         return;
    //     }
    //     if(Pass2 == "" || Pass2 == null){
    //         alert("Chưa nhập Re-type password");
    //         return;
    //     }
    //     if(Name_setting == "" || Name_setting == null){
    //         alert("Chưa nhập Name");
    //         return;
    //     }

    //     if(Pass == Pass2){
    //         axios.post(`https://cro101-b166e76cc76a.herokuapp.com/users/update-profile`,
    //             {email: Email, password: Pass, name: Name_setting})
    //         .then(function (response) {
    //             if(response.data.status == true){
    //                 //console.log(response.data.status);
    //                 alert("Cập nhập thành công");
    //                 setName(Name_setting);
    //                 navigation.navigate("Login");
    //             }
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    //     }else{
    //         setPass2("");
    //         alert("Mật khẩu xác nhận không giống nhau");
    //     }
    // }

    return (
        <SafeAreaView>
            <View style={styles.container}>

                {/* header */}
                <View style={{ width: "100%", height: 50, backgroundColor: "white", flexDirection: "row" }}>
                    {/* icon back */}
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={require('../img/Icon_back.png')}
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                    {/* title */}
                    <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ width: 200, fontSize: 30, marginLeft: -100, alignSelf: "center", textAlign: "center", backgroundColor: "white", }}>Thông tin</Text>
                    </View>
                </View>


                <Image
                    style={{ width: 160, height: 160, margin: 20 }}
                    source={{ uri: "https://static.invenglobal.com/upload/image/2024/02/22/o1708605079878174.jpeg" }}
                />

                <TextInput
                    placeholder='Name'
                    placeholderTextColor='grey'
                    style={{ margin: 10, marginTop: 40, width: 348, height: 48, fontSize: 14, borderWidth: 2, borderRadius: 8, borderColor: 'grey', color: 'white', padding: 10 }}
                    keyboardType='text'
                    onChangeText={(text) => setName_setting(text)}
                ></TextInput>
                <TextInput
                    placeholder='Emall'
                    placeholderTextColor='grey'
                    style={{ margin: 10, width: 348, height: 48, fontSize: 14, borderWidth: 2, borderRadius: 8, borderColor: 'grey', color: 'white', padding: 10 }}
                    keyboardType='text'
                    editable={false}
                    selectTextOnFocus={false}
                ></TextInput>
                <TextInput
                    placeholder='Password'
                    placeholderTextColor='grey'
                    style={{ margin: 10, width: 348, height: 48, fontSize: 14, borderWidth: 2, borderRadius: 8, borderColor: 'grey', color: 'white', padding: 10 }}
                    secureTextEntry={true}
                    onChangeText={(text) => setPass(text)}
                ></TextInput>
                <TextInput
                    placeholder='Re-type password'
                    placeholderTextColor='grey'
                    style={{ margin: 10, width: 348, height: 48, fontSize: 14, borderWidth: 2, borderRadius: 8, borderColor: 'grey', color: 'white', padding: 10 }}
                    secureTextEntry={true}
                    onChangeText={(text) => setPass2(text)}
                ></TextInput>

                {/* btn luu */}
                <TouchableOpacity
                    style={styles.button}
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
        marginTop: 5,
        elevation: 5,
        position: "absolute",
        bottom: 10,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
})