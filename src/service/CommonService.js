import firestore from '@react-native-firebase/firestore';

/**
 * Convert firebase firestore timestamp to YY.MM.DD format date
 * @param {number} timeStamp
 * @returns {string} YY.MM.DD
 */
function timeStampToFormatDate(timeStamp) {
    let date = new Date(timeStamp);
    let year = date.getFullYear().toString().substr(-2);
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let formattedday = `${year}.${month}.${day}`; // ex. 21.12.29
    return formattedday;
}

/**
 * Get privacy policy of RTiccle from firestore
 * @returns {Promise<String>} privacy policy
 */
async function getPrivacyPolicy() {
    const doc = await firestore().collection('Info').doc('Privacy').get();
    const policy = doc.data().policy;
    return new Promise(resolve => {
        resolve(policy);
    });
}

export {
    timeStampToFormatDate,
    getPrivacyPolicy,
}
