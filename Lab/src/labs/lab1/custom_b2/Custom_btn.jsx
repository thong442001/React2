import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Custom_btn = ({text}) => {
  return (
    <Pressable style={styles.btn}>
        <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

export default Custom_btn

const styles = StyleSheet.create({
    btn: {
        width: "90%",
        height: 40,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue",
        borderRadius: 5,
        margin: 10,
        
    },
    text: {
        color: "white",
        fontSize: 18,
    }
})