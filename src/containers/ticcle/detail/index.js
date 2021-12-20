import React from 'react';
import { Text, View,ScrollView, StyleSheet } from 'react-native';

import colors from '../../../theme/colors';

import DateTitleLinkGroup from './components/DateTitleLinkGroup';
import ImageSwiper from './components/ImageSwiper';
import DetailTiccleText from './components/DetailTiccleText';
import DetailTiccleTag from './components/DetailTiccleTag';

const TiccleDetail = () => {

    const imageExample = [
        require('../../../assets/images/blankImage.png'),
        require('../../../assets/images/example_group.png')
    ];

    const imageExample2 = [];

    const tagExample = ['2022년', '임인년',  'HappyNewYears', '22학번','R-Ticcle', '검은호랑이띠']
    return (
        <ScrollView style={styles.container}>
            <DateTitleLinkGroup></DateTitleLinkGroup>

            {(imageExample.length > 0) ? <ImageSwiper images={imageExample}></ImageSwiper> : <View></View>}
            <DetailTiccleText></DetailTiccleText>
            <DetailTiccleTag tags={tagExample}></DetailTiccleTag>
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

