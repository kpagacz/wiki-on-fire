/**
 * This module exports the `/refreshToken` route.
 *
 * @module routes/refreshToken
 */
import { Router } from "express";
import refreshTokenController from "../controllers/refreshTokenController.js";

const refreshTokenRouter = new Router();
refreshTokenRouter.route("/refreshToken").get(refreshTokenController);

export default refreshTokenRouter;
