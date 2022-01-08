import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import colors from '../../theme/colors';
import {type} from '../../theme/fonts';
import useGroupCreate from '../../context/hook/useGroupCreate';
import {uploadNewGroup} from '../../service/GroupService';

const GroupSaveButton = ({buttonDisabled, navigation, text}) => {
    const {groupCreate, initialGroupCreate} = useGroupCreate();
    const title = groupCreate.title;
    const type = groupCreate.type;
    const description = groupCreate.description;
    const mainImage = groupCreate.mainImage;

    const groupCreateFirebase = () => {
        const groupName = title;
        const newGroup = {
            type: type,
            title: title,
            description: description,
            bookmark: false,
        };
        const imageSource = mainImage;
        uploadNewGroup(groupName, newGroup, imageSource).then(ref =>
            console.log(ref),
        );
        initialGroupCreate();
        navigation.navigate('Home');
    };

    return (
        <View style={{alignItems: 'center'}}>
            <TouchableOpacity
                style={[
                    styles.touchableOpacitiy,
                    buttonDisabled
                        ? styles.touchableDisableColor
                        : styles.touchableColor,
                ]}
                disabled={buttonDisabled}
                onPress={() => {
                    groupCreateFirebase();
                }}>
                <Text
                    style={[
                        styles.buttonText,
                        buttonDisabled
                            ? styles.textDisabledColor
                            : styles.textColor,
                    ]}>
                    {text}
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

export default GroupSaveButton;
