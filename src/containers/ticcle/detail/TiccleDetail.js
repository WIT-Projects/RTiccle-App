import React, { useState, useEffect } from 'react';
import { BackHandler, ScrollView, StyleSheet } from 'react-native';
import colors from '../../../theme/colors';
import TiccleDetailInfo from './components/TiccleDetailInfo';
import TiccleDetailImageSwiper from './components/TiccleDetailImageSwiper';
import TiccleDetailText from './components/TiccleDetailText';
import TiccleDetailTags from './components/TiccleDetailTags';
import TiccleDetailImageExpansion from './components/TiccleDetailImageExpansion';
import TiccleDetailFloatingButton from './components/TiccleDetailFloatingButton';
import { getTiccleIncludeImages } from '../../../model/TiccleModel';
import { useNavigation } from '@react-navigation/native';
import TiccleDetailHeader from './components/header/TiccleDetailHeader';

const TiccleDetail = ({route}) => {
    const [ticcleDetail, setTiccleDetail] = useState({
        lastModifiedTime: '',
        groupId: '',
        title: '',
        link: '',
        tagList: [],
        content: '',
        images: [],
        id: '',
    })
    const initialTiccleDetail = () => {
        setTiccleDetail({
            lastModifiedTime: '',
            groupId: '',
            title: '',
            link: '',
            tagList: [],
            content: '',
            images: [],
            id: '',
        })
    }

    const [imageExpansion, setImageExpansion] = useState(false)
    const [imagePathForExpansion, setImagePathForExpansion] = useState('')
    const navigation = useNavigation();
    
    useEffect(() => {
        const goToHomeStack = () => {
            navigation.navigate('Home');
            initialTiccleDetail();
            return true
        };
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            goToHomeStack
        );

        const ticcleData = route.params.ticcleData;
        (ticcleData.imageUrl !== undefined) ? setTiccleDetail(ticcleData) : getTiccleImageFromFirebase();            
        console.log(ticcleData)
        
        return () => backHandler.remove();
    }, [route]);

    const getTiccleImageFromFirebase = async() => {
        const ticcleData = route.params.ticcleData
        const ticcleGetImage = await getTiccleIncludeImages(ticcleData);
        console.log(ticcleGetImage);
        setTiccleDetail(ticcleGetImage);
    }
    
    return (
        <>
            <TiccleDetailHeader
                initialTiccleDetail={initialTiccleDetail} ticcleDetail={ticcleDetail}
            />
            <ScrollView style={styles.container}>
                <TiccleDetailImageExpansion
                    isModalVisible={imageExpansion} setModalVisible={setImageExpansion}
                    imagePath={imagePathForExpansion}
                />
                <TiccleDetailInfo 
                    title={ticcleDetail.title} lastModifiedTime={ticcleDetail.lastModifiedTime}
                    link={ticcleDetail.link}
                /> 
                {(ticcleDetail.images.length > 0) ?
                <TiccleDetailImageSwiper images={ticcleDetail.imageUrl} setImageExpansion={setImageExpansion} setImagePathForExpansion={setImagePathForExpansion}/> 
                : null}
                <TiccleDetailText
                    content={ticcleDetail.content}
                />
                <TiccleDetailTags
                    tagList={ticcleDetail.tagList}
                />
            </ScrollView>
            <TiccleDetailFloatingButton ticcleData={ticcleDetail}/>
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

