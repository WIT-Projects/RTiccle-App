import React, {useState} from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import PhotoModal from '../../../common/PhotoModal';

import {type} from '../../../../theme/fonts';
import colors from '../../../../theme/colors';
import useGroupCreate from '../../../../context/hook/useGroupCreate';
import {clockRunning} from 'react-native-reanimated';

const GroupUpdateInfo = ({navigation, mainImage, title, description}) => {
    const {setGroupImage} = useGroupCreate();
    let source;
    mainImage === ''
        ? (source = require('../../../../assets/images/blankImage.png'))
        : (source = {uri: mainImage});
    const [isModalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <PhotoModal
                setImage={setGroupImage}
                isModalVisible={isModalVisible}
                setModalVisible={setModalVisible}
                width={412}
                height={256}></PhotoModal>
            <ImageBackground source={source} style={styles.headerImage}>
                <ImageBackground
                    source={require('../../../../assets/images/groupUpdateGradation.png')}
                    style={styles.headerImageGradation}>
                    <View style={styles.headerImageInner}>
                        <View style={styles.headerImageContainer1}>
                            <TouchableOpacity style={styles.cancelButton}>
                                <Text style={styles.cancelButtonText}>
                                    취소
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => setModalVisible(true)}>
                                <Image
                                    width={35}
                                    height={35}
                                    source={require('../../../../assets/images/camera.png')}
                                    onPress={() =>
                                        setModalVisible(true)
                                    }></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.headerImageContainer2}>
                            <View style={styles.underline}>
                                <Text style={styles.imageTitle}>{title}</Text>
                                <TouchableOpacity style={styles.editButton}>
                                    <Image
                                        source={require('../../../../assets/icon/pencil.png')}></Image>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.underline}>
                                <Text style={styles.imageSubtitle}>
                                    {description}
                                </Text>
                                <TouchableOpacity style={styles.editButton}>
                                    <Image
                                        source={require('../../../../assets/icon/pencil.png')}></Image>
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
        height: 256,
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
    imageTitle: {
        fontFamily: type.spoqaHanSansNeo_Bold,
        fontSize: 24,
        color: colors.white,
        paddingBottom: 8,
    },
    imageSubtitle: {
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
