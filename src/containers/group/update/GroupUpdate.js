import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import colors from '../../../theme/colors';
import {type} from '../../../theme/fonts';
import GroupUpdateSaveButton from './components/GroupUpdateSaveButton';
import GroupUpdateInfo from './components/GroupUpdateInfo';
import useGroupUpdate from '../../../context/hook/useGroupUpdate';
import GroupUpdateHeader from './components/GroupUpdateHeader';

const GroupUpdate = ({navigation, route}) => {
    const {groupUpdate, setGroupUpdate} = useGroupUpdate();
    const [initialData, setInitialData] = useState({});
    const [modalActive, setModalActive] = useState(false); // modal 유무에 따라 보여지는 화면 요소가 다른 것에 사용.

    useEffect( () =>
    {
        const JSONGroupData = JSON.parse(JSON.stringify(route.params.groupData))
        setInitialData(route.params.groupData);
        setGroupUpdate(route.params.groupData);
    }, []);

    return (
        <View style={styles.container}>
            <GroupUpdateHeader modalActive={modalActive}></GroupUpdateHeader>
            <View style={styles.groupInfo}>
                <GroupUpdateInfo
                    navigation={navigation}
                    style={styles.groupInfo}
                    initialData={ initialData }
                    setInitialData={setInitialData}
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
