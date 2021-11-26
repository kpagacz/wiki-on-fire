import express from "express";
import { getUsers, postUsers, deleteUsers, updateUsers } from "../controllers/usersController.js";

const usersRouter = new express.Router();
usersRouter.use(express.json());
usersRouter.route("/users/:username")
  .get(getUsers)
  .delete(deleteUsers)
  .patch(updateUsers);
usersRouter.route("/users").post(postUsers);

export default usersRouter;
