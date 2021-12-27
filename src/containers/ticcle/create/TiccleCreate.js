import React, {useState} from 'react';
import { View, StyleSheet,ScrollView } from 'react-native';
import TiccleImageCreateButton from './components/TiccleImageCreateButton';
import TiccleContentTextInput from './components/TiccleContentTextInput';
import TiccleCreateTextInputGroup from './components/TiccleCreateTextInputGroup';
import TiccleCreateImageGroup from './components/TiccleCreateImageGroup';
import colors from '../../../theme/colors';
import UseTiccleCreate from '../../../context/hook/UseTiccleCreate';
import PhotoModal from '../../common/PhotoModal';

const TiccleCreate = () => {

    const {setTiccleContent, setTiccleImage, ticcleCreate} = UseTiccleCreate();

    const [photoModalVisible, setPhotoModalVisible] = useState(false)

    const photoModalVisibleTrue = () => {
        setPhotoModalVisible(true)
    }

    return(
        <ScrollView style={styles.container}>
            <PhotoModal setImage={setTiccleImage} isModalVisible={photoModalVisible} setModalVisible={setPhotoModalVisible}/>
            <TiccleCreateTextInputGroup/>

            <View style={styles.imageCreateButtonContainer}>
                {(ticcleCreate.image && ticcleCreate.image.length > 0) ?
                <TiccleCreateImageGroup photoModalVisibleTrue={photoModalVisibleTrue}/> :
                <TiccleImageCreateButton photoModalVisibleTrue={photoModalVisibleTrue}/>
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
