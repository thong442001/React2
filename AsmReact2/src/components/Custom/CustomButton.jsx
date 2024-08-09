import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity 
        style={styles.button} 
        onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
  button: {
    width: 348,
    backgroundColor: '#ed321d',
    height: 57,
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 5,
    elevation: 5
},
buttonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
},
})