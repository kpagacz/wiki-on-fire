import db from "../models/index.cjs";
import { NotFoundException } from "./serviceErrors.js";


/**
 * Returns information about a article.
 *
 * @param {string} _title the article title
 * @return {Object} JSON with the requested article's data
 * @throws {Error} If the article couldn't be found or the database
 * connection was refused.
 */

async function getArticle(title) {
  try {
    const found = await db.Article.findOne({
      where: { title: title },
    }).then((article) => {
      return article;
    });
    if (!found) throw new NotFoundException("Article not found!");
    return found;
  } catch (e) {
    throw new Error(e.message);
  }
}

/**
 * Creates an article in the WoF database.
 *
 * @param {String} title the title of the article to update
 * @param {String} link_to_preview the link to the preview of the article
 * @param {String} link_to_contents
 * @param {Number} number_of_authors
 * @param {String} date_added the date the article was added to the Wikipedia project
 */
async function postArticle(
  title,
  link_to_preview,
  link_to_contents,
  number_of_authors,
  date_added
) {
  try {
    await db.Article.create({
      title: title,
      link_to_preview: link_to_preview, //"link1_1",
      link_to_contents: link_to_contents,
      number_of_authors: number_of_authors,
      date_added: date_added,
    });
  } catch (e) {
    throw new Error(e.message);
  }
}

/**
 * Deletes the article from the WoF database.
 *
 * @param {String} title the title of the article to delete
 */
async function deleteArticle(title) {
  try {
    await db.Article.destroy({
      where: { title: title },
    });
  } catch (e) {
    throw new Error(e.message);
  }
}

/**
 * Updates the article record in the WoF database.
 *
 * @param {String} title the title of the article to update
 * @param {Object} updatedFields the object containing the fields and new values of the updated article
 */
async function updateArticle(title, updatedFields) {
  try {
    if ((await db.Article.findOne({ where: { title: title } })) === null)
      throw new NotFoundException("Article not found for update");
    const modelKeys = Object.keys(db.Article.rawAttributes);
    const subsetFields = modelKeys
      .filter((key) => key in updatedFields)
      .reduce((subset, key) => {
        subset[key] = updatedFields[key];
        return subset;
      }, {});
    await db.Article.update(subsetFields, { where: { title: title } });
  } catch (e) {
    throw new Error(e.message);
  }
}

export { getArticle, postArticle, deleteArticle, updateArticle };
