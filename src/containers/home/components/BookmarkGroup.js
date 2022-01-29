import React, {useEffect} from 'react';
import {Text, Image, ImageBackground, View, StyleSheet} from 'react-native';
import {type} from '../../../theme/fonts';
import {useNavigation} from '@react-navigation/native';

const BookmarkGroup = ({groupData}) => {
    const navigation = useNavigation();
    let source = '';
    groupData.imageUrl == null || groupData.imageUrl == ''
        ? (source = require('../../../assets/images/blankImage.png'))
        : (source = {uri: groupData.imageUrl});

    useEffect(() => {
        navigation.setParams({groupData: groupData});
    }, [groupData]);

    return (
        <View
            style={styles.container}
            onTouchEnd={() => {
                navigation.navigate('GroupDetail', {groupData: groupData});
            }}>
            <ImageBackground source={source} resizeMode="cover" style={styles.groupMainImage}>
                <Image style={styles.icon} source={require('../../../assets/icon/bookmarkTrue.png')}></Image>
            </ImageBackground>

            <Text style={styles.blackRegularFont}>{groupData.title}</Text>
            <Text style={styles.blackBoldFont}>총 {groupData.ticcleNum}개</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 6.5,
    },
    icon: {
        position: 'absolute',
        top: 0,
        right: 10,
        alignSelf: 'flex-end',
    },
    groupMainImage: {
        width: 194,
        height: 111,
        flex: 1
    },
    blackRegularFont: {
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize: 16,
        marginTop: 10,
    },
    blackBoldFont: {
        fontFamily: type.spoqaHanSansNeo_Bold,
        fontSize: 12,
        marginTop: 5,
    },
});

export default BookmarkGroup;
