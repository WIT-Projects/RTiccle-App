import React, {useState} from 'react';
import { View, StyleSheet,ScrollView } from 'react-native';
import TiccleImageCreateButton from './components/TiccleImageCreateButton';
import TiccleContentTextInput from './components/TiccleContentTextInput';
import TiccleCreateTextInputTitleLink from './components/TiccleCreateTextInputTitleLink';
import TiccleCreateImageGroup from './components/TiccleCreateImageGroup';
import TiccleCreateTextInputTag from './components/TiccleCreateTextInputTag';
import TiccleCreateTags from './components/TiccleCreateTags';
import colors from '../../../theme/colors';
import UseTiccleCreate from '../../../context/hook/UseTiccleCreate';
import PhotoModal from '../../common/PhotoModal';

const TiccleCreate = () => {

    const {setTiccleContent, setTiccleImages, deleteTiccleImage,
        ticcle, setTiccleTagList, setTiccleTitle, setTiccleLink} = UseTiccleCreate();

    const [photoModalVisible, setPhotoModalVisible] = useState(false);

    const photoModalVisibleTrue = () => {
        setPhotoModalVisible(true)
    }
    const [tag, setTag] = useState('');
    const initialTag = () => {
        setTag('')
    }

    return(
        <ScrollView style={styles.container}>
            <PhotoModal setImage={setTiccleImages} isModalVisible={photoModalVisible} setModalVisible={setPhotoModalVisible}/>
            <TiccleCreateTextInputTitleLink ticcleTitle={ticcle.title} setTiccleTitle={setTiccleTitle}
                                            ticcleLink={ticcle.link}   setTiccleLink={setTiccleLink}/>

            <View style={styles.imageCreateButtonContainer}>
                {(ticcle.images && ticcle.images.length > 0) ?
                <TiccleCreateImageGroup photoModalVisibleTrue={photoModalVisibleTrue}
                ticcle={ticcle} deleteTiccleImage={deleteTiccleImage}/> :
                <TiccleImageCreateButton photoModalVisibleTrue={photoModalVisibleTrue}/>
                }
            </View>

            <View style={styles. ticcleContentContainer}>
                <TiccleContentTextInput onChangeText ={setTiccleContent} value={ticcle.content}/>
            </View>

            <TiccleCreateTextInputTag
                fontSize={18} fontWeight={'normal'} placeHolderTextcolor ={colors.gray3}
                placeholder ={"태그 ex. #경제 #마케팅 (선택)"} onChangeText={setTag}
                setTiccleTagList={setTiccleTagList} tag={tag} initialTag={initialTag}
            />

            <TiccleCreateTags tags={ticcle.tagList}/>
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
