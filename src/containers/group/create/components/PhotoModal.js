import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";

import colors from '../../../../theme/colors';
import { type } from '../../../../theme/fonts';
import ImagePicker from 'react-native-image-crop-picker';

const PhotoModal = ({setImage, isModalVisible, setModalVisible}) => {
  let image = '';
  // let source;
  
  // image === '' ? source = require('../../../../assets/images/blankImage.png') : source = { uri: image }

  const takePhotoFromCamera = () => {
    setModalVisible(false);
    ImagePicker.openCamera({
        width: 412,
        height:256,
        cropperToolbarTitle: '',
        cropping: true,
        compressImageQuality: 0.7
    }).then(image => {
      setImage(image.path);
      console.log('Photo modal');
      console.log(image.path);
    }).catch(error => {
      if (error.code === 'E_PICKER_CANCELLED') {
        return false;
      }
    });
  }
  
  const choosePhotoFromLibrary = () => {
    setModalVisible(false);
    ImagePicker.openPicker({
      width: 412,
      height:256,
      cropperToolbarTitle: '',
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log('Photo modal');
      setImage(image.path);
    }).catch(error => {
        if (error.code === 'E_PICKER_CANCELLED') {
            return false;
        }
    });
  }

  return (
    <View style={{ flex: 1, alignItems:'center'}}>
      <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)} backdropOpacity={0.8}>
        <View style={styles.modalView}>
          <Text style={styles.modalText} style={{ marginBottom: 24 }} onPress={takePhotoFromCamera}>사진 촬영</Text>
          <Text style={styles.modalText} onPress={choosePhotoFromLibrary}>앨범에서 사진 선택</Text>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalView: {
    marginTop: 250,
    width: '80%',
    backgroundColor: "white",
    borderRadius: 10,
    padding: 30,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    textAlign: "center"
  },
});

export default PhotoModal;
