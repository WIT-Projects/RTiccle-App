import React from 'react';
import { View, StyleSheet } from 'react-native';
import UseTiccleCreate from '../../../../context/hook/UseTiccleCreate';
import TiccleCreateImage from './TiccleCreateImage';
import TiccleCreatePlusBox from './TiccleCreatePlusBox';

const TiccleImageGroup = ({photoModalVisibleTrue}) => {

    const {ticcleCreate ,deleteTiccleImage} = UseTiccleCreate();

    const ticcleImageList = ticcleCreate.image.map(
        (imageSource) => (
            <TiccleCreateImage key={imageSource.id} photoModalVisibleTrue={photoModalVisibleTrue} 
            deleteImage={deleteTiccleImage} imageSource={imageSource.path} imageId={imageSource.id}
            />
            ))

    return(
        <View style={styles.container}>
            {ticcleImageList}
            {ticcleCreate.image.length < 3 ? <TiccleCreatePlusBox photoModalVisibleTrue={photoModalVisibleTrue}/> : null}    
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row'
    }
})

export default TiccleImageGroup
