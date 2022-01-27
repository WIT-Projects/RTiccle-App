import { useContext } from "react";
import TiccleUpdateContext from "../TiccleUpdateContext";

const useTiccleUpdate = () => {
    const { ticcleUpdate, setTiccleUpdate, setTiccleUpdateGroup,
        setTiccleUpdateTitle, setTiccleUpdateLink, setTiccleUpdateTagList,
        deleteTiccleUpdateTagList, setTiccleUpdateContent, setTiccleUpdateImages,
        deleteTiccleUpdateImage, initialTiccleUpdate,
    } = useContext(TiccleUpdateContext);
    
    
    return { ticcleUpdate, setTiccleUpdate, setTiccleUpdateGroup,
        setTiccleUpdateTitle, setTiccleUpdateLink, setTiccleUpdateTagList,
        deleteTiccleUpdateTagList, setTiccleUpdateContent, setTiccleUpdateImages,
        deleteTiccleUpdateImage, initialTiccleUpdate,
    };
}


export default useTiccleUpdate;
