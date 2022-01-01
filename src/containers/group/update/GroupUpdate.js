import React from 'react';
import {View, StyleSheet} from 'react-native';

import colors from '../../../theme/colors';
import GroupUpdateType from './components/GroupUpdateType';
import GroupSaveButton from '../../common/GroupSaveButton';

const GroupUpdate = ({navigation}) => {
    return (
        <View style={styles.container}>
            <GroupUpdateType></GroupUpdateType>
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
