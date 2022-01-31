import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Modal from 'react-native-modal';
import {type} from '../../../../theme/fonts';
import colors from '../../../../theme/colors';
import useGroupUpdate from '../../../../context/hook/useGroupUpdate';

const GroupUpdateDescriptionModal = ({isModalVisible, setModalVisible, setModalActive, description, tempData, setTempData}) => {
    const {setGroupUpdateDescription} = useGroupUpdate();
    let groupDescriptionLength;
    const maxLength = 23;

    if (description != null) groupDescriptionLength = description.length;

    const cancelGroupUpdateDesc = () => {
        setModalVisible(false);
        setModalActive(false);
        setGroupUpdateDescription(tempData.description);
    };

    const saveGroupUpdateDesc = () => {
        if (description != tempData.description)
            setTempData({ ...tempData, description: description})
        setModalVisible(false);
        setModalActive(false);
    };

    return (
        <Modal style={styles.modal} isVisible={isModalVisible}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            cancelGroupUpdateDesc();
                        }}>
                        <Text style={styles.defaultText}>취소</Text>
                    </TouchableOpacity>
                    <Text style={[styles.defaultText, styles.bold]}>그룹 설명</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            saveGroupUpdateDesc();
                        }}>
                        <Text style={styles.defaultText}>저장</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.underline}>
                    <TextInput autoFocus={true} style={styles.defaultText} onChangeText={setGroupUpdateDescription} maxLength={maxLength}>
                        {description}
                    </TextInput>
                    <TouchableOpacity
                        style={styles.deleteButton}
                        onPress={() => {
                            setGroupUpdateDescription('');
                        }}>
                        <Image source={require('../../../../assets/images/xCircleWhite.png')}></Image>
                    </TouchableOpacity>
                </View>
                <Text style={styles.textCount}>
                    {groupDescriptionLength}/{maxLength}
                </Text>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        margin: 0,
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
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
        paddingTop: 280,
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
    deleteButton: {
        paddingLeft: 20,
        paddingVertical: 10,
    },
});

export default GroupUpdateDescriptionModal;
