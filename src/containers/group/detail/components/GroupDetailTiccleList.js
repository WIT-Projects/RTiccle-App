import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import GroupDetailTiccle from './GroupDetailTiccle';

const GroupDetailTiccleList = () => {
    const data = [
        {
            index: 127,
            title: "데못죽 문대모음",
            hashTag: ["데못죽"],
        },
        {
            index: 126,
            title: "122화 지렸던 문대",
            hashTag: ["데못죽"],
        },
        {
            index: 125,
            title: "문대 일러 아카이브",
            hashTag: ["데못죽", "일러"],
        },
        {
            index: 124,
            title: "12화 문대모음",
            hashTag: ["데못죽", "일러", "모음집"],
        },
    ]

    return (
        <>
            <ScrollView style={styles.container}>
                {data.map((item) => {return (<GroupDetailTiccle key={item.index} index={item.index} title={item.title} hashTag={item.hashTag}></GroupDetailTiccle>)})}
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
})

export default GroupDetailTiccleList;
