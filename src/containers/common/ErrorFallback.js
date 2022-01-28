import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, BackHandler} from 'react-native';
import colors from '../../theme/colors';
import {type} from '../../theme/fonts';
import RNRestart from 'react-native-restart'; // Import package from node modules
const ErrorFallback = ( { error } ) =>
{
    const restartApp = () =>
    {
        RNRestart.Restart();
    }
    return (
        <View style={styles.container}>
            <Text style={styles.errorText}>네트워크 연결에 문제가 생겼어요.</Text>
            <Text style={styles.errorText}>개발자 연락처: rticcle@gmail.com</Text>
            <Text style={[styles.errorText, styles.red]}>Error : { error.message }</Text>
            <TouchableOpacity style={ styles.homeButton } onPress={()=> restartApp()}>
                <Text style={ styles.homeButtonText }>앱 재시작</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent:'center'
    },
    errorText: {
        fontFamily: type.notoSansKR_Regular,
        fontSize: 16,
        lineHeight: 26,
    },
    red: {
        color: colors.red,
    },
    homeButton: {
        marginTop: 50,
        backgroundColor: colors.main,
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius:24
    },
    homeButtonText: {
        color: colors.white,
    }
});

export default ErrorFallback;
