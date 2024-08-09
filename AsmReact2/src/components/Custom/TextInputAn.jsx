import { TextInput, View, TouchableOpacity, Image } from 'react-native'
import React, { memo } from 'react'
import StyleTextInput from './styles/StyleTextInput'

const TextInputAn = memo((props) => {
    const { IsFocusInput, placeholder, keyboardType, onChangeText, onFocus, onBlur, text, onPressTouch, ShowPassword } = props;
    return (
        <View>
            <TextInput
                placeholderTextColor={'#a8a8ab'}
                style={[StyleTextInput.text_input, IsFocusInput && StyleTextInput.text_input_focus]}
                placeholder={placeholder}
                keyboardType={keyboardType}
                secureTextEntry={ShowPassword}
                onChangeText={onChangeText}
                onFocus={onFocus}
                onBlur={onBlur}
            >{text}</TextInput>
            <TouchableOpacity onPress={onPressTouch}>
                {
                    ShowPassword ?
                        <Image
                            style={StyleTextInput.icon_an_mat_khau}
                            source={require('../../img/Icon_mat_tac.png')}
                        />
                        : <Image
                            style={StyleTextInput.icon_an_mat_khau}
                            source={require('../../img/Icon_mat_mo.png')}
                        />
                }
            </TouchableOpacity>
        </View>
    )
})

export default TextInputAn
