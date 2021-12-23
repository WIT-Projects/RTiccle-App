import React, {useState} from 'react';
import { View, StyleSheet,ScrollView } from 'react-native';
import TiccleImageCreateButton from './components/TiccleImageCreateButton';
import TiccleContentTextInput from './components/TiccleContentTextInput';
import TiccleCreateTextInputGroup from './components/TiccleCreateTextInputGroup';
import TiccleImageGroup from './components/TiccleImageGroup';
import colors from '../../../theme/colors';
import ImagePicker from 'react-native-image-crop-picker';
import useTiccleCreate from '../../../context/hook/UseTiccleCreate';
import PhotoModal from '../../common/PhotoModal';

const TiccleCreate = () => {

    const {setTiccleContent, setTiccleImage, ticcleCreate} = useTiccleCreate();

    const [modalVisible, setModalVisible] = useState(false)

    const setModalVisibleTrue = () => {
        setModalVisible(true)
    }

    return(
        <ScrollView style={styles.container}>
            <PhotoModal setImage={setTiccleImage} isModalVisible={modalVisible} setModalVisible={setModalVisible}/>
            <TiccleCreateTextInputGroup/>

            <View style={styles.imageCreateButtonContainer}>
                {(ticcleCreate.image && ticcleCreate.image.length > 0) ?
                <TiccleImageGroup setModalVisibleTrue={setModalVisibleTrue}/> :
                <TiccleImageCreateButton setModalVisibleTrue={setModalVisibleTrue}/>
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
