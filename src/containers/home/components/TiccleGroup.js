import React, {useEffect, useState} from 'react';
import {Text, ImageBackground, View, StyleSheet, Image} from 'react-native';
import colors from '../../../theme/colors';
import {type} from '../../../theme/fonts';
import {useNavigation} from '@react-navigation/native';

const TiccleGroup = ({groupData}) => {
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
            style={styles.ticcleGroup}
            onTouchEnd={() => {
                navigation.navigate('GroupDetail', {
                    groupData: groupData,
                });
            }}>
            <ImageBackground source={source} resizeMode="cover" style={styles.groupMainImage}>
                {groupData.bookmark ? <Image style={styles.bookmarkIcon} source={require('../../../assets/icon/bookmarkTrue.png')}></Image> : null}
                <ImageBackground source={require('../../../assets/images/gradation.png')} resizeMode="cover" style={styles.groupMainImage}>
                    <View style={styles.groupInfo}>
                        <Text style={styles.subFont}>{groupData.title}</Text>
                        <Text style={styles.whiteFont}>최신글</Text>
                        <Text style={styles.whiteFont}>{groupData.ticcleNum == 0 ? "" : groupData.latestTiccleTitle}</Text>
                        <View style={styles.ticcleNum}>
                            <Text style={styles.blackFont}>+{groupData.ticcleNum}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    ticcleGroup: {
        borderBottomWidth: 1,
        borderBottomColor: colors.white,
    },
    bookmarkIcon: {
        position: 'absolute',
        top: 0,
        right: 18,
        zIndex: 1,
        width: 14,
        height: 18,
        resizeMode: 'contain',
    },
    groupMainImage: {
        width: '100%',
        height: 140,
    },
    ticcleNum: {
        backgroundColor: colors.sub,
        paddingHorizontal: 7,
        paddingVertical: 3,
        borderRadius: 10,
    },
    groupInfo: {
        alignItems: 'flex-end',
        marginRight: 18,
        marginVertical: 25,
    },
    subFont: {
        fontFamily: type.spoqaHanSansNeo_Bold,
        fontSize: 16,
        color: colors.sub,
        marginBottom: 6,
    },
    whiteFont: {
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize: 12,
        color: colors.white,
        marginBottom: 6,
    },
    blackFont: {
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize: 12,
    },
});

export default TiccleGroup;
