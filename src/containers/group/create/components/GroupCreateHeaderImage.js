import React, {useState} from 'react';
import {
    View,
    Text,
    Modal,
    Pressable,
    Image,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';

const GroupCreateHeaderImage = () => {
    const [image, setImage] = useState('');
    let source;
    
    image === '' ? source = require('../../../../assets/images/blankImage.png') : source = {uri: image}
    const [modalVisible, setModalVisible] = useState(false);
    
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
            setImage(image.path);
        }).catch(error => {
            if (error.code === 'E_PICKER_CANCELLED') {
                return false;
            }
        });
    }

    return (
        <View style={styles.container}>
            <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            setModalVisible(!modalVisible);
            }}>
                <View style={{alignItems:'center'}}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText} style={{marginBottom:24}} onPress={takePhotoFromCamera} >사진 촬영</Text>
                        <Text style={styles.modalText} onPress={choosePhotoFromLibrary}>앨범에서 사진 선택</Text>
                    </View>
                </View>
            </Modal>

            <View style={{paddingHorizontal:20, paddingTop:57}}>
                <Text style={styles.textInfo1}>마지막 단계예요.</Text>
                <Text style={styles.textInfo2}>나만의 커버 이미지을 추가해 보세요!</Text>
            </View>
            <ImageBackground
                source={source}
                style={styles.headerImage}>
                    <View style={styles.headerImageInner}>
                        <View>
                            <Text style={styles.title}>현판</Text>
                            <Text style={styles.subtitle}>데못죽 같은 거 모아두는 곳</Text>
                        </View>
                        <Pressable
                        onPress={() => setModalVisible(true)}>
                            <Image source={require('../../../../assets/images/camera.png')} onPress={() => setModalVisible(true)}></Image>
                        </Pressable>
                    </View>
            </ImageBackground>

            <View style={{alignItems:'center'}}>
                <TouchableOpacity style={styles.button1} onPress={() => alert('저장 완료')}>
                    <Text style={{color:'#ffffff'}}>저장하기</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={() => alert('건너뛰기')}>
                    <Text style={{color:'#68696B'}}>건너뛰기</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default GroupCreateHeaderImage;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor:'#ffffff'
    },
    modalView: {
        marginTop: 250,
        width: 300,
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
    textInfo1: {
        fontSize: 24,
        color: '#313233',
        fontWeight: 'bold'
    },
    textInfo2: {
        fontSize: 16,
        color: '#68696B',
        paddingTop: 10
    },
    headerImage: {
        height: 256,
        marginTop: 57,
        marginBottom: 128
    },
    headerImageInner: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingTop: 180,
        paddingBottom: 18
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    subtitle: {
        fontSize: 16,
        paddingTop: 8,
        color: '#ffffff'
    },
    button1: {
          borderRadius: 20,
          width:168,
          padding: 10,
          backgroundColor: '#000000',
          alignItems: 'center',
          justifyContent: 'center',
    },
    button2: {
          borderRadius: 20,
          width:168,
          padding: 10,
          backgroundColor: '#ffffff',
          alignItems: 'center',
          justifyContent: 'center',
    }
});
