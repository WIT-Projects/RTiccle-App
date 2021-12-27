import { useContext } from 'react';
import AppContext from '../AppContext';

const UseTiccleCreate = () => {
    const {ticcleCreate, setTiccleCreate, setTiccleTitle, setTiccleLink, setTiccleTag,
        setTiccleContent, setTiccleImage, initialTiccleCreate, deleteTiccleImage,
        setTiccleDate
    } = useContext(AppContext);

    return {ticcleCreate, setTiccleCreate, setTiccleTitle, setTiccleLink, setTiccleTag,
        setTiccleContent, setTiccleImage, initialTiccleCreate, deleteTiccleImage,
        setTiccleDate
    };
}

export default UseTiccleCreate
