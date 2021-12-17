import firestore from '@react-native-firebase/firestore';
import { getCurrentUser } from './Auth';

const user = getCurrentUser();
const userDoc = firestore().collection('RTiccle').doc(user.uid);

/**
 * Group create function
 * @param {string} groupName 
 * @param {*} newGroup 
 *  {
        lastModifiedTime: TimeStamp,
        type: integer, // BOOK(0), BLOG(1), NEWS(2), WEB(3), SNS(4), ETC(5)
        title: String,
        description: String,
        mainImage: String // URL in Storage
    }
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
 *  * {
        lastModifiedTime: TimeStamp,
        group: gid,
        title: String,
        link: String, // URL of original content
        imageList: Map<String, String>, // limit: 2 // { "ref": "message", }
        content: String,
        tagList: Array<String>
    }
 * @returns Ticcle Id
 */
async function createTiccle(ticcleName, newTiccle) {
    const ref = userDoc.collection("Ticcle").doc(ticcleName);
    await ref.set(newTiccle);
    return ref.id;
}

/**
 * Get All Group of User
 * @returns QuerySnapshot
 */
async function getAllGroup() {
    const groups = await userDoc.collection("Group").get();
    groups.forEach(snapshot => {
        console.log('User ID: ', snapshot.id, snapshot.data());
    })
    return groups;
}

/**
 * Get One Group By Id (DocumentSnapshot.id)
 * @param {*} groupId 
 * @returns DocumentSnapshot(of Group doc) if exist, else null
 */
async function getGroupById(groupId) {
    const group = await userDoc.collection("Group").doc(ticcleId).get();
    if (group.exists) return group;
    else null;
}

/**
 * Get One Ticcle By Id (DocumentSnapshot.id)
 * @param {*} ticcleId 
 * @returns DocumentSnapshot(of Ticcle doc) if exist, else null
 */
async function getTiccleById(ticcleId) {
    const ticcle = await userDoc.collection("Ticcle").doc(ticcleId).get()
    if(ticcle.exists) return ticcle;
    else return null;
}

export {
    createGroup,
    createTiccle,
    getAllGroup,
    getGroupById,
    getTiccleById,
}
