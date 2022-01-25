import firestore from '@react-native-firebase/firestore';
import { currentUser } from './AuthService';

const algoliasearch = require("algoliasearch");
var collectionIndex;
const userFilter = `uid:${currentUser.uid}`

async function initAlgolia() {
    // Get Algolia keys first
    const doc = await firestore().collection('Algolia').doc('algolia').get();
    const algolia = doc.data();

    // Generate Algolia client and target index
    const searchClient = algoliasearch(algolia.AppId, algolia.APIKey);
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

/**
 * Search ticcle by title (in group)
 * @param {string} query 
 * @param {Array} ticcleList ticcle list in same group (MUST CONTAIN "title")
 * @returns 
 */
function searchTiccleByTitleInGroup(query, ticcleList) {
    const result = ticcleList.filter((ticcle) => {
        if (ticcle.title.indexOf(query) < 0) return false;
        else return true;
    });
    return result;
}

/**
 * Search ticcle by tag (in group)
 * @param {string} query 
 * @param {Array} ticcleList ticcle list in same group (MUST CONTAIN "tagList")
 * @returns 
 */
function searchTiccleByTagInGroup(query, ticcleList) {
    const result = ticcleList.filter((ticcle) => {
        if (ticcle.tagList.find(val => val == query) == undefined) return false;
        // if (JSON.stringify(ticcle.tagList).indexOf(query) < 0) return false; // if not exact match
        else return true;
    });
    return result;
}

export {
    initAlgolia,
    searchTiccleWithAlgolia,
    searchTiccleByTitleInGroup,
    searchTiccleByTagInGroup,
};
