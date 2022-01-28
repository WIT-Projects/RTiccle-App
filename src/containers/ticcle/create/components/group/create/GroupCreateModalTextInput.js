import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import colors from '../../../../../../theme/colors';
import { type } from '../../../../../../theme/fonts';

const GroupCreateModalTextInput = ({groupTitle , setGroupTitle, createFail}) => {

    var groupTitleLength = groupTitle.length;
    const maxLengthOfTitle = 15;

    return (
        <View style={[styles.container, createFail ? styles.failColor : null] }>
            <TextInput
                style={[styles.textinput, createFail ? styles.failTextColor: null]}
                value={groupTitle}
                onChangeText={setGroupTitle}
                placeholder="그룹 제목"
                placeholderTextColor={colors.gray2}
                maxLength={maxLengthOfTitle}></TextInput>
            <Text style={[styles.textCount, createFail ? styles.failTextColor : null]}>{groupTitleLength}/{maxLengthOfTitle}</Text>
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
        marginTop: 15,
        marginHorizontal: 20,
    },
    failColor:{
        borderColor: colors.red,
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
    failTextColor :{
        color: colors.red
    }
});

export default GroupCreateModalTextInput;
