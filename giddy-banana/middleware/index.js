import cors from "cors";
import cookieParser from "cookie-parser";
import filterRequestTypes from "./allowedRequests.js";

export default (app) => {
  app.use(cors({
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      return callback(null, true);
    }
  }));
  app.use(filterRequestTypes);
  app.use(cookieParser());
}
