import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Gio_hang = (props) => {

  const { navigation } = props;

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
          <Text style={{ width: 200, fontSize: 30, marginLeft: -100, alignSelf: "center", textAlign: "center", backgroundColor: "white", }}>Giỏ hàng</Text>
        </View>
      </View>

      {/* thông báo giỏ hàng trống */}
      <View style={{ width: "100%", height: 50, backgroundColor: "white", flexDirection: "row" }}>
        <Text style={{ width: "100%", fontSize: 20, alignSelf: "center", textAlign: "center" }}>Giỏ hàng của bạn hiện đang trống</Text>
      </View>

    </SafeAreaView>
  )
}

export default Gio_hang

const styles = StyleSheet.create({})