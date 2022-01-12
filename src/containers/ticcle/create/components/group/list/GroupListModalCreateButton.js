import React from "react";
import { Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import colors from "../../../../../../theme/colors";
import { type } from "../../../../../../theme/fonts";

const GroupListModalCreateButton = ({setGroupCreateModalVisible}) => {
    return(
        <TouchableOpacity style={styles.newGroupButtonContainer} onPress={() => setGroupCreateModalVisible(true)}>
            <Image source={require('../../../../../../assets/icon/plus_circle.png')} style={styles.newGroupButtonImage}/>
            <Text style={styles.newGroupButtonText}>새로운 그룹 생성하기</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    
    newGroupButtonContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 2,
    },
    newGroupButtonImage:{
        resizeMode: 'contain',
        width:31,
        height: 31
    },
    newGroupButtonText:{
        color: colors.white,
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize: 16,     
    }
})

export default GroupListModalCreateButton
