import { Router } from "express";
import { usersRouter } from "./users";

// define /api/* routers
const mainRouter = Router();
mainRouter.use("/users", usersRouter);

// define /api router
const apiRouter = Router();
router.use("/api", mainRouter);

export default apiRouter;
