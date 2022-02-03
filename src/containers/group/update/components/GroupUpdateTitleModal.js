import React, {useState, useEffect, useRef} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import Modal from 'react-native-modal';
import {type} from '../../../../theme/fonts';
import colors from '../../../../theme/colors';
import useGroupUpdate from '../../../../context/hook/useGroupUpdate';
import {checkIsExistingGroup} from '../../../../model/GroupModel';

const GroupUpdateTitleModal = ({isModalVisible, setModalVisible, setModalActive, title, tempData, setTempData}) => {
    const {setGroupUpdateTitle} = useGroupUpdate();
    let groupTitleLength;
    const maxLength = 15;
    const [buttonDisabled, setButtonDisable] = useState(false);
    const [isExistGroup, setIsExistGroup] = useState(false);
    const inputRef = useRef(null);

    if (title != null) groupTitleLength = title.length;

    const cancelGroupUpdateTitle = () => {
        setModalVisible(false);
        setModalActive(false);
        setGroupUpdateTitle(tempData.title);
        setIsExistGroup(false);
    };

    const saveGroupUpdateTitle = () => {
        if (title != tempData.title) {
            if (checkIsExistingGroup(title)) {
                setButtonDisable(true);
                setIsExistGroup(true);
                return;
            }
            setTempData({...tempData, title: title});
        }
        setModalVisible(false);
        setModalActive(false);
        setIsExistGroup(false);
    };

    useEffect(() => {
        groupTitleLength < 1 ? setButtonDisable(true) : setButtonDisable(false);
        setIsExistGroup(false);
    }, [title]);

    return (
        <Modal
            style={styles.modal}
            isVisible={isModalVisible}
            onBackButtonPress={() => {
                cancelGroupUpdateTitle();
            }}
            onModalShow={() => {
                inputRef.current.blur();
                inputRef.current.focus();
            }}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity
                            onPress={() => {
                                cancelGroupUpdateTitle();
                            }}>
                            <Text style={styles.defaultText}>취소</Text>
                        </TouchableOpacity>
                        <Text style={[styles.defaultText, styles.bold]}>그룹 제목</Text>
                        <TouchableOpacity
                            disabled={buttonDisabled}
                            onPress={() => {
                                saveGroupUpdateTitle();
                            }}>
                            <Text style={[styles.defaultText, buttonDisabled ? styles.disabledButton : null]}>저장</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.underline}>
                        <TextInput ref={inputRef} autoFocus={true} style={styles.defaultText} onChangeText={setGroupUpdateTitle} maxLength={maxLength}>
                            {title}
                        </TextInput>
                        <TouchableOpacity
                            style={styles.deleteButton}
                            onPress={() => {
                                setGroupUpdateTitle('');
                            }}>
                            <Image style={styles.xBtn} source={require('../../../../assets/images/xCircleWhite.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textCount}>
                        {groupTitleLength}/{maxLength}
                    </Text>
                    <Text style={[styles.createFailText, isExistGroup ? null : {opacity: 0}]}>이미 존재하는 그룹입니다!</Text>
                </View>
            </ScrollView>
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
        marginTop: 290,
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
    disabledButton: {
        color: colors.gray3,
    },
    createFailText: {
        fontFamily: type.notoSansKR_Medium,
        fontSize: 12,
        color: '#FC6969',
        paddingTop: 4,
    },
    xBtn: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
    },
});

export default GroupUpdateTitleModal;
