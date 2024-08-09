import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import StyleGach from './styles/StyleGach'

const Gach = memo((props) => {
    const { text } = props;
    return (
        <View style={StyleGach.slice}>
            <Text style={StyleGach.sliceSign}>__________________</Text>
            <Text style={StyleGach.sliceText}> {text} </Text>
            <Text style={StyleGach.sliceSign}>__________________</Text>
        </View>
    )
})

export default Gach
