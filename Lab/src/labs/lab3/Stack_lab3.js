import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const Stack_lab3 = ({navigation}) => {
  return (
    <View style={styles.container}>

      <View style={styles.v_row}>
        <Pressable 
            style={styles.btn}
            onPress={() => {
                navigation.navigate('Lab3_b1');
            }}
            >
            <Text>Bài 1</Text>
        </Pressable>
        <Pressable 
            style={styles.btn}
            onPress={() => {
                navigation.navigate('Lab3_b2');
            }}
            >
            <Text>Bài 2</Text>
        </Pressable>
      </View>

      <View style={styles.v_row}>
        <Pressable 
            style={styles.btn}
            onPress={() => {
                navigation.navigate('Lab3_b3');
            }}
            >
            <Text>Bài 3</Text>
        </Pressable>
        {/* <Pressable 
            style={styles.btn}
            onPress={() => {
                navigation.navigate('Lab3_b2');
            }}
            >
            <Text>Bài 2</Text>
        </Pressable> */}
      </View>

      

    </View>
  )
}

export default Stack_lab3

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