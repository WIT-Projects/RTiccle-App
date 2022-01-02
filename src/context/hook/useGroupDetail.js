import {useContext} from 'react';
import AppContext from '../AppContext';

const useGroupDetail = () => {
    const {
        groupDetail,
        setGroupDetail,
        initialGroupDetail,
    } = useContext(AppContext);

    return {
        groupDetail,
        setGroupDetail,
        initialGroupDetail,
    };
};

export default useGroupDetail;
