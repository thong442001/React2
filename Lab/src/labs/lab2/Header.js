import { StyleSheet, Text, View, Image } from 'react-native'
import React, { memo } from 'react'

const Header = memo((props) => {

    const { user } = props;

    console.log('re-render header');

    return (
        <View
            style={{
                height: 120,
                backgroundColor: 'white',
                padding: 20,
                flexDirection: 'row',
                alignItems: 'center',
                width: "100%",
            }}>
            <Image
                resizeMode="center"
                style={styles.avatar}
                source={{ uri: user.avatar }}
            />
            <View>
                <Text>Chào ngày mới</Text>
                <Text style={styles.name}>{user.name}</Text>
            </View>
        </View>
    );
})

export default Header

const styles = StyleSheet.create({
    avatar:{
        width: 100,
        height: 100,
        margin: 20,
    },
})