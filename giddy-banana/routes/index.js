import { Router } from "express";
import usersRouter from "./usersRoute.js";

// define /api/* routers
const mainRouter = Router();
mainRouter.use(usersRouter);

// define /api router
const apiRouter = Router();
apiRouter.use("/api", mainRouter);

export default apiRouter;
