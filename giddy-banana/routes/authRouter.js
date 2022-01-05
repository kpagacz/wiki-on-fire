/**
 * This modules exports the `/auth` router.
 *
 * @module routes/authRouter
 */
import { Router } from "express";
import refreshTokenRouter from "./refreshTokenRoute.js";

const authRouter = new Router();
authRouter.use(refreshTokenRouter);

export default authRouter;
