import React from 'react';
import { View, StyleSheet,ScrollView } from 'react-native';
import TiccleImageCreateButton from './components/TiccleImageCreateButton';
import TiccleContentTextInput from './components/TiccleContentTextInput';
import TiccleCreateTextInputGroup from './group/TiccleCreateTextInputGroup';
import TiccleImageGroup from './group/TiccleImageGroup';
import colors from '../../../theme/colors';
import ImagePicker from 'react-native-image-crop-picker';
import useTiccleCreate from '../../../context/hook/UseTiccleCreate';

const TiccleCreate = () => {

    const {setTiccleContent, setTiccleImage, ticcleCreate} = useTiccleCreate();

    const setImageGallery = () => {
        ImagePicker.openPicker({
            width : 375,
            height : 375,
            cropping: true
        }).then(image => {
            console.log(image.path)
            setTiccleImage(image.path)
        })
    }

    return(
        <ScrollView style={styles.container}>

            <TiccleCreateTextInputGroup/>

            <View style={styles.imageCreateButtonContainer}>
                {(ticcleCreate.image && ticcleCreate.image.length > 0) ?
                <TiccleImageGroup setImage={setImageGallery}/> :
                <TiccleImageCreateButton setImage={setImageGallery}/>
                }
            </View>

            <View style={styles. ticcleContentContainer}>
                <TiccleContentTextInput onChangeText ={setTiccleContent}/>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : colors.white,
        paddingHorizontal : 18
    },
    imageCreateButtonContainer: {
        marginTop : 16,
    },
    ticcleContentContainer: {
        marginTop: 16,
    }
})

export default TiccleCreate
