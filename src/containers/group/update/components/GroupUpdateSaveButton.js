import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../../../../theme/colors';
import {type} from '../../../../theme/fonts';
import useGroupUpdate from '../../../../context/hook/useGroupUpdate';
import useGroupChanged from '../../../../context/hook/useGroupChanged';
import {doUpdateGroup} from '../../../../model/GroupModel';
import {useErrorHandler} from 'react-error-boundary';

const GroupUpdateSaveButton = ({navigation, initialData, setIsLoading}) => {
    const {groupUpdate, initialGroupUpdate, setGroupUpdateImage} = useGroupUpdate();
    const {isGroupChanged, setIsGroupChanged} = useGroupChanged();
    const handleError = useErrorHandler(); // for error handling

    const groupUpdateFirebase = async () => {
        let newInfo = [];
        let image = '';
        const groupId = initialData.id;

        setIsLoading(true);
        if (groupUpdate.title != initialData.title) newInfo.title = groupUpdate.title;
        if (groupUpdate.description != initialData.description) newInfo.description = groupUpdate.description;
        if (groupUpdate.imageUrl != initialData.imageUrl) image = groupUpdate.imageUrl; // imageUrl이지만 새로 업로드되는 이미지의 source임.

        if (image != '') {
            const oldImageName = initialData.mainImage;
            const newImageSource = image;
            const newImageUrl = await doUpdateGroup(groupId, newInfo, true, oldImageName, newImageSource).catch(err => handleError(err));
            setGroupUpdateImage(newImageUrl);
        } else {
            doUpdateGroup(groupId, newInfo, false).catch(err => handleError(err));
        }
        setIsGroupChanged(!isGroupChanged); // notify groupData changed
        initialGroupUpdate();
        setIsLoading(false);
        navigation.navigate({
            name: 'GroupDetail',
            params: {
                groupData: groupUpdate,
            },
            merge: true,
        });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.touchableOpacitiy, styles.touchableColor]}
                onPress={() => {
                    groupUpdateFirebase();
                }}>
                <Text style={[styles.buttonText, styles.textColor]}>저장하기</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        paddingBottom:30,
    },
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
