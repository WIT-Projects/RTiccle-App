import { useContext } from 'react';
import AppContext from '../AppContext';

const useTiccleChanged = () => {
    const { 
        isTiccleListChanged, 
        setIsTiccleListChanged } = useContext(AppContext);

    return {
        isTiccleListChanged,
        setIsTiccleListChanged,
    };
};

export default useTiccleChanged;
