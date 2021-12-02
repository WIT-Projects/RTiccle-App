import React from 'react';
import {Text, ImageBackground, View, ScrollView,  StyleSheet} from 'react-native';
import { type } from '../../../theme/fonts';
import MarkTiccle from './MarkTiccle';

const BookMarkList = ({userName, imgUrl}) => {
    const data = [
        {
            id: 1,
            imgUrl: "https://media.vlpt.us/post-images/dus532/00b845f0-0205-11ea-9e8d-41441020e13b/uiux2x.png",
            title: "UX/UI 알아두면 좋은 내용",
            count: 180,
        },
        {
            id: 2,
            imgUrl: "https://media.vlpt.us/post-images/dus532/00b845f0-0205-11ea-9e8d-41441020e13b/uiux2x.png",
            title: "UX/UI 포트폴리오",
            count: 180,
        },
        {
            id: 3,
            imgUrl: "https://media.vlpt.us/post-images/dus532/00b845f0-0205-11ea-9e8d-41441020e13b/uiux2x.png",
            title: "UX/UI 앱 웹",
            count: 180,
        },
        {
            id: 4,
            imgUrl: "https://media.vlpt.us/post-images/dus532/00b845f0-0205-11ea-9e8d-41441020e13b/uiux2x.png",
            title: "브랜딩 로고 만들기",
            count: 180,
        },
    ]

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.blackBoldFont}>티끌 바로가기</Text>
                <Text style={styles.blackRegularFont}>{userName} 님이 즐겨찾는 티끌들이에요.</Text>
            </View>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{marginLeft: 11.5}}>
                {data.map((item) => {return (<MarkTiccle key={item.id} imgUrl={item.imgUrl} title={item.title} count={item.count}></MarkTiccle>)})}
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop: 36,
        marginHorizontal: 18,
        marginBottom: 10,
    },
    blackBoldFont:{
        fontFamily : type.spoqaHanSansNeo_Bold,
        fontSize : 18,
    },
    blackRegularFont:{
        fontFamily : type.spoqaHanSansNeo_Regular,
        fontSize : 12,
        marginTop: 6,
    },
})


export default BookMarkList;
