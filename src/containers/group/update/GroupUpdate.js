import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';

import colors from '../../../theme/colors';
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
            <GroupUpdateInfo
                mainImage={mainImage}
                title={title}
                description={description}></GroupUpdateInfo>
            <GroupUpdateType typeNum={type}></GroupUpdateType>
            <GroupSaveButton></GroupSaveButton>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.white,
    },
    typeList: {
        paddingHorizontal: 55,
    },
    typeLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 28,
    },
});

export default GroupUpdate;
