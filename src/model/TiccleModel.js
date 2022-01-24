import {
    uploadNewTiccle,
    updateTiccleInfo,
    updateTiccleImage,
    deleteTiccle,
    findTiccleListByGroupId,
    findImagesOfTiccle,
} from "../service/TiccleService";

/*
 * Ticcle data
    {
        groupId: group id,
        title: string,
        link: string, // URL of original content
        content: string,
        tagList: Array<string>,
        images: Array<string>, // array of image paths in storage
        imageUrl: Array<string>, // array of image downloadUrls
        lastModifiedTime: number
    }
*/

var groupId = ''; // ticcle list belongs to
var ticcleList = [];
function setNewTiccleList(_groupId, _ticcleList){
    groupId = _groupId;
    ticcleList = _ticcleList;
}
const setTiccleListAtOne = (targetTId, ticcleData) => {
    const idx = ticcleList.findIndex((obj => obj.id == targetTId));
    ticcleList[idx] = ticcleData;
}
const deleteOneTiccleOfList = targetTId => {
    const idx = ticcleList.findIndex((obj => obj.id == targetTId));
    ticcleList.splice(idx, 1);
}

/**
 * Get ticcle list of one group by groupId and set ticcleList
 * @param {string} groupId 
 */
async function getTiccleListByGId(groupId) {
    // from server
    const result = await findTiccleListByGroupId(groupId);
    setNewTiccleList(groupId, result);
}

/**
 * Upload new ticcle and add to ticcleList
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
    ticcleList = [...ticcleList, newTiccleInfo];
    return newTiccleInfo;
}

/**
 * Update ticcle data and add to ticcleList
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
    const oldInfo = ticcleList.find(t => t.id == ticcleId)
    setTiccleListAtOne(ticcleId, {...oldInfo, ...info})
    return {...oldInfo, ...info};
}

/**
 * Delete one ticcle add apply to ticcleList
 * @param {Array} ticcleData 
 */
function doDeleteTiccle(ticcleData) {
    // to server
    deleteTiccle(ticcleData);

    // to local data
    deleteOneTiccleOfList(ticcleData.id);
}

/**
 * Get ticcle data including image urls
 * @param {Array} ticcleData full ticcle data
 * @returns {Array} ticcle data include image url array
 */
async function getTiccleIncludeImages(ticcleData) {
    return await findImagesOfTiccle(ticcleData);
}

export {
    groupId,
    ticcleList,
    getTiccleListByGId,
    doCreateTiccle,
    doUpdateTiccle,
    doDeleteTiccle,
    getTiccleIncludeImages,
}
