import {
    uploadNewTiccle,
    updateTiccleInfo,
    updateTiccleImage,
    deleteTiccle,
    findTiccleListByGroupId,
    findImagesOfTiccle,
} from "../service/TiccleService";
import { updateGroupInfoOfList } from "./GroupModel";

/*
 * Ticcle data
    {
        id: ticcle id,
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
const updateTiccleListAtOne = (targetTId, ticcleData) => {
    const idx = ticcleList.findIndex((obj => obj.id == targetTId));
    ticcleList.splice(idx, 1);
    ticcleList.unshift(ticcleData);
}
const deleteOneTiccleOfList = targetTId => {
    const idx = ticcleList.findIndex((obj => obj.id == targetTId));
    ticcleList.splice(idx, 1);
}

/**
 * Get ticcle list of one group by groupId and set ticcleList
 * @param {string} groupId 
 * @returns {Promise<Array>} ticcle list
 */
async function getTiccleListByGId(groupId) {
    // from server
    const result = await findTiccleListByGroupId(groupId);
    setNewTiccleList(groupId, result);
    return new Promise(resolve => {
        resolve(result);
    });
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
 * @returns {Promise<Array>} new ticcle data (info)    
 */
async function doCreateTiccle(ticcleData, images) {
    // to server
    const newTiccleInfo = await uploadNewTiccle(ticcleData, images);

    // to local data
    updateGroupInfoOfList(ticcleData.groupId, ticcleData.title, true, true); // update ticcleNum and latestTiccleTitle at local group data
    ticcleList = [newTiccleInfo, ...ticcleList];
    return new Promise(resolve => {
        resolve(newTiccleInfo);
    });
}

/**
 * Update ticcle data and add to ticcleList
 * @param {string} groupId: original group id ticcle belong to
 * @param {string} ticcleId
 * @param {Array} newInfo: new ticcle info (CHANGED INFO ONLY) (don't put images info here)
 * Support info:
 * *  {
        title: String,
        groupId: String,
        link: String, // URL of original content
        content: String,
        tagList: Array<String>
    }
 * @param {boolean} isIncludingImage if update image, ture. else false(: no need to consider below parameters)
 * @param {Array} images images of ticcle
 * @param {Array} oldImageNames array of old image names // (BE DELETED IMAGE ONLY) if no old images, put []
 * @param {Array} newImageSources array of new image sources // if no new images, put []
 * @returns {Promise<Array>} updated ticcle data (all)
 */
async function doUpdateTiccle(groupId, ticcleId, newInfo, isIncludingImage, images, oldImageNames, newImageSources) {
    var info = {...newInfo};

    // to server
    if (isIncludingImage) {
        // newImagesInfo = {images: images, imageUrl: imageUrl}
        const newImagesInfo = await updateTiccleImage(oldImageNames, newImageSources);

        var newImages = [...images];
        oldImageNames.forEach((name) => {
            const idx = newImages.findIndex(imageName => imageName === name);
            if (idx >= 0) newImages.splice(idx, 1);
        })
        newImages = [...newImages, ...newImagesInfo.images];
        updateTiccleInfo(groupId, ticcleId, {...newInfo, images: newImages});
        info = {...info, images: newImages, imageUrl: newImagesInfo.imageUrl}; // including imageUrls of new images
    }
    else updateTiccleInfo(groupId, ticcleId, newInfo);

    // to local data
    const oldInfo = ticcleList.find(t => t.id == ticcleId)
    const updateInfo = {...oldInfo, ...info};
    updateGroupInfoOfList(groupId, updateInfo.title, false); // update latestTiccleTitle at local group data
    updateTiccleListAtOne(ticcleId, updateInfo);
    return new Promise(resolve => {
        resolve(updateInfo);
    });
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
    updateGroupInfoOfList(ticcleData.groupId, null, true, false); // update ticcleNum at local group data
}

/**
 * Get ticcle data including image urls
 * @param {Array} ticcleData full ticcle data
 * @returns {Promise<Array>} ticcle data include image url array
 */
function getTiccleIncludeImages(ticcleData) {
    return findImagesOfTiccle(ticcleData);
}

/**
 * Sort by LMT (asc)
 * @param {Array} ticcleList (MUST CONTAIN "lastModifiedTime")
 * @returns {Array} sorted ticcleList
 */
 function sortAscByLMT(ticcleList) {
    const result = ticcleList.sort((a, b) => {
        a.lastModifiedTime - b.lastModifiedTime;
    })
    return result;
}

/**
 * Sort by LMT (desc)
 * @param {Array} ticcleList (MUST CONTAIN "lastModifiedTime")
 * @returns {Array} sorted ticcleList
 */
function sortDescByLMT(ticcleList) {
    const result = ticcleList.sort((a, b) => {
        b.lastModifiedTime - a.lastModifiedTime;
    })
    return result;
}

export {
    groupId,
    ticcleList,
    getTiccleListByGId,
    doCreateTiccle,
    doUpdateTiccle,
    doDeleteTiccle,
    getTiccleIncludeImages,
    sortAscByLMT,
    sortDescByLMT,
}
