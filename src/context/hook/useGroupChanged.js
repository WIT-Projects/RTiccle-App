import { useContext } from 'react';
import AppContext from '../AppContext';

const useGroupChanged = () => {
    const { 
        isGroupChanged,
        setIsGroupChanged, } = useContext(AppContext);

    return {
        isGroupChanged,
        setIsGroupChanged,
    };
};

export default useGroupChanged;
