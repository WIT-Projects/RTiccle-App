import { useContext } from "react";
import TiccleUpdateContext from "../TiccleUpdateContext";

const useTiccleUpdate = () => {
    const { ticcleUpdate, setTiccleUpdate, setTiccleUpdateGroup,
        setTiccleUpdateTitle, setTiccleUpdateLink, setTiccleUpdateTagList,
        deleteTiccleUpdateTagList, setTiccleUpdateContent, setTiccleUpdateImages,
        deleteTiccleUpdateImage, setTiccleUpdateImageUrl, deleteTiccleUpdateImageUrl,
        initialTiccleUpdate,
    } = useContext(TiccleUpdateContext);
    
    
    return { ticcleUpdate, setTiccleUpdate, setTiccleUpdateGroup,
        setTiccleUpdateTitle, setTiccleUpdateLink, setTiccleUpdateTagList,
        deleteTiccleUpdateTagList, setTiccleUpdateContent, setTiccleUpdateImages,
        deleteTiccleUpdateImage, setTiccleUpdateImageUrl, deleteTiccleUpdateImageUrl,
        initialTiccleUpdate,
    };
}


export default useTiccleUpdate;
