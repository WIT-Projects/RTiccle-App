import { useContext } from 'react';
import AppContext from '../AppContext';

const useTiccleList = () => {
    var groupId = '';
    function setGroupId(gid) { groupId = gid; }
    
    const { 
        ticcleList, 
        setTiccleList,
        setTiccleListAtOne,
        deleteOneTiccleOfList, } = useContext(AppContext);

    return {
        groupId,
        setGroupId,
        ticcleList,
        setTiccleList,
        setTiccleListAtOne,
        deleteOneTiccleOfList, 
    };
};

export default useTiccleList;
