import firestore from '@react-native-firebase/firestore';
import { getCurrentUser } from '../../../../firebase/Auth';
import { getDownloadURLByName } from '../../../../firebase/Storage';

const user = getCurrentUser();
const userDoc = firestore().collection('RTiccle').doc(user.uid);

async function getGroupDataIncludeImage(groupId) {
    const group = await userDoc.collection("Group").doc(groupId).get();
    if (group.exists){
        let data = group.data();
        var mainImageURL = null;
        if(data.mainImage || data.mainImage != '') { // get download URL
            mainImageURL = getDownloadURLByName(data.mainImage, false);
        }
        data = {...data, imageUrl: mainImageURL, id: id};
        return data;
    }else return null;
}

export {
    getGroupDataIncludeImage
}
