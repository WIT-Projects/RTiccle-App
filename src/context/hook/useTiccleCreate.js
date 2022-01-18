import { useContext } from 'react';
import AppContext from '../AppContext';

const useTiccleCreate = () => {
    const {ticcle, setTiccle,setTiccleGroup, setTiccleTitle, setTiccleLink,
        setTiccleTagList, deleteTiccleTagList, setTiccleContent, setTiccleImages, deleteTiccleImage,
         initialTiccle, 
    } = useContext(AppContext);

    return {ticcle, setTiccle, setTiccleGroup, setTiccleTitle, setTiccleLink,
        setTiccleTagList, deleteTiccleTagList, setTiccleContent, setTiccleImages, deleteTiccleImage,
        initialTiccle
    };
}

export default useTiccleCreate
