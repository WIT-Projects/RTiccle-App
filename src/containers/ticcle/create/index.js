import React from 'react';
import { View, StyleSheet,ScrollView } from 'react-native';

import TiccleImageCreateButton from './components/TiccleImageCreateButton';
import TiccleContentTextInput from './components/TiccleContentTextInput';
import TiccleCreateTextInputGroup from './group/TiccleCreateTextInputGroup';
import TiccleImageGroup from './group/TiccleImageGroup';
import colors from '../../../theme/colors';

import useTiccleCreateText from '../../../context/hook/useTiccleCreateText';
import useTiccleCreateImage from '../../../context/hook/useTiccleCreateImage';


const TiccleCreate = () => {

    const {setContent} = useTiccleCreateText();
    const {setImage, ticcleCreateImage} = useTiccleCreateImage();

    return(
        <ScrollView style={styles.container}>

            <TiccleCreateTextInputGroup/>

            <View style={styles.imageCreateButtonContainer}>
                {(ticcleCreateImage && ticcleCreateImage.length > 1) ?
                <TiccleImageGroup/> :
                <TiccleImageCreateButton setImage={setImage}/>
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
