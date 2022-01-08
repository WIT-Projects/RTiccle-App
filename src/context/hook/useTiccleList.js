import { useContext } from 'react';
import AppContext from '../AppContext';

const useTiccleList = () => {
    const { ticcleList, setTiccleList } = useContext(AppContext);
    var groupId = '';
    function setGroupId(gid) { groupId = gid; }

    return {
        ticcleList,
        setTiccleList,
        groupId,
        setGroupId,
    };
};

export default useTiccleList;
