import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import Modal from 'react-native-modal';

import colors from '../../theme/colors';
import {type} from '../../theme/fonts';

const SearchModal = ({isModalVisible, setModalVisible, option1Function, option2Function, top, right, isLatestSort}) => {
    return (
        <Modal
            isVisible={isModalVisible}
            onBackdropPress={() => setModalVisible(false)}
            backdropOpacity={0}
            style={[styles.modal, {top: top, right: right}]}
            animationIn={'fadeIn'}
            animationOut={'fadeOut'}
            backdropTransitionInTiming={0}
            hideModalContentWhileAnimating={true}>
            <View style={styles.container}>
                <TouchableOpacity onPress={option1Function} style={styles.checkContainer}>
                    <Text style={isLatestSort? styles.pressOptionText: styles.optionText}>최신 순</Text>
                    {isLatestSort? <Image style={styles.icon} source={ require('../../assets/icon/check.png')}/> : null}
                </TouchableOpacity>
                <TouchableOpacity onPress={option2Function} style={styles.checkContainer}>
                    <Text style={isLatestSort? styles.optionText: styles.pressOptionText}>오래된 순</Text>
                    {isLatestSort? null : <Image style={styles.icon} source={ require('../../assets/icon/check.png')}/> }
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        margin: 0,
        position: 'absolute',
    },
    container: {
        width: 151,
        height: 83,
        backgroundColor: colors.white,
        borderRadius: 12,
        paddingVertical: 14,
        paddingHorizontal: 18,
        justifyContent: 'space-between',
    },
    pressOptionText: {
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize: 16,
        color: colors.main,
    },
    optionText: {
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize: 16,
        color: colors.gray2,
    },
    checkContainer:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon:{
        resizeMode: 'contain',
        width: 16,
        height: 16,
        marginLeft: 4,
    },
});

export default SearchModal;
