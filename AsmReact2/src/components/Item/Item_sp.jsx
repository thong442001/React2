import { StyleSheet, Text, View, Pressable, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { memo } from 'react'
import Animated, {
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated'

const Item_sp = memo((props) => {

  const { dataItem } = props;
  const { viewableItems } = props;

  ///gắn s vào dataItem.image
  // var arr_img = dataItem.image.split('');
  // arr_img.splice(4, 0, 's');
  // var img = arr_img.join('');
  //console.log(img);

  const rStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
        .filter(dataItem => dataItem.isViewable)
        .find(viewableItem => viewableItem.item._id === dataItem._id),
    );
    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.1),
        },
      ],
    };
  }, []);

  //format vnd
  const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

  return (

    <Animated.View style={[styles.view, rStyle]}>
      <View>
        <Image
          style={{ width: 150, height: 125, borderRadius: 20, alignSelf: "center" }}
          source={{ uri: dataItem.img }}
          resizeMode='contain' />
      </View>
      <Text style={[styles.txt, { fontSize: 17 }, { fontWeight: 'bold' }, { height: 25 }]}>{dataItem.ten_san_pham}</Text>

      <View style={{ flexDirection: "row" }}>
        <Text style={[styles.txt, { marginLeft: 0 }, { fontSize: 18 }, { fontWeight: 'bold' }, { color: 'red' }]}>$ </Text>
        <Text style={[styles.txt, { marginRight: 40 }, { fontSize: 18 }, { fontWeight: 'bold' }, { color: "grey" }]}>{VND.format(dataItem.gia)}</Text>
        {/* <Pressable
            style={{backgroundColor: '#D17842', width: 28, height: 28, justifyContent: 'center', borderRadius: 5, marginTop: 5}}>
            <Text
                style={{color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 18}}>
                +
            </Text>
        </Pressable> */}
      </View>
    </Animated.View >

  )
})

export default Item_sp

const styles = StyleSheet.create({
  view: {
    backgroundColor: "white",
    borderRadius: 20,
    margin: 10,
    marginBottom: 20,
    padding: 10,
    width: 180,
    height: 210,

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
    marginTop: 5,
  }

})