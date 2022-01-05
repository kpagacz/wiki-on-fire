/**
 * @module src/hashing
 * @description
 * This module exports a custom hashing function.
 */
import { createHash } from "crypto";
import { InvalidArgumentException } from "./errors.js";

/**
 * @name hash
 * @function
 * @description
 * Hashes the passed string with sha256 and encodes in `hex`.
 * @param {String} string the message to hash
 * @throws {InvalidArgumentException} if the argument is not a string
 */
export default (string) => {
  if (!(string instanceof String) && typeof string !== "string")
    throw new InvalidArgumentException("The hashed object must be a string");

  const hash = createHash("sha256");
  return hash.update(string).digest("hex");
};
