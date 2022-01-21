import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

const TiccleDetailFloatingButton = () => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={styles.touchableOpacityStyle}
            onPress={() => {
                console.log('delete Ticcle');
            }}>
            <Image
                source={require('../../../../assets/icon/trash_circle.png')}
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

export default TiccleDetailFloatingButton
