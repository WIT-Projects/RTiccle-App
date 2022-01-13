import { useContext } from 'react';
import AppContext from '../AppContext';

const useTiccleCreate = () => {
    const {ticcle, setTiccleGroup, setTiccleTitle, setTiccleLink,
        setTiccleTagList, deleteTiccleTagList, setTiccleContent, setTiccleImages, deleteTiccleImage,
        setTiccleDate, initialTiccle, 
    } = useContext(AppContext);

    return {ticcle, setTiccleGroup, setTiccleTitle, setTiccleLink,
        setTiccleTagList, deleteTiccleTagList, setTiccleContent, setTiccleImages, deleteTiccleImage,
        setTiccleDate, initialTiccle
    };
}

export default useTiccleCreate
