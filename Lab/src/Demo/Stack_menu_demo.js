import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const Stack_menu_demo = ({navigation}) => {
  return (
    <View style={styles.container}>

      <View style={styles.v_row}>
        <Pressable 
            style={styles.btn}
            onPress={() => {
                navigation.navigate('Game_do_vui');
            }}
            >
            <Text>Game đố vui</Text>
        </Pressable>
        <Pressable 
            style={styles.btn}
            onPress={() => {
                navigation.navigate('Demo_animated');
            }}
            >
            <Text>Animation</Text>
        </Pressable>
      </View>

      <View style={styles.v_row}>
        <Pressable 
            style={styles.btn}
            onPress={() => {
                navigation.navigate('Camera');
            }}
            >
            <Text>Camera</Text>
        </Pressable>
        {/* <Pressable 
            style={styles.btn}
            onPress={() => {
                navigation.navigate('Demo_animated');
            }}
            >
            <Text>Animation</Text>
        </Pressable> */}
      </View>

      

    </View>
  )
}

export default Stack_menu_demo

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    v_row:{
        flexDirection: 'row',
    },
    btn:{
        backgroundColor: 'green',
        width: 120,
        height: 40,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    }
})