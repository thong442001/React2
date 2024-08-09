import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import Dialog from "react-native-dialog";
//new
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../rtk/Reducer';
import { oStackProfile } from '../../navigations/ProductNavigation';
import { oStackHome } from '../../navigations/ProductNavigation';

const Thong_tin_ca_nhan = (props) => {

  const { navigation } = props;

  //dialog đăng xuất
  const [ShowDialog, setShowDialog] = useState(false);
  const handle_huy = () => {
    setShowDialog(false)
  };
  const handle_dong_y = () => {
    setShowDialog(false);
    dang_xuat();
  };

  //new ************************************************
  const user = useSelector(state => state.app.user)
  const cart = useSelector(state => state.app.cart)
  // lấy hàm dispatch từ store
  const dispatch = useDispatch()
  const dang_xuat = () => {
    dispatch(logout());
  }


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
        <View style={{ width: "75%", justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
          <Text style={{ width: 200, fontSize: 30, alignSelf: "center", textAlign: "center", backgroundColor: "white", }}>Cài đặt</Text>
        </View>
        {/* icon gio_hang */}
        <TouchableOpacity
          onPress={() => navigation.navigate(oStackHome.Gio_hang.name)}>
          <Image
            style={{ width: 30, height: 35, marginRight: 10, marginTop: 15 }}
            source={require('../../img/Icon_gio_hang_black.png')}
            resizeMode='contain'
          />
          {/* số lượng sản phẩm trong giỏ hàng */}
          {
            cart.length > 0 ?
              <View
                style={{ backgroundColor: "red", justifyContent: "center", alignItems: "center", width: 25, height: 25, borderRadius: 15, position: "absolute", right: 0, marginRight: -8 }}>
                <Text style={{ color: "white" }}>{cart.length}</Text>
              </View>
              : null
          }

        </TouchableOpacity>

      </View>

      {/* view chính */}
      <View style={{ width: "100%", height: "100%", backgroundColor: "white", padding: 40 }}>

        {/* avt - họ và tên */}
        <View style={{ width: "100%", height: 100, flexDirection: "row", backgroundColor: "white", alignItems: "center" }}>
          {/* avt */}
          <TouchableOpacity style={{ width: 100, height: "100%", backgroundColor: "white" }}>
            <Image
              style={{ width: 100, height: "100%", borderRadius: 50 }}
              source={{ uri: user.avt }}
            //tắc để avt tròn
            // resizeMode='contain'
            />
          </TouchableOpacity>
          {/* họ và tên */}
          <Text style={{ fontSize: 20, paddingLeft: 20, fontWeight: "bold" }}>{user.ho_ten}</Text>
        </View>

        {/* chung */}
        <View style={{ width: "100%", backgroundColor: "white", marginTop: 30 }}>
          {/* chung*/}
          <TextInput
            style={styles.txt_iput_grey}
            editable={false}
            selectTextOnFocus={false}>Chung</TextInput>
          {/* edit thong tin */}
          <TouchableOpacity
            onPress={() => navigation.navigate(oStackHome.Chinh_sua_thong_tin_ca_nhan.name)}>
            <Text style={styles.txt_black}>Chỉnh sửa thông tin</Text>
          </TouchableOpacity>
          <Text style={styles.txt_black}>Cẩm nang trồng cây</Text>
          <Text style={styles.txt_black}>Lịch sử giao dịch</Text>
          {/* Q & A */}
          <TouchableOpacity
            onPress={() => navigation.navigate(oStackProfile.QandA.name)}>
            <Text style={styles.txt_black}>Q & A</Text>
          </TouchableOpacity>
        </View>

        {/* Bảo mật và Điều khoản */}
        <View style={{ width: "100%", backgroundColor: "white", marginTop: 30 }}>
          {/* input not touch bảo mật và điểu khoản */}
          <TextInput
            style={styles.txt_iput_grey}
            editable={false}
            selectTextOnFocus={false} >Bảo mật và Điều khoản</TextInput>
          <Text style={styles.txt_black}>Điều khoản và điều kiện</Text>
          <Text style={styles.txt_black}>Chính sách quyền riêng tư</Text>
          {/* logout */}
          <TouchableOpacity onPress={() => setShowDialog(true)}>
            <Text style={styles.txt_red}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>

      </View>

      {/* Dialog  logout*/}
      <Dialog.Container visible={ShowDialog}>
        {/* title */}
        <Dialog.Title>Thông báo</Dialog.Title>
        {/* nội dung */}
        <Dialog.Description>Bạn có chắc chắn thoát ?</Dialog.Description>
        {/* btn hủy */}
        <Dialog.Button label="Huỷ"
          onPress={() => handle_huy()} />
        {/* btn đồng ý */}
        <Dialog.Button label="Đồng ý"
          onPress={() => handle_dong_y()} />
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