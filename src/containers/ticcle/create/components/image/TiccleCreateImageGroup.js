import React from 'react';
import { View, StyleSheet } from 'react-native';
import TiccleCreateImage from './TiccleCreateImage';
import TiccleCreatePlusBox from './TiccleCreatePlusBox';

const TiccleImageGroup = ({setPhotoModalVisible, ticcleImages, deleteTiccleImage}) => {
    
    const ticcleImageList = ticcleImages.map(
        (imagePath,index) => (
            <TiccleCreateImage key={index} index={index}
            deleteTiccleImage={deleteTiccleImage} imagePath={imagePath}
            />
            ))

    return(
        <View style={styles.container}>
            {ticcleImageList}
            {ticcleImages.length < 3 ? <TiccleCreatePlusBox setPhotoModalVisible={setPhotoModalVisible}/> : null}    
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row'
    }
})

export default TiccleImageGroup
