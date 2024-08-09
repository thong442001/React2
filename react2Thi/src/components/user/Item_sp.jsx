import { StyleSheet, Text, View, Pressable, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { memo } from 'react'

const Item_sp = memo((props) => {

  const { dataItem } = props;
  const { color } = props;

  return (

    <View style={[styles.view, { backgroundColor: color }]}>

      <View>
        <Image
          style={{ width: 150, height: 125, borderRadius: 20, alignSelf: "center" }}
          source={{ uri: dataItem.image }}
          resizeMode='contain' />
      </View>
      <Text style={[styles.txt, { fontSize: 17 }, { fontWeight: 'bold' }, { height: 25 }]}>{dataItem.name}</Text>

    </View >

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