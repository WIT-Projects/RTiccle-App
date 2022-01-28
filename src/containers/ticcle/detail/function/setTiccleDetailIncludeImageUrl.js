import { getTiccleIncludeImages } from "../../../../model/TiccleModel";

const setTiccleDetailIncludeImageUrl = async(ticcleData, setState) => {
    await getTiccleIncludeImages(ticcleData).then(
            (res) => setState(res)
    );
}

export {
    setTiccleDetailIncludeImageUrl,
}
