import useTiccleList from "../context/hook/useTiccleList";
import {
    uploadNewTiccle,
    updateTiccleInfo,
    updateTiccleImage,
    deleteTiccle,
    findTiccleListByGroupId,
    findImagesOfTiccle,
} from "../service/TiccleService";

/**
 * Get ticcle list of one group by groupId and set ticcleList(useTiccleList)
 * @param {string} groupId 
 */
async function getTiccleListByGId(groupId) {
    // from server
    const result = await findTiccleListByGroupId(groupId);
    const { setGroupId, setTiccleList } = useTiccleList();
    setGroupId(groupId);
    setTiccleList(result);
}

/**
 * Upload new ticcle and add to ticcleList(useTiccleList)
 * @param {*} ticcleData: ticcle info 
 *  * {
        groupId: group id,
        title: String,
        link: String, // URL of original content
        content: String,
        tagList: Array<String>
    }
 * @param {Array} images: image source array - LIMIT 2
 */
async function doCreateTiccle(ticcleData, images) {
    // to server
    const newTiccleInfo = await uploadNewTiccle(ticcleData, images);

    // to local data
    const { ticcleList, setTiccleList } = useTiccleList();
    setTiccleList([...ticcleList, newTiccleInfo])
}

/**
 * Update ticcle data and add to ticcleList(useTiccleList)
 * @param {string} groupId: original group id ticcle belong to
 * @param {string} ticcleId
 * @param {Array} newInfo: new ticcle info (CHANGED INFO ONLY) (NO IMAGES)
 * Support info:
 * *  {
        title: String,
        link: String, // URL of original content
        content: String,
        tagList: Array<String>
    }
 * @param {boolean} isIncludingImage if update image, ture. else false(: no need to consider below parameters)
 * @param {Array} images old images array // if not exists, put []
 * @param {string} oldImageName old image name // if not exists, put null
 * @param {*} newImageSource new image source
 * @returns {Array} newImageName array
 */
function doUpdateTiccle(groupId, ticcleId, newInfo, isIncludingImage, images, oldImageName, newImageSource) {
    var info = {...newInfo};

    // to server
    if(isIncludingImage) {
        const newImages = updateTiccleImage(images, oldImageName, newImageSource);
        info = {...info, images: newImages};
    }
    updateTiccleInfo(groupId, ticcleId, info);

    // to local data
    const { ticcleList, setTiccleListAtOne } = useTiccleList();
    const oldInfo = ticcleList.find(t => t.id == ticcleId)
    setTiccleListAtOne(ticcleId, {...oldInfo, info})
}

/**
 * Delete one ticcle add apply to ticcleList(useTiccleList)
 * @param {Array} ticcleData 
 */
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
