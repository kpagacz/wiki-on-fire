import { Router } from "express";
import refreshTokenRouter from "./refreshTokenRoute.js";

const authRouter = new Router();
authRouter.use(refreshTokenRouter);

export default authRouter;
