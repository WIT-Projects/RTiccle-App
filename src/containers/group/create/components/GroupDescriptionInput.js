import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

import colors from '../../../../theme/colors';
import {type} from '../../../../theme/fonts';
import useGroupCreate from '../../../../context/hook/useGroupCreate';

const GroupDescriptionInput = () => {
    const {groupCreate, setGroupDescription} = useGroupCreate();
    var groupDescriptionLength = groupCreate.description.length;
    const maxLengthOfDescription = 23;

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textinput}
                onChangeText={setGroupDescription}
                placeholder="설명 (선택)"
                placeholderTextColor={colors.gray2}
                maxLength={maxLengthOfDescription}></TextInput>
            <Text style={styles.textCount}>{groupDescriptionLength}/23</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: colors.gray1,
        borderBottomWidth: 1,
    },
    textinput: {
        width: 330,
        fontSize: 16,
        fontFamily: type.spoqaHanSansNeo_Regular,
    },
    textCount: {
        color: colors.gray3,
        fontSize: 12,
        fontFamily: type.spoqaHanSansNeo_Regular,
        paddingRight: 5,
    },
});

export default GroupDescriptionInput;
