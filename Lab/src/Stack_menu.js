import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const Stack_menu = ({ navigation }) => {
    return (
        <View style={styles.container}>

            {/* Labs */}
            <View style={styles.v_row}>
                <Pressable
                    style={styles.btn}
                    onPress={() => {
                        navigation.navigate('Stack_menu_lab1');
                    }}
                >
                    <Text>Lab1</Text>
                </Pressable>
                <Pressable
                    style={styles.btn}
                    onPress={() => {
                        navigation.navigate('Main_Lab2');
                    }}
                >
                    <Text>Lab 2</Text>
                </Pressable>
            </View>

            <View style={styles.v_row}>
                <Pressable
                    style={styles.btn}
                    onPress={() => {
                        navigation.navigate('Stack_lab3');
                    }}
                >
                    <Text>Lab3</Text>
                </Pressable>
                <Pressable
                    style={styles.btn}
                    onPress={() => {
                        //navigation.navigate('Stack_lab4');
                    }}
                >
                    <Text>Lab4</Text>
                </Pressable>
            </View>


            {/* ASM */}
            <View style={styles.v_row}>
                <Pressable
                    style={styles.btn}
                    onPress={() => {
                        navigation.navigate('Man_hinh_chao');
                    }}
                >
                    <Text>ASM</Text>
                </Pressable>
                <Pressable
                    style={styles.btn}
                    onPress={() => {
                        navigation.navigate('Stack_menu_demo');
                    }}
                >
                    <Text>Demo</Text>
                </Pressable>
            </View>

            <View style={styles.v_row}>
                <Pressable
                    style={styles.btn}
                    onPress={() => {
                        navigation.navigate('Stack_hooks');
                    }}
                >
                    <Text>Hooks</Text>
                </Pressable>
                <Pressable
                    style={styles.btn}
                    onPress={() => {
                        navigation.navigate('Main_redux');
                    }}
                >
                    <Text>Redux</Text>
                </Pressable>
            </View>




        </View>
    )
}

export default Stack_menu

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    v_row: {
        flexDirection: 'row',
    },
    btn: {
        backgroundColor: 'green',
        width: 120,
        height: 40,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    }
})