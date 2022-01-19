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
                navigateTo.navigate('TiccleCreate', {screenFrom : groupId});
            }}>
            <Image
                source={require('../../../../assets/icon/make.png')}
                style={styles.floatingButtonStyle}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    // Floating button css
    touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    floatingButtonStyle: {
        resizeMode: 'contain',
        width: 60,
        height: 60,
    },
});

export default GroupDetailFloatingButton
