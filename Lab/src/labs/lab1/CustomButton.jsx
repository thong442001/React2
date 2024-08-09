import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import AppStyle from './AppStyle'

const CustomButton = ({title,onPress}) => {
  return (
    
    <TouchableOpacity 
      style={AppStyle.btn}
      onPress={onPress}>
      <Text style={AppStyle.btn_text}>{title}</Text>
    </TouchableOpacity>
    
  )
}

export default CustomButton

const styles = StyleSheet.create({})