import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../../../theme/colors';
import { type } from '../../../../../theme/fonts';

import { doDeleteTiccle } from "../../../../../model/TiccleModel";
import CustomModal from "../../../../common/CustomModal"
import useTiccleChanged from "../../../../../context/hook/useTiccleChanged";
import useGroupChanged from "../../../../../context/hook/useGroupChanged";
import {useErrorHandler} from 'react-error-boundary';

const TiccleDetailHeaderRight = ({ ticcleDetail }) => {
    const navigateTo = useNavigation()
    const { isTiccleListChanged, setIsTiccleListChanged} = useTiccleChanged();
    const { isGroupChanged, setIsGroupChanged} = useGroupChanged();
    const handleError = useErrorHandler(); // for error handling

    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const deleteModalEvent = async () => {
        try {
            await doDeleteTiccle( ticcleDetail );
            setIsTiccleListChanged( !isTiccleListChanged );
            setIsGroupChanged( !isGroupChanged );
            navigateTo.navigate( 'HomeStack' );
        } catch (err) {
            handleError(err);
        }
    }

    return (
        <>
        <CustomModal
            isModalVisible={deleteModalVisible} setModalVisible={setDeleteModalVisible}
            title={"티끌을 삭제하시겠습니까?"} leftButton={"취소"} rightButton={"삭제"}
            rightButtonFunction={deleteModalEvent}/>
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    setDeleteModalVisible(true)
                }}>
                <Image source={require('../../../../../assets/icon/trashCan.png')} style={styles.imageBtn}></Image>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigateTo.navigate('TiccleUpdate', { ticcleData: ticcleDetail })
                }}>
                <Image source={require('../../../../../assets/icon/update_btn.png')} style={styles.imageBtn}></Image>
            </TouchableOpacity>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection : 'row',
        position: 'absolute',
        right: 0,
        top: 9,
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 40,
        marginRight: 14,
    },
    headerRightText: {
        color: colors.white,
        fontFamily: type.notoSansKR_Medium,
        fontSize: 20,
        lineHeight: 24,
        marginBottom: 1,
    },
    imageBtn: {
        resizeMode: 'contain',
        width: 20,
        height: 20,
        marginRight: 26,
    },
})

export default TiccleDetailHeaderRight
