import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet,ScrollView, BackHandler } from 'react-native';
import TiccleCreateGroupSelect from './components/group/TiccleCreateGroupSelect';
import TiccleContentTextInput from './components/textinput/TiccleContentTextInput';
import TiccleCreateTextInputTitleLink from './components/textinput/TiccleCreateTextInputTitleLink';
import TiccleCreateImageAdd from './components/image/TiccleCreateImageAdd';
import TiccleCreateTextInputTag from './components/textinput/TiccleCreateTextInputTag';
import TiccleCreateTags from './components/TiccleCreateTags';
import colors from '../../../theme/colors';
import PhotoModal from '../../common/PhotoModal';
import GroupListModal from './components/group/GroupListModal';
import TiccleCreateHeader from './components/header/TiccleCreateHeader';
import useTiccleCreate from '../../../context/hook/useTiccleCreate';
import { useNavigation } from '@react-navigation/native';
import { checkGroupId } from './service/checkGroupId';

const TiccleCreateScreen = ({route}) => {
    const {setTiccleImages, setTiccleGroup,initialTiccle } = useTiccleCreate();
    const [groupListModalVisible, setGroupListModalVisible] = useState(false);
    const [photoModalVisible, setPhotoModalVisible] = useState(false);
    const scrollRef = useRef();
    const navigation = useNavigation();

    useEffect(() => {
        const tabPress = navigation.addListener('tabPress', () => {
            navigation.setParams({groupId : ''});
        })
        if (route.params !== undefined){
            checkGroupId(route.params.groupId, setTiccleGroup);
        }
        console.log(route);
        const backButtonEvent = () => {
            navigation.goBack();
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
            <TiccleCreateHeader/>
            <ScrollView style={styles.container} ref ={scrollRef}>
                {/* Modal */}
                <PhotoModal setImage={setTiccleImages} isModalVisible={photoModalVisible} setModalVisible={setPhotoModalVisible}/>
                <GroupListModal isModalVisible={groupListModalVisible} setModalVisible={setGroupListModalVisible}/>
                {/* ticcle */}
                <TiccleCreateGroupSelect setGroupListModalVisible={setGroupListModalVisible}/>
                <TiccleCreateTextInputTitleLink/>
                <TiccleCreateImageAdd setPhotoModalVisible={setPhotoModalVisible}/>
                <TiccleContentTextInput/>
                <TiccleCreateTextInputTag scrollRef={scrollRef}/>
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

export default TiccleCreateScreen
