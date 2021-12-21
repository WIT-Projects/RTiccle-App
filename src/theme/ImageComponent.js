import React from 'react';
import { Image } from 'react-native';

const ImageLogo = () => {
    return (
        <Image source={require('../assets/images/logo.png')}></Image>
    )
};

const ImageCamera = () => {
    return (
        <Image source={require('../assets/images/camera.png')}></Image>
    )
}

export {ImageLogo, ImageCamera}
