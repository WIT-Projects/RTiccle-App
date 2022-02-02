import React, { useState, useEffect } from 'react';
import { BackHandler, ScrollView, StyleSheet } from 'react-native';
import colors from '../../../theme/colors';
import TiccleDetailInfo from './components/TiccleDetailInfo';
import TiccleDetailImageSwiper from './components/TiccleDetailImageSwiper';
import TiccleDetailText from './components/TiccleDetailText';
import TiccleDetailTags from './components/TiccleDetailTags';
import TiccleDetailImageExpansion from './components/TiccleDetailImageExpansion';
import TiccleDetailFloatingButton from './components/TiccleDetailFloatingButton';
import { useNavigation } from '@react-navigation/native';
import TiccleDetailHeader from './components/header/TiccleDetailHeader';
import { getTiccleIncludeImages } from '../../../model/TiccleModel';
import useTiccleChanged from '../../../context/hook/useTiccleChanged';
import { getGroupDataByGId } from '../../../model/GroupModel';
import {useErrorHandler} from 'react-error-boundary';

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

    const [imageExpansion, setImageExpansion] = useState(false)
    const [imagePathForExpansion, setImagePathForExpansion] = useState('')
    const navigation = useNavigation();
    const {isTiccleListChanged, setIsTiccleListChanged} = useTiccleChanged();
    const handleError = useErrorHandler(); // for error handling

    useEffect(() => {
        const ticcleData = route.params.ticcleData;
        const goBack = route.params.goBack
        const groupDetailData = getGroupDataByGId(ticcleData.groupId);
        getTiccleIncludeImages(ticcleData).then((res) => setTiccleDetail(res));
        const goToHomeStack = () => {
            setIsTiccleListChanged(!isTiccleListChanged);
            (goBack) ? 
            navigation.goBack() :
            navigation.navigate('GroupDetail', {groupData: groupDetailData});
            return true
        };
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            goToHomeStack
        );
        const ticcleData = route.params.ticcleData;
        getTiccleIncludeImages(ticcleData).then((res) => setTiccleDetail(res)).catch(err => handleError(err));
        return () => backHandler.remove();
    }, [route]);


    
    return (
        <>
            <TiccleDetailHeader
                ticcleDetail={ticcleDetail}
                ticcleGroupId={ticcleDetail.groupId}
                goBack={route.params.goBack}
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

