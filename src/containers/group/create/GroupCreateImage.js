import React, {useState} from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import SaveButton from '../../common/SaveButton';
import PhotoModal from '../../common/PhotoModal';
import TextInfo from '../../common/TextInfo';

import {type} from '../../../theme/fonts';
import colors from '../../../theme/colors';
import useGroupCreate from '../../../context/hook/useGroupCreate';
import firestore from '@react-native-firebase/firestore';
import {uploadNewGroup} from '../../../firebase/Firestore';

const GroupCreateImage = ({navigation}) => {
    const {groupCreate, setGroupImage, initialGroupCreate} = useGroupCreate();
    const title = groupCreate.title;
    const type = groupCreate.type;
    const description = groupCreate.description;
    const mainImage = groupCreate.mainImage;
    const nowDate = firestore.Timestamp.fromDate(new Date());

    const groupCreateFirebase = () => {
        const groupName = title;
        const newGroup = {
            lastModifiedTime: nowDate,
            type: type,
            title: title,
            description: description,
            bookmark: false,
        };
        const imageSource = mainImage;
        uploadNewGroup(groupName, newGroup, imageSource).then(ref =>
            console.log(ref),
        );
        initialGroupCreate();
        navigation.navigate('Home');
    };

    let source;
    mainImage === ''
        ? (source = require('../../../assets/images/blankImage.png'))
        : (source = {uri: mainImage});
    const [isModalVisible, setModalVisible] = useState(false);
    const [groupCreateButtonDisable, setGroupCreateButtonDisable] =
        useState(true);

    return (
        <View style={styles.container}>
            <PhotoModal
                setImage={setGroupImage}
                isModalVisible={isModalVisible}
                setModalVisible={setModalVisible}></PhotoModal>
            <TextInfo
                title="마지막 단계예요."
                subtitle="나만의 커버 이미지을 추가해 보세요!"></TextInfo>
            <ImageBackground source={source} style={styles.headerImage}>
                <ImageBackground
                    source={require('../../../assets/images/groupImageGradation.png')}
                    resizeMode="cover"
                    style={{width: '100%', height: 256}}>
                    <View style={styles.headerImageInner}>
                        <View>
                            <Text style={styles.imageTitle}>현판</Text>
                            <Text style={styles.imageSubtitle}>
                                데못죽 같은 거 모아두는 곳
                            </Text>
                        </View>
                        <TouchableOpacity onPress={() => setModalVisible(true)}>
                            <Image
                                source={require('../../../assets/images/camera.png')}
                                onPress={() => setModalVisible(true)}></Image>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </ImageBackground>
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                    onPress={() => {
                        groupCreateFirebase();
                    }}>
                    <Text>저장하기</Text>
                </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={styles.skipButton}>
                    <Text style={styles.skipText}>건너뛰기</Text>
                </TouchableOpacity>
            </View>
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
        color: '#ffffff',
    },
    imageSubtitle: {
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize: 16,
        paddingTop: 8,
        color: '#ffffff',
    },
    skipButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 168,
        height: 40,
        borderRadius: 24,
        marginTop: 6,
    },
    skipText: {
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize: 16,
        color: colors.gray3,
    },
});

export default GroupCreateImage;
