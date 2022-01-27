import React, {useState, useEffect} from 'react';
import GroupInfo from './components/GroupInfo';
import SearchBar from '../../common/SearchBar';
import ZeroTiccle from './components/ZeroTiccle';
import GroupDetailTiccleList from './components/GroupDetailTiccleList';
import useTiccleChanged from '../../../context/hook/useTiccleChanged';
import {getTiccleListByGId} from '../../../model/TiccleModel';
import {ticcleList} from '../../../model/TiccleModel';
import GroupDetailFloatingButton from './components/GroupDetailFloatingButton'

const GroupDetail = ({route, navigation}) => {
    const {isTiccleListChanged, setIsTiccleListChanged} = useTiccleChanged();

    const [list, setList] = useState([]);
    const [group, setGroup] = useState(route.params?.groupData);
    useEffect(() => {
        // get/set ticcle List
        getTiccleListByGId(route.params.groupData.id).then(() => {
            setList(ticcleList);
            setIsTiccleListChanged(!isTiccleListChanged); // notify ticcle changed
        });
    }, []);
    useEffect(() => {
        if (route.params?.groupData) {
            setGroup(route.params?.groupData);
        }
    }, [route.params?.groupData]);
    useEffect(() => {
        setList(ticcleList); // update list
    }, [isTiccleListChanged]);

    return (
        <>
            <GroupInfo groupData={group} navigation={navigation} />
            <SearchBar placeholderContext="#태그이름, 티끌이름"></SearchBar>
            {route.params.groupData.ticcleNum != 0 ? 
            <GroupDetailTiccleList ticcleList={list} />
            : 
            <ZeroTiccle />
            }
            <GroupDetailFloatingButton groupId={groupId}/>
        </>
    );
};

export default GroupDetail;
