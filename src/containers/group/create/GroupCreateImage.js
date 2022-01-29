import React, {useState} from 'react';
import {View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import GroupSaveButton from './components/GroupSaveButton';
import GroupSaveButtonSkip from './components/GroupSaveButtonSkip';
import PhotoModal from '../../common/PhotoModal';
import TextInfo from '../../common/TextInfo';

import {type} from '../../../theme/fonts';
import colors from '../../../theme/colors';
import useGroupCreate from '../../../context/hook/useGroupCreate';

const GroupCreateImage = ({navigation}) => {
    const {groupCreate, setGroupImage} = useGroupCreate();
    const mainImage = groupCreate.mainImage;
    const title = groupCreate.title;
    const description = groupCreate.description;
    let source;
    mainImage == '' || mainImage == null ? (source = require('../../../assets/images/blankImage.png')) : (source = {uri: mainImage});
    const [isModalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <PhotoModal
                setImage={setGroupImage}
                isModalVisible={isModalVisible}
                setModalVisible={setModalVisible}
                width={412}
                height={256}></PhotoModal>
            <TextInfo title="마지막 단계예요." subtitle="나만의 커버 이미지을 추가해 보세요!"></TextInfo>
            <ImageBackground source={source} style={styles.headerImage}>
                <ImageBackground source={require('../../../assets/images/groupImageGradation.png')} style={styles.headerImageGradation}>
                    <View style={styles.headerImageInner}>
                        <View>
                            <Text style={styles.imageTitle}>{title}</Text>
                            <Text style={styles.imageSubtitle}>{description}</Text>
                        </View>
                        <TouchableOpacity onPress={() => setModalVisible(true)}>
                            <Image source={require('../../../assets/images/camera.png')} onPress={() => setModalVisible(true)}></Image>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </ImageBackground>
            <GroupSaveButton text="저장하기" navigation={navigation}></GroupSaveButton>
            <GroupSaveButtonSkip text="건너뛰기" navigation={navigation}></GroupSaveButtonSkip>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.white,
    },
    headerImage: {
        resizeMode: 'cover',
        width: '100%',
        height: 256,
        marginBottom: 128,
        marginTop: 57,
    },
    headerImageGradation: {
        resizeMode: 'cover',
        width: '100%',
        height: 256,
    },
    headerImageInner: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingTop: 180,
        paddingBottom: 18,
    },
    imageTitle: {
        fontFamily: type.spoqaHanSansNeo_Bold,
        fontSize: 24,
        color: colors.white,
    },
    imageSubtitle: {
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize: 16,
        paddingTop: 8,
        color: colors.white,
    },
});

export default GroupCreateImage;
