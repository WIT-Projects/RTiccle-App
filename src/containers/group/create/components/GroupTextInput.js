import React from 'react';
import {View, StyleSheet} from 'react-native';
import GroupTitleInput from './GroupTitleInput';
import GroupDescriptionInput from './GroupDescriptionInput';

const GroupTextInput = ({setButtonDisable}) => {
    return (
        <View style={styles.container}>
            <GroupTitleInput
                setButtonDisable={setButtonDisable}></GroupTitleInput>
            <GroupDescriptionInput></GroupDescriptionInput>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: '100%',
        height: 240,
        paddingHorizontal: 18,
        marginBottom: 146,
    },
});

export default GroupTextInput;
