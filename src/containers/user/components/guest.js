import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import colors from '../../../theme/colors';

function GuestInfo() {
    return (
        <View style={styles.rowContainer}>
            <Text style={styles.font1}>게스트</Text>
            <Text style={styles.font2}>님</Text>
            <Text style={styles.font3}>계정연동</Text>
        </View>
    )
}

function GuestGuide() {
    return(
        <View style={ styles.guideContainer }>
            <Text style={ styles.font }>Guest 모드로 사용 시,</Text>
            <Text style={ styles.font }>앱 삭제 후 재설치를 해도 기존 데이터를 복구할 수 없습니다.</Text>
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
        fontSize: 20,
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
        flex: 1
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