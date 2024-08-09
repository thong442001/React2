import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Custom_Text = ({data}) => {
    const { title, noi_dung} = data;
  return (
    <View style={styles.container}>
        <Text style={[styles.title]}>{title}</Text>
        <Text style={[styles.noi_dung]}>{noi_dung}</Text>
    </View>   
  )
}

export default Custom_Text

const styles = StyleSheet.create({
    container: {
        margin: 5,
    },
    title: {
        color: "grey",
        fontSize: 15,
    },
    noi_dung: {
        color: "black",
        fontSize: 18,
        fontWeight: "bold",
    },
})