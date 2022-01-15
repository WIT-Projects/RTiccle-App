import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import colors from "../../../../../../theme/colors";
import { type } from "../../../../../../theme/fonts";

const GroupListModalTitle = ({setModalVisible}) => {
    const title = '그룹 선택'
    return(
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}</Text>
            <TouchableOpacity style={styles.xButtonTouchable} onPress={() => {setModalVisible(false)}}>
                <Image source={require('../../../../../../assets/images/x_button.png')} style={styles.image}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height : 68,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray1
    },
    titleText :{
        fontFamily: type.spoqaHanSansNeo_Bold,
        fontSize : 18,
        color: colors.main
    },
    xButtonTouchable:{
        position: 'absolute',
        alignItems: 'center',
        justifyContent : 'center',
        top: 18,
        right : 26,
        width: 30,
        height : 30
    },
    image:{
        width : 15,
        height: 15,
        resizeMode : 'contain'
    },
})

export default GroupListModalTitle
