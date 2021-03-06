/**
 * This module exports the controllers for the `/users` endpoint. The
 * controllers in this module are available under `/api/articles` URL.
 *
 * @module controllers/articleController
 */

import {
  getArticle,
  postArticle,
  deleteArticle,
  updateArticle,
  getMostViewed,
} from "../services/articleService.js";
import { NotFoundException } from "../src/errors.js";

/**
 * The controller for the GET endpoint of articles.
 *
 * @param {Object} req The Axios HTML request object
 * @param {Object} res The Axios HTML response object
 */
async function getArticles(req, res) {
  if (req.params.title === undefined)
    res.status(400).send({ message: "Article title must be defined" });
  try {
    const article = await getArticle(req.params.title);
    res.status(200).json(article);
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
}

/**
 * The controller for the POST endpoint of articles.
 *
 * @param {Object} req The Axios HTML request object
 * @param {Object} res The Axios HTML response object
 */
async function postArticles(req, res) {
  try {
    const createdArticle = await postArticle(
      req.body.title,
      req.body.link_to_preview,
      req.body.link_to_contents,
      req.body.number_of_authors,
      req.body.date_added
    );
    res.status(201).json(createdArticle);
  } catch (e) {
    res.status(400).send({ message: e.message });
  }
}

/**
 * The controller for the DELETE endpoint of articles.
 *
 * @param {Object} req The Axios HTML request object
 * @param {Object} res The Axios HTML response object
 */
async function deleteArticles(req, res) {
  try {
    await deleteArticle(req.params.title);
    res.status(200).send();
  } catch (e) {
    res.status(400).send({ message: e.message });
  }
}

/**
 * The controller for the PATCH endpoint of articles.
 *
 * @param {Object} req The Axios HTML request object
 * @param {Object} res The Axios HTML response object
 */
async function updateArticles(req, res) {
  try {
    const title = req.params.title;
    await updateArticle(title, req.body);
    res.status(200).send();
  } catch (e) {
    if (e instanceof NotFoundException) {
      res.status(404);
    } else {
      res.status(400);
    }
    res.send({ message: e.message });
  }
}

/**
 * The controller for the `POST` endpoint of `articles/mostViewed`.
 *
 * Returns a `400` HTML response if either:
 *
 * - `page` was not provided in the body
 * - `itemsPerPage` was not provided in the body
 * - The process of getting the page failed.
 *
 * @param {Object} req The Axios HTML request object
 * @param {Object} res The Axios HTML response object
 */
async function getMostViewedArticles(req, res) {
  if (req.body.page === undefined)
    res.status(400).send({ message: "Page number must be defined" });
  if (req.body.itemsPerPage === undefined)
    res
      .status(400)
      .send({ message: "Number of items per page must be defined" });
  try {
    const mostViewedArticlesPage = await getMostViewed(
      req.body.page,
      req.body.itemsPerPage
    );
    res.status(200).json(mostViewedArticlesPage);
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
}

export {
  getArticles,
  postArticles,
  deleteArticles,
  updateArticles,
  getMostViewedArticles,
};
