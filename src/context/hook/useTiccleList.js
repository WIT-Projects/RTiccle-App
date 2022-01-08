import { useContext } from 'react';
import AppContext from '../AppContext';

const useTiccleList = () => {
    const { ticcleList, setTiccleList } = useContext(AppContext);

    return {
        ticcleList,
        setTiccleList,
    };
};

export default useTiccleList;
