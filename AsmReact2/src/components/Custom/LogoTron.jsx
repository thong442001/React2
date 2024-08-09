import { Image, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import StyleLogoTron from './styles/StyleLogoTron'

const LogoTron = memo((props) => {
    const { uri } = props;
    return (
        <TouchableOpacity>
            <Image
                style={StyleLogoTron.loginIcon}
                source={{ uri: uri }} />
        </TouchableOpacity>
    )
})

export default LogoTron
