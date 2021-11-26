import jwt from "jsonwebtoken";
const { sign } = jwt;
import config from "../config/config.example.js";
import {InvalidArgumentException, InvalidPasswordException, NotFoundException} from "./serviceErrors.js";
import {getUser} from "./usersService.js";

/**
 * Authenticates username and password:
 * * checks whether the provided password matches the one stored in the database
 * * returns a Json Web Token if succesul
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
 * @return {Object} an object with fields: "token-type", "token"
 * @example
 * const jwt = await loginUser("user1", "pass1");
 */
const loginUser = async (username, password) => {
  if (typeof username !== "string") throw new InvalidArgumentException("username must be a String");
  if (typeof password !== "string") throw new InvalidArgumentException("password must be a String");

  let user;
  try {
    user = await getUser(username);
  } catch (error) {
    if (error instanceof NotFoundException) throw error;
    throw new Error("Error getting the user information");
  }

  if (password !== user.password) throw new InvalidPasswordException("Invalid password");

  const token = sign(
    {username: user.username, accountType: user.account_type, accountStatus: user.account_status},
    config.secretKey,
    {
      expiresIn: "8h",
    },
  );

  return { token_type: "jwt", token: token };
};

export default loginUser;
