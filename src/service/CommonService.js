/* deprecated */
/**
 * Return firebase firestore timestamp of now
 * @returns {FirebaseFirestoreTypes.Timestamp}
 */
function FBDate() {
    return firestore.Timestamp.fromDate(new Date());
}

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

export {
    timeStampToFormatDate,
}
