import { StyleSheet, Text, View, Pressable, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { memo, useState } from 'react'
import Animated, {
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated'
import CheckBox from '@react-native-community/checkbox';
import { useSelector, useDispatch } from 'react-redux'
import { removeItemToCart } from '../../rtk/Reducer'
import { changeQuantity } from '../../rtk/Reducer'
import { changeCheckBox } from '../../rtk/Reducer'


const Item_gio_hang = memo((props) => {

  const { item } = props;
  //const { viewableItems } = props;

  ///gắn s vào dataItem.image
  // var arr_img = dataItem.image.split('');
  // arr_img.splice(4, 0, 's');
  // var img = arr_img.join('');
  //console.log(img);

  //format vnd
  const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

  //tang giam so luong 
  const dispatch = useDispatch()
  const changeSoLuong = (so_luong) => {
    const item_change = {
      _id: item._id,
      so_luong: so_luong
    }
    dispatch(changeQuantity(item_change));
  }

  //check box
  const [isSelected, setSelection] = useState(false);
  const changeIsCheckBox = () => {
    const item_checkBox = {
      _id: item._id,
      isCheckBox: !item.isCheckBox
    }
    dispatch(changeCheckBox(item_checkBox));
  }

  //xóa item in cart
  const xoaCart = () => {
    dispatch(removeItemToCart(item._id));
  }

  return (

    <View style={[styles.view]}>
      <View style={{ flexDirection: "row" }}>

        <View style={{ width: 40, height: 40, backgroundColor: "white", justifyContent: "center", alignSelf: "center" }}>
          <CheckBox
            value={item.isCheckBox}
            onValueChange={() => changeIsCheckBox()} />
        </View>



        <Image
          style={{ width: 100, height: 100, borderRadius: 20, alignSelf: "center", justifyContent: "center", marginLeft: 10, marginRight: 10 }}
          source={{ uri: item.img }}
          resizeMode='contain' />
        <View style={{ flexDirection: "column" }}>

          <Text style={[styles.txt, { fontSize: 17 }, { fontWeight: 'bold' }, { width: 160 }, { height: 20 }, { backgroundColor: "white" }, { marginTop: 5 }]}>{item.ten_san_pham}</Text>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Text style={[styles.txt, { marginLeft: 0 }, { fontSize: 18 }, { fontWeight: 'bold' }, { color: 'red' }]}>$ </Text>
            <Text style={[styles.txt, { marginRight: 40 }, { fontSize: 18 }, { fontWeight: 'bold' }, { color: "grey" }]}>{VND.format(item.gia)}</Text>
          </View>

          <View style={{ flexDirection: "row", width: 160, height: 40, marginTop: 10, marginLeft: 10 }}>
            {/* btn_giam_so_luong */}
            <TouchableOpacity
              onPress={() => changeSoLuong(-1)}>
              <Image
                style={{ width: 45, height: 45 }}
                source={require('../../img/Icon_btn_giam_so_luong.png')}
                resizeMode='contain'
              />
            </TouchableOpacity>
            {/* so_luong */}
            <Text style={[styles.txt, { width: 45 }, { fontSize: 20 }, { fontWeight: 'bold' }, { backgroundColor: 'white' }, { textAlign: "center" }, { alignSelf: "center" }]}>{item.so_luong}</Text>
            {/* btn_tang_so_luong */}
            <TouchableOpacity
              onPress={() => changeSoLuong(+1)}>
              <Image
                style={{ width: 45, height: 45 }}
                source={require('../../img/Icon_btn_tang_so_luong.png')}
                resizeMode='contain'
              />
            </TouchableOpacity>

          </View>

        </View>

        {/* xóa */}
        <TouchableOpacity
          style={{ backgroundColor: "white", width: 40, height: 40, justifyContent: "center", alignItems: "center", position: "absolute", right: 0, top: 0, marginTop: -15, marginRight: -5 }}
          onPress={() => xoaCart()}>
          <Text style={{ fontSize: 20 }}>X</Text>
        </TouchableOpacity>

      </View>


      {/* <View >
        <Image
          style={{ width: 150, height: 125, borderRadius: 20, alignSelf: "center" }}
          source={{ uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/448740887_1033588911766369_5382938959993796914_n.png?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=q_2UwtCH9B4Q7kNvgELONbf&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QF_va8gAZLYyTHY-twcz6FMfRGrFT0eNFhKr2VUe3gh2A&oe=66B43CD9" }}
          resizeMode='contain' />
      </View>
      <Text style={[styles.txt, { fontSize: 17 }, { fontWeight: 'bold' }, { height: 25 }]}>Bánh mì xí mại</Text>

      <View style={{ flexDirection: "row" }}>
        <Text style={[styles.txt, { marginLeft: 0 }, { fontSize: 18 }, { fontWeight: 'bold' }, { color: 'red' }]}>$ </Text>
        <Text style={[styles.txt, { marginRight: 40 }, { fontSize: 18 }, { fontWeight: 'bold' }, { color: "grey" }]}>{VND.format(2000)}</Text>
      </View> */}

    </View >

  )
})

export default Item_gio_hang

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: "white",
    borderRadius: 20,
    margin: 10,
    padding: 10,
    width: "85%",
    height: 140,

    // Shadow properties for iOS
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    // Elevation property for Android
    elevation: 5,

  },
  txt: {
    color: 'black',
    fontFamily: 'Poppins',
  }

})