import React, {useState, useEffect} from 'react';
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
import useGroupUpdate from '../../../../context/hook/useGroupUpdate';

const GroupUpdateTitleModal = ({
    isModalVisible,
    setModalVisible,
    setModalActive,
    title,
    initialData,
}) => {
    const {setGroupUpdateTitle} = useGroupUpdate();
    let groupTitleLength;
    const maxLength = 15;
    const [isMaxLength, setIsMaxLength] = useState(false);
    const [noTitle, setNoTitle] = useState(false);

    if (title != null) groupTitleLength = title.length;

    useEffect(() => {
        groupTitleLength === maxLength
            ? setIsMaxLength(true)
            : setIsMaxLength(false);
        groupTitleLength < 1 ? setNoTitle(true) : setNoTitle(false);
        console.log('change title===============');
    }, [title]);

    return (
        <Modal style={styles.modal} isVisible={isModalVisible}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setModalVisible(false);
                            setModalActive(false);
                            setGroupUpdateTitle(initialData.title);
                        }}>
                        <Text style={styles.defaultText}>취소</Text>
                    </TouchableOpacity>
                    <Text style={[styles.defaultText, styles.bold]}>
                        그룹 제목
                    </Text>
                    <TouchableOpacity
                        disabled={noTitle ? true : false}
                        style={styles.button}
                        onPress={() => {
                            setModalVisible(false);
                            setModalActive(false);
                        }}>
                        <Text
                            style={[
                                styles.defaultText,
                                noTitle ? styles.disabledButton : null,
                            ]}>
                            저장
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={[styles.underline, isMaxLength ? styles.red : null]}>
                    <TextInput
                        autoFocus={true}
                        style={styles.defaultText}
                        onChangeText={setGroupUpdateTitle}
                        maxLength={maxLength}>
                        {title}
                    </TextInput>

                    <TouchableOpacity
                        style={styles.editButton}
                        onPress={() => {
                            setGroupUpdateTitle('');
                        }}>
                        <Image
                            style={isMaxLength ? styles.xCircleRed : null}
                            source={require('../../../../assets/images/xCircleWhite.png')}></Image>
                    </TouchableOpacity>
                </View>
                <Text
                    style={[styles.textCount, isMaxLength ? styles.red : null]}>
                    {groupTitleLength}/{maxLength}
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
    disabledButton: {
        color: colors.gray3,
    },
});

export default GroupUpdateTitleModal;
