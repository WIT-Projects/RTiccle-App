import { useContext } from 'react';
import AppContext from '../AppContext';

const UseTiccleCreate = () => {
    const {ticcle, setTiccleCreate, setTiccleTitle, setTiccleLink, setTiccleTagList,
        setTiccleContent, setTiccleImages, initialTiccle, deleteTiccleImage,
        setTiccleDate
    } = useContext(AppContext);

    return {ticcle, setTiccleCreate, setTiccleTitle, setTiccleLink, setTiccleTagList,
        setTiccleContent, setTiccleImages, initialTiccle, deleteTiccleImage,
        setTiccleDate
    };
}

export default UseTiccleCreate
