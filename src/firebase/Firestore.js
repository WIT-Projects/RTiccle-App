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
 * @returns Promise (ref)
 */
async function createGroup(groupName, newGroup) {
    return await userDoc.collection("Group")
    .doc(groupName).set(newGroup);
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
 * @returns Promise (ref)
 */
function createTiccle(ticcleName, newTiccle) {
    return userDoc.collection("Ticcle")
    .doc(ticcleName).set(newTiccle);
}

export {
    createGroup,
    createTiccle,
}
