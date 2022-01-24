import { useContext } from 'react';
import AppContext from '../AppContext';

const UseTiccleCreate = () => {
    const {ticcle, setTiccleGroup, setTiccleTitle, setTiccleLink,
        setTiccleTagList, deleteTiccleTagList, setTiccleContent, setTiccleImages, deleteTiccleImage,
        initialTiccle, 
    } = useContext(AppContext);

    return {ticcle, setTiccleGroup, setTiccleTitle, setTiccleLink,
        setTiccleTagList, deleteTiccleTagList, setTiccleContent, setTiccleImages, deleteTiccleImage,
        initialTiccle
    };
}

export default UseTiccleCreate
