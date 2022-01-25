import { searchTiccleWithAlgolia } from "../service/SearchService";

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
 * Search ticcle by title
 * @param {string} query to search
 * @returns {Promise} Array of Ticcle Meatadata
 */
function searchTiccleByTitle(query) {
    return searchTiccleWithAlgolia(query, "title");
}

/**
 * Search ticcle by tag
 * @param {string} query to search
 * @returns {Promise} Array of Ticcle Meatadata
 */
function searchTiccleByTag(query) {
    return searchTiccleWithAlgolia(query, "tagList");
}

export {
    searchTiccleByTitle,
    searchTiccleByTag,
}
