import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import colors from '../../../../theme/colors';
import {type} from '../../../../theme/fonts';

const GroupKebabModal = ({isModalVisible, setModalVisible, option1, option2, option1Function, option2Function, top, right}) => {
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
                <TouchableOpacity onPress={option1Function}>
                    <Text style={styles.optionText}>{option1}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={option2Function}>
                    <Text style={styles.optionText}>{option2}</Text>
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
    optionText: {
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize: 16,
    },
});

export default GroupKebabModal;
