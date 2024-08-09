import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'

const Footer = memo((props) => {
    const { timeUpdate, backgroundColor } = props;
    return (
        <View
            style={{
                height: 120,
                backgroundColor: backgroundColor,
                alignItems: 'center',
                justifyContent: 'center',
                width: "100%",
            }}>
            <Text style={styles.text}>
                Thời gian bạn cập nhật thông tin: {timeUpdate}
            </Text>
        </View>
    );
})

export default Footer

const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        textAlign: "center",
        
    }
})