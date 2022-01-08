import { useContext } from 'react';
import AppContext from '../AppContext';

const useGroupList = () => {
    const { groupList, setGroupList } = useContext(AppContext);

    return {
        groupList,
        setGroupList,
    };
};

export default useGroupList;
