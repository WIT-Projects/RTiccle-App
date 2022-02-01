import React from "react";
import { TouchableOpacity, StyleSheet, Image, Text } from "react-native";
import colors from "../../../theme/colors";
import { type } from "../../../theme/fonts";

const SettingItem = ({icon, text, pressEvent}) => {
    return (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={pressEvent}
        >
            <Image source={icon} style={styles.icon}/>
            <Text style={styles.itemText}>{text}</Text>
            <Image
                source={require('../../../assets/icon/chevron_right.png')}
                style={styles.iconChevron}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        height: 46,
    },
    icon:{
        resizeMode:'contain',
        width:16,
        height:16,
    },
    iconChevron:{
        position: 'absolute',
        right: 0,
        tintColor: colors.gray3,
        resizeMode:'contain',
        width:20,
        height:20,  
    },
    itemText:{
        paddingLeft : 12,
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize: 16,
        color : colors.main
    },
})

export default SettingItem
