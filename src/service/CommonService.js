import firestore from '@react-native-firebase/firestore';

function FBDate() {
    return firestore.Timestamp.fromDate(new Date());
}

export {
    FBDate,
}
