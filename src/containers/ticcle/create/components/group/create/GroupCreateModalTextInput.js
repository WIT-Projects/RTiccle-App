import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import colors from '../../../../../../theme/colors';
import { type } from '../../../../../../theme/fonts';

const GroupCreateModalTextInput = ({groupTitle , setGroupTitle}) => {

    var groupTitleLength = groupTitle.length;
    const maxLengthOfTitle = 15;

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textinput}
                value={groupTitle}
                onChangeText={setGroupTitle}
                placeholder="그룹 제목"
                placeholderTextColor={colors.gray2}
                maxLength={maxLengthOfTitle}></TextInput>
            <Text style={styles.textCount}>{groupTitleLength}/{maxLengthOfTitle}</Text>
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
        marginTop: 35,
        marginHorizontal: 20,
    },
    textinput: {
        width: 260,
        fontSize: 18,
        fontFamily: type.spoqaHanSansNeo_Bold,
    },
    textCount: {
        color: colors.gray3,
        fontSize: 12,
        fontFamily: type.spoqaHanSansNeo_Regular,
        paddingRight: 5,
    },
});

export default GroupCreateModalTextInput;
