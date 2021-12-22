import jwt from "jsonwebtoken";
const { sign } = jwt;
import config from "../config/config.example.js";
import {
  InvalidArgumentException,
  InvalidPasswordException,
  NotFoundException,
} from "../src/Errors.js";
import { getUser } from "./usersService.js";
import hashPassword from "../src/hashing.js";

/**
 * Authenticates username and password:
 * * checks whether the provided password matches the one stored in the database
 * * returns a Json Web Token if succesful
 *
 * The payload encrypted in the token has the following fields:
 * * username
 * * accountType
 * * accountStatus
 *
 * The values match the User model definition.
 *
 * @param {String} username the username
 * @param {String} password the password of the user
 * @return {Object} an object with fields: "token_type", "token" and "user"
 * @example
 * const userDataAndToken = await loginUser("user1", "pass1");
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
