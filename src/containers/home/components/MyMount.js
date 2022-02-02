import React, {useState, useEffect} from 'react';
import {Text, ImageBackground, View, StyleSheet} from 'react-native';
import colors from '../../../theme/colors';
import {type} from '../../../theme/fonts';
import {getTotalTiccleNum} from '../../../model/GroupModel';
import useGroupChanged from '../../../context/hook/useGroupChanged';

const MyMount = () => {
    const {isGroupChanged} = useGroupChanged();
    const [section, setSection] = useState(0);

    const mountData = [
        {
            image: require('../../../assets/images/mount1.png'),
            name: '언덕',
        },
        {
            image: require('../../../assets/images/mount2.png'),
            name: '동산',
        },
        {
            image: require('../../../assets/images/mount3.png'),
            name: '작은 산',
        },
        {
            image: require('../../../assets/images/mount4.png'),
            name: '큰산',
        },
        {
            image: require('../../../assets/images/mount5.png'),
            name: '태산',
        },
    ];

    useEffect(() => {
        let ticcleCount = getTotalTiccleNum();

        if (ticcleCount <= 10) {
            setSection(0);
        } else if (ticcleCount <= 30) {
            setSection(1);
        } else if (ticcleCount <= 50) {
            setSection(2);
        } else if (ticcleCount <= 80) {
            setSection(3);
        } else {
            setSection(4);
        }
    }, [isGroupChanged]);

    return (
        <>
            <ImageBackground source={mountData[section].image} resizeMode="cover" style={styles.imageContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.whiteFont}>{mountData[section].name}</Text>
                    {section == 4 ? (
                        <Text style={[styles.whiteFont, styles.info]}>멋져요! 드디어 태산이 되었네요!</Text>
                    ) : (
                        <Text style={[styles.whiteFont, styles.info]}>곧 {mountData[section + 1].name}으로 갈 수 있어요.</Text>
                    )}
                </View>
            </ImageBackground>
        </>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: 243,
        resizeMode: 'contain',
    },
    textContainer: {
        flexDirection: 'row',
        paddingTop: 12,
        paddingLeft: 14,
        alignItems: 'flex-end',
    },
    whiteFont: {
        fontFamily: type.spoqaHanSansNeo_Bold,
        fontSize: 18,
        color: colors.white,
        lineHeight: 23,
    },
    info: {
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize: 13,
        paddingLeft: 6,
    },
});

export default MyMount;
