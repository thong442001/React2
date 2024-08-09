import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import Dialog from "react-native-dialog";

const Thong_tin_ca_nhan = (props) => {

  const { navigation } = props;

  const [visible, setVisible] = useState(false);

  const handle_huy = () => {
    setVisible(false);
  };

  const handle_dong_y = () => {
    setVisible(false);
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={{ width: '100%', height: '100%', backgroundColor: '#FFFF', alignItems: 'center' }}>

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
          <Text style={{ width: 200, fontSize: 30, marginLeft: -100, alignSelf: "center", textAlign: "center", backgroundColor: "white", }}>Cài đặt</Text>
        </View>
      </View>

      {/* view chính */}
      <View style={{ width: "100%", height: "100%", backgroundColor: "white", padding: 40 }}>
        {/* avt - họ và tên */}
        <View style={{ width: "100%", height: 100, flexDirection: "row", backgroundColor: "white", alignItems: "center" }}>
          {/* avt */}
          <TouchableOpacity style={{ width: 100, height: "100%", backgroundColor: "white" }}>
            <Image
              style={{ width: 100, height: "100%", borderRadius: 50 }}
              source={{ uri: "https://static.invenglobal.com/upload/image/2024/02/22/o1708605079878174.jpeg" }}
            //tắc để avt tròn
            // resizeMode='contain'
            />
          </TouchableOpacity>
          {/* họ và tên */}
          <Text style={{ fontSize: 20, paddingLeft: 20, fontWeight: "bold" }}>Nguyễn Văn A</Text>
        </View>
        {/* chung */}
        <View style={{ width: "100%", backgroundColor: "white", marginTop: 30 }}>
          <TextInput style={styles.txt_iput_grey}>Chung</TextInput>
          <TouchableOpacity
            onPress={() => navigation.navigate("Chinh_sua_thong_tin_ca_nhan")}>
            <Text style={styles.txt_black}>Chỉnh sửa thông tin</Text>
          </TouchableOpacity>
          <Text style={styles.txt_black}>Cẩm nang trồng cây</Text>
          <Text style={styles.txt_black}>Lịch sử giao dịch</Text>
          <Text style={styles.txt_black}> Q & A</Text>
        </View>
        {/* Bảo mật và Điều khoản */}
        <View style={{ width: "100%", backgroundColor: "white", marginTop: 30 }}>
          <TextInput style={styles.txt_iput_grey}>Bảo mật và Điều khoản</TextInput>
          <Text style={styles.txt_black}>Điều khoản và điều kiện</Text>
          <Text style={styles.txt_black}>Chính sách quyền riêng tư</Text>

          <TouchableOpacity onPress={() => setVisible(true)}>
            <Text style={styles.txt_red}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>


      </View>

      {/* Dialog */}
      <Dialog.Container visible={visible}>
        <Dialog.Title>Thông báo</Dialog.Title>
        <Dialog.Description>
          Bạn có chắc chắn thoát ?
        </Dialog.Description>
        <Dialog.Button
          label="Huỷ"
          onPress={() => {
            setVisible(false);
          }} />
        <Dialog.Button
          label="Đồng ý"
          onPress={() => {
            setVisible(false);
            navigation.navigate("Login");
          }} />
      </Dialog.Container>

    </SafeAreaView>
  )
}

export default Thong_tin_ca_nhan

const styles = StyleSheet.create({
  txt_iput_grey: {
    color: "grey",
    fontSize: 20,
    borderBottomWidth: 2,
    borderColor: 'grey',
    paddingTop: 10,
    paddingBottom: 10,
  },
  txt_black: {
    color: "black",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  txt_red: {
    color: "red",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },

})