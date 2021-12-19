import db from "../models/index.cjs";
import { NotFoundException } from "./serviceErrors.js";



/**
 * Returns information about a user.
 *
 * @param {string} _title the article title
 * @return {Object} JSON with the requested article's data
 * @throws {Error} If the article couldn't be found or the database
 * connection was refused.
 */

async function getArticle(_title) {
  try {
    const found = await db.Article.findOne({
      where: { title: _title },
    }).then((article) => {
      return article;
    });
    if (!found) throw new NotFoundException("Article not found!");
    return found;
  } catch (e) {
    throw new Error(e.message);
  }
}

async function postArticle(
  _title,
  _link_to_preview,
  _link_to_contents,
  _number_of_authors,
  _date_added
) {
  try {
    await db.Article.create({
      title: _title,
      link_to_preview: _link_to_preview,
      link_to_contents: _link_to_contents,
      date_added: _date_added,
      number_of_authors: _number_of_authors
    });
  } catch (e) {
    throw new Error(e.message);
  }
}

async function deleteArticle(_title) {
  try {
    await db.Article.destroy({
      where: { title: _title },
    });
  } catch (e) {
    throw new Error(e.message);
  }
}

async function updateArticle(_title, updatedFields) {
  try {
    if ((await db.Article.findOne({ where: { title: _title } })) === null)
      throw new NotFoundException("Article not found");
    const modelKeys = Object.keys(db.Article.rawAttributes);
    const subsetFields = modelKeys
      .filter((key) => key in updatedFields)
      .reduce((subset, key) => {
        subset[key] = updatedFields[key];
        return subset;
      }, {});
    await db.Article.update(subsetFields, { where: { title: _title } });
  } catch (e) {
    throw e;
  }
}

export { getArticle, postArticle, deleteArticle, updateArticle };
