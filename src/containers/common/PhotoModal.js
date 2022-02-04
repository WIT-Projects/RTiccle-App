import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-crop-picker';
import colors from '../../theme/colors';
import {type} from '../../theme/fonts';

const PhotoModal = ({setImage, isModalVisible, setModalVisible, width, height}) => {
    const isFixed = !!width && !!height ? true : false;

    const takePhotoFromCamera = () => {
        setModalVisible(false);
        ImagePicker.openCamera(
            isFixed
                ? {
                      width: width,
                      height: height,
                      cropperToolbarTitle: '',
                      cropping: true,
                      compressImageQuality: 0.7,
                      cropperActiveWidgetColor: '#00CE9D',
                  }
                : {
                      cropperToolbarTitle: '',
                      cropping: true,
                      compressImageQuality: 0.7,
                      cropperActiveWidgetColor: '#00CE9D',
                  },
        )
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
        ImagePicker.openPicker(
            isFixed
                ? {
                      width: width,
                      height: height,
                      cropperToolbarTitle: '',
                      cropping: true,
                      compressImageQuality: 0.7,
                      cropperActiveWidgetColor: '#00CE9D',
                  }
                : {
                      cropperToolbarTitle: '',
                      cropping: true,
                      compressImageQuality: 0.7,
                      cropperActiveWidgetColor: '#00CE9D',
                  },
        )
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
            backdropOpacity={0.5}
            style={styles.modal}
            animationIn={'fadeIn'}
            animationOut={'fadeOut'}
            backdropTransitionInTiming={0}
            hideModalContentWhileAnimating={true}>
            <View style={styles.modalView}>
                <TouchableOpacity onPress={takePhotoFromCamera}>
                    <Text style={styles.modalText}>사진 촬영</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={choosePhotoFromLibrary}>
                    <Text style={styles.modalText}>앨범에서 사진 선택</Text>
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
        paddingVertical: 16,
        paddingHorizontal: 5,
        alignItems: 'flex-start',
    },
    modalText: {
        textAlign: 'center',
        fontFamily: type.spoqaHanSansNeo_Regular,
        paddingHorizontal: 18,
        paddingVertical: 12,
    },
});

export default PhotoModal;
