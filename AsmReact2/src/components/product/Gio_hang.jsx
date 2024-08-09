import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import Dialog from "react-native-dialog";
import { useSelector, useDispatch } from 'react-redux'
import Item_gio_hang from '../Item/Item_gio_hang';
import { clearCart } from '../../rtk/Reducer'

const Gio_hang = (props) => {

  const { navigation } = props;

  //dialog 
  const [ShowDialog, setShowDialog] = useState(false);
  const handle_huy = () => {
    setShowDialog(false)
  };
  const handle_dong_y = () => {
    setShowDialog(false);
    xoaALl();
  };

  //new ************************************************
  const cart = useSelector(state => state.app.cart)
  const dispatch = useDispatch()
  const xoaALl = () => {
    dispatch(clearCart());
  }

  //format vnd
  const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });


  return (
    <SafeAreaView style={{ width: '100%', height: '100%', backgroundColor: '#FFFF', alignItems: 'center' }}>

      {/* header */}
      <View style={{ width: "100%", height: 50, backgroundColor: "white", flexDirection: "row", justifyContent: "space-between" }}>
        {/* icon back */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require('../../img/Icon_back.png')}
            resizeMode='contain'
          />
        </TouchableOpacity>
        {/* title */}
        <View style={{ width: "60%", justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
          <Text style={{ width: "100%", fontSize: 30, alignSelf: "center", textAlign: "center" }}>    Giỏ hàng</Text>
        </View>
        {/* icon bin */}
        <TouchableOpacity
          style={{ marginRight: 30 }}
          onPress={() => setShowDialog(true)}>
          <Image
            style={{ width: 40, height: 40 }}
            source={require('../../img/Icon_bin_black.png')}
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>

      {
        cart ?
          //list cart
          <View style={{ height: "80%", width: "100%", }}>
            <FlatList
              data={cart}
              style={{ width: "100", backgroundColor: "white" }}
              renderItem={({ item }) => <Item_gio_hang item={item} />}
              keyExtractor={item => item._id}
              showsVerticalScrollIndicator={false}
            />
          </View>
          //chờ load
          : <View style={{ width: "100%", height: 50, backgroundColor: "white", flexDirection: "row" }}>
            <Text style={{ width: "100%", fontSize: 20, alignSelf: "center", textAlign: "center" }}>Giỏ hàng của bạn hiện đang trống</Text>
          </View>
      }

      {
        cart.length > 0 ?
          // btn thanh toán
          <View>
            <TouchableOpacity
              style={styles.button}
            >
              {/* txt thanh toán */}
              <Text style={{ color: "white", fontSize: 22, fontWeight: 'bold', }}>Thanh toán</Text>
              {/* txt tổng tiền */}
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 16, alignSelf: "flex-end" }}>Tổng tiền: </Text>
                <Text style={{ fontSize: 20 }}>{VND.format(
                  cart.filter(e => e.isCheckBox == true).reduce((sum, item) =>
                    sum + item.gia * item.so_luong, 0))}</Text>
              </View>

            </TouchableOpacity>
          </View>
          //thông báo giỏ hàng trống
          : <View style={{ width: "100%", height: 50, backgroundColor: "white", flexDirection: "row", marginTop: -600 }}>
            <Text style={{ width: "100%", fontSize: 20, alignSelf: "center", textAlign: "center" }}>Giỏ hàng của bạn hiện đang trống</Text>
          </View>

      }

      {/* Dialog thông báo xóa hết*/}
      <Dialog.Container visible={ShowDialog}>
        <Dialog.Title>Thông báo</Dialog.Title>
        <Dialog.Description>Bạn có chắc chắn muốn xóa hết giỏ hàng ?</Dialog.Description>
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

export default Gio_hang

const styles = StyleSheet.create({
  button: {
    width: 348,
    backgroundColor: '#ed321d',
    height: 57,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 5,
    elevation: 5,

  },
})