import jwt from "jsonwebtoken";
const { verify, sign } = jwt;
import config from "../config/config.example.js";
import { InvalidArgumentException } from "./serviceErrors.js";
import { getUser } from "./usersService.js";

/**
 * Refreshes the JsonWebToken.
 *
 * @description Decrypts the token and if appropriate refreshes.
 *
 * @param {String} cookie the cookie containing the encrypted JsonWebToken
 * @return {Object} with the fields `data` and `token`
 * @example
 * const userDataAndToken = await refreshToken("token.token.token");
 *
 * @throws {TokenExpiredError} if the token expired
 * @throws {JsonWebTokenError} if the token was not signed by WikiOnFire
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
