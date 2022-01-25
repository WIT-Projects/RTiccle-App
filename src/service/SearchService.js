import firestore from '@react-native-firebase/firestore';
// import { getCurrentUser } from './AuthService';
// const user = getCurrentUser();

const apiKey = firestore().collection('Algolia').doc('algolia').collection('APIKey');
const AppId = firestore().collection('Algolia').doc('algolia').collection('AppId');

const algoliasearch = require("algoliasearch");

const client = algoliasearch(apiKey, AppId);
const index = client.initIndex("dev_ticcletitle");

/**
 * Search ticcle by title
 * @param {*} keyword to search
 * @returns {*} GroupId
 */
async function searchTiccleByTitle(keyword) {
    let findGroupId = "";

    index.search(keyword)
        .then(({hits}) => {
            console.log(hits);
            findGroupId = hits.objectId;
        })
        .catch(err => {
            console.log(err);
        });

    return findGroupId;
}

export {
    searchTiccleByTitle,
};
