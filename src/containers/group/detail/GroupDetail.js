import React, {useState, useEffect} from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';

import GroupInfo from './components/groupInfo';
import SearchBar from '../../common/SearchBar';
import ZeroTiccle from './components/zeroTiccle';
import GroupDetailTiccleList from './components/GroupDetailTiccleList';
import useTiccleChanged from '../../../context/hook/useTiccleChanged';
import { getTiccleListByGId } from '../../../model/TiccleModel';
import { ticcleList } from '../../../model/TiccleModel';

const GroupDetail = ({route, navigation}) => {
    const { isTiccleListChanged, setIsTiccleListChanged } = useTiccleChanged();

    const [list, setList] = useState([]);
    
    useEffect(() => {
        // get/set ticcle List
        getTiccleListByGId(route.params.groupData.id)
        .then(() => {
            setList(ticcleList);
            setIsTiccleListChanged(!isTiccleListChanged); // notify ticcle changed
        });
    }, []);

    useEffect(() => {
        setList(ticcleList); // update list
    }, [isTiccleListChanged])

    return (
        <>
            <GroupInfo groupData={route.params.groupData} navigation={navigation} />
            <SearchBar placeholderContext="#태그이름, 티끌이름"></SearchBar>
            {route.params.groupData.ticcleNum != 0 ? (
                <GroupDetailTiccleList ticcleList={list} />
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
