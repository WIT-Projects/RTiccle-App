import { useContext } from 'react';
import AppContext from '../AppContext';

const UseTiccleCreate = () => {
    const {ticcleCreate, setTiccleCreate, setTiccleTitle, setTiccleLink, setTiccleTagList,
        setTiccleContent, setTiccleImages, initialTiccleCreate, deleteTiccleImage,
        setTiccleDate
    } = useContext(AppContext);

    return {ticcleCreate, setTiccleCreate, setTiccleTitle, setTiccleLink, setTiccleTagList,
        setTiccleContent, setTiccleImages, initialTiccleCreate, deleteTiccleImage,
        setTiccleDate
    };
}

export default UseTiccleCreate
