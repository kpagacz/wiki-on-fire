/**
 * This modules exports services associated with terminating a user session,
 * invalidating any authentication resources given to the client application by
 * this backend application.
 *
 * @module services/logoutService
 */
import jwt from "jsonwebtoken";
const { sign } = jwt;
import config from "../config/config.example.js";

/**
 * Signs out the user from the giddy-banana session.
 *
 * Wipes out the session token and expires it.
 *
 * @example
 *   const wipedToken = await logoutUser();
 *
 * @returns {Object} An object with fields: "token_type", "token"
 */
export default async () => {
  const token = sign({ expired: "" }, config.secretKey, { expiresIn: "-8h" });
  return { token_type: "jwt", token: token };
};
