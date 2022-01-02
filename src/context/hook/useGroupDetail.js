import {useContext} from 'react';
import AppContext from '../AppContext';

const UseGroupDetail = () => {
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

export default UseGroupDetail;
