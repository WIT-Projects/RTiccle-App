import useTiccleList from "../context/hook/useTiccleList";
import {
    uploadNewTiccle,
    updateTiccleInfo,
    updateTiccleImage,
    deleteTiccle,
    findTiccleListByGroupId,
    findImagesOfTiccle,
} from "../service/TiccleService";


async function getTiccleListByGId(groupId) {
    // from server
    const result = await findTiccleListByGroupId(groupId);
    const { setGroupId, setTiccleList } = useTiccleList();
    setGroupId(groupId);
    setTiccleList(result);
}

async function doCreateTiccle(ticcle, images) {
    // to server
    const newTiccleInfo = await uploadNewTiccle(ticcle, images);

    // to local data
    const { ticcleList, setTiccleList } = useTiccleList();
    setTiccleList([...ticcleList, newTiccleInfo])
}

function doUpdateTiccle(groupId, ticcleId, newInfo, isIncludingImage, images, oldImageName, oldImageName, newImageSource) {
    var info = {...newInfo};

    // to server
    if(isIncludingImage) {
        const newImages = updateTiccleImage(groupId, ticcleId, images, oldImageName, newImageSource);
        info = {...info, images: newImages};
    }
    updateTiccleInfo(groupId, ticcleId, info);

    // to local data
    const { ticcleList, setTiccleListAtOne } = useTiccleList();
    const oldInfo = ticcleList.find(t => t.id == ticcleId)
    setTiccleListAtOne(ticcleId, {...oldInfo, info})
}

function doDeleteTiccle(ticcleData) {
    // to server
    deleteTiccle(ticcleData);

    // to local data
    const { deleteOneTiccleOfList } = useTiccleList();
    deleteOneTiccleOfList(ticcleData.id);
}

export {
    getTiccleListByGId,
    doCreateTiccle,
    doUpdateTiccle,
    doDeleteTiccle,
}
