import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import colors from '../../../theme/colors';
import { googleLoginAndLink } from '../../../service/AuthService';

const GuestInfo = () => {
    return (
        <View style={styles.rowContainer}>
            <Text style={styles.font1}>게스트</Text>
            <Text style={styles.font2}>님</Text>
            <Text style={styles.font3} onPress={() => googleLoginAndLink()}>계정연동</Text>
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
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    font1:{
        fontWeight: 'bold',
        fontSize: 20,
    },
    font2:{
        fontSize: 15,
        marginLeft: 10,
    },
    font3:{
        fontSize: 15,
        color: colors.gray4,
        position: 'absolute', 
        right: 25,
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
