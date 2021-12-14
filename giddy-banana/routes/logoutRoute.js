import { Router } from "express";
import logoutController from "../controllers/logoutController.js";

const logoutRouter = new Router();
logoutRouter.route("/logout").get(logoutController);

export default logoutRouter;
