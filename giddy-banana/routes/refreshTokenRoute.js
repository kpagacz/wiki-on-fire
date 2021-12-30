import { Router } from "express";
import refreshTokenController from "../controllers/refreshTokenController.js";

const refreshTokenRouter = new Router();
refreshTokenRouter.route("/refreshToken").get(refreshTokenController);

export default refreshTokenRouter;
