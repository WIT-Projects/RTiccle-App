import firestore from '@react-native-firebase/firestore';
import { getCurrentUser } from './Auth';
import { uploadImageToStorage, getDownloadURLByName } from './Storage';

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
 * @param {*} newTiccle
 * @returns {string} Ticcle Id
 */
async function createTiccle(newTiccle) {
    const ref = userDoc.collection("Ticcle"); // using auto id
    const ticcleRef = await ref.add(newTiccle);
    return ticcleRef.id;
}

/**
 * Upload new group to firestore (upload image and group)
 * @param {string} newGroupName
 * @param {*} group: group info
 * *  {
        lastModifiedTime: TimeStamp,
        type: integer, // BOOK(0), BLOG(1), NEWS(2), WEB(3), SNS(4), ETC(5)
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
 * Upload new ticcle to firestore (upload image and group)
 * @param {*} ticcle: ticcle info 
 *  * {
        lastModifiedTime: TimeStamp,
        group: gid,
        title: String,
        link: String, // URL of original content
        content: String,
        tagList: Array<String>
    }
 * @param {Array} images: image source array - LIMIT 2
 * @returns {Promise<String>} created ticcle id (random)
 */
function uploadNewTiccle(ticcle, images) {
    // upload images first
    var imageArr = [];
    if (images !== undefined) {
        images.map((image) => {
            const imageName = Date.now() + ".jpg";
            imageArr.push(imageName);
            uploadImageToStorage(imageName, image);
        })
    }

    // upload ticcle info
    return createTiccle({ ...ticcle, images: imageArr });
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
    var groups = [];
    querySnapshot.forEach(snapshot => {
        const id = snapshot.id;
        var data = snapshot.data();
        var mainImageURL = null;
        if (data.mainImage || data.mainImage != '') { // get download URL
            mainImageURL = getDownloadURLByName(data.mainImage, false);
        }
        data = { ...data, imageUrl: mainImageURL, id: id };
        groups = [...groups, data];
    })
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
 * Get ticcle list by group id
 * @param {string} groupId 
 * @returns {Array} Ticcle List
 */
async function findTiccleListByGroupId(groupId) {
    const query = userDoc.collection("Ticcle")
        .where("group", "==", groupId);
    const querySnapshot = await query.get();

    var ticcleList = [];
    querySnapshot.forEach(snapshot => {
        const id = snapshot.id;
        const ticcle = { ...snapshot.data(), id }
        ticcleList = [...ticcleList, ticcle];
    });
    return ticcleList;
}

/**
 * Get One Ticcle By Id (DocumentSnapshot.id)
 * @param {*} ticcleId 
 * @returns {DocumentSnapshot} (of Ticcle doc) if exist, else null
 */
async function findTiccleById(ticcleId) {
    const ticcle = await userDoc.collection("Ticcle").doc(ticcleId).get()
    if (ticcle.exists) return ticcle.data();
    else return null;
}

/**
 * Get images of ticcle
 * @param {Array} images // image name array - LIMIT 2
 * @returns {Array} Image URL Array
 */
async function getImagesOfTiccle(images) {
    var imageURLArr = [];
    if (images !== undefined) {
        images.map((imageName) => {
            const URL = getDownloadURLByName(imageName, true);
            imageURLArr.push(URL);
        })
    }
    return imageURLArr;
}

/**
 * Check existed group
 * @returns {boolean} true: existed, false: not existed
 */
async function checkExsitedGroup() {
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
async function getTiccleCount(groupId) {
    const ticcleList = await findTiccleListByGroupId(groupId);
    return ticcleList.length;
}

/**
 * get group date include image by groupId
 * @returns {Array} group data
 */
async function getGroupDataIncludeImage(groupId) {
    const group = await userDoc.collection("Group").doc(groupId).get();
    let data = group.data();
    var mainImageURL = null;
    if (data.mainImage || data.mainImage != '') { // get download URL
        mainImageURL = getDownloadURLByName(data.mainImage, false);
    }
    data = { ...data, imageUrl: mainImageURL};
    return data;
}

export {
    createGroup,
    createTiccle,
    uploadNewGroup,
    uploadNewTiccle,
    findAllGroup,
    findGroupsIncludeImage,
    checkIsExistingGroup,
    findTiccleListByGroupId,
    findGroupById,
    findTiccleById,
    getImagesOfTiccle,
    checkExsitedGroup,
    getTiccleCount,
    getGroupDataIncludeImage,
}
