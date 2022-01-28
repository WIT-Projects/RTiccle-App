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
    const group = await ref.get();
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

/* deprecated */
/**
 * Get All Group of User and Set state
 * @param {Dispatch<SetStateAction<S>>} setState
 */
async function findAllGroup(setState) {
    const querySnapshot = await collection.doc(currentUser.uid).collection('Group').get();
    var groups = [];
    querySnapshot.forEach(snapshot => {
        const id = snapshot.id;
        const group = {...snapshot.data(), id};
        groups = [...groups, group];
    });
    setState(groups);
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

/* deprecated */
/**
 * Find groups include main image url with limiting and Set state
 * @param {*} limit: maximum number of groups
 * @param {Dispatch<SetStateAction<S>>} setState
 * @returns {Array} Group List (include image url)
 */
async function findGroupsIncludeImage(limit, setState) {
    const query = collection.doc(currentUser.uid).collection('Group').orderBy('lastModifiedTime', 'desc').limit(limit);
    const querySnapshot = await query.get();
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
    setState(groups);
}

/* deprecated */
/**
 * Find bookmark groups include main image url with limiting and Set state
 * @param {Dispatch<SetStateAction<S>>} setState
 * @returns {Array} Group List (include image url)
 */
async function findBookrmarkGroupsIncludeImage(setState) {
    const query = collection.doc(currentUser.uid).collection('Group').where('bookmark', '==', true);

    const querySnapshot = await query.get();
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
    setState(groups);
}

/* deprecated */
/**
 * check whether a group name exists or not
 * @param {string} groupTitle
 * @returns {Boolean} true is existing group
 */
async function checkIsExistingGroup(groupTitle) {
    const querySnapshot = await collection.doc(currentUser.uid).collection('Group').get();
    var found = false;
    querySnapshot.forEach(snapshot => {
        if (snapshot.title == groupTitle) found = true;
    });
    return found;
}

/* deprecated */
/**
 * Get One Group By Id (DocumentSnapshot.id) and Set state
 * @param {*} groupId
 * @param {Dispatch<SetStateAction<S>>} setState
 * @returns {DocumentSnapshot} (of Group doc) if exist, else null
 */
async function findGroupById(groupId, setState) {
    const group = await collection.doc(currentUser.uid).collection('Group').doc(groupId).get();
    if (group.exists) setState(group.data());
    else setState([]);
}

/* deprecated */
/**
 * Get group data include image by groupId
 * @param {string} groupId
 * @returns {Array} Group data (include image url)
 */
async function findGroupByIdIncludeImage(groupId, setState) {
    const group = await collection.doc(currentUser.uid).collection('Group').doc(groupId).get();
    let data = group.data();
    var mainImageURL = null;
    if (data.mainImage || data.mainImage != '') { // get download URL
        mainImageURL = await getDownloadURLByName(data.mainImage, false);
    }
    data = {...data, imageUrl: mainImageURL};
    setState(data);
}

/* deprecated */
/**
 * Check whether more than one group exists or not
 * @returns {boolean} true: existed, false: not existed
 */
async function checkIsExistingAnyGroup() {
    const querySnapshot = await collection.doc(currentUser.uid).collection('Group').get();
    if (querySnapshot.size === 0) {
        return false;
    } else {
        return true;
    }
}

export {
    createGroup,
    uploadNewGroup,
    updateGroupInfo,
    updateTiccleNumOfGroup,
    updateGroupImage,
    deleteGroup,
    findAllGroupIncludeImage,
    findGroupByIdIncludeImage,
};
