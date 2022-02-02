import React, {useState, useEffect} from 'react';
import {View, StyleSheet, BackHandler} from 'react-native';
import colors from '../../../theme/colors';
import GroupUpdateSaveButton from './components/GroupUpdateSaveButton';
import GroupUpdateInfo from './components/GroupUpdateInfo';
import useGroupUpdate from '../../../context/hook/useGroupUpdate';
import GroupUpdateHeader from './components/GroupUpdateHeader';
import CustomModal from '../../common/CustomModal'

const GroupUpdate = ({navigation, route}) => {
    const {groupUpdate, setGroupUpdate} = useGroupUpdate();
    const [initialData, setInitialData] = useState({});
    const [tempData, setTempData] = useState({}) // title modal, description modal의 임시 저장 기능에 사용.
    const [modalActive, setModalActive] = useState(false); // modal 유무에 따라 보여지는 화면 요소가 다른 것에 사용.
    const [cancelModal, setCancelModal] = useState(false);

    useEffect( () =>
    {
        setInitialData(route.params.groupData);
        setGroupUpdate(route.params.groupData);
        setTempData(route.params.groupData);
        // backButton
        const backButton = () => {
            setCancelModal(true)
            return true;
          };
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backButton
        ); 
        return () => backHandler.remove();
    }, []);

    const cancelModalEvent = () => {
        navigation.goBack();
    }

    return (
        <>
            <CustomModal
                isModalVisible={cancelModal} setModalVisible={setCancelModal}
                title={"티끌 수정을 취소하시겠어요?"} leftButton={"취소"}
                rightButton={"확인"} rightButtonFunction={cancelModalEvent}
            />
            <View style={styles.container}>
                <GroupUpdateHeader
                    modalActive={modalActive}
                    setCancelModal={setCancelModal}    
                />
                <View style={styles.groupInfo}>
                    <GroupUpdateInfo
                        navigation={navigation}
                        style={styles.groupInfo}
                        tempData={ tempData }
                        setTempData={setTempData}
                        mainImage={groupUpdate.imageUrl}
                        title={groupUpdate.title}
                        description={groupUpdate.description}
                        modalActive={modalActive}
                        setModalActive={setModalActive}></GroupUpdateInfo>
                </View>
                <View style={styles.saveButton}>
                    <GroupUpdateSaveButton navigation={navigation} initialData={initialData}></GroupUpdateSaveButton>
                </View>
            </View>
        </>
        
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: colors.white,
    },
    groupInfo: {
        marginTop: 151,
    },
    saveButton: {
        marginTop: 173,
    },
});

export default GroupUpdate;
