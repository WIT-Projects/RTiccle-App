import React from "react";
import { View, StyleSheet } from "react-native";
import useTiccleCreate from "../../../../../context/hook/useTiccleCreate";
import TiccleCreateImageGroup from "./TiccleCreateImageGroup"
import TiccleCreateImageCreateButton from "./TiccleCreateImageCreateButton"

const TiccleCreateImageAdd = ({setPhotoModalVisible}) => {

    const {ticcle, deleteTiccleImage} = useTiccleCreate();

    return(
        <View style={styles.imageCreateButtonContainer}>
            {(ticcle.images && ticcle.images.length > 0) ?
            <TiccleCreateImageGroup setPhotoModalVisible={setPhotoModalVisible}
                ticcle={ticcle} deleteTiccleImage={deleteTiccleImage}/> :
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
