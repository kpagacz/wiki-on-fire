import Router from "express";
import express from "express";
import { getUsers, postUsers } from "../controllers/usersController.js";

const usersRouter = Router();
usersRouter.use(express.json());
usersRouter.route("/users/:username").get(getUsers);
usersRouter.route("/users").post(postUsers);

export default usersRouter;
