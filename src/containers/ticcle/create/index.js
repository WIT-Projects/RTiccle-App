import React from 'react';
import { View, StyleSheet,ScrollView } from 'react-native';

import TiccleImageCreateButton from './components/TiccleImageCreateButton';
import TiccleContentTextInput from './components/TiccleContentTextInput';
import TiccleCreateTextInputGroup from './group/TiccleCreateTextInputGroup';
import TiccleImageGroup from './group/TiccleImageGroup';
import colors from '../../../theme/colors';

import useTiccleCreateText from '../../../context/hook/useTiccleCreateText';
import useTiccleCreateImage from '../../../context/hook/useTiccleCreateImage';

import ImagePicker from 'react-native-image-crop-picker';

const TiccleCreate = () => {

    const {setContent} = useTiccleCreateText();
    const {setImage, ticcleCreateImage} = useTiccleCreateImage();

    const setImageGallery = () => {
        ImagePicker.openPicker({
            width : 375,
            height : 375,
            cropping: true
        }).then(image => {
            console.log(image.path)
            setImage(image.path)
        })
    }

    return(
        <ScrollView style={styles.container}>

            <TiccleCreateTextInputGroup/>

            <View style={styles.imageCreateButtonContainer}>
                {(ticcleCreateImage && ticcleCreateImage.length > 0) ?
                <TiccleImageGroup setImage={setImageGallery}/> :
                <TiccleImageCreateButton setImage={setImageGallery}/>
                }
            </View>

            <View style={styles. ticcleContentContainer}>
                <TiccleContentTextInput onChangeText ={setContent}/>
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
