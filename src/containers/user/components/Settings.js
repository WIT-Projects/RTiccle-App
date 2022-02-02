import React, {useState} from 'react';
import { View, StyleSheet, } from 'react-native';
import SettingItem from './SettingItem';
import { logout, resetUserData, currentUser } from '../../../service/AuthService';
import CustomModal from '../../common/CustomModal';
import PrivacyModal from './PrivacyModal';
import { restartApp } from '../../../service/CommonService';

const Setting = ({isGuest, setIsGuest}) => {

    const [dataResetModal, setDataResetModal] = useState(false);
    const [privacyModalVisible, setPrivacyModalVisible] = useState(false);
    const logoutButtonEvent = () => {
        logout();
        setIsGuest(true);
        restartApp();
    }
    const resetButtonEvent = () => {
        resetUserData(currentUser.uid)
        restartApp();
    }
    const PrivacyModalVisibleTrue = () => {
        setPrivacyModalVisible(true)
    }

    return (
        <>
            <PrivacyModal
                isModalVisible={privacyModalVisible} setModalVisible={setPrivacyModalVisible}
            />
            <CustomModal
                title={"데이터를 초기화할 경우 복구가 불가능합니다.\n 초기화 하시겠습니까?"}
                isModalVisible={dataResetModal} setModalVisible={setDataResetModal}
                leftButton={"취소"} rightButton={"삭제"}
                rightButtonFunction={resetButtonEvent}
                warning={true}
            />
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
                    pressEvent={() => setDataResetModal(true)}
                />
                <SettingItem
                    icon={require('../../../assets/icon/info.png')}
                    text={"개인정보처리방침"}
                    pressEvent={PrivacyModalVisibleTrue}
                />
            </View>
        </>
        
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: 24,
    },
})

export default Setting;
