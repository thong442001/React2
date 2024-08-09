import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Custom_hinh_anh = ({data}) => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.title]}>{data.title}</Text>
      <Image 
       style={styles.img}
       source={{uri: data.uri}}/>
    </View>
  )
}

export default Custom_hinh_anh

const styles = StyleSheet.create({
    container: {
        margin: 5,
    },
    img:{
        width: "90%",
        height: 170,
        borderRadius: 5,
        alignSelf: "center",
        margin: 10, 
    },
    title: {
        color: "grey",
        fontSize: 15,
    },
})