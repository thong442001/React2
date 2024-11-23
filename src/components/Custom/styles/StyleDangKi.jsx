import { StyleSheet } from 'react-native'

const StyleDangKi = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFF', //mã màu nền
        alignItems: 'center'
    },
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
    slice: {
        flexDirection: 'row',
        marginTop: 15,
    },
    sliceSign: {
        color: '#e28075',
        fontWeight: '500'
    },
    sliceText: {
        fontSize: 13,
        fontWeight: '600',
        color: 'black',
        marginTop: 5,
        marginHorizontal: 6
    },
    loginIcon: {
        width: 45,
        height: 45,
        borderRadius: 25,
        marginHorizontal: 20
    },
    icon_an_mat_khau: {
        width: 30,
        height: 30,
        position: 'absolute',
        right: 0,
        marginRight: 25,
        marginTop: -45,
    },
    logo: {
        width: 150,
        height: 150,
        marginTop: 10
    },
    title1: {
        textAlign: 'center',
        fontSize: 31,
        color: 'black',
        fontWeight: 'bold',
        margin: 10
    },
    title2: {
        textAlign: 'center',
        fontSize: 19,
        color: 'black',
        marginBottom: 20
    },
    vTxtHoTro: {
        width: 340,
        margin: 10
    },
    txtHoTroDen: {
        color: 'black',
        fontSize: 14,
        textAlign: "center"
    },
    txtHoTroDo: {
        color: '#e28075',
        textDecorationLine: 'underline'
    },
    vLogoTron: {
        flexDirection: "row",
        justifyContent: 'space-between',
        margin: 20
    },
    footer1: {
        color: 'black',
        fontSize: 14,
        margin: 20
    },
})

export default StyleDangKi
