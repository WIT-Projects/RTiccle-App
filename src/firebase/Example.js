/* This is example of using firebase function */
import { createGroup, createTiccle, uploadNewGroup, uploadNewTiccle, getGroupById, getTiccleById } from "./Firestore";
import firestore from '@react-native-firebase/firestore';

function testUploadNewGroup() {
    const groupName = 'new';
    const newGroup = {
        lastModifiedTime: firestore.Timestamp.fromDate(new Date()),
        type: 5, // BOOK(0), BLOG(1), NEWS(2), WEB(3), SNS(4), ETC(5)
        title: groupName,
        description: 'this is testing group'
    }
    const imageSource = '';
    uploadNewGroup(groupName, newGroup, imageSource)
    .then((ref) => console.log(ref));
}

async function testUploadNewTiccle() {
    const ticcleName = 'newTiccle';
    const newTiccle =  {
        lastModifiedTime: firestore.Timestamp.fromDate(new Date()),
        group: 'new',
        title: ticcleName,
        link: '', // URL of original content
        content: 'this is testing ticcle',
        tagList: ['테스트', '가자']
    }
    const images = [];
    const id = await uploadNewTiccle(ticcleName, newTiccle, images);
    console.log(id);
}

async function testGetGroupById() {
    const g = await getGroupById('new');
    console.log(g.title, ":", g.description);
}

async function testGetTiccleById() {
    const t = await getTiccleById('kKV5AfefvSppAOQWcSaa');
    console.log(t.title, ":", t.content);
}
export {
    testUploadNewGroup,
    testUploadNewTiccle,
    testGetGroupById,
    testGetTiccleById,
}
