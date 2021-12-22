import React from 'react';
import { View, StyleSheet } from 'react-native';
import useTiccleCreate from '../../../../context/hook/UseTiccleCreate';
import TiccleImage from '../components/TiccleImage';

const TiccleImageGroup = ({setImage}) => {

    const {ticcleCreate ,deleteTiccleImage} = useTiccleCreate();

    const ticcleImageList = ticcleCreate.image.map(
        (imageSource) => (
            <TiccleImage key={imageSource.id}
            setImage={setImage} deleteImage={deleteTiccleImage} imageSource={imageSource.path} imageId={imageSource.id}/>
            ))

    return(
        <View style={styles.container}>
            {ticcleImageList}
            {ticcleCreate.image.length < 3 ? <TiccleImage setImage={setImage} deleteImage={deleteTiccleImage}/> : null}    
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row'
    }
})

export default TiccleImageGroup
