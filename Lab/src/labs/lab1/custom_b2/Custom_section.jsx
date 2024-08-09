import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Custom_cart from './Custom_cart';

const Custom_section = ({data,index}) => {

    const { title,cart} = data;

  return (
    <View key={index.toString()} style={[styles.section]}>
        
        {
            title ? 
            (<Text style={[styles.title]}>{title}</Text>)
            :null
        }
        {
            cart ? 
            (<Custom_cart data={cart}/>)
            :null
        }

    </View>
  )
}

export default Custom_section

const styles = StyleSheet.create({
    section:{
        margin: 20
    },
    title: {
        color: "black",
        fontSize: 25,
        fontWeight: "bold",
    }
})