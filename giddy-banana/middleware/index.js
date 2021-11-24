import cors from "cors";
import filterRequestTypes from "./allowedRequests.js";

export default (app) => {
  app.use(cors());
  app.use(filterRequestTypes);
}
