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
 async function searchTiccleWithAlgolia(query, tagQuery) {
    // search with Algolia
    const queryResult = await collectionIndex.search(query, {
        restrictSearchableAttributes: [
            "title",
            "tagList"
        ],
        filters: userFilter,
    });
    const tagQueryResult = await collectionIndex.search(tagQuery, {
        restrictSearchableAttributes: [
            "tagList" // ONLY look at "tagList" value
        ],
        filters: userFilter,
    });

    var ticcleMetadataList = [];
    queryResult.hits.forEach(element => {
        const record = {
            id: element.objectID,
            title: element.title,
            groupId: element.groupId,
            tagList: element.tagList,
        }
        ticcleMetadataList.push(record);
    });
    tagQueryResult.hits.forEach(element => {
        const found = ticcleMetadataList.findIndex(ticcle => ticcle.id == element.id) > -1;
        if (found) {
            const record = {
                id: element.objectID,
                title: element.title,
                groupId: element.groupId,
                tagList: element.tagList,
            }
            ticcleMetadataList.push(record);
        }
    })
    // return search result
    return new Promise(resolve => {
        resolve(ticcleMetadataList);
    });
}

/**
 * Search ticcle by title and tag (in group)
 * @param {Array} ticcleList ticcle list in same group (MUST CONTAIN "title" and "tagList")
 * @param {string} query 
 * @param {string} tagQuery tag
 * @returns {Array} searched ticcle list
 */
function searchTiccleInGroup(ticcleList, query, tagQuery) {
    const result = searchTiccleByTitleInGroup(ticcleList, query);
    const tagQueryResult = searchTiccleByTagInGroup(ticcleList, tagQuery);
    tagQueryResult.forEach(element => {
        const found = result.findIndex(ticcle => ticcle.id == element.id) > -1;
        if (found) result.push(element);
    })
    return result;
}

/**
 * Search ticcle by title (in group)
 * @param {Array} ticcleList ticcle list in same group (MUST CONTAIN "title")
 * @param {string} query 
 * @returns {Array} searched ticcle list
 */
 function searchTiccleByTitleInGroup(ticcleList, query) {
    const result = ticcleList.filter((ticcle) => {
        if (ticcle.title.indexOf(query) < 0) return false;
        else return true;
    });
    return result;
}

/**
 * Search ticcle by tag (in group)
 * @param {Array} ticcleList ticcle list in same group (MUST CONTAIN "tagList")
 * @param {string} tagQuery tag
 * @returns {Array} searched ticcle list
 */
function searchTiccleByTagInGroup(ticcleList, tagQuery) {
    const result = ticcleList.filter((ticcle) => {
        if (JSON.stringify(ticcle.tagList).indexOf(tagQuery) < 0) return false; // not exact match
        else return true;
    });
    return result;
}

export {
    initAlgolia,
    searchTiccleWithAlgolia,
    searchTiccleInGroup,
};
