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

const GroupInfo = ({groupData, navigation}) => {
    let source = groupData.imageUrl == null || groupData.imageUrl == '' ? require('../../../../assets/images/blankImage.png') : {uri: groupData.imageUrl};
    const {initialGroupUpdate} = useGroupUpdate();
    const [isBookmark, setIsBookmark] = useState(groupData.bookmark);
    const {isGroupChanged, setIsGroupChanged} = useGroupChanged();
    const [isModalVisible, setModalVisible] = useState(false);
    const handleError = useErrorHandler(); // for error handling

    const setFirebaseBookmark = () => {
        if (isBookmark == true) {
            setIsBookmark(false);
            doUpdateGroup(groupData.id, {bookmark: false}, false);
        } else {
            setIsBookmark(true);
            doUpdateGroup(groupData.id, {bookmark: true}, false);
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
    const deleteGroup = () => {
        try {
            setModalVisible(false);
            doDeleteGroup(groupData);
            setIsGroupChanged(!isGroupChanged);
            navigation.navigate('Home');
        } catch (err) {
            handleError(err);
        }
    };

    return (
        <>
            <GroupKebabModal
                isModalVisible={isModalVisible}
                setModalVisible={setModalVisible}
                option1={'수정하기'}
                option2={'삭제하기'}
                option1Function={moveToGroupUpdate}
                option2Function={deleteGroup}
                top={43}
                right={12}></GroupKebabModal>
            <ImageBackground source={source} resizeMode="cover" style={styles.groupMainImage}>
                <ImageBackground source={require('../../../../assets/images/gradation2.png')} resizeMode="cover" style={styles.groupMainImage}>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Home');
                            }}>
                            <Image source={require('../../../../assets/icon/backWhite.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setModalVisible(true);
                            }}>
                            <Image source={require('../../../../assets/icon/kebabMenu.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.groupInfoContainer}>
                        <View>
                            <Text style={styles.title}>{groupData.title}</Text>
                            <Text style={styles.description}>{groupData.description}</Text>
                        </View>
                        <Image
                            onTouchEnd={() => {
                                setFirebaseBookmark();
                            }}
                            source={isBookmark ? require('../../../../assets/icon/bookmarkTrue.png') : require('../../../../assets/icon/bookmarkFalse.png')}></Image>
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
        paddingHorizontal: 18,
        height: 58,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    groupInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingHorizontal: 17,
        paddingBottom: 17,
    },
    title: {
        fontSize: 24,
        color: colors.white,
        fontFamily: type.spoqaHanSansNeo_Bold,
    },
    description: {
        fontSize: 16,
        color: colors.white,
        fontFamily: type.spoqaHanSansNeo_Regular,
        paddingTop: 8,
    },
});

export default GroupInfo;
