import wofApi from "./wofApi.js";

/**
 * Checks whether the user has been logged in based on the cookie.
 * If cookie is valid, it will return user. If not, it returns null.
 * @returns {Object || null} the user object with the following fields:
 *   id, username, email, account_type, account_status
 */
const refreshToken = async () => {
  const user = await wofApi.get('/auth/refreshToken')
  .then((response) => {
    return response.data;
  }).catch((error) => {
    throw new Error(error.response.data.message);
  });
  return user;
}

export { refreshToken };
