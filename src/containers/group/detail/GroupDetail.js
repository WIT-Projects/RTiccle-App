import React, {useState, useEffect} from 'react';
import GroupInfo from './components/groupInfo';
import SearchBar from '../../common/SearchBar';
import ZeroTiccle from './components/zeroTiccle';
import GroupDetailTiccleList from './components/GroupDetailTiccleList';
import useTiccleChanged from '../../../context/hook/useTiccleChanged';
import { getTiccleListByGId } from '../../../model/TiccleModel';
import { ticcleList } from '../../../model/TiccleModel';
import GroupDetailFloatingButton from './components/GroupDetailFloatingButton';

const GroupDetail = ({route, navigation}) => {
    const { isTiccleListChanged, setIsTiccleListChanged } = useTiccleChanged();

    const [list, setList] = useState([]);
    const groupId = route.params.groupData.id
    useEffect(() => {
        // get/set ticcle List
        getTiccleListByGId(groupId)
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
