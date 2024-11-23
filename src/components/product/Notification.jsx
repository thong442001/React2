import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { oStackHome } from '../../navigations/ProductNavigation';
import { useSelector, useDispatch } from 'react-redux'

const Notification = (props) => {

  const { navigation } = props;

  const cart = useSelector(state => state.app.cart)

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
          <Text style={{ width: 200, fontSize: 30, alignSelf: "center", textAlign: "center", backgroundColor: "white", }}>Đơn hàng</Text>
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

      {/* thông báo giỏ hàng trống */}
      <View style={{ width: "100%", height: 50, backgroundColor: "white", flexDirection: "row" }}>
        <Text style={{ width: "100%", fontSize: 20, alignSelf: "center", textAlign: "center" }}>Đơn hàng của bạn hiện đang trống</Text>
      </View>

    </SafeAreaView>
  )
}

export default Notification
