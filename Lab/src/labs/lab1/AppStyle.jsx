import {StyleSheet} from 'react-native'
const AppStyle = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: "center",
        padding: 10,
        
    },
    row:{
        flexDirection: 'row',
        justifyContent: "space-between",
        width: "100%",
        margin: 20,
    },  
    btn:{
        width: 200,
        height: 40,
        backgroundColor: "blue",
        margin: 10,
        borderRadius: 10,
        justifyContent: "center",
    },
    btn_text:{
        fontSize: 20,
        textAlign: "center",
    },
    text:{
        fontSize: 20,
    }
})
export default AppStyle