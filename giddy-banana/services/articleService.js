/**
 * This module exports services associated with the /articles endpoint.
 *
 * @module services/articleService
 */
import db from "../models/index.cjs";
import moment from "moment";
import { InvalidArgumentException, NotFoundException } from "../src/errors.js";
import sequelize from "sequelize";

/**
 * Returns information about an article.
 *
 * @param {string} title The article title
 * @returns {Object} JSON with the requested article's data
 * @throws {Error} If the article couldn't be found or the database connection
 *   was refused.
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
 * @param {String} title The title of the article to update
 * @param {String} link_to_preview The link to the preview of the article
 * @param {String} link_to_contents The link to the contents of the article
 * @param {Number} number_of_authors The number of authors of the article
 * @param {String} date_added The date the article was added to the Wikipedia project
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
 * @param {String} title The title of the article to delete
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
 * @param {String} title The title of the article to update
 * @param {Object} updatedFields The object containing the fields and new values
 *   of the updated article
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

/**
 * Returns the information about the most viewed articles from the last week.
 * This endpoint supports pagination.
 *
 * @param {Number} page The number of the page
 * @param {Number} itemsPerPage The number of items per page
 * @returns {Object} The information about the article:
 *
 *   - Current page
 *   - Total number of pages
 *   - Items: the array of articles.
 *
 *   Each element of the `items` array contains fields:
 *
 *   - Id of the article
 *   - The link to the article on `en.wikipedia.org`
 *   - Article title
 *   - Date of the views recorded
 *   - Rank amongst all the article this day
 *   - Number of views this day.
 *
 * @throws {Error} When the database operations failed
 */
async function getMostViewed(page, itemsPerPage) {
  if (page <= 0)
    throw new InvalidArgumentException("The page argument must be positive");
  if (itemsPerPage <= 0)
    throw new InvalidArgumentException(
      "the itemsPerPage argument must be positive"
    );
  try {
    const weekAgo = moment().subtract(7, "days").toDate();
    const foundArticles = await db.ArticleTopViews.findAndCountAll({
      where: {
        date: {
          [sequelize.Op.gte]: weekAgo,
        },
      },
      include: [db.Article],
    });

    const entries = [];
    foundArticles.rows.forEach((mostViewedArticle) => {
      const articleInfo = {
        id: mostViewedArticle.Article.id,
        link: mostViewedArticle.Article.link_to_contents,
        title: mostViewedArticle.Article.title,
        date: mostViewedArticle.dataValues.date,
        rank: mostViewedArticle.dataValues.rank_position,
        views: mostViewedArticle.dataValues.number_of_views,
      };
      entries.push(articleInfo);
    });

    var articlesDictionary = {};
    entries.forEach((entry) => {
      if (!(entry.id in articlesDictionary)) {
        articlesDictionary[entry.id] = entry;
      } else {
        articlesDictionary[entry.id].views += entry.views;
      }
    });

    const items = [];
    Object.keys(articlesDictionary).map((key) => {
      items.push(articlesDictionary[key]);
    });

    items.sort((first, second) => {
      if (first.views > second.views) return -1;
      if (first.views == second.views) return 0;
      return 1;
    });

    const offset = (page - 1) * itemsPerPage;
    const res = {
      page: page,
      totalPages: Math.ceil(items.length / itemsPerPage),
      items: items.slice(offset, Math.min(offset + itemsPerPage, items.length)),
    };
    return res;
  } catch (e) {
    throw new Error(e.message);
  }
}

export { getArticle, postArticle, deleteArticle, updateArticle, getMostViewed };
