import firestore from '@react-native-firebase/firestore';
import { getCurrentUser } from './Auth';
import { uploadImageToStorage, getDownloadURLByName } from './Storage';

const user = getCurrentUser();
const userDoc = firestore().collection('RTiccle').doc(user.uid);

/**
 * Group create function
 * @param {string} groupName 
 * @param {*} newGroup
 * @returns Group Id
 */
async function createGroup(groupName, newGroup) {
    const ref = userDoc.collection("Group").doc(groupName);
    await ref.set(newGroup);
    return ref.id;
}

/**
 * @param {string} ticcleName 
 * @param {*} newTiccle
 * @returns Ticcle Id
 */
async function createTiccle(ticcleName, newTiccle) {
    const ref = userDoc.collection("Ticcle"); // using auto id
    await ref.add(newTiccle);
    return ref.id;
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
    }
 * @param {*} mainImageSource: main image source of group
 */
function uploadNewGroup(newGroupName, group, mainImageSource) {
    var imageName = '';
    if (mainImageSource || mainImageSource != '') {
        imageName = Date.now() + ".jpg";
        uploadImageToStorage(imageName, mainImageSource);
    }
    return createGroup(newGroupName, {...group, mainImage: imageName});
}

/**
 * Upload new ticcle to firestore (upload image and group)
 * @param {string} newTiccleName 
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
 */
function uploadNewTiccle(newTiccleName, ticcle, images) {
    // upload images first
    var imageArr = [];
    if(images !== undefined) {
        images.map((image) => {
            const imageName = Date.now() + ".jpg";
            imageArr.push(imageName);
            uploadImageToStorage(imageName, image);
        })
    }
    console.log(ticcle);
    console.log({...ticcle, images: imageArr});

    // upload ticcle info
    return createTiccle(newTiccleName, {...ticcle, images: imageArr});
}

/**
 * Get All Group of User
 * @returns QuerySnapshot
 */
async function getAllGroup() {
    const groups = await userDoc.collection("Group").get();
    // groups.forEach(snapshot => {
    //     console.log(snapshot.id, snapshot.data());
    // })
    return groups;
}

/**
 * Get One Group By Id (DocumentSnapshot.id)
 * @param {*} groupId 
 * @returns DocumentSnapshot(of Group doc) if exist, else null
 */
async function getGroupById(groupId) {
    const group = await userDoc.collection("Group").doc(groupId).get();
    if (group.exists) return group._data;
    else return null;
}

/**
 * Get One Ticcle By Id (DocumentSnapshot.id)
 * @param {*} ticcleId 
 * @returns DocumentSnapshot(of Ticcle doc) if exist, else null
 */
async function getTiccleById(ticcleId) {
    const ticcle = await userDoc.collection("Ticcle").doc(ticcleId).get()
    if(ticcle.exists) return ticcle._data;
    else return null;
}

export {
    createGroup,
    createTiccle,
    uploadNewGroup,
    uploadNewTiccle,
    getAllGroup,
    getGroupById,
    getTiccleById,
}
