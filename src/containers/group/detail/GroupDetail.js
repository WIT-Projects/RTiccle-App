import React, { useState, useEffect } from 'react';
import { Image, TouchableOpacity, StyleSheet } from "react-native";

import GroupInfo from './components/groupInfo';
import Search from './components/search';
import ZeroTiccle from './components/zeroTiccle';
import GroupDetailTiccleList from './components/GroupDetailTiccleList';
import { findTiccleListByGroupId } from '../../../service/TiccleService';

const GroupDetail = ({ route }) => {

    const [ticcleList, setTiccleList] = useState([]);

    useEffect(() => {
        //get ticcle List
        findTiccleListByGroupId(route.params.groupId, setTiccleList);
    }, []);

    return (
        <>
            <GroupInfo title={route.params.groupId} />
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
