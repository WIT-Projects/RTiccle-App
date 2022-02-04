import React, { useState } from "react";
import { Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import colors from "../../../../../../theme/colors";
import { type } from "../../../../../../theme/fonts";
import CustomModal from "../../../../../common/CustomModal";
import {limitGroupNum, checkIsFullGroupNum} from "../../../../../../model/GroupModel";

const GroupListModalCreateButton = ({ setGroupCreateModalVisible, setGroupListModalVisible}) => {
    const [groupAlertModal, setGroupAlertModal] = useState(false);

    const groupCreateButtonEvent = () => {
        if (checkIsFullGroupNum()) {
            setGroupAlertModal(true);
        } else {
            setGroupListModalVisible(false);
            setGroupCreateModalVisible(true);
        }
    };

    return (
        <>
            <CustomModal
            isModalVisible={groupAlertModal}
            setModalVisible={setGroupAlertModal}
            title={`그룹은 ${limitGroupNum}개까지 생성 가능합니다.`}
            rightButton={'확인'}
            rightButtonFunction={() => setGroupAlertModal(false)}
            rightButtonStyle={{marginLeft: 20}} />
            <TouchableOpacity style={styles.newGroupButtonContainer} onPress={groupCreateButtonEvent}>
                <Image source={require('../../../../../../assets/images/groupCreateButton.png')} style={styles.newGroupButtonImage}/>
                <Text style={styles.newGroupButtonText}>새로운 그룹 생성하기</Text>
            </TouchableOpacity>
        </>
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
