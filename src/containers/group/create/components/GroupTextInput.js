import React from 'react';
import {View, StyleSheet} from 'react-native';
import GroupTitleInput from './GroupTitleInput';
import GroupDescriptionInput from './GroupDescriptionInput';

const GroupTextInput = ({setButtonDisable, isExistGroup, setIsExistGroup}) => {
    return (
        <View style={styles.container}>
            <GroupTitleInput setButtonDisable={setButtonDisable} isExistGroup={isExistGroup} setIsExistGroup={setIsExistGroup}></GroupTitleInput>
            <GroupDescriptionInput></GroupDescriptionInput>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 18,
        paddingTop: 46,
        paddingBottom: 46
    },
});

export default GroupTextInput;
