import React, {useState} from 'react';
import {
    View,
    Text,
    Pressable,
    Image,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import SaveButton from './components/SaveButton';
import PhotoModal from './components/PhotoModal';
import TextInfo from './components/TextInfo';

import { type } from '../../../theme/fonts';
import colors from '../../../theme/colors';

const GroupCreateImage = ({navigation}) => {
  const [image, setImage] = useState('');
  let source;
  image === '' ? source = require('../../../assets/images/blankImage.png') : source = { uri: image }
  const [isModalVisible, setModalVisible] = useState(false);
  const [groupCreateButtonDisable, setGroupCreateButtonDisable]= useState(true);

  return (
    <View style={styles.container}>
        <PhotoModal setImage={setImage} isModalVisible={isModalVisible} setModalVisible={setModalVisible}></PhotoModal>
        <TextInfo title='마지막 단계예요.' subtitle='나만의 커버 이미지을 추가해 보세요!'></TextInfo>
        <ImageBackground
          source={source}
          style={styles.headerImage}>
            <View style={styles.headerImageInner}>
                <View>
                    <Text style={styles.imageTitle}>현판</Text>
                    <Text style={styles.imageSubtitle}>데못죽 같은 거 모아두는 곳</Text>
                </View>
                <Pressable
                onPress={() => setModalVisible(true)}>
                    <Image source={require('../../../assets/images/camera.png')} onPress={() => setModalVisible(true)}></Image>
                </Pressable>
            </View>
        </ImageBackground>
        <SaveButton text="저장하기" buttonDisabled={groupCreateButtonDisable} navigation={navigation}></SaveButton>
        <View style={{alignItems:'center',backgroundColor:'blue'}}><TouchableOpacity style={styles.skipButton}><Text style={styles.skipText}>건너뛰기</Text></TouchableOpacity></View>
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
        height: 256,
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
    imageTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    imageSubtitle: {
        fontSize: 16,
        paddingTop: 8,
        color: '#ffffff'
    },
    skipButton: {
        alignItems: 'center',
        justifyContent : 'center',
        width : 168,
        height : 40,
        borderRadius: 24,
        marginTop: 6,
    },
    skipText: {
        fontFamily : type.spoqaHanSansNeo_Regular,
        fontSize: 16,
        color : colors.gray3,
    }
});

export default GroupCreateImage;
