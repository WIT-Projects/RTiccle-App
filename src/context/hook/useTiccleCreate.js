import { useContext } from 'react';
import TiccleCreateContext from '../TiccleCreateContext';

const UseTiccleCreate = () => {
    const {ticcle, setTiccleGroup, setTiccleTitle, setTiccleLink,
        setTiccleTagList, deleteTiccleTagList, setTiccleContent, setTiccleImages, deleteTiccleImage,
        initialTiccle, 
    } = useContext(TiccleCreateContext);

    return {ticcle, setTiccleGroup, setTiccleTitle, setTiccleLink,
        setTiccleTagList, deleteTiccleTagList, setTiccleContent, setTiccleImages, deleteTiccleImage,
        initialTiccle
    };
}

export default UseTiccleCreate
