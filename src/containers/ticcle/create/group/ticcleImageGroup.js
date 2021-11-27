import React from 'react';
import { View, StyleSheet } from 'react-native';
import useTiccleCreateImage from '../../../../context/hook/useTiccleCreateImage';
import TiccleImage from '../components/ticcleImage';

const TiccleImageGroup = () => {

    const {setImage, setImageDelete, ticcleCreateImage} = useTiccleCreateImage();

    const ticcleImageList = ticcleCreateImage.map(
        (imageSource, index) => (
            <TiccleImage key={index}
            setImage={setImage} deleteImage={setImageDelete} imageSource={imageSource}/>
            ))

    return(
        <View style={styles.container}>

            {ticcleImageList}
            {ticcleCreateImage.length < 3 ? <TiccleImage setImage={setImage} deleteImage={setImageDelete}/> : <></>}
            
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row'
    }
})

export default TiccleImageGroup
