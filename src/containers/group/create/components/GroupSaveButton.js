import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import colors from '../../../../theme/colors';
import {type} from '../../../../theme/fonts';
import useGroupCreate from '../../../../context/hook/useGroupCreate';
import {doCreateGroup} from '../../../../model/GroupModel';
import useGroupChanged from '../../../../context/hook/useGroupChanged';

const GroupSaveButton = ({navigation, text}) => {
    const {groupCreate, initialGroupCreate} = useGroupCreate();
    const title = groupCreate.title;
    const description = groupCreate.description;
    const mainImage = groupCreate.mainImage;
    const [buttonDisable, setButtonDisable] = useState(true);
    const {isGroupChanged, setIsGroupChanged} = useGroupChanged();

    useEffect(() => {
        groupCreate.mainImage != '' ? setButtonDisable(false) : setButtonDisable(true);
    }, [groupCreate.mainImage]);

    const groupCreateFirebase = async () => {
        const newGroup = {
            title: title,
            description: description,
            bookmark: false,
        };
        const imageSource = mainImage;
        const groupData = await doCreateGroup(newGroup, imageSource);
        setIsGroupChanged(!isGroupChanged); // notify groupData changed
        initialGroupCreate();
        navigation.navigate('GroupDetail', {groupData: groupData});
    };

    return (
        <View style={{alignItems: 'center'}}>
            <TouchableOpacity
                style={[styles.touchableOpacitiy, buttonDisable ? styles.touchableDisableColor : styles.touchableColor]}
                onPress={() => {
                    groupCreateFirebase();
                }}>
                <Text style={[styles.buttonText, buttonDisable ? styles.textDisabledColor : styles.textColor]}>{text}</Text>
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

export default GroupSaveButton;
