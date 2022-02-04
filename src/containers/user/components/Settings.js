import React, {useState} from 'react';
import { View, StyleSheet, } from 'react-native';
import SettingItem from './SettingItem';
import { logout, resetUserData, unregister } from '../../../service/AuthService';
import CustomModal from '../../common/CustomModal';
import PrivacyModal from './PrivacyModal';
import { restartApp } from '../../../service/CommonService';
import {useErrorHandler} from 'react-error-boundary';
import Spinner from '../../common/Spinner';

const Setting = ({isGuest, setIsGuest}) => {
    const [dataResetModal, setDataResetModal] = useState(false);
    const [privacyModalVisible, setPrivacyModalVisible] = useState(false);
    const [isUnregisterAlert, setIsUnregisterAlert] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleError = useErrorHandler(); // for error handling
    
    const logoutButtonEvent = () => {
        logout().then(() => {
            setIsGuest(true);
            restartApp();
        })
        .catch(err => handleError(err));
    }
    const resetButtonEvent = () => {
        setDataResetModal(false);
        setIsLoading(true);
        resetUserData().then(() => {
            setIsLoading(false);
            restartApp();
        }).catch(err => handleError(err));
    }
    const PrivacyModalVisibleTrue = () => {
        setPrivacyModalVisible(true)
    }
    const unregisterButtonEvent = () => {
        setIsUnregisterAlert(false);
        setIsLoading(true);
        unregister().then(() => {
            setIsLoading(false);
            restartApp();
        }).catch(err => handleError(err));
    }

    return (
        <>
            <PrivacyModal
                isModalVisible={privacyModalVisible} setModalVisible={setPrivacyModalVisible}
            />
            <CustomModal
                title={"초기화할 경우 복구가 불가능합니다.\n 초기화 하시겠습니까?"}
                isModalVisible={dataResetModal} setModalVisible={setDataResetModal}
                leftButton={"취소"} rightButton={"삭제"}
                rightButtonFunction={resetButtonEvent}
                warning={true}
            />
            <CustomModal
                isModalVisible={isUnregisterAlert} setModalVisible={setIsUnregisterAlert}
                title={`회원 탈퇴 시 사용자가 작성한 콘텐츠와\n연동된 계정 정보가 영구 삭제됩니다.\n탈퇴 하시겠습니까? `}
                leftButton={"취소"} rightButton={"탈퇴"}
                rightButtonFunction={unregisterButtonEvent}
                warning={true}
            />
            {isLoading && <Spinner></Spinner>}
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
                {isGuest ? null :
                <SettingItem
                    icon={require('../../../assets/icon/unregister.png')}
                    text={"회원 탈퇴"}
                    pressEvent={() => setIsUnregisterAlert(true)}
                />
                }
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
