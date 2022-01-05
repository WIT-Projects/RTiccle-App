import React, {useState} from 'react';
import { View, StyleSheet,ScrollView } from 'react-native';
import TiccleCreateGroupSelect from './components/group/TiccleCreateGroupSelect';
import TiccleCreateImageCreateButton from './components/image/TiccleCreateImageCreateButton';
import TiccleContentTextInput from './components/textinput/TiccleContentTextInput';
import TiccleCreateTextInputTitleLink from './components/textinput/TiccleCreateTextInputTitleLink';
import TiccleCreateImageGroup from './components/image/TiccleCreateImageGroup';
import TiccleCreateTextInputTag from './components/textinput/TiccleCreateTextInputTag';
import TiccleCreateTags from './components/TiccleCreateTags';
import colors from '../../../theme/colors';
import UseTiccleCreate from '../../../context/hook/UseTiccleCreate';
import PhotoModal from '../../common/PhotoModal';
import GroupListModal from './components/group/GroupListModal';

const TiccleCreate = () => {

    const {setTiccleContent, setTiccleImages, deleteTiccleImage,
        ticcle, setTiccleTitle, setTiccleLink, setTiccleGroup,
        setTiccleTagList, deleteTiccleTagList } = UseTiccleCreate();
    const [groupListModalVisible, setGroupListModalVisible] = useState(false);
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
            {/* Modal */}
            <PhotoModal setImage={setTiccleImages} isModalVisible={photoModalVisible} setModalVisible={setPhotoModalVisible}/>
            <GroupListModal isModalVisible={groupListModalVisible} setModalVisible={setGroupListModalVisible}
                            setTiccleGroup={setTiccleGroup} ticcle={ticcle}/>

            {/* ticcle */}
            <TiccleCreateGroupSelect ticcleGroup={ticcle.group} setGroupListModalVisible={setGroupListModalVisible}/>
            <TiccleCreateTextInputTitleLink ticcleTitle={ticcle.title} setTiccleTitle={setTiccleTitle}
                                            ticcleLink={ticcle.link}   setTiccleLink={setTiccleLink}/>
            <View style={styles.imageCreateButtonContainer}>
                {(ticcle.images && ticcle.images.length > 0) ?
                <TiccleCreateImageGroup photoModalVisibleTrue={photoModalVisibleTrue}
                ticcle={ticcle} deleteTiccleImage={deleteTiccleImage}/> :
                <TiccleCreateImageCreateButton photoModalVisibleTrue={photoModalVisibleTrue}/>
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
            <TiccleCreateTags tags={ticcle.tagList} deleteTiccleTagList={deleteTiccleTagList}/>
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
