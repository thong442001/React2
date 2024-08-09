import { TextInput, View } from 'react-native'
import React, { memo } from 'react'
import StyleTextInput from './styles/StyleTextInput'

const TextInputHien = memo((props) => {
    const { IsFocusInput, placeholder, keyboardType, onChangeText, onFocus, onBlur, text } = props;
    return (
        <View>
            <TextInput
                placeholderTextColor={'#a8a8ab'}
                style={[StyleTextInput.text_input, IsFocusInput && StyleTextInput.text_input_focus]}
                placeholder={placeholder}
                keyboardType={keyboardType}
                onChangeText={onChangeText}
                onFocus={onFocus}
                onBlur={onBlur}
            >{text}</TextInput>
        </View>
    )
})

export default TextInputHien
