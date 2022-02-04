import React from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';
import { type } from '../../../theme/fonts';

const User = ({ userProfile }) => {
    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Text style={styles.font1}>{userProfile.name}</Text>
                <Text style={styles.font2}>님</Text>
            </View>
            <View style={styles.rowContainer}>
                <Image style={styles.logo} source={require('../../../assets/images/Google_Logo.png')}/>
                <Text style={styles.font2}>{userProfile.email}</Text>
                <View style={styles.right}>
                    <Text style={styles.font3}>계정연동</Text>
                    <Image style={styles.checkIcon} source={require('../../../assets/icon/check_circle.png')}/>
                </View>
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 24,
        marginBottom : 9,
    },
    rowContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        height:36,
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
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize : 14,
        marginRight: 4,
    },
    right:{
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        right : 0,
    },
    logo:{
        resizeMode: 'contain',
        width: 14, 
        height: 14,
        top: 2,
    },
    checkIcon:{
        top: 1,
        resizeMode: 'contain',
        width: 14,
        height: 14,
    }
});

export default User;
