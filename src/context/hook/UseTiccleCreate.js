import { useContext } from 'react';
import AppContext from '../AppContext';

const UseTiccleCreate = () => {
    const {ticcle, setTiccleGroup, setTiccleTitle, setTiccleLink,
        setTiccleTagList, deleteTiccleTagList, setTiccleContent, setTiccleImages, deleteTiccleImage,
        setTiccleDate, initialTiccle, 
    } = useContext(AppContext);

    return {ticcle, setTiccleGroup, setTiccleTitle, setTiccleLink,
        setTiccleTagList, deleteTiccleTagList, setTiccleContent, setTiccleImages, deleteTiccleImage,
        setTiccleDate, initialTiccle
    };
}

export default UseTiccleCreate
