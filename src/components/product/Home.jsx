import { StyleSheet, SafeAreaView, Text, View, StatusBar, FlatList, Image, TextInput, TouchableOpacity, } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import Item_sp from '../Item/Item_sp';
import Item_menu from '../Item/Item_menu';
// import { AppContext } from '../../ultil/AppContext';
import { oStackHome } from '../../navigations/ProductNavigation';
import { listProducts } from '../../rtk/API'
import { listCates } from '../../rtk/API'
import { logout } from '../../rtk/Reducer';
import { useSelector, useDispatch } from 'react-redux'
import { removeVietnameseTones } from '../chuyen_tv_ko_dau'
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';

const Home = (props) => {

  const { navigation } = props;

  //api
  const cart = useSelector(state => state.app.cart)
  const token = useSelector(state => state.app.token);
  const dispatch = useDispatch();
  const [DataCate, setDataCate] = useState([{
    "_id": "",
    "ten_loai": "Tất cả"
  }]);
  const [IdCate, setIdCate] = useState("");
  const [DataProduct, setDataProduct] = useState([]);
  const getCates = async () => {
    try {
      const result = await dispatch(listCates({ token: token }))
      // fix lỗi DataCate bị chồng lên nhau    
      setDataCate([{
        "_id": "",
        "ten_loai": "Tất cả"
      }].concat(result.payload))
      //lỗi
      //setDataCate(DataCate.concat(result.payload))
    } catch (error) {
      console.log(error)
    }
  }
  const getProducts = async () => {
    try {
      const result = await dispatch(listProducts({
        _id_loai: IdCate,
        token: token,
      }))
      setDataProduct(result.payload)

    } catch (error) {
      console.log(error)
    }
  }
  //mục danh
  useEffect(() => {
    getCates();
    return () => {
    }
  }, [])
  //list san pham
  useEffect(() => {
    getProducts();
    return () => {
    }
  }, [IdCate])

  //search
  const [searchKey, setSearchKey] = useState('');
  // removeVietnameseTones để chuyển tiếng việt thành ko dấu
  // toLowerCase ko phân biệt chữ hoa
  // string.includes("abc") kiểm tra string có chứa abc thay ko
  const filterDataProduct = () =>
    DataProduct.filter(
      item => removeVietnameseTones(
        item.ten_san_pham.toLowerCase()
      )
        .includes(removeVietnameseTones(
          searchKey.toLowerCase()
        )));

  // dành cho refresh flatlist khi vuốt xuống cuối
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setDataProduct([]);
    setRefreshing(true);
    await getProducts();
    setRefreshing(false);
  }

  //animated
  const viewableItems = useSharedValue([]);
  //view
  const height_view = useSharedValue(160);
  //img
  const width_img = useSharedValue(150);
  const height_img = useSharedValue(150);
  //Show
  const [ShowTXT, setShowTXT] = useState(true);
  const [ShowSearch, setShowSearch] = useState(true);
  const [ShowBtnSearch, setShowBtnSearch] = useState(false);

  const animatedStyles_view = useAnimatedStyle(() => ({
    height: withSpring(height_view.value),
  }));
  const animatedStyles_img = useAnimatedStyle(() => ({
    height: withSpring(height_img.value),
    width: withSpring(width_img.value),
  }));

  const handleScroll = (event) => {
    //height của scroll
    const positionY = event.nativeEvent.contentOffset.y;
    // console.log(positionY);
    if (positionY < 1) {
      //view
      height_view.value = 160;
      //img
      height_img.value = 150;
      width_img.value = 150;
      //Show
      setShowTXT(true);
      setShowSearch(true);
    } else {
      //view
      height_view.value = 60;
      //img
      height_img.value = 60;
      width_img.value = 60;
      //Show
      setShowTXT(false);
      setShowSearch(false);
    }
  };


  return (
    < SafeAreaView style={{ width: '100%', height: '100%', backgroundColor: '#FFFF', alignItems: 'center' }
    }>
      <StatusBar barStyle='light-content' />

      {/* header */}
      <Animated.View style={[{ backgroundColor: "white", flexDirection: 'row', justifyContent: "center", width: "100%", height: 160 }, animatedStyles_view]} >
        {/* logo */}
        <Animated.Image
          // resizeMode="center"
          style={[{ width: 150, height: 150 }, animatedStyles_img]}
          source={require('../../img/Logo_ko_nen.png')} />
        {/* ten shop  */}
        {
          ShowTXT ?
            // header lon
            <View style={{ backgroundColor: "white", width: 210, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ color: 'red', fontFamily: 'Poppins', fontSize: 28, fontWeight: 'bold', }}>BÁNH MÌ HÔNG</Text>
              <Text style={{ color: 'black', fontFamily: 'Poppins', fontSize: 20, textAlign: "center", margin: 15 }}>Đồ ăn nhanh không cần lanh tanh</Text>
            </View>
            //header nho
            : <View style={{ backgroundColor: "white", flexDirection: "row", width: "70%", height: 70, }}>
              <Text style={{ marginTop: 18, marginLeft: 20, color: 'red', fontFamily: 'Poppins', fontSize: 25, fontWeight: 'bold', }}>BÁNH MÌ HÔNG</Text>
              {/* btn search nhỏ animated */}
              {
                ShowBtnSearch &&
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: "red",
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    position: "absolute",
                    right: 10,
                    marginTop: 10,
                  }}
                  // tắc-mở search2
                  onPress={() => setShowSearch(!ShowSearch)}>
                  <Image style={{ width: 30, height: 30 }}
                    source={require('../../img/Icon_search_white.png')} />
                </TouchableOpacity>
              }
            </View>
        }
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
            cart.length > 0 &&
            <View
              style={{ backgroundColor: "red", justifyContent: "center", alignItems: "center", width: 25, height: 25, borderRadius: 15, position: "absolute", right: 0, marginRight: -8 }}>
              <Text style={{ color: "white" }}>{cart.length}</Text>
            </View>
          }
        </TouchableOpacity>
      </Animated.View>

      {/* search */}
      {
        ShowSearch ?
          <View style={{
            width: "90%",
            height: 50,
            backgroundColor: "white",
            flexDirection: "row",
            borderRadius: 15,
            // Shadow properties for iOS
            shadowColor: 'grey',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 4,
            // Elevation property for Android
            elevation: 5,
          }}>
            <TextInput
              placeholderTextColor={'#a8a8ab'}
              style={{ paddingLeft: 40, width: "90%", }}
              placeholder='Tìm kiếm'
              keyboardType='text'
              onChangeText={setSearchKey}
            />
            <Image
              style={{ width: 25, height: 25, position: 'absolute', marginTop: 10, left: 0, marginLeft: 10 }}
              source={require('../../img/Icon_search_black.png')}
            />
          </View>
          : null
      }

      {/* List danh mục */}
      <View style={{ height: 70 }}>
        <FlatList
          data={DataCate}
          renderItem={({ item }) =>
            <TouchableOpacity
              onPress={() => {
                // console.log(item.ten_loai);
                setIdCate(item._id);
              }
              }>
              <Item_menu dataItem={item} id={IdCate} />
            </TouchableOpacity>}
          keyExtractor={item => item._id}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>

      {/* list sp */}
      {
        filterDataProduct().length > 0 ?
          //nếu tìm thấy sản phẩm 
          <View style={{ height: "85%" }}>
            <FlatList
              //data={DataProduct}
              data={filterDataProduct()}
              onViewableItemsChanged={({ viewableItems: vItems }) => {
                viewableItems.value = vItems;
              }}
              renderItem={({ item }) =>
                <TouchableOpacity
                  onPress={() => navigation.navigate(oStackHome.Chi_tiet_san_pham.name, { _id: item._id })}>
                  <Item_sp dataItem={item} viewableItems={viewableItems} />
                </TouchableOpacity>}
              keyExtractor={item => item._id}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              //khi scroll ngừng di chuyển thì bật btn search
              onMomentumScrollEnd={() => setShowBtnSearch(true)}
              //load khi vuốt xuống
              refreshing={refreshing}
              onRefresh={onRefresh}
              onScroll={(event) => {
                handleScroll(event);
                // khi scroll đang di chuyển thì tắc btn search 
                setShowBtnSearch(false);
              }}
            />
          </View>
          //nếu ko tìm thấy sản phẩm 
          : <View style={{ height: "60%", width: "100%", justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
            <Text style={{ fontSize: 20 }}>Không tìm thấy sản phẩm nào.</Text>
          </View>
      }

    </SafeAreaView >
  )
}

export default Home

const styles = StyleSheet.create({
  view: {
    width: 500,
    height: 200,
  }
})
