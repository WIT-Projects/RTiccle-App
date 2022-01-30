import React, { useEffect, useState } from 'react';
import {ScrollView, StyleSheet, BackHandler} from 'react-native';
import MyMount from './components/MyMount';
import BookmarkGroupList from './components/BookmarkGroupList';
import NewTiccleGroupList from './components/NewTiccleGroupList';
import colors from '../../theme/colors';
import CustomModal from '../common/CustomModal';
import { initAlgolia } from '../../service/SearchService';

const Home = ({navigation}) => {
    const [appExitModal, setAppExitModal] = useState(false)
    
    useEffect(() => {
        initAlgolia();
        // Home BackButton
        const backAction = () => {
            setAppExitModal(true)
            return true;
          };
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        ); 
        return () => backHandler.remove();
    }, [])

    return (
        <ScrollView style={styles.container}>
            <CustomModal
                isModalVisible={appExitModal} setModalVisible={setAppExitModal} title={'앱을 종료하시겠습니까?'}
                leftButton={'아니오'} rightButton={'네'} rightButtonFunction={BackHandler.exitApp}
            />
            <MyMount></MyMount>
            <BookmarkGroupList></BookmarkGroupList>
            <NewTiccleGroupList></NewTiccleGroupList>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
    },
});

export default Home;
