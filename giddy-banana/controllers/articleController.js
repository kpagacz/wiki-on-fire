import {
  getArticle,
  postArticle,
  deleteArticle,
  updateArticle,
} from "../services/articleService.js";
import { NotFoundException } from "../src/errors.js";

/**
 * The controller for the GET endpoint of articles.
 *
 * @param {Object} req
 * @param {Object} res
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
 * @param {Object} req
 * @param {Object} res
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
 * @param {Object} req
 * @param {Object} res
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
 * @param {Object} req
 * @param {Object} res
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

export { getArticles, postArticles, deleteArticles, updateArticles };
