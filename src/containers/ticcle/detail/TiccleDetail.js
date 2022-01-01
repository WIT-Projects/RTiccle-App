import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import colors from '../../../theme/colors';
import TiccleDetailInfo from './components/TiccleDetailInfo';
import TiccleDetailImageSwiper from './components/TiccleDetailImageSwiper';
import TiccleDetailText from './components/TiccleDetailText';
import TiccleDetailTags from './components/TiccleDetailTags';
import UseTiccleCreate from '../../../context/hook/UseTiccleCreate';
import TiccleDetailImageExpansion from './components/TiccleDetailImageExpansion';
import { FBDateToFormatDate } from '../../../service/CommonService';

const TiccleDetail = () => {

    const {ticcleCreate} = UseTiccleCreate();
    const ticcleTitle = ticcleCreate.title
    const ticcleLink = ticcleCreate.link
    const ticcleContent = ticcleCreate.content
    const ticcleDate = ticcleCreate.lastModifiedTime

    var formattedday = ""
    if(ticcleDate !== ""){
        formattedday = FBDateToFormatDate(ticcleCreate.lastModifiedTime);
    }

    const [imageExpansion, setImageExpansion] = useState(false)
    const [imagePathForExpansion, setImagePathForExpansion] = useState('')
    
    return (
        <ScrollView style={styles.container}>
            <TiccleDetailImageExpansion isModalVisible={imageExpansion} setModalVisible={setImageExpansion} imagePath={imagePathForExpansion}/>
            <TiccleDetailInfo title={ticcleTitle} date={formattedday} link={ticcleLink}></TiccleDetailInfo>
            {(ticcleCreate.images.length > 0) ?
            <TiccleDetailImageSwiper images={ticcleCreate.images} setImageExpansion={setImageExpansion} setImagePathForExpansion={setImagePathForExpansion}/> 
            : null}
            <TiccleDetailText content={ticcleContent}/>
            <TiccleDetailTags tags={ticcleCreate.tagList}/>
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

