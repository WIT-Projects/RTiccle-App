import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import GroupDetailTiccle from './GroupDetailTiccle';

const GroupDetailTiccleList = ({ ticcleList }) => {
    return (
        <ScrollView style={styles.container}>
            {ticcleList.map((item, index) => {
                return (<GroupDetailTiccle key={index} item={item}></GroupDetailTiccle>)
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
