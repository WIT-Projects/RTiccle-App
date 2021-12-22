import { useContext } from 'react';
import AppContext from '../AppContext';

const useTiccleCreate = () => {
    const {ticcleCreate, setTiccleCreate, setTiccleTitle, setTiccleLink, setTiccleTag,
        setTiccleContent, setTiccleImage, deleteTiccleCreate, deleteTiccleImage,
        setTiccleDate
    } = useContext(AppContext);

    return {ticcleCreate, setTiccleCreate, setTiccleTitle, setTiccleLink, setTiccleTag,
        setTiccleContent, setTiccleImage, deleteTiccleCreate, deleteTiccleImage,
        setTiccleDate
    };
}

export default useTiccleCreate
