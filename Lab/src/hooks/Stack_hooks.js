import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const Stack_hooks = ({navigation}) => {
  return (
    <View style={styles.container}>

      <View style={styles.v_row}>
        <Pressable 
            style={styles.btn}
            onPress={() => {
                navigation.navigate('Demo_useRef');
            }}
            >
            <Text>useRef</Text>
        </Pressable>
        <Pressable 
            style={styles.btn}
            onPress={() => {
                navigation.navigate('Demo_useReducer');
            }}
            >
            <Text>useReducer</Text>
        </Pressable>
      </View>

      <View style={styles.v_row}>
        <Pressable 
            style={styles.btn}
            onPress={() => {
                navigation.navigate('Demo_useCallback');
            }}
            >
            <Text>useCallback</Text>
        </Pressable>
        <Pressable 
            style={styles.btn}
            onPress={() => {
                navigation.navigate('Demo_useMemo');
            }}
            >
            <Text>useMemo</Text>
        </Pressable>
      </View>

      <View style={styles.v_row}>
        <Pressable 
            style={styles.btn}
            onPress={() => {
                navigation.navigate('Demo_lazy');
            }}
            >
            <Text>lazy</Text>
        </Pressable>
        <Pressable 
            style={styles.btn}
            onPress={() => {
                navigation.navigate('Custom_hook');
            }}
            >
            <Text>Custom hook</Text>
        </Pressable>
        
      </View>

      

    </View>
  )
}

export default Stack_hooks

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