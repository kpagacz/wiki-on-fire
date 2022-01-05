/**
 * This module exports the `/articles` route.
 *
 * @module routes/articleRoute
 */
import express from "express";
import {
  getArticles,
  postArticles,
  deleteArticles,
  updateArticles,
} from "../controllers/articleController.js";

const articlesRouter = new express.Router();
articlesRouter.use(express.json());
articlesRouter
  .route("/articles/:title")
  .get(getArticles)
  .delete(deleteArticles)
  .patch(updateArticles);
articlesRouter.route("/articles").post(postArticles);

export default articlesRouter;
