import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import colors from '../../theme/colors';
import Setting from './components/Settings';
import GuestInfo from './components/guest/GuestInfo';
import GuestGuide from './components/guest/GusetGuide';
import User from './components/User';
import { type } from '../../theme/fonts';
import { currentUser, getUserProfile } from '../../service/AuthService';

const MyPage = () => {
    const [isGuest, setIsGuest] = useState(true);
    const [userProfile, setUserProfile] = useState({
        name: '',
        email: '',
    })
    // Error handling example
    // const Bomb = () => {
    //     throw new Error('MyPage rendering error')
    // }

    useEffect(() => {
        if (currentUser != null) setIsGuest(currentUser.isAnonymous);
    }, []);

    useEffect(() => {
        if (!isGuest) getUserProfile(setUserProfile);
    }, [isGuest])

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.myInfo}>내 정보</Text>
                { isGuest ? <GuestInfo setIsGuest={setIsGuest}/> : <User userProfile={userProfile}/>}
                <View style={styles.block}></View>
                <Setting 
                    isGuest={isGuest} setIsGuest={setIsGuest}
                />
                { isGuest ? <GuestGuide /> : null }
            </View>
        </>
      );
}

const styles = StyleSheet.create({
    container: {
        flex:1, 
        backgroundColor: colors.white,
    },
    myInfo: {
        textAlignVertical : 'center',
        marginTop: 10,
        paddingHorizontal: 24,
        height:46,
        fontFamily: type.spoqaHanSansNeo_Regular,
        fontSize: 16,
    },
    block: {
        height: 10,
        backgroundColor: colors.gray1,
        marginVertical: 10,
    },
})

export default MyPage;
