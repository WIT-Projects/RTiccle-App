import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import colors from '../../../../theme/colors';
import {type} from '../../../../theme/fonts';
import useGroupUpdate from '../../../../context/hook/useGroupUpdate';
import useGroupChanged from '../../../../context/hook/useGroupChanged';
import {doUpdateGroup} from '../../../../model/GroupModel';

const GroupUpdateSaveButton = ({navigation, initialData}) => {
    const {groupUpdate, initialGroupUpdate} = useGroupUpdate();
    const {isGroupChanged, setIsGroupChanged} = useGroupChanged();

    const groupUpdateFirebase = () => {
        let newInfo = [];
        let image = '';
        if (groupUpdate.title != initialData.title)
            newInfo.title = groupUpdate.title;
        if (groupUpdate.description != initialData.description)
            newInfo.description = groupUpdate.description;
        if (groupUpdate.imageUrl != initialData.imageUrl)
            image = groupUpdate.imageUrl; // imageUrl이지만 새로 업로드되는 이미지의 source임.

        const groupId = initialData.id;
        try {
            if (image != '') {
                const oldImageName = initialData.mainImage;
                const newImageSource = image;
                doUpdateGroup(
                    groupId,
                    newInfo,
                    true,
                    oldImageName,
                    newImageSource,
                );
            } else {
                doUpdateGroup(groupId, newInfo, false);
            }
            setIsGroupChanged(!isGroupChanged); // notify groupData changed
            console.log('Group update save========================');
            console.log(isGroupChanged);
            navigation.navigate({
                name: 'GroupDetail',
                params: {
                    groupData: groupUpdate,
                },
                merge: true,
            });
            initialGroupUpdate();
        } catch (error) {
            console.error(error);
        }
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
    buttonText: {
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize: 16,
    },
    textColor: {
        color: colors.white,
    },
});

export default GroupUpdateSaveButton;
