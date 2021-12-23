import {
    findGroupsIncludeImage,
    findTiccleListByGroupId
} from "../../../firebase/Firestore";

async function getNewTiccleGroupList(size) {
    const groupList = await findGroupsIncludeImage(size);
    return groupList;
}

async function getTiccleCount(groupId) {
    const ticcleList = await findTiccleListByGroupId(groupId);
    return ticcleList.length;
}

export {
    getNewTiccleGroupList,
    getTiccleCount,
}
