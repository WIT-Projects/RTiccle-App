/* This is example of using firebase function */
import { createGroup, createTiccle } from "./Firestore";
import firestore from '@react-native-firebase/firestore';

function testCreateGroup() {
    const groupName = 'new';
    let newGroup = {
        lastModifiedTime: firestore.Timestamp.fromDate(new Date()),
        type: 5, // BOOK(0), BLOG(1), NEWS(2), WEB(3), SNS(4), ETC(5)
        title: groupName,
        description: 'this is testing group',
        mainImage: '' // URL in Storage
    }
    createGroup(groupName, newGroup)
    .then((ref) => console.log(ref));
}

function testCreateTiccle() {
    const ticcleName = 'newTiccle';
    let newTiccle =  {
        lastModifiedTime: firestore.Timestamp.fromDate(new Date()),
        group: 'new',
        title: ticcleName,
        link: '', // URL of original content
        imageList: null, // limit: 2 // { "ref": "message", }
        content: 'this is testing ticcle',
        tagList: ['테스트', '가자']
    }
    createTiccle(ticcleName, newTiccle)
    .then((ref) => console.log(ref));
}

export {
    testCreateGroup,
    testCreateTiccle,
}
