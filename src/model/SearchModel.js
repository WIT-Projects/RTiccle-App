import { searchTiccleWithAlgolia, searchTiccleInGroup } from "../service/SearchService";

/*
 * Ticcle Metadata
 *  * {
        id: ticcle id,
        groupId: group id,
        title: String,
        tagList: Array<String>,
    }
 */

// group list
var searchList = [];

function initializeSearchList(){
    searchList.length = 0;
}

/**
 * Search ticcle by title and tag with Algolia
 * @param {Array} query to search (title & tagList)
 * @param {Array} tagQuery ONLY search tagList
 * @returns {Promise} Array of Ticcle Meatadata
 */
async function searchTiccleByTitltAndTag(query, tagQuery, setExistResult) {
    initializeSearchList();
    searchList = await searchTiccleWithAlgolia(query, tagQuery); // TODO sorting
    searchList.length !== 0? setExistResult(true) : setExistResult(false);
    console.log(searchList);
}

/**
 * Search ticcle by title and tag in Gorup (local search)
 * @param {Array} ticcleList ticcle list in same group (MUST CONTAIN "title" and "tagList")
 * @param {Array} query to search (title & tagList)
 * @param {Array} tagQuery ONLY search tagList
 * @returns {Array} searched ticcle list
 */
 function searchTiccleByTitltAndTagInGroup(ticcleList, query, tagQuery, setExistResult) {
    searchList = searchTiccleInGroup(ticcleList, query, tagQuery); // TODO sorting
    searchList.length !== 0? setExistResult(true) : setExistResult(false);
    console.log(searchList);
}


export {
    searchList,
    searchTiccleByTitltAndTag,
    searchTiccleByTitltAndTagInGroup,
    initializeSearchList,
}
