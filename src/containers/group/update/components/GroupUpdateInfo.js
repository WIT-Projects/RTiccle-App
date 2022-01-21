import React, {useState} from 'react';
import {View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import PhotoModal from '../../../common/PhotoModal';

import {type} from '../../../../theme/fonts';
import colors from '../../../../theme/colors';
import useGroupUpdate from '../../../../context/hook/useGroupUpdate';
import GroupUpdateTitleModal from './GroupUpdateTitleModal';
import GroupUpdateDescriptionModal from './GroupUpdateDescriptionModal';

const GroupUpdateInfo = ({navigation, mainImage, title, description, modalActive, setModalActive, initialData}) => {
    const {setGroupUpdateImage} = useGroupUpdate();
    let source;
    mainImage == null || mainImage == '' ? (source = require('../../../../assets/images/blankImage.png')) : (source = {uri: mainImage});
    const [isPhotoModalVisible, setPhotoModalVisible] = useState(false);
    const [isTitleModalVisible, setTitleModalVisible] = useState(false);
    const [isDescModalVisible, setDescModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <PhotoModal
                setImage={setGroupUpdateImage}
                isModalVisible={isPhotoModalVisible}
                setModalVisible={setPhotoModalVisible}
                width={412}
                height={256}></PhotoModal>
            <GroupUpdateTitleModal
                initialData={initialData}
                isModalVisible={isTitleModalVisible}
                setModalVisible={setTitleModalVisible}
                setModalActive={setModalActive} // modal 유무에 따라 보여지는 화면 요소가 다른 것에 사용.
                title={title}></GroupUpdateTitleModal>
            <GroupUpdateDescriptionModal
                initialData={initialData}
                isModalVisible={isDescModalVisible}
                setModalVisible={setDescModalVisible}
                setModalActive={setModalActive} // modal 유무에 따라 보여지는 화면 요소가 다른 것에 사용.
                description={description}></GroupUpdateDescriptionModal>
            <ImageBackground source={source} style={styles.headerImage}>
                <ImageBackground source={require('../../../../assets/images/groupUpdateGradation.png')} style={styles.headerImageGradation}>
                    <View style={styles.headerImageInner}>
                        <View style={!modalActive ? null : {opacity: 0}}>
                            <View style={styles.headerImageContainer1}>
                                <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
                                    <Text style={styles.cancelButtonText}>취소</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setPhotoModalVisible(true)}>
                                    <Image style={ styles.cameraImage } source={ require( '../../../../assets/images/camera.png' ) }
                                        onPress={ () => setPhotoModalVisible( true ) }></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.headerImageContainer2}>
                            <View style={styles.underline}>
                                <Text style={styles.groupTitle}>{title}</Text>
                                <TouchableOpacity
                                    style={styles.editButton}
                                    onPress={() => {
                                        setTitleModalVisible(true);
                                        setModalActive(true);
                                    }}>
                                    <Image source={require('../../../../assets/icon/pencil.png')}></Image>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.underline}>
                                <Text style={styles.groupDescription}>{description}</Text>
                                <TouchableOpacity
                                    style={styles.editButton}
                                    onPress={() => {
                                        setDescModalVisible(true);
                                        setModalActive(true);
                                    }}>
                                    <Image source={require('../../../../assets/icon/pencil.png')}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: colors.white,
    },
    headerImage: {
        resizeMode: 'cover',
        width: '100%',
        height: 256,
    },
    headerImageGradation: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        opacity: 0.8,
    },
    cancelButton: {
        paddingRight: 18,
        paddingVertical: 9,
    },
    cancelButtonText: {
        fontFamily: type.spoqaHanSansNeo_Bold,
        color: colors.white,
        fontSize: 16,
    },
    cameraImage: {
        width: 35,
        height:35
    },
    headerImageInner: {
        paddingHorizontal: 18,
        paddingTop: 18,
        paddingBottom: 18,
    },
    headerImageContainer1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerImageContainer2: {
        paddingTop: 93,
    },
    groupTitle: {
        fontFamily: type.spoqaHanSansNeo_Bold,
        fontSize: 24,
        color: colors.white,
        paddingBottom: 8,
    },
    groupDescription: {
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize: 16,
        paddingTop: 12,
        color: colors.white,
        paddingBottom: 8,
    },
    underline: {
        borderBottomWidth: 1,
        borderColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    editButton: {
        paddingLeft: 20,
        paddingVertical: 10,
    },
});

export default GroupUpdateInfo;
