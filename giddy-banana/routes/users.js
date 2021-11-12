import Router from "express";
import getUsers from "../controllers/users.js";

const usersRouter = Router();
usersRouter.route("/users")
  .get(getUsers);

export default router;
