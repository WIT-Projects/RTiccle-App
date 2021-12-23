import React, { useState, useEffect } from 'react';
import { Image, TouchableOpacity, StyleSheet } from "react-native";

import GroupInfo from './components/groupInfo';
import Search from './components/search';
import ZeroTiccle from './components/zeroTiccle';
import GroupDetailTiccleList from './components/GroupDetailTiccleList';

import { getGroupDataIncludeImage, getTiccleList } from './container/GroupDetailContainer';

const GroupDetail = ({ route }) => {
    const [groupData, setGroupData] = useState([]);
    const [ticcleList, setTiccleList] = useState([]);

    useEffect(() => {
        // get group data
        const getData = getGroupDataIncludeImage(route.params.groupId);
        getData.then((value) => setGroupData(value));

        //get ticcle List
        const getTiccleData = getTiccleList(route.params.groupId);
        getTiccleData.then((value) => {
            setTiccleList(value);
        });
    }, []);

    return (
        <>
            <GroupInfo title={route.params.groupId} imgUrl={groupData.imageUrl} content={groupData.description} />
            <Search></Search>
            {ticcleList.length != 0 ? <GroupDetailTiccleList ticcleList={ticcleList} /> : <ZeroTiccle />}
            {/* Floating Button */}
            <TouchableOpacity activeOpacity={0.5} style={styles.touchableOpacityStyle} >
                <Image source={require('../../../assets/icon/make.png')} style={styles.floatingButtonStyle} />
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    // Floating button css
    touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    floatingButtonStyle: {
        resizeMode: 'contain',
        width: 60,
        height: 60,
    },
})

export default GroupDetail;
