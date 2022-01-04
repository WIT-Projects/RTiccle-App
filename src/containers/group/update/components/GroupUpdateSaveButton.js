import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import colors from '../../../../theme/colors';
import {type} from '../../../../theme/fonts';
import useGroupUpdate from '../../../../context/hook/useGroupUpdate';
import {
    updateGroupInfo,
    updateGroupImage,
} from '../../../../service/GroupService';

const GroupUpdateSaveButton = ({navigation, initialData}) => {
    const {groupUpdate, initialGroupUpdate} = useGroupUpdate();
    let title;
    {
        groupUpdate.title === '' && initialData.title != ''
            ? (title = initialData.title)
            : (title = groupUpdate.title);
    }
    let type = groupUpdate.type;
    let description;
    {
        groupUpdate.description === '' && initialData.description != ''
            ? (description = initialData.description)
            : (description = groupUpdate.description);
    }
    let image = '';
    if (groupUpdate.mainImage != initialData.mainImage)
        image = groupUpdate.mainImage;

    const groupUpdateFirebase = () => {
        const groupId = initialData.title;
        const newInfo = {
            type: type,
            title: title,
            description: description,
        };
        const oldImageName = initialData.mainImage;
        const newImageSource = image;
        updateGroupInfo(groupId, newInfo);
        if (image != '')
            updateGroupImage(groupId, oldImageName, newImageSource);
        initialGroupUpdate();
        navigation.goBack();
    };

    return (
        <View style={{alignItems: 'center'}}>
            <TouchableOpacity
                style={[styles.touchableOpacitiy, styles.touchableColor]}
                onPress={() => {
                    groupUpdateFirebase();
                }}>
                <Text style={[styles.buttonText, styles.textColor]}>
                    저장하기
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    touchableOpacitiy: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 168,
        height: 40,
        borderRadius: 24,
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

export default GroupUpdateSaveButton;
