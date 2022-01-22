import { useContext } from 'react';
import TiccleDetailContext from '../TiccleDetailContext';

const useTiccleDetail = () => {
    const {ticcleDetail, setTiccleDetail ,setTiccleDetailGroup, setTiccleDetailTitle,
        setTiccleDetailLink, setTiccleDetailTagList, deleteTiccleDetailTagList,
        setTiccleDetailContent, setTiccleDetailImages, initialTiccleDetail,
        deleteTiccleDetailImage, 
    } = useContext(TiccleDetailContext);

    return {ticcleDetail, setTiccleDetail ,setTiccleDetailGroup, setTiccleDetailTitle,
        setTiccleDetailLink, setTiccleDetailTagList, deleteTiccleDetailTagList,
        setTiccleDetailContent, setTiccleDetailImages, initialTiccleDetail,
        deleteTiccleDetailImage, 
    };
}

export default useTiccleDetail
