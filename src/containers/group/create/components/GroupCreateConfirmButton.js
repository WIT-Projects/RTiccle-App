import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import colors from '../../../../theme/colors';
import {type} from '../../../../theme/fonts';

const GroupCreateConfirmButton = ({buttonDisabled, navigation, text}) => {
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
                    navigation.navigate('GroupCreateImage');
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
