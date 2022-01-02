import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import colors from '../../../theme/colors';
import {type} from '../../../theme/fonts';
import GroupUpdateType from './components/GroupUpdateType';
import GroupSaveButton from '../../common/GroupSaveButton';
import useGroupCreate from '../../../context/hook/useGroupCreate';
import GroupUpdateInfo from './components/GroupUpdateInfo';
import {findGroupByIdIncludeImage} from '../../../service/GroupService';

const GroupUpdate = ({navigation, route}) => {
    const [groupData, setGroupData] = useState([]);

    useEffect(() => {
        // get group data
        findGroupByIdIncludeImage(route.params.groupId, setGroupData);
    }, []);
    const title = route.params.groupId;
    const mainImage = groupData.imageUrl;
    const description = groupData.description;
    const type = groupData.type;

    console.log('group update==========');
    console.log(mainImage);
    console.log(title);
    console.log(type);
    console.log(description);
    return (
        <View style={styles.container}>
            <View style={styles.groupInfo}>
                <GroupUpdateInfo
                    style={styles.groupInfo}
                    mainImage={mainImage}
                    title={title}
                    description={description}></GroupUpdateInfo>
            </View>
            <Text style={styles.title}>유형 수정하기</Text>
            <View style={styles.groupType}>
                <GroupUpdateType
                    style={styles.groupType}
                    typeNum={type}
                    navigation={navigation}></GroupUpdateType>
            </View>
            <GroupSaveButton
                text="저장하기"
                buttonDisabled={false}
                navigation={navigation}></GroupSaveButton>
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
