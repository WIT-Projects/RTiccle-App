import React, { useEffect, useState } from 'react';
import {View, ScrollView, StyleSheet, Button, BackHandler} from 'react-native';
import MyMount from './components/MyMount';
import BookMarkList from './components/BookMarkList';
import NewTiccleGroupList from './components/NewTiccleGroupList';
import colors from '../../theme/colors';
import { getAllGroupIncludeImages } from '../../model/GroupModel';
import useGroupChanged from '../../context/hook/useGroupChanged'
import CustomModal from '../common/CustomModal';

const Home = ({navigation}) => {

    const { isGroupChanged, setIsGroupChanged } = useGroupChanged();
    const [appExitModal, setAppExitModal] = useState(false)
    
    useEffect(() => {
        (async() => {
            await getAllGroupIncludeImages(); // init group data
            setIsGroupChanged(!isGroupChanged);
        })()

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
            <MyMount
                mount={'태산'}
                imageUrl={
                    'https://images.france.fr/zeaejvyq9bhj/4jKuK6yobYMkGGQ4IO0Kk2/b77683922a8cca16afaa0d2028df39ad/savoie-mont-blanc-ete-header.jpg?w=1200&h=630&q=70&fl=progressive&fit=fill'
                }></MyMount>
            <BookMarkList></BookMarkList>
            <Button
                title="그룹 생성"
                onPress={() => navigation.navigate('GroupCreateType')}/>
            <NewTiccleGroupList></NewTiccleGroupList>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
    },
});

export default Home;
