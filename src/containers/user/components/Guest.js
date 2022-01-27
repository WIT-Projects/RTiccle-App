import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import colors from '../../../theme/colors';
import { type } from '../../../theme/fonts';
import {  googleLoginAndLink } from '../../../service/AuthService';

const GuestInfo = ({ setIsGuest }) => {

    function linkWithGoogle() {
        googleLoginAndLink().then(() => setIsGuest(false))
    }

    return (
        <View style={styles.rowContainer}>
            <Text style={styles.font1}>Guest</Text>
            <Text style={styles.font2}>님</Text>
            <Text style={styles.font3} onPress={() => linkWithGoogle()}>계정연동</Text>
        </View>
    )
}

const GuestGuide = () => {
    return(
        <View style={ styles.guideContainer }>
            <Text style={ styles.grayFont }>Guest 모드로 사용 시,</Text>
            <Text style={ styles.grayFont }>앱 삭제 후 재설치를 해도 기존 데이터를 복구할 수 없습니다.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    rowContainer:{
        marginHorizontal: 24,
        height : 36,
        textAlignVertical : 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    font1:{
        fontFamily: type.spoqaHanSansNeo_Bold,
        fontSize: 18
    },
    font2:{
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize : 16,
        marginLeft : 6,
    },
    font3:{
        position: 'absolute',
        right : 0,
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize : 14,
        marginRight: 4,

    },
    guideContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        flex: 1,
        position: 'absolute',
        bottom: 30,
    },
    grayFont:{
        fontSize: 14,
        color: colors.gray4,
    },
});

export default GuestInfo;

export { 
    GuestGuide
};
