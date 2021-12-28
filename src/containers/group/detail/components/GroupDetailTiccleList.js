import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import GroupDetailTiccle from './GroupDetailTiccle';

const GroupDetailTiccleList = ({ ticcleList }) => {
    return (
        <ScrollView style={styles.container}>
            {ticcleList.map((item, index) => {
                let ticcleDate = item.lastModifiedTime.toDate();
                let year = ticcleDate.getFullYear().toString().substr(-2);
                let month = ticcleDate.getMonth() + 1;
                let date = ticcleDate.getDate();
                let formattedday = `${year}.${month}.${date}`
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
