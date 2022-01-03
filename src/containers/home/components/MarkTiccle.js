import React, { useState, useEffect } from 'react';
import { Text, Image, ImageBackground, View, StyleSheet } from 'react-native';
import { type } from '../../../theme/fonts';
import { findNumberOfTicclesOfGroup } from '../../../service/TiccleService';
import { useNavigation } from '@react-navigation/native';

const MarkTiccle = ({ imgUrl, title }) => {
    const navigateTo = useNavigation();
    const [ticcleCount, setTiccleCount] = useState([]);

    useEffect(() => {
        findNumberOfTicclesOfGroup(title, setTiccleCount);
    }, []);
    return (
        <>
            <View style={styles.container} onTouchEnd={() => { navigateTo.navigate('GroupDetail', { groupId: title }) }}>
                {imgUrl == null ?
                    <ImageBackground
                        source={require('../../../assets/images/bookmarkBlankImage.png')}
                        resizeMode="cover"
                        style={{ width: 194, height: 111, flex: 1 }}>
                        <Image style={styles.icon} source={require('../../../assets/icon/bookMark.png')}></Image>
                    </ImageBackground> :
                    <ImageBackground
                        source={{ uri: imgUrl }}
                        resizeMode="cover"
                        style={{ width: 194, height: 111, flex: 1 }}>
                        <Image style={styles.icon} source={require('../../../assets/icon/bookMark.png')}></Image>
                    </ImageBackground>
                }

                <Text style={styles.blackRegularFont}>{title}</Text>
                <Text style={styles.blackBoldFont}>총 {ticcleCount}개</Text>
            </View>
        </>
    );
}

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

})

export default MarkTiccle;
