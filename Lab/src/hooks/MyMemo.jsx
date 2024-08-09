import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'

// memo sẽ chạy lại khi props thay đổi

const MyMemo = memo((props) => {
    console.log("MyMemo đã chạy....")
  return (
    <View>
      <Text>MyMemo</Text>
    </View>
  )
})

export default MyMemo

const styles = StyleSheet.create({})