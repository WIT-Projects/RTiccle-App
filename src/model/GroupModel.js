import {
    uploadNewGroup,
    updateGroupInfo, 
    updateGroupImage,
    deleteGroup,
    findAllGroupIncludeImage } from '../service/GroupService';

/*
 * Group data
    {
        id: string, // random, unique id
        title: string,
        description: string,
        bookmark: Boolean, // true if bookmarked
        mainImage: string, // path in storage
        imageUrl: string, // downloadUrl of image
        ticcleNum: integer, 
        latestTiccleTitle: string, 
        lastModifiedTime: number // this treated like 'createdTime' (NOT UPDATE after create)
    }
*/

// group list
var groupList = [];
const setGroupListAtOne = (targetGId, groupData) => {
    const idx = groupList.findIndex(obj => obj.id == targetGId);
    groupList[idx] = groupData;
};
const deleteOneGroupOfList = targetGId => {
    const idx = groupList.findIndex(obj => obj.id == targetGId);
    groupList.splice(idx, 1);
};

// limit
const limitGroupNum = 20;
const limitTiccleNum = 100;

const getGroupTitleByGId = (targetGId, setGroupTitle) => {
    const targetGroup = groupList.find(group => group.id === targetGId);
    (targetGroup !== undefined) ? setGroupTitle(targetGroup.title) : setGroupTitle('');
}

/**
 * Get all group list and set groupList
 * @returns {Promise<Array>} group list
 */
async function getAllGroupIncludeImages() {
    // from server
    const result = await findAllGroupIncludeImage();
    groupList = result;
    return new Promise(resolve => {
        resolve(result);
    });
}

/**
 * Upload new group and add to groupList
 * @param {Array} groupData: group info
 * *  {
        title: String,
        description: String,
        bookmark: Boolean, // true if bookmarked
    }
 * @param {*} mainImageSource: main image source of group
 * @returns {Promise<Array>} new group info
 */
async function doCreateGroup(groupData, mainImageSource) {
    // to server
    var newGroupInfo = uploadNewGroup(groupData, mainImageSource);

    // to local data
    groupList = [await newGroupInfo, ...groupList];
    return new Promise(resolve => {
        resolve(newGroupInfo);
    });
}

/**
 * Update group data and add to groupList
 * @param {*} groupId 
 * @param {*} newInfo: new group info (CHANGED INFO ONLY)
 * Support info:
 * *  {
        title: String,
        description: String,
        bookmark: Boolean, // true if bookmarked
 *    }
 * @param {*} isIncludingImage if update image, ture. else false(: no need to consider below parameters)
 * @param {*} oldImageName old image name
 * @param {*} newImageSource new image source
 * @returns {Promise<String>} new imageUrl
 */
async function doUpdateGroup(groupId, newInfo, isIncludingImage, oldImageName, newImageSource) {
    var info = {...newInfo};
    var imageUrl = '';

    // to server
    if (isIncludingImage) {
        const newImageInfo = await updateGroupImage(oldImageName, newImageSource);
        const [downloadUrl, newImageName] = newImageInfo;
        imageUrl = downloadUrl;
        info = {...info, mainImage: newImageName};
    }
    updateGroupInfo(groupId, info);

    // to local data
    const oldInfo = groupList.find(g => g.id == groupId);
    var newInfo = {};
    if (imageUrl == '') newInfo = {...oldInfo, ...info}
    else newInfo = {...oldInfo, ...info, imageUrl: imageUrl}
    setGroupListAtOne(groupId, newInfo);

    // for updating imageUrl in screen
    if (isIncludingImage) {
        return new Promise(resolve => {
            resolve(imageUrl);
        });
    }
}

/**
 * Delete one group add apply to groupList
 * @param {Array} groupData
 */
function doDeleteGroup(groupData) {
    // to server
    deleteGroup(groupData);

    // to local data
    deleteOneGroupOfList(groupData.id);
}

/**
 * check whether a group name exists or not
 * @param {*} groupTitle
 * @returns {boolean} true: existed, false: not existed
 */
function checkIsExistingGroup(groupTitle) {
    const found = groupList.find(g => g.title == groupTitle);
    if (found == undefined) return false;
    else return true;
}

/**
 * Get user's group nubmer
 * @returns {integer} total number of groups
 */
 function getTotalGroupNum() {
    return groupList.length;
}

/**
 * Check user has more groups than limit
 * @returns {boolean}
 */
function checkIsFullGroupNum() {
    if (getTotalGroupNum() >= limitGroupNum) return true;
    else return false;  
}

/**
 * Get user's ticcle nubmer
 * @returns {integer} total number of ticcles
 */
function getTotalTiccleNum() {
    var totalNum = 0;
    groupList.forEach((group) => {
        totalNum = totalNum + group.ticcleNum;
    })
    return totalNum;
}

/**
 * Check user has more ticcles than limit
 * @returns {boolean}
 */
function checkIsFullTiccleNum() {
    if (getTotalTiccleNum() >= limitTiccleNum) return true;
    else return false;    
}

export {
    groupList, 
    limitGroupNum,
    limitTiccleNum,
    getGroupTitleByGId,
    getAllGroupIncludeImages,
    doCreateGroup, 
    doUpdateGroup, 
    doDeleteGroup, 
    checkIsExistingGroup,
    getTotalGroupNum,
    checkIsFullGroupNum,
    getTotalTiccleNum,
    checkIsFullTiccleNum,
};
