import firestore from '@react-native-firebase/firestore';
import { getCurrentUser } from './AuthService';
import { uploadImageToStorage, getDownloadURLByName } from './ImageService';
import { findTiccleListByGroupId } from './TiccleService';
const user = getCurrentUser();
const userDoc = firestore().collection('RTiccle').doc(user.uid);

/**
 * Group create function
 * @param {string} groupName 
 * @param {*} newGroup
 * @returns {string} Group Id
 */
async function createGroup(groupName, newGroup) {
    const ref = userDoc.collection("Group").doc(groupName);
    console.log(newGroup);
    await ref.set(newGroup);
    return ref.id;
}

/**
 * Upload new group to firestore (upload image and group)
 * @param {string} newGroupName
 * @param {*} group: group info
 * *  {
        lastModifiedTime: TimeStamp,
        type: integer, // BOOK(0), BLOG(1), NEWS(2), SERIAL(3), SNS(4), ETC(5)
        title: String,
        description: String,
        bookmark: Boolean, // true if bookmarked
    }
 * @param {*} mainImageSource: main image source of group
 * @returns {Promise<String>} created group id (== gorup name)
 */
function uploadNewGroup(newGroupName, group, mainImageSource) {
    var imageName = '';
    if (mainImageSource || mainImageSource != '') {
        imageName = Date.now() + ".jpg";
        uploadImageToStorage(imageName, mainImageSource);
    }
    return createGroup(newGroupName, { ...group, mainImage: imageName });
}

/**
 * Get All Group of User
 * @returns {QuerySnapshot}
 */
async function findAllGroup() {
    const querySnapshot = await userDoc.collection("Group").get();
    var groups = [];
    querySnapshot.forEach(snapshot => {
        const id = snapshot.id;
        const group = { ...snapshot.data(), id }
        groups = [...groups, group];
    })
    return groups;
}

/**
 * Find groups include main image url with limiting
 * @param {*} limit: maximum number of groups
 * @returns {Array} Group List (include image url)
 */
async function findGroupsIncludeImage(limit) {
    const query = userDoc.collection("Group")
        .orderBy('lastModifiedTime', 'desc')
        .limit(limit);
    const querySnapshot = await query.get();
    var snapshots = [];
    querySnapshot.forEach((snapshot) => snapshots.push({id: snapshot.id, data: snapshot.data()}));
    var groups = [];
    for (let group of snapshots) {
        const id = group.id;
        var data = group.data;
        var mainImageURL = null;
        if (data.mainImage || data.mainImage != '') { // get download URL
            mainImageURL = await getDownloadURLByName(data.mainImage, false);
        }
        data = { ...data, imageUrl: mainImageURL, id: id };
        groups = [...groups, data];
    }
    return groups;
}

/**
 * check whether a group name exists or not
 * @param {string} groupName 
 * @returns {Boolean} true is existing group
 */
async function checkIsExistingGroup(groupName) {
    const querySnapshot = await userDoc.collection("Group").get();
    var found = false;
    querySnapshot.forEach(snapshot => {
        if (snapshot.id == groupName) found = true;
    })
    return found;
}

/**
 * Get One Group By Id (DocumentSnapshot.id)
 * @param {*} groupId 
 * @returns {DocumentSnapshot} (of Group doc) if exist, else null
 */
async function findGroupById(groupId) {
    const group = await userDoc.collection("Group").doc(groupId).get();
    if (group.exists) return group.data();
    else return null;
}

/**
 * Get group data include image by groupId
 * @returns {Array} group data
 */
 async function findGroupByIdIncludeImage(groupId) {
    const group = await userDoc.collection("Group").doc(groupId).get();
    let data = group.data();
    var mainImageURL = null;
    if (data.mainImage || data.mainImage != '') { // get download URL
        mainImageURL = await getDownloadURLByName(data.mainImage, false);
    }
    data = { ...data, imageUrl: mainImageURL};
    return data;
}

/**
 * Check whether more than one group exists or not
 * @returns {boolean} true: existed, false: not existed
 */
async function checkIsExistingAnyGroup() {
    const querySnapshot = await userDoc.collection("Group").get();
    if (querySnapshot.size === 0) {
        return false;
    } else {
        return true;
    }
}

/**
 * get group's ticcle count by groupId
 * @returns {Int} ticcle length
 */
 async function getNumberOfTicclesOfGroup(groupId) {
    const ticcleList = await findTiccleListByGroupId(groupId);
    return ticcleList.length;
}

export {
    createGroup,
    uploadNewGroup,
    findAllGroup,
    findGroupsIncludeImage,
    checkIsExistingGroup,
    findGroupById,
    findGroupByIdIncludeImage,
    checkIsExistingAnyGroup,
    getNumberOfTicclesOfGroup,
}
