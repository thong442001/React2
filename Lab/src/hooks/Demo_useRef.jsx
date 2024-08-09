import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'

const Demo_useRef = () => {

    const [inputValue, setInputValue] = useState("");
    
    // * Phụ: khi useState render lại thì useRef sẽ ko đc chạy lại.
    const count = useRef(0);

    useEffect(() => {
      count.current += 1;
    }, [inputValue])


    // * Chính:  useRef giống DOM
    const textRef = useRef(null);
    
    
  return (
    <View style={styles.container}>

      <View style={styles.div_khung}>
        {/* Phụ */}
        {/* Demo đếm số lần thay đổi TextInput */}
        <Text>{count.current}</Text>
        <TextInput
            style={styles.input_phu}
            value={inputValue}
            onChangeText={setInputValue}
        />
      </View>
      <View style={styles.div_khung}>
        {/* Chính */}
        <Text ref={textRef}>Ref</Text>
        <TouchableOpacity
          style={styles.btn_chinh}
          onPress={() => {
            textRef.current.setNativeProps({style: {fontSize: 40, color: "red"}});
          }}
        > 
          <Text style={styles.text_btn_chinh}>Tăng Size</Text>
        </TouchableOpacity>
      </View>
        
    </View>
  )
}

export default Demo_useRef

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  div_khung:{
    borderWidth: 3,
    borderColor: "red",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  input_phu:{
    borderWidth: 2, 
    borderRadius: 5, 
    width: 200, 
    margin: 20, 
    fontSize: 20,
  },
  btn_chinh:{
    backgroundColor: "blue",
    borderRadius: 10,
    width: 100,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  text_btn_chinh:{
    color: "white",
  }
})