import jwt from "jsonwebtoken";
const { sign } = jwt;
import config from "../config/config.example.js";

/**
 * Signs out the user from the giddy-banana session.
 *
 * Wipes out the session token and expires it.
 *
 * @return {Object} an object with fields: "token_type", "token"
 * @example
 * const wipedToken = await logoutUser();
 */
export default async () => {
  const token = sign({ expired: "" }, config.secretKey, { expiresIn: "-8h" });
  return { token_type: "jwt", token: token };
};
