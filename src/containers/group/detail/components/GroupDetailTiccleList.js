import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import GroupDetailTiccle from './GroupDetailTiccle';
import { timeStampToFormatDate } from '../../../../service/CommonService';

const GroupDetailTiccleList = ({ ticcleList }) => {
    return (
        <ScrollView style={styles.container}>
            {ticcleList.map((item, index) => {
                let formattedday = timeStampToFormatDate(item.lastModifiedTime);
                return (<GroupDetailTiccle key={index} ticcleDate={formattedday} title={item.title} tag={item.tagList}></GroupDetailTiccle>)
            })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default GroupDetailTiccleList;
