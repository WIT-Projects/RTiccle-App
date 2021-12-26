import {useContext} from 'react';
import AppContext from '../AppContext';

const useGroupCreate = () => {
    const {
        groupCreate,
        setGroupCreate,
        setGroupDate,
        setGroupType,
        setGroupTitle,
        setGroupDescription,
        setGroupBookmark,
        setGroupImage,
    } = useContext(AppContext);

    return {
        groupCreate,
        setGroupCreate,
        setGroupDate,
        setGroupType,
        setGroupTitle,
        setGroupDescription,
        setGroupBookmark,
        setGroupImage,
    };
};

export default useGroupCreate;
