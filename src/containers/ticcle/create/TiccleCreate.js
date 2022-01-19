import React, {useEffect, useState} from 'react';
import {StyleSheet,ScrollView, BackHandler } from 'react-native';
import TiccleCreateGroupSelect from './components/group/TiccleCreateGroupSelect';
import TiccleContentTextInput from './components/textinput/TiccleContentTextInput';
import TiccleCreateTextInputTitleLink from './components/textinput/TiccleCreateTextInputTitleLink';
import TiccleCreateImageAdd from './components/image/TiccleCreateImageAdd';
import TiccleCreateTextInputTag from './components/textinput/TiccleCreateTextInputTag';
import TiccleCreateTags from './components/TiccleCreateTags';
import colors from '../../../theme/colors';
import useTiccleCreate from '../../../context/hook/useTiccleCreate';
import PhotoModal from '../../common/PhotoModal';
import GroupListModal from './components/group/GroupListModal';
import TiccleCreateHeader from './components/header/TiccleCreateHeader';
import { checkScreenFrom } from './service/checkScreenFrom';

const TiccleCreate = ({route, navigation}) => {
    const {setTiccleImages, setTiccleGroup,initialTiccle } = useTiccleCreate();
    const [groupListModalVisible, setGroupListModalVisible] = useState(false);
    const [photoModalVisible, setPhotoModalVisible] = useState(false);
    const [isUpdateMode, setIsUpdateMode] = useState(false);

    useEffect(() => {
        const tabPress = navigation.addListener('tabPress', () => {
            navigation.setParams({screenFrom : 'home'});
        })
        if (route.params !== undefined){
            checkScreenFrom(route.params.screenFrom, setIsUpdateMode, setTiccleGroup);
        }
        console.log(route);
        const backButtonEvent = () => {
            navigation.goBack();
            setIsUpdateMode(false);
            initialTiccle();
            return true
          };
          const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backButtonEvent
          );
        return () => {
            backHandler.remove();
            tabPress;
        };
    },[route])

    return(
        <>
            <TiccleCreateHeader isUpdateMode={isUpdateMode} setIsUpdateMode={setIsUpdateMode}/>
            <ScrollView style={styles.container}>
                {/* Modal */}
                <PhotoModal setImage={setTiccleImages} isModalVisible={photoModalVisible} setModalVisible={setPhotoModalVisible}/>
                <GroupListModal isModalVisible={groupListModalVisible} setModalVisible={setGroupListModalVisible}/>
                {/* ticcle */}
                <TiccleCreateGroupSelect setGroupListModalVisible={setGroupListModalVisible}/>
                <TiccleCreateTextInputTitleLink/>
                <TiccleCreateImageAdd setPhotoModalVisible={setPhotoModalVisible}/>
                <TiccleContentTextInput/>
                <TiccleCreateTextInputTag/>
                <TiccleCreateTags/>
            </ScrollView>
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : colors.white,
        paddingHorizontal : 18
    },
})

export default TiccleCreate
