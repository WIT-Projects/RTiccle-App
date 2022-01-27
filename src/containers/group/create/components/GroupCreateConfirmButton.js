import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {checkIsExistingGroup} from '../../../../model/GroupModel';

import colors from '../../../../theme/colors';
import {type} from '../../../../theme/fonts';
import useGroupCreate from '../../../../context/hook/useGroupCreate';

const GroupCreateConfirmButton = ({buttonDisabled, setButtonDisable, setIsExistGroup, navigation, text}) => {
    const {groupCreate} = useGroupCreate();
    let groupTitle = groupCreate.title;

    const createGroupTextInfo = () => {
        if (checkIsExistingGroup(groupTitle)) {
            setButtonDisable(true);
            setIsExistGroup(true);
        } else {
            navigation.navigate('GroupCreateImage');
        }
    };
    return (
        <View style={{alignItems: 'center'}}>
            <TouchableOpacity
                style={[styles.touchableOpacitiy, buttonDisabled ? styles.touchableDisableColor : styles.touchableColor]}
                disabled={buttonDisabled}
                onPress={() => {
                    createGroupTextInfo();
                }}>
                <Text style={[styles.buttonText, buttonDisabled ? styles.textDisabledColor : styles.textColor]}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    touchableOpacitiy: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 60,
    },
    touchableColor: {
        backgroundColor: colors.main,
    },
    touchableDisableColor: {
        backgroundColor: colors.gray1,
    },
    buttonText: {
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize: 16,
    },
    textColor: {
        color: colors.white,
    },
    textDisabledColor: {
        color: colors.gray4,
    },
});

export default GroupCreateConfirmButton;
