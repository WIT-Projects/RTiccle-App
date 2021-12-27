import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-crop-picker';

import colors from '../../theme/colors';
import {type} from '../../theme/fonts';

const PhotoModal = ({setImage, isModalVisible, setModalVisible}) => {
    let image = '';

    const takePhotoFromCamera = () => {
        setModalVisible(false);
        ImagePicker.openCamera({
            width: 412,
            height: 256,
            cropperToolbarTitle: '',
            cropping: true,
            compressImageQuality: 0.7,
        })
            .then(image => {
                setImage(image.path);
            })
            .catch(error => {
                if (error.code === 'E_PICKER_CANCELLED') {
                    return false;
                }
            });
    };

    const choosePhotoFromLibrary = () => {
        setModalVisible(false);
        ImagePicker.openPicker({
            width: 412,
            height: 256,
            cropperToolbarTitle: '',
            cropping: true,
            compressImageQuality: 0.7,
        })
            .then(image => {
                setImage(image.path);
            })
            .catch(error => {
                if (error.code === 'E_PICKER_CANCELLED') {
                    return false;
                }
            });
    };

    return (
        <Modal
            isVisible={isModalVisible}
            onBackdropPress={() => setModalVisible(false)}
            backdropOpacity={0.8}
            style={styles.modal}>
            <View style={styles.modalView}>
                <Text
                    style={styles.modalText}
                    style={{marginBottom: 24}}
                    onPress={takePhotoFromCamera}>
                    사진 촬영
                </Text>
                <Text style={styles.modalText} onPress={choosePhotoFromLibrary}>
                    앨범에서 사진 선택
                </Text>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
    },
    modalView: {
        width: '75%',
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 30,
        alignItems: 'flex-start',
    },
    modalText: {
        textAlign: 'center',
        fontFamily: type.spoqaHanSansNeo_Regular,
    },
});

export default PhotoModal;
