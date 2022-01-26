import { useContext } from "react";
import TiccleUpdateContext from "../TiccleUpdateContext";

const useTiccleUpdate = () => {
    const { ticcleUpdate, setTiccleUpdate, setTiccleUpdateGroup,
        setTiccleUpdateTitle, setTiccleUpdateLink, setTiccleUpdateTagList,
        deleteTiccleUpdateTagList, setTiccleUpdateContent, setTiccleUpdateImages,
        deleteTiccleUpdateImage, deleteTiccleUpdateImageUrl, initialTiccleUpdate,
        setTiccleUpdateImageUrls,
    } = useContext(TiccleUpdateContext);
    
    
    return { ticcleUpdate, setTiccleUpdate, setTiccleUpdateGroup,
        setTiccleUpdateTitle, setTiccleUpdateLink, setTiccleUpdateTagList,
        deleteTiccleUpdateTagList, setTiccleUpdateContent, setTiccleUpdateImages,
        deleteTiccleUpdateImage, deleteTiccleUpdateImageUrl, initialTiccleUpdate,
        setTiccleUpdateImageUrls,
    };
}


export default useTiccleUpdate;
