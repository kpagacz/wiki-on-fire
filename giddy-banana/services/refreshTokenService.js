/**
 * This module exports services associated with refreshing a user session token
 * usually stored in a browser cookie in the client application.
 *
 * @module services/refreshTokenServie
 */
import jwt from "jsonwebtoken";
const { verify, sign } = jwt;
import config from "../config/config.example.js";
import { InvalidArgumentException } from "../src/errors.js";
import { getUser } from "./usersService.js";

/**
 * Refreshes the session token.
 *
 * Decrypts the JsonWebToken token and if appropriate refreshes.
 *
 * @example
 *   const userDataAndToken = await refreshToken("token.token.token");
 *
 * @param {String} cookie The cookie containing the encrypted JsonWebToken
 * @returns {Object} The token object with the fields `data` and `token`
 * @throws {TokenExpiredError} If the token expired
 * @throws {JsonWebTokenError} If the token was not signed by the login nor
 *   refresh token services
 */
const refreshToken = async (cookie) => {
  if (!(cookie.token instanceof String) && typeof cookie.token !== "string")
    throw new InvalidArgumentException(
      "token property of the cookie argument must be a string."
    );

  const decodedUsername = verify(
    cookie.token,
    config.secretKey,
    {
      issuer: config.tokenIssuer,
      algorithms: [config.tokenAlgorithm],
      maxAge: config.tokenExpiration,
    },
    (error, decoded) => {
      if (error) throw error;
      return decoded.username;
    }
  );

  const user = await getUser(decodedUsername);
  const newToken = sign(
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
    }
  );

  return {
    userData: {
      username: user.username,
      email: user.email,
      accountType: user.account_type,
      accountStatus: user.account_status,
    },
    token: { token_type: "jwt", token: newToken },
  };
};

export default refreshToken;
