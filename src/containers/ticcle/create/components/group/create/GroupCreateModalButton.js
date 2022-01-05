import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import colors from '../../../../../../theme/colors';
import { type } from '../../../../../../theme/fonts';

const GroupCreateModalButton = ({buttonDisable, fastUploadNewGroup, initialTypeTitle, setModalVisible}) => {

    return(
        <View style={styles.createTouchableContainer}>
            <TouchableOpacity disabled={buttonDisable} 
            style={[styles.createTouchable, buttonDisable ? styles.createTouchableDisable : styles.createTouchableAble]}
            onPress={() => {
                fastUploadNewGroup()
                initialTypeTitle()
                setModalVisible(false)
            }}>
                <Text style={[styles.createText, buttonDisable ? styles.createTextColorDisable : styles.createTextColor]}>
                    그룹생성
                </Text>
            </TouchableOpacity>
        </View>
   )
};

const styles = StyleSheet.create({
    createTouchableContainer:{
        alignItems: 'center',
        paddingTop: 80,
    },
    createTouchable:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 160,
        height: 40,
        borderRadius: 24,
    },
    createTouchableAble:{
        backgroundColor: colors.main,
    },
    createTouchableDisable:{
        backgroundColor: colors.gray1
    },
    createText:{
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize: 16
    },
    createTextColor:{
        color: colors.white,
    },
    createTextColorDisable:{
        color: colors.gray4
    }
});

export default GroupCreateModalButton;
