import firestore from '@react-native-firebase/firestore';
import RNRestart from 'react-native-restart'; // Import package from node modules
import SplashScreen from 'react-native-splash-screen';

/**
 * Get KST Time
 * @returns {number} KST Time (time value in milliseconds)
 */
function getKSTTime() {
    const curr = new Date();
    const utc = curr.getTime() + (curr.getTimezoneOffset() * 60 * 1000);
    const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    return utc + KR_TIME_DIFF;
}

/**
 * Convert milliseconds to YY.MM.DD format date
 * @param {number} timeStamp (time value in milliseconds)
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

const restartApp = () =>
{
    RNRestart.Restart();
    SplashScreen.show();
}

export {
    getKSTTime,
    timeStampToFormatDate,
    getPrivacyPolicy,
    restartApp,
}
