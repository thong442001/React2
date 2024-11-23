import { StyleSheet } from 'react-native'

const StyleLogin = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFF', //mã màu nền
        alignItems: 'center'
    },
    logoChinh: {
        width: 200,
        height: 200,
        marginTop: 50
    },
    txtChao1: {
        textAlign: 'center',
        fontSize: 31,
        color: 'black',
        fontWeight: 'bold',
        margin: 10
    },
    txtChao2: {
        textAlign: 'center',
        fontSize: 19,
        color: 'black',
        marginBottom: 30
    },
    vLuuMatKhau: {
        width: 348,
        flexDirection: "row",
        justifyContent: 'space-between',
        margin: 10,
        marginBottom: 20
    },
    icon_luu_mat_khau: {
        width: 22,
        height: 22,
        marginTop: -2
    },
    nhoTaiKhoan: {
        color: 'grey',
        paddingLeft: 5
    },
    vLogoTron: {
        flexDirection: "row",
        justifyContent: 'space-between',
        margin: 20
    },
    footer1: {
        color: 'black',
        fontSize: 14,
        margin: 30
    },

})

export default StyleLogin
