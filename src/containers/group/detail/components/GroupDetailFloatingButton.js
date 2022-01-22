import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const GroupDetailFloatingButton = ({groupId}) => {
    const navigateTo = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={styles.touchableOpacityStyle}
            onPress={() => {
                navigateTo.navigate('TiccleCreate', {groupId : groupId});
            }}>
            <Image
                source={require('../../../../assets/icon/make.png')}
                style={styles.floatingButtonStyle}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    touchableOpacityStyle: {
        position: 'absolute',
        right: 25,
        bottom: 22,
        width: 51,
        height: 51,
        borderRadius: 26,
    },
    floatingButtonStyle: {
        resizeMode: 'contain',
        width: 51,
        height: 51,
    },
});

export default GroupDetailFloatingButton
