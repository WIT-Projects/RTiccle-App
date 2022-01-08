import firestore from '@react-native-firebase/firestore';
import { getCurrentUser } from './AuthService';
import { uploadImageToStorage, getDownloadURLByName, deleteImageFromStorage } from './ImageService';
import { updateGroupInfo, updateTiccleNumOfGroup } from './GroupService';

const user = getCurrentUser();
const userDoc = firestore().collection('RTiccle').doc(user.uid);

/**
 * @param {*} newTiccle
 * @returns {Array} Ticcle Data
 */
async function createTiccle(newTiccle) {
    const ref = userDoc.collection("Ticcle"); // using auto id
    const ticcleRef = await ref.add(newTiccle);
    return { id: ticcleRef.id, ...newTiccle };
}

/**
 * Upload new ticcle to firestore (upload image and group)
 * @param {*} ticcle: ticcle info 
 *  * {
        groupId: group id,
        title: String,
        link: String, // URL of original content
        content: String,
        tagList: Array<String>
        // images, lastModifiedTime: TimeStamp,
    }
 * @param {Array} images: image source array - LIMIT 2
 * @returns {Array} Ticcle Data
 */
function uploadNewTiccle(ticcle, images) {
    // upload images first
    const isTiccle = true
    var imageArr = [];
    if (images !== undefined) {
        images.map((image, idx) => {
            const imageName = Date.now() + idx + ".jpg";
            imageArr.push(imageName);
            uploadImageToStorage(imageName, image, isTiccle);
        })
    }

    // update group info (ticcleNum + 1)
    updateTiccleNumOfGroup(ticcle.group, true);
    // upload ticcle info
    return createTiccle({ ...ticcle, images: imageArr, lastModifiedTime: Date.now() });
}


/**
 * Update ticcle info (no support for image)
 * @param {string} groupId: original group id ticcle belong to
 * @param {string} ticcleId
 * @param {Array} newInfo: new ticcle info (CHANGED INFO ONLY)
 * Support info:
 * *  {
        title: String,
        link: String, // URL of original content
        content: String,
        tagList: Array<String>
    }
 */
function updateTiccleInfo(groupId, ticcleId, newInfo) {
    const ref = userDoc.collection("Ticcle").doc(ticcleId);
    var updateInfo = {...newInfo, lastModifiedTime: Date.now()};
    ref.update(updateInfo);
    updateGroupInfo(groupId); // only update lastModifiedDate!
}

/**
 * Update ticcle images
 * @param {Array} images old images array // if not exists, put []
 * @param {string} oldImageName old image name // if not exists, put null
 * @param {*} newImageSource new image source
 * @returns {Array} newImageName array
 */
function updateTiccleImage(images, oldImageName, newImageSource) {
    var newImages = [...images];
    // delete original image first
    if (oldImageName) {
        deleteImageFromStorage(oldImageName, true);
        let idx = newImages.indexOf(oldImageName);
        newImages.splice(idx, 1);
    }
    // upload new image
    newImageName = Date.now() + ".jpg";
    uploadImageToStorage(newImageName, newImageSource);
    newImages.push(newImageName);
    // update group info
    //updateTiccleInfo(groupId, ticcleId, {images: newImages});
    return newImages;
}

/**
 * Delete ticcle 
 * @param {Array} ticcle: ticcle info (MUST include 'id', 'group', 'images' information)
 */
function deleteTiccle(ticcle) {
    // delete images
    if (group.images.length > 0) {
        group.images.forEach((imageName) => deleteImageFromStorage(imageName, true));
    }
    // delete group info
    const ref = userDoc.collection("Ticcle").doc(ticcle.id);
    ref.delete();
    // update group info (ticcleNum - 1)
    updateTiccleNumOfGroup(ticcle.group, false);
}

/**
 * Get ticcle list by group id
 * @param {string} groupId 
 * @returns {Array} Ticcle List
 */
async function findTiccleListByGroupId(groupId) {
    const query = userDoc.collection("Ticcle")
        .where("groupId", "==", groupId);
    const querySnapshot = await query.get();

    var ticcleList = [];
    querySnapshot.forEach(snapshot => {
        const id = snapshot.id;
        const ticcle = { ...snapshot.data(), id }
        ticcleList = [...ticcleList, ticcle];
    });
    return ticcleList;
}

/* deprecated */
/**
 * Get One Ticcle By Id (DocumentSnapshot.id)
 * @param {*} ticcleId 
 * @returns {Array} (of Ticcle doc) if exist, else null
 */
async function findTiccleById(ticcleId) {
    const ticcle = await userDoc.collection("Ticcle").doc(ticcleId).get()
    if (ticcle.exists) return ticcle.data();
    else return null;
}

/**
 * Get images of ticcle
 * @param {Array} ticcle full ticcle info
 * @returns {Array} ticcle info include image url array
 */
 async function findImagesOfTiccle(ticcle) {
    var imageURLArr = [];
    const images = ticcle.images;
    if (images) {
        for (const imageName of images) {
            const URL = await getDownloadURLByName(imageName, true);
            imageURLArr.push(URL);
        }
    }
    return {...ticcle, imageUrl: imageURLArr};
}

export {
    createTiccle,
    uploadNewTiccle,
    updateTiccleInfo,
    updateTiccleImage,
    deleteTiccle,
    findTiccleListByGroupId,
    findTiccleById,
    findImagesOfTiccle,
}
