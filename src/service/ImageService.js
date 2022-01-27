import storage from '@react-native-firebase/storage';
import { currentUser } from './AuthService';

/**
 * @param {string} imageName: fileName
 * @param {url} source: image source
 * @param {boolean} isTiccle: image type (ture if ticcle image, false if group image)
 * @returns Promise includes downloadURL
 */
async function uploadImageToStorage(imageName, source, isTiccle) {
    const uid = currentUser.uid;
    const userRef = isTiccle ? storage().ref("ticcle").child(uid) : storage().ref("group").child(uid);

    // source: use the Blob or File API or Uint8Array or ...

    // Upload file to the object 'ticcle/{uid}/{imageName}'
    var uploadTask = userRef.child(imageName).putFile(source);

    return new Promise((resolve, reject) => {     
        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(storage.TaskEvent.STATE_CHANGED, function(snapshot) {
        // Observe state change events such as progress, pause, and resume
        }, function(err) {
            // Handle unsuccessful uploads
            return reject(err);
        }, function complete() {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            let downloadURL = uploadTask.snapshot.ref.getDownloadURL();
            return resolve(downloadURL);
        });
    });
}

/**
 * Get download URL by imageName
 * @param {string} imageName: image name 
 * @param {boolean} isTiccle: image type (ture if ticcle image, false if group image)
 * @returns URL
 */
async function getDownloadURLByName(imageName, isTiccle) {
    var path = isTiccle ? "ticcle" : "group";
    path = `${path}/${currentUser.uid}/${imageName}`;
    return await storage().ref(path).getDownloadURL();
}

function deleteImageFromStorage(imageName, isTiccle) {
    var path = isTiccle ? "ticcle" : "group";
    path = `${path}/${currentUser.uid}/${imageName}`;
    storage().ref(path).delete();
}

export {
    uploadImageToStorage,
    getDownloadURLByName,
    deleteImageFromStorage,
}
