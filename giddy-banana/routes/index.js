import { Router } from "express";
import usersRouter from "./usersRoute.js";
import loginRouter from "./loginRoute.js";
import authRouter from "./authRouter.js";
import logoutRouter from "./logoutRoute.js";

// define /api/* routers
const mainRouter = new Router();
mainRouter.use(usersRouter);
mainRouter.use(loginRouter);
mainRouter.use(authRouter);
mainRouter.use(logoutRouter);

// define /api router
const apiRouter = new Router();
apiRouter.use("/api", mainRouter);

export default apiRouter;
