import React, { useState, useEffect } from 'react';
import { BackHandler, ScrollView, StyleSheet } from 'react-native';
import colors from '../../../theme/colors';
import TiccleDetailInfo from './components/TiccleDetailInfo';
import TiccleDetailImageSwiper from './components/TiccleDetailImageSwiper';
import TiccleDetailText from './components/TiccleDetailText';
import TiccleDetailTags from './components/TiccleDetailTags';
import useTiccleCreate from '../../../context/hook/useTiccleCreate';
import TiccleDetailImageExpansion from './components/TiccleDetailImageExpansion';
import { timeStampToFormatDate } from '../../../service/CommonService';

const TiccleDetail = ({navigation}) => {

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
  
      return () => backHandler.remove();
    }, []);

    const {ticcle, initialTiccle} = useTiccleCreate();
    const ticcleTitle = ticcle.title
    const ticcleLink = ticcle.link
    const ticcleContent = ticcle.content
    const ticcleDate = ticcle.lastModifiedTime

    var formattedday = ""
    if(ticcleDate !== ""){
        formattedday = timeStampToFormatDate(ticcle.lastModifiedTime);
    }

    const [imageExpansion, setImageExpansion] = useState(false)
    const [imagePathForExpansion, setImagePathForExpansion] = useState('')
    
    return (
        <ScrollView style={styles.container}>
            <TiccleDetailImageExpansion isModalVisible={imageExpansion} setModalVisible={setImageExpansion} imagePath={imagePathForExpansion}/>
            <TiccleDetailInfo title={ticcleTitle} date={formattedday} link={ticcleLink}></TiccleDetailInfo>
            {(ticcle.images.length > 0) ?
            <TiccleDetailImageSwiper images={ticcle.images} setImageExpansion={setImageExpansion} setImagePathForExpansion={setImagePathForExpansion}/> 
            : null}
            <TiccleDetailText content={ticcleContent}/>
            <TiccleDetailTags tags={ticcle.tagList}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.white, 
        paddingHorizontal : 18,
    }
})

export default TiccleDetail

