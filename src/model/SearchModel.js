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

/**
 * Search ticcle by title and tag with Algolia
 * @param {Array} query to search (title & tagList)
 * @param {Array} tagQuery ONLY search tagList
 * @returns {Promise<Array>} Array of Ticcle Meatadata
 */
async function searchTiccleByTitltAndTag(query, tagQuery) {
    const result = await searchTiccleWithAlgolia(query, tagQuery); // TODO sorting
    return result;
}

/**
 * Search ticcle by title and tag in Gorup (local search)
 * @param {Array} ticcleList ticcle list in same group (MUST CONTAIN "title" and "tagList")
 * @param {Array} query to search (title & tagList)
 * @param {Array} tagQuery ONLY search tagList
 * @returns {Array} searched ticcle list
 */
 function searchTiccleByTitltAndTagInGroup(ticcleList, query, tagQuery) {
    const result = searchTiccleInGroup(ticcleList, query, tagQuery);
    return result;
}


export {
    searchTiccleByTitltAndTag,
    searchTiccleByTitltAndTagInGroup,
}
