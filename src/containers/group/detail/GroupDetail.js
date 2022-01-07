import React, {useState, useEffect} from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';

import GroupInfo from './components/groupInfo';
import SearchBar from '../../common/SearchBar';
import ZeroTiccle from './components/zeroTiccle';
import GroupDetailTiccleList from './components/GroupDetailTiccleList';
import {findTiccleListByGroupId} from '../../../service/TiccleService';

const GroupDetail = ({route, navigation}) => {
    const [ticcleList, setTiccleList] = useState([]);

    useEffect(() => {
        //get ticcle List
        findTiccleListByGroupId(route.params.groupId, setTiccleList);
    }, []);

    return (
        <>
            <GroupInfo title={route.params.groupId} navigation={navigation} />
            <SearchBar placeholderContext="#태그이름, 티끌이름"></SearchBar>
            {ticcleList.length != 0 ? (
                <GroupDetailTiccleList ticcleList={ticcleList} />
            ) : (
                <ZeroTiccle />
            )}
            {/* Floating Button */}
            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.touchableOpacityStyle}>
                <Image
                    source={require('../../../assets/icon/make.png')}
                    style={styles.floatingButtonStyle}
                />
            </TouchableOpacity>
        </>
    );
};

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
});

export default GroupDetail;
