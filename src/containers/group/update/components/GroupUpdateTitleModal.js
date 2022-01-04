import React, {useState} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import {type} from '../../../../theme/fonts';
import colors from '../../../../theme/colors';

const GroupUpdateTitleModal = ({
    isModalVisible,
    setModalVisible,
    setModalActive,
    title,
}) => {
    let groupTitleLength = title.length;
    const maxLengthOfTitle = 15;

    return (
        <Modal style={styles.modal} isVisible={isModalVisible}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setModalVisible(false);
                            setModalActive(false);
                        }}>
                        <Text style={styles.defaultText}>취소</Text>
                    </TouchableOpacity>
                    <Text style={[styles.defaultText, styles.bold]}>
                        그룹 제목
                    </Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.defaultText}>저장</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={[
                        styles.underline,
                        groupTitleLength === maxLengthOfTitle
                            ? styles.red
                            : null,
                    ]}>
                    <TextInput
                        style={styles.defaultText}
                        // onChangeText={setGroupTitle}
                        maxLength={maxLengthOfTitle}>
                        {title}
                    </TextInput>

                    <TouchableOpacity style={styles.editButton}>
                        <Image
                            style={
                                groupTitleLength === maxLengthOfTitle
                                    ? styles.xCircleRed
                                    : null
                            }
                            source={require('../../../../assets/images/xCircleWhite.png')}></Image>
                    </TouchableOpacity>
                </View>
                <Text
                    style={[
                        styles.textCount,
                        groupTitleLength === maxLengthOfTitle
                            ? styles.red
                            : null,
                    ]}>
                    {groupTitleLength}/15
                </Text>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        margin: 0,
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 18,
    },
    button: {
        paddingRight: 18,
        paddingVertical: 9,
    },
    defaultText: {
        fontFamily: type.spoqaHanSansNeo_Regular,
        color: colors.white,
        fontSize: 16,
    },
    bold: {
        fontFamily: type.spoqaHanSansNeo_Bold,
    },
    headerContainer: {
        paddingTop: 27,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    underline: {
        width: '100%',
        paddingTop: 308,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: colors.white,
    },
    textCount: {
        fontSize: 12,
        fontFamily: type.spoqaHanSansNeo_Regular,
        paddingTop: 15,
        color: colors.white,
    },
    editButton: {
        paddingLeft: 20,
        paddingVertical: 10,
    },
    red: {
        borderColor: colors.red,
        color: colors.red,
    },
    xCircleRed: {
        tintColor: colors.red,
    },
});

export default GroupUpdateTitleModal;
