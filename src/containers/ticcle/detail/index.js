import React from 'react';
import { Text, View,ScrollView, StyleSheet } from 'react-native';

import colors from '../../../theme/colors';

import TiccleDetailInfo from './components/TiccleDetailInfo';
import TiccleDetailImageSwiper from './components/TiccleDetailImageSwiper';
import TiccleDetailText from './components/TiccleDetailText';
import TiccleDetailTag from './components/TiccleDetailTag';

import useTiccleCreateImage from '../../../context/hook/useTiccleCreateImage';

const TiccleDetail = () => {

    const {ticcleCreateImage} = useTiccleCreateImage();


    const imageExample = [
        require('../../../assets/images/blankImage.png'),
        require('../../../assets/images/example_group.png')
    ];

    const imageExample2 = {}

    const tagExample = ['2022년', '임인년',  'HappyNewYears', '22학번','R-Ticcle', '검은호랑이띠']
    return (
        <ScrollView style={styles.container}>
            <TiccleDetailInfo></TiccleDetailInfo>

            {(ticcleCreateImage.length > 1) ? <TiccleDetailImageSwiper images={ticcleCreateImage}></TiccleDetailImageSwiper> : null}
            <TiccleDetailText></TiccleDetailText>
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

