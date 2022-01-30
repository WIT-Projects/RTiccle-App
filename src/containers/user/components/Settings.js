import React from 'react';
import { View, StyleSheet, } from 'react-native';
import SettingItem from './SettingItem';
import { logout, resetUserData, currentUser } from '../../../service/AuthService';
import RNRestart from 'react-native-restart';

const Setting = ({isGuest, setPrivacyModalVisible, setIsGuest}) => {

    const logoutButtonEvent = () => {
        logout();
        setIsGuest(true);
    }
    const resetButtonEvent = () => {
        resetUserData(currentUser.uid)
        RNRestart.Restart();
    }
    const PrivacyModalVisibleTrue = () => {
        setPrivacyModalVisible(true)
    }

    return (
        <View style={styles.container}>
            {isGuest ? null :
            <SettingItem
                icon={require('../../../assets/icon/logout.png')}
                text={"로그아웃"}
                pressEvent={logoutButtonEvent}
            />
            }
            <SettingItem
                icon={require('../../../assets/icon/data-reset.png')}
                text={"데이터 초기화"}
                pressEvent={resetButtonEvent}
            />
            <SettingItem
                icon={require('../../../assets/icon/info.png')}
                text={"개인정보처리방침"}
                pressEvent={PrivacyModalVisibleTrue}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: 24,
    },
})

export default Setting;
