import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import colors from '../../../theme/colors';
import {type} from '../../../theme/fonts';
import GroupUpdateType from './components/GroupUpdateType';
import GroupSaveButton from '../../common/GroupSaveButton';
import useGroupCreate from '../../../context/hook/useGroupCreate';
import GroupUpdateInfo from './components/GroupUpdateInfo';
import {findGroupByIdIncludeImage} from '../../../service/GroupService';
import useGroupUpdate from '../../../context/hook/useGroupUpdate';

const GroupUpdate = ({navigation, route}) => {
    const {groupUpdate, setGroupUpdate, initialGroupUpdate} = useGroupUpdate();

    const [initialData, setInitialData] = useState([]);

    const [modalActive, setModalActive] = useState(false); // modal 유무에 따라 보여지는 화면 요소가 다른 것에 사용.

    useEffect(() => {
        findGroupByIdIncludeImage(route.params.groupId, setInitialData);
        initialGroupUpdate();
        console.log('fetch=======');
    }, []);
    useEffect(() => {
        setGroupUpdate(initialData);
        console.log('=======groupUpdate');
        console.log(groupUpdate);
    }, [initialData]);

    return (
        <View style={styles.container}>
            <View style={styles.groupInfo}>
                <GroupUpdateInfo
                    initialData={initialData}
                    style={styles.groupInfo}
                    mainImage={groupUpdate.imageUrl}
                    title={groupUpdate.title}
                    description={groupUpdate.description}
                    navigation={navigation}
                    modalActive={modalActive}
                    setModalActive={setModalActive}></GroupUpdateInfo>
            </View>
            {!modalActive && (
                <View>
                    <Text style={styles.title}>유형 수정하기</Text>
                    <View style={styles.groupType}>
                        <GroupUpdateType
                            style={styles.groupType}
                            typeNum={groupUpdate.type}
                            navigation={navigation}></GroupUpdateType>
                    </View>
                    <GroupSaveButton
                        text="저장하기"
                        buttonDisabled={false}
                        navigation={navigation}></GroupSaveButton>
                </View>
            )}
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
        paddingBottom: 28,
    },
    title: {
        fontFamily: type.spoqaHanSansNeo_Bold,
        fontSize: 16,
        paddingLeft: 22,
        paddingBottom: 46,
    },
    groupType: {
        paddingBottom: 59,
    },
});

export default GroupUpdate;
