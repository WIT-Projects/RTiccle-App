import React, { useState, useEffect } from 'react';
import { BackHandler, ScrollView, StyleSheet } from 'react-native';
import colors from '../../../theme/colors';
import TiccleDetailInfo from './components/TiccleDetailInfo';
import TiccleDetailImageSwiper from './components/TiccleDetailImageSwiper';
import TiccleDetailText from './components/TiccleDetailText';
import TiccleDetailTags from './components/TiccleDetailTags';
import useTiccleCreate from '../../../context/hook/useTiccleCreate';
import TiccleDetailImageExpansion from './components/TiccleDetailImageExpansion';
import TiccleDetailFloatingButton from './components/TiccleDetailFloatingButton';
import { getTiccleIncludeImages } from '../../../model/TiccleModel';

const TiccleDetail = ({navigation, route}) => {
    const {ticcle, initialTiccle, setTiccle} = useTiccleCreate();
    const [imageExpansion, setImageExpansion] = useState(false)
    const [imagePathForExpansion, setImagePathForExpansion] = useState('')
    const [ticcleForDelete, setTiccleForDelete] = useState({});

    useEffect(() => {
        const goToHomeStack = () => {
            navigation.navigate('HomeStack');
            initialTiccle();
            return true
        };
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            goToHomeStack
        );
        if(route.params.screenFrom === 'GroupDetail'){
            setTiccleForDelete(ticcle);
            getTiccleImageFromFirebase();
        }
        return () => backHandler.remove();
    }, []);

    const getTiccleImageFromFirebase = async() => {
        const ticcleGetImage = await getTiccleIncludeImages(ticcle);
        setTiccle(ticcleGetImage);
    }
    
    return (
        <>
            <ScrollView style={styles.container}>
                <TiccleDetailImageExpansion isModalVisible={imageExpansion} setModalVisible={setImageExpansion} imagePath={imagePathForExpansion}/>
                <TiccleDetailInfo/>
                {(ticcle.images.length > 0) ?
                <TiccleDetailImageSwiper images={ticcle.images} setImageExpansion={setImageExpansion} setImagePathForExpansion={setImagePathForExpansion}/> 
                : null}
                <TiccleDetailText/>
                <TiccleDetailTags/>
            </ScrollView>
            <TiccleDetailFloatingButton/>
        </>

    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.white, 
        paddingHorizontal : 18,
    }
})

export default TiccleDetail

