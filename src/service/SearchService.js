import firestore from '@react-native-firebase/firestore';
import { currentUser } from './AuthService';

const algoliasearch = require("algoliasearch");
var searchClient;
var collectionIndex;
const userFilter = `uid:${currentUser.uid}`

async function initAlgolia() {
    const doc = await firestore().collection('Algolia').doc('algolia').get();
    const algolia = doc.data();
    searchClient = algoliasearch(algolia.AppId, algolia.APIKey);
    const indexName = 'dev_ticcletitle';
    collectionIndex = searchClient.initIndex(indexName);
};

/**
 * Search ticcle by title or tag
 * @param {string} query to search
 * @param {string} restrictAttr MUST BE title or tagList
 * @returns {Promise} Array of Ticcle Meatadata
 */
 async function searchTiccleWithAlgolia(query, restrictAttr) {
    // search with Algolia
    const result = await collectionIndex.search(query, {
        restrictSearchableAttributes: [
            restrictAttr, // ONLY look at title or tagList value
        ],
        filters: userFilter,
    });
    var ticcleMetadataList = [];
    result.hits.forEach(element => {
        const record = {
            id: element.objectID,
            title: element.title,
            groupId: element.groupId,
            tagList: element.tagList,
        }
        ticcleMetadataList.push(record);
    });
    // return search result
    return new Promise(resolve => {
        resolve(ticcleMetadataList);
    });
}

export {
    initAlgolia,
    searchTiccleWithAlgolia,
};
