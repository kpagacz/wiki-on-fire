import { createHash } from "crypto";

import { InvalidArgumentException } from "./Errors.js";

export default (string) => {
  if (!(string instanceof String) && typeof string !== "string")
    throw new InvalidArgumentException("The hashed object must be a string");

  const hash = createHash("sha256");
  return hash.update(string).digest("hex");
};
