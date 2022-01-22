import React from "react";
import { View, StyleSheet } from "react-native";
import TiccleCreateImageGroup from "./TiccleCreateImageGroup"
import TiccleCreateImageCreateButton from "./TiccleCreateImageCreateButton"

const TiccleCreateImageAdd = ({setPhotoModalVisible, ticcleImages, deleteTiccleImage}) => {

    return(
        <View style={styles.imageCreateButtonContainer}>
            {(ticcleImages && ticcleImages.length > 0) ?
            <TiccleCreateImageGroup setPhotoModalVisible={setPhotoModalVisible}
            ticcleImages={ticcleImages} deleteTiccleImage={deleteTiccleImage}/> :
            <TiccleCreateImageCreateButton setPhotoModalVisible={setPhotoModalVisible}/>
        }
        </View>
    )
}

const styles = StyleSheet.create({
    imageCreateButtonContainer: {
        marginTop : 16,
    },
})

export default TiccleCreateImageAdd
