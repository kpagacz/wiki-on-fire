import { Router } from "express";
import loginController from "../controllers/loginController.js";

const loginRouter = new Router();
loginRouter.route("/login").post(loginController);

export default loginRouter;
