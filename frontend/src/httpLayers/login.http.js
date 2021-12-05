import wofApi from "./wofApi.js";

/**
 * Authenticates the user to the backend service of
 * WikiOnFire. The response from the server sets
 * the authentication and authorization `httpOnly` cookie.
 *
 * @param {String} username
 * @param {String} password
 * @returns {Object} the user object with the following fields:
 *   id, username, email, account_type, account_status, createdAt,
 *   updatedAt
 */
const loginUser = async (username, password) => {
  const user = await wofApi
    .post("/login", { username: username, password: password })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        throw new Error(`${error.response.data.message}`);
      } else if (error.request) {
        throw new Error("Service refused connection");
      } else {
        throw new Error("Undefined error");
      }
    });
  return user;
}

export { loginUser };
