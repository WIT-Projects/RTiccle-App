import React, {useEffect} from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';

import colors from '../../../../theme/colors';
import {type} from '../../../../theme/fonts';
import useGroupCreate from '../../../../context/hook/useGroupCreate';

const GroupTitleInput = ({setButtonDisable, isExistGroup}) => {
    const {groupCreate, setGroupTitle} = useGroupCreate();
    var groupTitleLength = groupCreate.title.length;
    const maxLengthOfTitle = 15;

    useEffect(() => {
        groupTitleLength > 0 ? setButtonDisable(false) : setButtonDisable(true);
    }, [groupCreate.title]);

    return (
        <>
            <View style={[styles.textInput, isExistGroup ? styles.red : null]}>
                <TextInput
                    autoFocus={true}
                    style={styles.text}
                    onChangeText={setGroupTitle}
                    placeholder="음식, 공부, 전시 등"
                    placeholderTextColor={colors.gray2}
                    maxLength={maxLengthOfTitle}></TextInput>
                <Text style={styles.textCount}>{groupTitleLength}/{maxLengthOfTitle}</Text>
            </View>
            <Text style={[styles.createFailText, isExistGroup ? null : {opacity: 0}]}>이미 존재하는 그룹입니다!</Text>
        </>
    );
};

const styles = StyleSheet.create({
    textInput: {
        width: '100%',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: colors.gray1,
    },
    text: {
        fontSize: 24,
        fontFamily: type.spoqaHanSansNeo_Bold,
    },
    red: {
        borderColor: 'red',
    },
    createFailText: {
        fontFamily: type.notoSansKR_Medium,
        fontSize: 12,
        color: '#FC6969',
        paddingBottom: 10,
    },
    textCount: {
        color: colors.gray3,
        fontSize: 12,
        fontFamily: type.spoqaHanSansNeo_Regular,
        paddingRight: 5,
    },
});

export default GroupTitleInput;
