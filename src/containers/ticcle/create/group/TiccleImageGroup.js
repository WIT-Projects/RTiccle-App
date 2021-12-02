import React from 'react';
import { View, StyleSheet } from 'react-native';
import useTiccleCreateImage from '../../../../context/hook/useTiccleCreateImage';
import TiccleImage from '../components/TiccleImage';

import ImagePicker from 'react-native-image-crop-picker';

const TiccleImageGroup = () => {

    const {setImage, setImageDelete, ticcleCreateImage} = useTiccleCreateImage();

    const ticcleImageList = ticcleCreateImage.filter(image => image.id !== 0).map(
        (imageSource, index) => (
            <TiccleImage key={index}
            setImage={setImage} deleteImage={setImageDelete} imageSource={imageSource.path} imageId={imageSource.id}/>
            ))

    return(
        <View style={styles.container}>

            {ticcleImageList}
            {ticcleCreateImage.length <= 3 ? <TiccleImage setImage={setImage} deleteImage={setImageDelete}/> : <></>}
            
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row'
    }
})

export default TiccleImageGroup
