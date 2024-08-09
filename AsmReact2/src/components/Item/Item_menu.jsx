import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'

const Item_menu = (props) => {

  const { dataItem, id } = props;

  return (
    <View>

      {
        id == dataItem._id ?
          <View style={[styles.view, { backgroundColor: "red", }]}>
            <Text style={[styles.txt, { color: '#FFFF' }]}>{dataItem.ten_loai}</Text>
          </View>
          : <View style={[styles.view,]}>
            <Text style={[styles.txt,]}>{dataItem.ten_loai}</Text>
          </View>
      }

    </View>
  )
}

export default Item_menu

const styles = StyleSheet.create({
  view: {
    padding: 15,
    margin: 10,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  txt: {
    color: '#6A6A6A',
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: 'bold',
  }
})