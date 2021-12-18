import { Router } from "express";
import usersRouter from "./usersRoute.js";
import loginRouter from "./loginRoute.js";

// define /api/* routers
const mainRouter = new Router();
mainRouter.use(usersRouter);
mainRouter.use(loginRouter);

// define /api router
const apiRouter = new Router();
apiRouter.use("/api", mainRouter);

export default apiRouter;
