import firestore from '@react-native-firebase/firestore';
import { currentUser } from './AuthService';

const algoliasearch = require("algoliasearch");
var collectionIndex;
const userFilter = `uid:${currentUser.uid}`

async function initAlgolia() {
    // Get Algolia keys first
    const doc = await firestore().collection('Info').doc('Algolia').get();
    const algolia = doc.data();

    // Generate Algolia client and target index
    const searchClient = algoliasearch(algolia.AppID, algolia.APIKey);
    const indexName = 'dev_ticcletitle';
    collectionIndex = searchClient.initIndex(indexName);
};

/**
 * Search ticcle by title or tag
 * @param {Array} query to search
 * @param {Array} tagQuery if not using this, put []
 * @returns {Promise} Array of Ticcle Meatadata
 */
 async function searchTiccleWithAlgolia(query, tagQuery) {
    // search with Algolia
    // full search first: title, tagList using query
    const queryString = query.join(' ');
    const queryResult = await collectionIndex.search(queryString, {
        restrictSearchableAttributes: [
            "title",
            "tagList"
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

    // then do tag search
    for (let tag of tagQuery) {
        // search tag
        const tagQueryResult = await collectionIndex.search(tag, {
            restrictSearchableAttributes: [
                "tagList" // ONLY look at "tagList" value
            ],
            filters: userFilter,
        });
        // push ticcle that not in result to ticcleMetadataList
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
    }

    // return search result
    return new Promise(resolve => {
        resolve(ticcleMetadataList);
    });
}

/**
 * Search ticcle by title and tag (in group)
 * @param {Array} ticcleList ticcle list in same group (MUST CONTAIN "title" and "tagList")
 * @param {Array} query 
 * @param {Array} tagQuery if not using this, put []
 * @returns {Array} searched ticcle list
 */
function searchTiccleInGroup(ticcleList, query, tagQuery) {
    // title search first
    const result = searchTiccleByTitleInGroup(ticcleList, query);

    // do tag search using query
    for (let tag of query) {
        // search tag
        const tagQueryResult = searchTiccleByTagInGroup(ticcleList, tag);
        // push ticcle that not in result to result
        tagQueryResult.forEach(element => {
            result.push(element);
        })
    }    

    // then do tag search using tagQuery
    for (let tag of tagQuery) {
        // search tag
        const tagQueryResult = searchTiccleByTagInGroup(ticcleList, tag);
        // push ticcle that not in result to result
        tagQueryResult.forEach(element => {
            result.push(element);
        })
    }

    const set = new Set(result);
    const uniqueArr = [...set];

    return uniqueArr;
}

/**
 * Search ticcle by title (in group)
 * @param {Array} ticcleList ticcle list in same group (MUST CONTAIN "title")
 * @param {Array} query 
 * @returns {Array} searched ticcle list
 */
 function searchTiccleByTitleInGroup(ticcleList, query) {
    const result = ticcleList.filter((ticcle) => {
        var flag = false;
        for (let q of query) {
            if (ticcle.title.indexOf(q) >= 0) {
                flag = true;
                break;
            }
        }
        return flag;
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
        var flag = false;
        for (let q of tagQuery) {
            for (let list of ticcle.tagList){
                if (list.indexOf(q) >= 0) {
                    flag = true;
                    break;
                }
            }
        }
        return flag;
        // if (JSON.stringify(ticcle.tagList).indexOf(tagQuery) < 0) return false; // not exact match
        // else return true;
    });
    return result;
}

export {
    initAlgolia,
    searchTiccleWithAlgolia,
    searchTiccleInGroup,
};
