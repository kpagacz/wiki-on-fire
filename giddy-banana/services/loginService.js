/**
 * This module exports services associated with the /login endpoint.
 *
 * @module services/loginService
 */
import jwt from "jsonwebtoken";
const { sign } = jwt;
import config from "../config/config.example.js";
import {
  InvalidArgumentException,
  InvalidPasswordException,
  NotFoundException,
} from "../src/errors.js";
import { getUser } from "./usersService.js";
import hashPassword from "../src/hashing.js";

/**
 * Authenticates username and password:
 *
 * - Checks whether the provided password matches the one stored in the database
 * - Returns a Json Web Token if succesful
 *
 * The payload encrypted in the token has the following fields:
 *
 * - `username`
 * - `accountType`
 * - `accountStatus`
 *
 * The values match the User model definition.
 *
 * @example
 *   const userDataAndToken = await loginUser("user1", "pass1");
 *
 * @param {String} username The username
 * @param {String} password The password of the user
 * @returns {Object} An object with fields: "token_type", "token" and "user"
 */
const loginUser = async (username, password) => {
  if (typeof username !== "string")
    throw new InvalidArgumentException("username must be a String");
  if (typeof password !== "string")
    throw new InvalidArgumentException("password must be a String");

  let user;
  try {
    user = await getUser(username);
  } catch (error) {
    if (error instanceof NotFoundException) throw error;
    throw new Error("Error getting the user information");
  }

  if (hashPassword(password) !== user.password)
    throw new InvalidPasswordException("Invalid password");

  const token = sign(
    {
      username: user.username,
      email: user.email,
      accountType: user.account_type,
      accountStatus: user.account_status,
    },
    config.secretKey,
    {
      algorithm: config.tokenAlgorithm,
      expiresIn: config.tokenExpiration,
      issuer: config.tokenIssuer,
      expiresIn: "8h",
    }
  );

  return { token_type: "jwt", token: token, user: user };
};

export default loginUser;
