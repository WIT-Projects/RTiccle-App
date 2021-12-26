import React from 'react';
import { View, StyleSheet } from 'react-native';
import useTiccleCreate from '../../../../context/hook/UseTiccleCreate';
import TiccleImage from './TiccleImage';
import TicclePlusBox from './TicclePlusBox';

const TiccleImageGroup = ({photoModalVisibleTrue}) => {

    const {ticcleCreate ,deleteTiccleImage} = useTiccleCreate();

    const ticcleImageList = ticcleCreate.image.map(
        (imageSource) => (
            <TiccleImage key={imageSource.id} setPhotoModalVisibleTrue={photoModalVisibleTrue} 
            deleteImage={deleteTiccleImage} imageSource={imageSource.path} imageId={imageSource.id}
            />
            ))

    return(
        <View style={styles.container}>
            {ticcleImageList}
            {ticcleCreate.image.length < 3 ? <TicclePlusBox photoModalVisibleTrue={photoModalVisibleTrue}/> : null}    
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row'
    }
})

export default TiccleImageGroup
