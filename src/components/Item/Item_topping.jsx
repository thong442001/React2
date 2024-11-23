import { StyleSheet, Text, View, Pressable, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'

const Item_topping = (props) => {

  const { dataItem } = props;

  return (

    <View style={{
      width: 80, 
      height: 80, 
      backgroundColor: "white", 
      marginLeft: 10,
      marginRight: 20,
      marginTop: 5,
      borderRadius: 15,
      // Shadow properties for iOS
      shadowColor: 'grey',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 4,
      // Elevation property for Android
      elevation: 5,
    }}>
      <Image
        style={{ width: "100%", height: "70%", }}
        source={{ uri: dataItem.img_topping }}
        resizeMode='contain'
      />
      {/* gia_topping */}
      <Text style={{ backgroundColor: "white", textAlign: "center", color: "black" }}>{dataItem.gia_topping}</Text>

    </View>

  )
}

export default Item_topping

const styles = StyleSheet.create({
  view: {
    backgroundColor: "white",
    borderRadius: 20,
    margin: 10,
    marginBottom: 20,
    padding: 10,
    width: 180,
    height: 220,

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