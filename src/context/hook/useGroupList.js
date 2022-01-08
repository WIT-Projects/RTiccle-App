import { useContext } from 'react';
import AppContext from '../AppContext';

const useGroupList = () => {
    const { 
        groupList, 
        setGroupList, 
        setGroupListAtOne, 
        deleteOneGroupOfList, } = useContext(AppContext);

    return {
        groupList,
        setGroupList,
        setGroupListAtOne,
        deleteOneGroupOfList,
    };
};

export default useGroupList;
