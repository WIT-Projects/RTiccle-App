import { 
    uploadNewGroup,
    updateGroupInfo,
    updateGroupImage,
    deleteGroup,
    findAllGroupIncludeImage, } from "../service/GroupService";

// group list
var groupList = [];
const setGroupListAtOne = (targetGId, groupData) => {
    const idx = groupList.findIndex((obj => obj.id == targetGId));
    groupList[idx] = groupData;
}
const deleteOneGroupOfList = targetGId => {
    const idx = groupList.findIndex((obj => obj.id == targetGId));
    groupList.splice(idx, 1);
}

const getGroupTitleByGId = (targetGId, setGroupTitle) => {
    const targetGroup = groupList.find(group => group.id === targetGId);
    if(targetGroup !== undefined){
        setGroupTitle(targetGroup.title);
    }
}

/**
 * Get all group list and set groupList
 */
async function getAllGroupIncludeImages() {
    // from server
    const result = await findAllGroupIncludeImage();
    groupList = result;
    console.log(result);
}

/**
 * Upload new group and add to groupList
 * @param {*} groupData: group info
 * *  {
        type: integer, // BOOK(0), BLOG(1), NEWS(2), SERIAL(3), SNS(4), ETC(5)
        title: String,
        description: String,
        bookmark: Boolean, // true if bookmarked
    }
 * @param {*} mainImageSource: main image source of group
 */
async function doCreateGroup(groupData, mainImageSource) {
    // to server
    const newGroupInfo = await uploadNewGroup(groupData, mainImageSource);

    // to local data
    groupList = ([...groupList, newGroupInfo])
    console.log(groupList);
}

/**
 * Update group data and add to groupList
 * @param {*} groupId 
 * @param {*} newInfo: new group info (CHANGED INFO ONLY)
 * Support info:
 * *  {
        type: integer, // BOOK(0), BLOG(1), NEWS(2), SERIAL(3), SNS(4), ETC(5)
        title: String,
        description: String,
        bookmark: Boolean, // true if bookmarked
    }
 * @param {*} isIncludingImage if update image, ture. else false(: no need to consider below parameters)
 * @param {*} oldImageName old image name
 * @param {*} newImageSource new image source
 */
function doUpdateGroup(groupId, newInfo, isIncludingImage, oldImageName, newImageSource) {
    var info = {...newInfo};

    // to server
    if(isIncludingImage) {
        const newImageName = updateGroupImage(oldImageName, newImageSource);
        info = {...info, mainImage: newImageName};
    }
    updateGroupInfo(groupId, info);    

    // to local data
    const oldInfo = groupList.find(g => g.id == groupId);
    setGroupListAtOne(groupId, {...oldInfo, ...info});
}

/**
 * Delete one group add apply to groupList
 * @param {Array} groupData 
 */
function doDeleteGroup(groupData) {
    // to server
    deleteGroup(groupData)

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
    if(found == undefined) return false;
    else return true;
}

export {
    groupList,
    getAllGroupIncludeImages,
    getGroupTitleByGId,
    doCreateGroup,
    doUpdateGroup,
    doDeleteGroup,
    checkIsExistingGroup,
}
