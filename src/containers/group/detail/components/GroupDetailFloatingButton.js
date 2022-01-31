import React, { useState } from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomModal from "../../../common/CustomModal";
import { checkIsFullTiccleNum, limitTiccleNum } from "../../../../model/GroupModel";

const GroupDetailFloatingButton = ({groupId}) => {
    const navigateTo = useNavigation();
    const [ticcleAlertModal, setTiccleAlertModal] = useState(false)

    const floatingButtonEvent = () => {
        if(checkIsFullTiccleNum()) {
            setTiccleAlertModal(true);
        } else {
            navigateTo.navigate('TiccleCreate', {groupId : groupId});
        }
    }

    return (
        <>
            <CustomModal
                isModalVisible={ticcleAlertModal} setModalVisible={setTiccleAlertModal}
                title={`티끌은 ${limitTiccleNum}개까지 생성 가능합니다.`} rightButton={"확인"}
                rightButtonFunction={() => setTiccleAlertModal(false)}
                rightButtonStyle={{marginLeft: 20}}
            />
            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.touchableOpacityStyle}
                onPress={floatingButtonEvent}>
                <Image
                    source={require('../../../../assets/icon/make.png')}
                    style={styles.floatingButtonStyle}
                />
            </TouchableOpacity>
        </>
        
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
