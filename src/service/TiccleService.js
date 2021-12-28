import firestore from '@react-native-firebase/firestore';
import { getCurrentUser } from './AuthService';
import { uploadImageToStorage, getDownloadURLByName } from './ImageService';

const user = getCurrentUser();
const userDoc = firestore().collection('RTiccle').doc(user.uid);

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
        for (const imageName of images) {
            const URL = await getDownloadURLByName(imageName, true);
            imageURLArr.push(URL);
        }
    }
    return imageURLArr;
}

export {
    createTiccle,
    uploadNewTiccle,
    findTiccleListByGroupId,
    findTiccleById,
    getImagesOfTiccle,
}
