/**
 * This module applies the middleware functions required for all the endpoints
 * in the backend.
 *
 * @module middleware/index
 */
import cors from "cors";
import cookieParser from "cookie-parser";
import filterRequestTypes from "./allowedRequests.js";

/**
 * Applies the Cross-Origin Resource Sharing policy of the backend, filters out
 * the unwanted HTTP request types and sets up the cookies parser.
 *
 * @function
 * @param {Object} app The Axios router object.
 * @name applyMiddleware
 */
export default (app) => {
  app.use(
    cors({
      credentials: true,
      allowedHeaders: ["Content-Type", "Authorization"],
      origin: (origin, callback) => {
        if (!origin) return callback(null, true);
        return callback(null, true);
      },
    })
  );
  app.use(filterRequestTypes);
  app.use(cookieParser());
};
