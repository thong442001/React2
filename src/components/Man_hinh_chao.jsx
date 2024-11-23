import { SafeAreaView, StyleSheet, Image, Text } from 'react-native'
import React from 'react'

const Man_hinh_chao = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{ width: 250, height: 250 }}
        source={require("../img/Logo_ko_nen.png")}
        resizeMode='contain'
      />
      <Text style={{ color: 'red', fontFamily: 'Poppins', fontSize: 28, fontWeight: 'bold', }}>BÁNH MÌ HÔNG</Text>
    </SafeAreaView>
  )
}

export default Man_hinh_chao

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
})