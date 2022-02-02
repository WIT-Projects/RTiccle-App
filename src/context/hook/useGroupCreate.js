import {useContext} from 'react';
import AppContext from '../AppContext';

const useGroupCreate = () => {
    const {
        groupCreate,
        setGroupCreate,
        initialGroupCreate,
        setGroupTitle,
        setGroupDescription,
        setGroupBookmark,
        setGroupImage,
    } = useContext(AppContext);

    return {
        groupCreate,
        setGroupCreate,
        initialGroupCreate,
        setGroupTitle,
        setGroupDescription,
        setGroupBookmark,
        setGroupImage,
    };
};

export default useGroupCreate;
