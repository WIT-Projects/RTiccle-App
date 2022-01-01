import React from 'react';
import {
    StyleSheet,
    Text,
    ImageBackground,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import colors from '../../../../theme/colors';
import {type} from '../../../../theme/fonts';
import metrics from '../../../../theme/metrices';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

const GroupInfo = ({title, imgUrl, content, navigation}) => {
    const navigateTo = useNavigation();

    return (
        <>
            <ImageBackground
                // source={{uri: imgUrl}}
                source={require('../../../../assets/images/gradation2.png')}
                resizeMode="cover"
                style={styles.container5}>
                <ImageBackground
                    source={require('../../../../assets/images/gradation2.png')}
                    resizeMode="cover"
                    style={styles.container5}>
                    <Image
                        style={styles.backBtn}
                        onTouchEnd={() => {
                            navigateTo.navigate('Home');
                        }}
                        source={require('../../../../assets/icon/backWhite.png')}
                    />
                    <View style={styles.container}>
                        <View style={styles.container2}>
                            <View style={styles.container3}>
                                <Text style={styles.title}>{title}</Text>
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate('GroupUpdate')
                                    }>
                                    <Image
                                        style={styles.pencil}
                                        source={require('../../../../assets/icon/pencil.png')}></Image>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.container4}>
                                <Text style={styles.content}>{content}</Text>
                                <Image
                                    style={styles.star}
                                    source={require('../../../../assets/icon/star.png')}></Image>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </ImageBackground>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    container2: {
        flexDirection: 'column',
    },
    container3: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    container4: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: metrics.screenWidth,
        alignItems: 'center',
        paddingRight: 18,
    },
    container5: {
        width: '100%',
        height: 256,
    },
    pencil: {
        marginTop: 10,
    },
    star: {
        marginBottom: 12,
    },
    title: {
        fontSize: 24,
        color: colors.white,
        fontWeight: 'bold',
        marginLeft: 18,
        marginTop: 8,
        marginRight: 8,
        fontFamily: type.spoqaHanSansNeo_Bold,
    },
    content: {
        fontSize: 16,
        color: colors.white,
        marginLeft: 18,
        marginBottom: 18,
        fontFamily: type.spoqaHanSansNeo_Regular,
    },
    backBtn: {
        width: 8,
        height: 16,
        marginLeft: 18,
        marginTop: 21,
    },
});

export default GroupInfo;
