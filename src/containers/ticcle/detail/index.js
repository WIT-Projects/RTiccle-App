import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import colors from '../../../theme/colors';
import TiccleDetailInfo from './components/TiccleDetailInfo';
import TiccleDetailImageSwiper from './components/TiccleDetailImageSwiper';
import TiccleDetailText from './components/TiccleDetailText';
import TiccleDetailTag from './components/TiccleDetailTag';
import useTiccleCreate from '../../../context/hook/UseTiccleCreate';
import TiccleDetailImageExpansion from './components/TiccleDetailImageExpansion';

const TiccleDetail = () => {

    const {ticcleCreate} = useTiccleCreate();
    const ticcleTitle = ticcleCreate.title
    const ticcleLink = ticcleCreate.link
    const ticcleContent = ticcleCreate.content
    const ticcleDate = ticcleCreate.date

    // 홈 화면으로 가면서 티끌을 초기화 하는데
    // 이 때 ticcleDate가 null 값이 되어서 getFullYear 메소드 실행시 오류가 남
    // 우선 조건문으로 작성했는데 추후 수정이 필요해 보임

    var formattedday = ""
    if(ticcleDate !== ""){
    const year = ticcleDate.getFullYear().toString().substr(-2);
    const month = ticcleDate.getMonth() + 1;
    const date = ticcleDate.getDate();
    formattedday = `${year}년 ${month}월 ${date}일`
    }

    const [imageExpansion, setImageExpansion] = useState(false)
    const [imagePathForExpansion, setImagePathForExpansion] = useState('')
    
    const tagExample = ['2022년', '임인년',  'HappyNewYears', '22학번','R-Ticcle', '검은호랑이띠']
    return (
        <ScrollView style={styles.container}>
            <TiccleDetailImageExpansion isModalVisible={imageExpansion} setModalVisible={setImageExpansion} imagePath={imagePathForExpansion}/>
            <TiccleDetailInfo title={ticcleTitle} date={formattedday} link={ticcleLink}></TiccleDetailInfo>
            {(ticcleCreate.image.length > 0) ?
            <TiccleDetailImageSwiper images={ticcleCreate.image} setImageExpansion={setImageExpansion} setImagePathForExpansion={setImagePathForExpansion}/> 
            : null}
            <TiccleDetailText content={ticcleContent}></TiccleDetailText>
            <TiccleDetailTag tags={tagExample}></TiccleDetailTag>
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

