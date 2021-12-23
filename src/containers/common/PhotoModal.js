import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-crop-picker';

import colors from '../../theme/colors';
import {type} from '../../theme/fonts';

const PhotoModal = ({setImage, isModalVisible, setModalVisible, width, height}) => {

    const isFixed = (!!width && !!height) ? true : false

    const takePhotoFromCamera = () => {
        setModalVisible(false);
        ImagePicker.openCamera(
            isFixed ? {
            width: width,
            height: height,
            cropperToolbarTitle: '',
            cropping: true,
            compressImageQuality: 0.7,
        } :
        {
        cropperToolbarTitle: '',
        cropping: true,
        compressImageQuality: 0.7,
        }).then(image => {
            setImage(image.path);
        }).catch(error => {
            if (error.code === 'E_PICKER_CANCELLED') {
                return false;
            }
        });
    };

    const choosePhotoFromLibrary = () => {
        setModalVisible(false);
        ImagePicker.openPicker(
            isFixed ? {
                width: width,
                height: height,
                cropperToolbarTitle: '',
                cropping: true,
                compressImageQuality: 0.7,
            } :
            {
            cropperToolbarTitle: '',
            cropping: true,
            compressImageQuality: 0.7,
        }).then(image => {
            setImage(image.path);
        }).catch(error => {
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
                <TouchableOpacity style={styles.textConatiner} onPress={takePhotoFromCamera}>
                    <Text style={styles.modalText}>               
                        사진 촬영
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.textConatiner} onPress={choosePhotoFromLibrary}>
                    <Text style={styles.modalText}>
                        앨범에서 사진 선택
                    </Text>
                </TouchableOpacity>
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
        paddingVertical : 16,
    },
    textConatiner : {
        width: '100%',
        paddingVertical : 12,
        paddingHorizontal : 23,
        alignItems : 'flex-start'
    },
    modalText: {
        textAlign: 'center',
        fontFamily: type.spoqaHanSansNeo_Regular,
    },
});

export default PhotoModal;
