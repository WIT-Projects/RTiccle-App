import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import colors from '../../../theme/colors';
import TiccleDetailInfo from './components/TiccleDetailInfo';
import TiccleDetailImageSwiper from './components/TiccleDetailImageSwiper';
import TiccleDetailText from './components/TiccleDetailText';
import TiccleDetailTag from './components/TiccleDetailTag';
import useTiccleCreate from '../../../context/hook/UseTiccleCreate';

const TiccleDetail = () => {

    const {ticcleCreate} = useTiccleCreate();
    const ticcleTitle = ticcleCreate.title
    const ticcleDate = ticcleCreate.date
    const ticcleLink = ticcleCreate.link
    const ticcleContent = ticcleCreate.content

    const tagExample = ['2022년', '임인년',  'HappyNewYears', '22학번','R-Ticcle', '검은호랑이띠']
    return (
        <ScrollView style={styles.container}>
            <TiccleDetailInfo title={ticcleTitle} date={ticcleDate} link={ticcleLink}></TiccleDetailInfo>
            {(ticcleCreate.image.length > 0) ? <TiccleDetailImageSwiper images={ticcleCreate.image}></TiccleDetailImageSwiper> : null}
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

