import { useContext } from 'react';
import TiccleCreateContext from '../TiccleCreateContext';

const useTiccleCreate = () => {
    const {ticcle, setTiccle,setTiccleGroup, setTiccleTitle, setTiccleLink,
        setTiccleTagList, deleteTiccleTagList, setTiccleContent, setTiccleImages, deleteTiccleImage,
         initialTiccle, 
    } = useContext(TiccleCreateContext);

    return {ticcle, setTiccle, setTiccleGroup, setTiccleTitle, setTiccleLink,
        setTiccleTagList, deleteTiccleTagList, setTiccleContent, setTiccleImages, deleteTiccleImage,
        initialTiccle
    };
}

export default useTiccleCreate
