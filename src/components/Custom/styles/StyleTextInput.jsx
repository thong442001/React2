import { StyleSheet } from 'react-native'

const StyleTextInput = StyleSheet.create({
    text_input: {
        margin: 5,
        width: 348,
        height: 48,
        fontSize: 16,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: 'grey',
        color: 'black',
        padding: 10
    },
    text_input_focus: {
        margin: 5,
        width: 348,
        height: 48,
        fontSize: 16,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: '#e28075',
        color: 'black',
        padding: 10
    },
    icon_an_mat_khau: {
        width: 30,
        height: 30,
        position: 'absolute',
        right: 0,
        marginRight: 25,
        marginTop: -43,
    }
})

export default StyleTextInput
