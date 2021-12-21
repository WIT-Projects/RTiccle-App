/* This is example of using firebase function */
import {
    createGroup, 
    createTiccle, 
    uploadNewGroup,
    uploadNewTiccle, 
    findAllGroup,
    findGroupById, 
    findTiccleById, 
    checkIsExistingGroup,
    findTiccleListByGroupId, } from "./Firestore";
import firestore from '@react-native-firebase/firestore';

function testUploadNewGroup() {
    const groupName = 'new';
    const newGroup = {
        lastModifiedTime: firestore.Timestamp.fromDate(new Date()),
        type: 5, // BOOK(0), BLOG(1), NEWS(2), WEB(3), SNS(4), ETC(5)
        title: groupName,
        description: 'this is testing group',
        bookmark: false,
    }
    const imageSource = '';
    uploadNewGroup(groupName, newGroup, imageSource)
    .then((ref) => console.log(ref));
}

async function testUploadNewTiccle() {
    const newTiccle =  {
        lastModifiedTime: firestore.Timestamp.fromDate(new Date()),
        group: 'new',
        title: 'newTiccleName',
        link: '', // URL of original content
        content: 'this is testing ticcle',
        tagList: ['테스트', '가자']
    }
    const images = [];
    const id = await uploadNewTiccle(newTiccle, images);
    console.log(id);
}

async function testFindAllGroups(){
    const groups = await findAllGroup();
    console.log(groups);
}

async function testFindGroupById() {
    const g = await findGroupById('new');
    console.log(g.title, ":", g.description, g.lastModifiedTime.toDate());
}

async function testFindTiccleById() {
    const t = await findTiccleById('kKV5AfefvSppAOQWcSaa');
    console.log(t.title, ":", t.content, t.lastModifiedTime.toDate());
}

async function testCheckIsExistingGroup() {
    const isExisting = await checkIsExistingGroup('new');
    console.log("exists: ", isExisting);
}

async function testFindTiccleListByGroupId() {
    const ticcleList = await findTiccleListByGroupId('new');
    console.log(ticcleList);
}

export {
    testUploadNewGroup,
    testUploadNewTiccle,
    testFindAllGroups,
    testFindGroupById,
    testFindTiccleById,
    testCheckIsExistingGroup,
    testFindTiccleListByGroupId,
}
