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
        images.map((image, idx) => {
            const imageName = Date.now() + idx + ".jpg";
            imageArr.push(imageName);
            uploadImageToStorage(imageName, image);
        })
    }

    // upload ticcle info
    return createTiccle({ ...ticcle, images: imageArr });
}

/**
 * Get ticcle list by group id and Set state
 * @param {string} groupId 
 * @param {Dispatch<SetStateAction<S>>} setState 
 * @returns {Array} Ticcle List
 */
async function findTiccleListByGroupId(groupId, setState) {
    const query = userDoc.collection("Ticcle")
        .where("group", "==", groupId);
    const querySnapshot = await query.get();

    var ticcleList = [];
    querySnapshot.forEach(snapshot => {
        const id = snapshot.id;
        const ticcle = { ...snapshot.data(), id }
        ticcleList = [...ticcleList, ticcle];
    });
    setState(ticcleList);
}

/**
 * Get group's number of ticcles by groupId
 * @param {Dispatch<SetStateAction<S>>} setState
 * @returns {Int} ticcle length
 */
 async function findNumberOfTicclesOfGroup(groupId, setState) {
    const query = userDoc.collection("Ticcle")
        .where("group", "==", groupId);
    const querySnapshot = await query.get();
    setState(querySnapshot.size);
}

/**
 * Get One Ticcle By Id (DocumentSnapshot.id) and Set state
 * @param {*} ticcleId 
 * @param {Dispatch<SetStateAction<S>>} setState 
 * @returns {DocumentSnapshot} (of Ticcle doc) if exist, else null
 */
async function findTiccleById(ticcleId, setState) {
    const ticcle = await userDoc.collection("Ticcle").doc(ticcleId).get()
    if (ticcle.exists) setState(ticcle.data());
    else setState([]);
}

/**
 * Get images of ticcle and Set state
 * @param {Array} ticcle 
 * @param {Dispatch<SetStateAction<S>>} setState 
 */
 async function findImagesOfTiccle(ticcle, setState) {
    var imageURLArr = [];
    const images = ticcle.images;
    if (images) {
        for (const imageName of images) {
            const URL = await getDownloadURLByName(imageName, true);
            imageURLArr.push(URL);
        }
    }
    setState({...ticcle, imageUrl: imageURLArr});
}

export {
    createTiccle,
    uploadNewTiccle,
    findTiccleListByGroupId,
    findNumberOfTicclesOfGroup,
    findTiccleById,
    findImagesOfTiccle,
}
