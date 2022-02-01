import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import colors from '../../theme/colors';
import {type} from '../../theme/fonts';
import {restartApp} from '../../service/CommonService';

const ErrorFallback = () => {
    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Image source={require('../../assets/images/errorFallbackLogo.png')} style={styles.logo}></Image>
                <Text style={styles.infoText}>예상치 못한 문제가 발생했어요.</Text>
                <Text style={styles.infoText}>네트워크 연결 상태를 확인해주세요.</Text>
            </View>
            <TouchableOpacity style={styles.restartButton} onPress={() => restartApp()}>
                <Text style={styles.restartButtonText}>앱 재시작</Text>
            </TouchableOpacity>
            <View style={styles.report}>
                <Text style={styles.reportText}>만일 네트워크 문제가 아니라면,</Text>
                <Text style={styles.reportText}>오류 내용을 제보해주시면 감사하겠습니다.</Text>
                <Text style={styles.reportText}>개발자 계정: rticcle@gmail.com</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    info: {
      alignItems:'center'
    },
    infoText: {
        fontFamily: type.notoSansKR_Regular,
        color: colors.main,
        fontSize: 16,
        lineHeight: 26,
    },
    logo: {
        width: 55,
        height: 35,
        marginBottom: 32,
    },
    restartButton: {
        width: 168,
        height: 40,
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 74,
        backgroundColor: colors.main,
        borderRadius: 24,
    },
    restartButtonText: {
        fontFamily: type.notoSansKR_Regular,
        color: colors.white,
        fontSize: 16,
        lineHeight:20
    },
    report: {
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        paddingBottom: 22,
    },
    reportText: {
        fontFamily: type.notoSansKR_Regular,
        color: colors.gray3,
        fontSize: 14,
        lineHeight: 22,
    },
});

export default ErrorFallback;
