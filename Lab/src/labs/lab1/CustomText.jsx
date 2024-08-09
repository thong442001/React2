import { StyleSheet, Text} from 'react-native'
import React from 'react'
import AppStyle from './AppStyle'

const CustomText = ({text}) => {
  return (
    
    <Text style={AppStyle.text}>{text}</Text>
    
  )
}

export default CustomText

const styles = StyleSheet.create({})