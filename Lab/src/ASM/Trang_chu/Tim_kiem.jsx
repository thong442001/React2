import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Tim_kiem = (props) => {

  const {navigation} = props;

  return (
    <SafeAreaView style={{ width: '100%', height: '100%', backgroundColor: '#FFFF', alignItems: 'center' }}>

      {/* header */}
      <View style={{ width: "100%", height: 50, backgroundColor: "white", flexDirection: "row" }}>
        {/* icon back */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require('../../img/Icon_back.png')}
            resizeMode='contain'
          />
        </TouchableOpacity>
        {/* title */}
        <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
          <Text style={{ width: 200, fontSize: 30, marginLeft: -100, alignSelf: "center", textAlign: "center", backgroundColor: "white", }}>Tìm kiếm</Text>
        </View>
      </View>

      {/* input */}
      <View style={{ width: "100%", height: 50, backgroundColor: "white", flexDirection: "row", justifyContent: "center" }}>
        <TextInput
          placeholderTextColor={'#a8a8ab'}
          style={styles.text_input}
          placeholder='Tìm kiếm'
          //secureTextEntry={ShowPassword}
          keyboardType='text'
        // onChangeText={setPass}
        //onFocus={() => setIsFocusInputPass(!IsFocusInputPass)}
        //onBlur={() => setIsFocusInputPass(!IsFocusInputPass)}
        />
        <Image
          style={{ width: 25, height: 25, position: 'absolute', marginTop: 25, right: 0, marginRight: 50 }}
          source={require('../../img/Icon_search_white.png')}
        />
      </View>

    </SafeAreaView>
  )
}

export default Tim_kiem

const styles = StyleSheet.create({
  text_input: {
    margin: 10,
    width: "80%",
    height: 50,
    fontSize: 20,
    borderBottomWidth: 2,
    borderColor: 'grey',
    color: 'black',
    // padding: 10
  },
})