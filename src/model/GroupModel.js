import useGroupList from "../context/hook/useGroupList";
import { 
    uploadNewGroup,
    updateGroupInfo,
    updateGroupImage,
    deleteGroup,
    findAllGroupIncludeImage, } from "../service/GroupService";

async function getAllGroupIncludeImages() {
    // from server
    const { setGroupList } = useGroupList();
    const result = await findAllGroupIncludeImage();
    setGroupList(result);
}

async function doCreateGroup(newGroupName, group, mainImageSource) {
    // to server
    const newGroupInfo = await uploadNewGroup(newGroupName, group, mainImageSource);

    // to local data
    const { groupList, setGroupList } = useGroupList();
    setGroupList([...groupList, newGroupInfo])
}

function doUpdateGroup(groupId, newInfo, isIncludingImage, oldImageName, newImageSource) {
    var info = {...newInfo};

    // to server
    if(isIncludingImage) {
        const newImageName = updateGroupImage(groupId, oldImageName, newImageSource);
        info = {...info, mainImage: newImageName};
    }
    updateGroupInfo(groupId, info);    

    // to local data
    const { groupList, setGroupListAtOne } = useGroupList();
    const oldInfo = groupList.find(g => g.id == groupId)
    setGroupListAtOne(groupId, {...oldInfo, info})
}

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
