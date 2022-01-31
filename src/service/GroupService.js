import firestore from '@react-native-firebase/firestore';
import {currentUser} from './AuthService';
import {uploadImageToStorage, getDownloadURLByName, deleteImageFromStorage} from './ImageService';

const collection = firestore().collection('RTiccle');

/**
 * Group create function
 * @param {*} newGroup
 * @returns {Promise<Array>} Group Data
 */
async function createGroup(newGroup) {
    const ref = collection.doc(currentUser.uid).collection('Group');
    const groupRef = await ref.add(newGroup);
    return new Promise(resolve => {
        resolve({id: groupRef.id, ...newGroup});
    });
}

/**
 * Upload new group to firestore (upload image and group)
 * @param {*} group: group info
 * *  {
        title: String,
        description: String,
        bookmark: Boolean, // true if bookmarked
        // mainImage: string, ticcleNum: integer, latestTiccleTitle: string, lastModifiedTime: number
    }
 * @param {*} mainImageSource: main image source of group
 * @returns {Promise<Array>} Group Data
 */
async function uploadNewGroup(group, mainImageSource) {
    let imageName = '';
    let downloadURL = '';
    if (mainImageSource || mainImageSource != '') {
        imageName = Date.now() + '.jpg';
        downloadURL = await uploadImageToStorage(imageName, mainImageSource);
    }
    const result = await createGroup({
        ...group,
        mainImage: imageName,
        ticcleNum: 0,
        latestTiccleTitle: '',
        lastModifiedTime: Date.now(), // this treated like 'createdTime' (NOT UPDATE after create)
    });
    return new Promise(resolve => {
        resolve({...result, imageUrl: downloadURL});
    });
}

/**
 * Update group info (no support for image)
 * @param {*} groupId 
 * @param {*} newInfo: new group info (CHANGED INFO ONLY)
 * Support info:
 * *  {
        title: String,
        description: String,
        bookmark: Boolean, // true if bookmarked
        latestTiccleTitle: String,
    }
 */
function updateGroupInfo(groupId, newInfo) {
    // no update lastModifiedTime
    const ref = collection.doc(currentUser.uid).collection('Group').doc(groupId);
    ref.update(newInfo);
}

/**
 * Update ticcleNum
 * @param {string} groupId
 * @param {boolean} isPlus: true if +1 else -1
 */
async function updateTiccleNumOfGroup(groupId, isPlus) {
    const ref = collection.doc(currentUser.uid).collection('Group').doc(groupId);
    const group = (await ref.get()).data();
    var num = group.ticcleNum;
    num = isPlus ? num + 1 : num - 1;
    ref.update({ticcleNum: num});
}

/**
 * Update group main image
 * @param {string} oldImageName // if not exists, put null
 * @param {*} newImageSource
 * @returns {Promise<Array>} [downloadUrl, newImageName]
 */
async function updateGroupImage(oldImageName, newImageSource) {
    // delete original image first
    if (oldImageName)
        deleteImageFromStorage(oldImageName, false);
    
    // upload new image
    const newImageName = Date.now() + '.jpg';
    const downloadUrl = await uploadImageToStorage(newImageName, newImageSource, false);

    // return newImageInfo
    return new Promise(resolve => {
        resolve([downloadUrl, newImageName]);
    });
}

/**
 * Delete group
 * @param {Array} group: group info (MUST include 'id', 'mainImage' information)
 */
function deleteGroup(group) {
    // delete image
    if (group.mainImage)
        deleteImageFromStorage(group.mainImage, false);
    // delete group info
    const ref = collection.doc(currentUser.uid).collection('Group').doc(group.id);
    ref.delete();
}

/**
 * Get All Group of User (include main image url)
 * @returns {Promise<Array>} Group List (include image url)
 */
async function findAllGroupIncludeImage() {
    const querySnapshot = await collection.doc(currentUser.uid).collection('Group')
        .orderBy('lastModifiedTime', 'desc')
        .get();
    var snapshots = [];
    querySnapshot.forEach(snapshot => snapshots.push({id: snapshot.id, data: snapshot.data()}));
    var groups = [];
    for (let group of snapshots) {
        const id = group.id;
        var data = group.data;
        var mainImageURL = null;
        if (data.mainImage || data.mainImage != '') { // get download URL
            mainImageURL = await getDownloadURLByName(data.mainImage, false);
        }
        data = {...data, imageUrl: mainImageURL, id: id};
        groups = [...groups, data];
    }
    return new Promise(resolve => {
        resolve(groups);
    });
}

/**
 * Get one group by group id
 * @param {string} groupId
 * @returns {Promise<Array>} group data if exist, else null
 */
async function findGroupById(groupId) {
    const doc = await collection.doc(currentUser.uid).collection('Group').doc(groupId).get();
    if (doc.exists) {
        return new Promise(resolve => {
            resolve({...doc.data(), id: doc.id});
        });
    }
    else return null;
}

export {
    createGroup,
    uploadNewGroup,
    updateGroupInfo,
    updateTiccleNumOfGroup,
    updateGroupImage,
    deleteGroup,
    findAllGroupIncludeImage,
    findGroupById,
};
