import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { type } from '../../../theme/fonts';
import TiccleGroup from './TiccleGroup';
import { useNavigation } from '@react-navigation/native';

const NewTiccleGroupList = ({userName, imgUrl}) => {
    const navigateTo = useNavigation();

    const data = [
        {
            id: 1,
            imgUrl: "https://media.vlpt.us/post-images/dus532/00b845f0-0205-11ea-9e8d-41441020e13b/uiux2x.png",
            groupTitle: "무협",
            ticcleTitle: "화산귀환 938화",
            count: 3,
        },
        {
            id: 2,
            imgUrl: "https://media.vlpt.us/post-images/dus532/00b845f0-0205-11ea-9e8d-41441020e13b/uiux2x.png",
            groupTitle: "애니",
            ticcleTitle: "미쳐돌아가는 모음zip",
            count: 1,
        },
        {
            id: 3,
            imgUrl: "https://media.vlpt.us/post-images/dus532/00b845f0-0205-11ea-9e8d-41441020e13b/uiux2x.png",
            groupTitle: "UX/UI",
            ticcleTitle: "레이아웃 padding",
            count: 3,
        },
        {
            id: 4,
            imgUrl: "https://media.vlpt.us/post-images/dus532/00b845f0-0205-11ea-9e8d-41441020e13b/uiux2x.png",
            groupTitle: "리액트 네이티브",
            ticcleTitle: "flex 알아보기",
            count: 10,
        },
    ]

    return (
        <>
            <Text style={styles.blackBoldFont}>신규 티끌이 생성된 그룹</Text>
            <View onTouchEnd={() => { navigateTo.navigate('GroupDetail') }} style={styles.container}>
                {data.map((item) => {return (<TiccleGroup key={item.id} imgUrl={item.imgUrl} groupTitle={item.groupTitle} ticcleTitle={item.ticcleTitle} count={item.count}></TiccleGroup>)})}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    blackBoldFont:{
        fontFamily : type.spoqaHanSansNeo_Bold,
        fontSize : 18,
        marginTop: 36,
        marginHorizontal: 18,
        marginBottom: 18,
    },
})


export default NewTiccleGroupList;
