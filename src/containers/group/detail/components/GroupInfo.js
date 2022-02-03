import React, {useState} from 'react';
import {StyleSheet, Text, ImageBackground, View, Image, TouchableOpacity} from 'react-native';
import colors from '../../../../theme/colors';
import {type} from '../../../../theme/fonts';
import metrics from '../../../../theme/metrices';
import {doUpdateGroup} from '../../../../model/GroupModel';
import {doDeleteGroup} from '../../../../model/GroupModel';
import useGroupChanged from '../../../../context/hook/useGroupChanged';
import useGroupUpdate from '../../../../context/hook/useGroupUpdate';
import GroupKebabModal from './GroupKebabModal';
import {useErrorHandler} from 'react-error-boundary';
import CustomModal from '../../../common/CustomModal';

const GroupInfo = ({groupData, navigation}) => {
    let source = groupData.imageUrl == null || groupData.imageUrl == '' ? require('../../../../assets/images/blankImage.png') : {uri: groupData.imageUrl};
    const {initialGroupUpdate} = useGroupUpdate();
    const [isBookmark, setIsBookmark] = useState(groupData.bookmark);
    const {isGroupChanged, setIsGroupChanged} = useGroupChanged();
    const [isModalVisible, setModalVisible] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const handleError = useErrorHandler(); // for error handling

    const setFirebaseBookmark = () => {
        if (isBookmark == true) {
            setIsBookmark(false);
            doUpdateGroup(groupData.id, {bookmark: false}, false)
                .catch(err => handleError(err));
        } else {
            setIsBookmark(true);
            doUpdateGroup(groupData.id, {bookmark: true}, false)
                .catch(err => handleError(err));
        }
        setIsGroupChanged(!isGroupChanged); // notify groupData changed
    };
    const moveToGroupUpdate = () => {
        setModalVisible(false);
        initialGroupUpdate();
        navigation.navigate('GroupUpdate', {
            groupData: groupData,
        });
    };
    const deleteGroup = async () => {
        try {
            setModalVisible(false);
            await doDeleteGroup(groupData);
            setIsGroupChanged(!isGroupChanged);
            navigation.navigate('Home');
        } catch (err) {
            handleError(err);
        }
    };
    const deleteModalOn = () => {
        setDeleteModal(true);
    } 

    return (
        <>
            <CustomModal
                isModalVisible={deleteModal} setModalVisible={setDeleteModal}
                title={"그룹을 삭제하시겠어요?"} leftButton={"취소"}
                rightButton={"삭제"} rightButtonFunction={deleteGroup}
            />
            <GroupKebabModal
                isModalVisible={isModalVisible}
                setModalVisible={setModalVisible}
                option1={'수정하기'}
                option2={'삭제하기'}
                option1Function={moveToGroupUpdate}
                option2Function={deleteModalOn}
                top={43}
                right={12}></GroupKebabModal>
            <ImageBackground source={source} resizeMode="cover" style={styles.groupMainImage}>
                <ImageBackground source={require('../../../../assets/images/gradation2.png')} resizeMode="cover" style={styles.groupMainImage}>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity
                            style={styles.paddingBtn}
                            onPress={() => {
                                navigation.navigate('Home');
                            }}>
                            <Image source={require('../../../../assets/icon/backWhite.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.paddingBtn}
                            onPress={() => {
                                setModalVisible(true);
                            }}>
                            <Image source={require('../../../../assets/icon/kebabMenu.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.groupInfoContainer}>
                        <View>
                            <Text style={styles.title}>{groupData.title}</Text>
                            {groupData.description.length > 0 && <Text style={ styles.description }>{groupData.description}</Text>}
                        </View>
                        <TouchableOpacity
                            style={styles.bookmark}
                            onPress={() => {
                                setFirebaseBookmark();
                            }}>
                            <Image source={isBookmark ? require('../../../../assets/icon/bookmarkTrue.png') : require('../../../../assets/icon/bookmarkFalse.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </ImageBackground>
        </>
    );
};

const styles = StyleSheet.create({
    groupMainImage: {
        width: metrics.screenWidth,
        height: 256,
    },
    headerContainer: {
        height: 58,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    paddingBtn: {
        paddingHorizontal: 18,
        paddingVertical:15,
    },
    groupInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingBottom: 17,
    },
    title: {
        paddingLeft: 17,
        fontSize: 24,
        color: colors.white,
        fontFamily: type.spoqaHanSansNeo_Bold,
    },
    description: {
        paddingLeft: 17,
        fontSize: 16,
        color: colors.white,
        fontFamily: type.spoqaHanSansNeo_Regular,
        paddingTop: 8,
    },
    bookmark: {
        paddingHorizontal: 17,
        paddingTop:17,
    }
});

export default GroupInfo;
