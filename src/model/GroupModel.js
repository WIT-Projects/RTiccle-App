import useGroupList from "../context/hook/useGroupList";
import { 
    uploadNewGroup,
    updateGroupInfo,
    updateGroupImage,
    deleteGroup,
    findAllGroupIncludeImage, } from "../service/GroupService";

/**
 * Get all group list and set groupList(useGroupList)
 */
async function getAllGroupIncludeImages() {
    // from server
    const { setGroupList } = useGroupList();
    const result = await findAllGroupIncludeImage();
    setGroupList(result);
}

/**
 * Upload new group and add to groupList(useGroupList)
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
    const { groupList, setGroupList } = useGroupList();
    setGroupList([...groupList, newGroupInfo])
}

/**
 * Update group data and add to groupList(useGroupList)
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
    const { groupList, setGroupListAtOne } = useGroupList();
    const oldInfo = groupList.find(g => g.id == groupId)
    setGroupListAtOne(groupId, {...oldInfo, info})
}

/**
 * Delete one group add apply to groupList(useGroupList)
 * @param {Array} groupData 
 */
function doDeleteGroup(groupData) {
    // to server
    deleteGroup(groupData)

    // to local data
    const { deleteOneGroupOfList } = useGroupList();
    deleteOneGroupOfList(groupData.id);
}

export {
    getAllGroupIncludeImages,
    doCreateGroup,
    doUpdateGroup,
    doDeleteGroup,
}
