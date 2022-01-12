import {useContext} from 'react';
import AppContext from '../AppContext';

const useGroupUpdate = () => {
    const {
        groupUpdate,
        setGroupUpdate,
        initialGroupUpdate,
        setGroupUpdateType,
        setGroupUpdateTitle,
        setGroupUpdateDescription,
        setGroupUpdateImage,
    } = useContext(AppContext);

    return {
        groupUpdate,
        setGroupUpdate,
        initialGroupUpdate,
        setGroupUpdateType,
        setGroupUpdateTitle,
        setGroupUpdateDescription,
        setGroupUpdateImage,
    };
};

export default useGroupUpdate;
