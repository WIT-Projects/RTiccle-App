/* This is example of using firebase function */
import {
    findGroupsIncludeImage,
} from "../../../firebase/Firestore";

async function getNewTiccleGroupList(size) {
    const groupList = await findGroupsIncludeImage(size);
    return groupList;
}

export {
    getNewTiccleGroupList
}
