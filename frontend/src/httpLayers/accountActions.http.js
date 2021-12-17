import wofApi from "./wofApi.js";

/**
 * Adds a user to the WoF database.
 *
 * @param {string} username the usersname
 * @param {string} password the password (raw string)
 * @param {string} email the user's email address
 * @returns `true` if the operation succeded
 * @throws {Error} In one of three cases:
 * 1. The user couldn't have been created.
 * 2. The connection to the backend service was refused.
 * 3. An unexpected error.
 *
 * @example
 * await registerUser("firstuser", "theirpassword", "theirmail@mail.com");
 */
async function registerUser(username, password, email) {
  return await wofApi
    .post("/users", { username: username, password: password, email: email })
    .then((user) => {
      return user;
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
}

/**
 * Removes an account identified by the username from the WoF database.
 *
 * @param {String} username the unique username to delete from the database
 * @return `true` if the operation succeeded
 * @throws {Error} if `username` is not a `string`
 * @throws {Error} In one of three cases:
 * 1. The user couldn't have been created.
 * 2. The connection to the backend service was refused.
 * 3. An unexpected error.
 */
async function deleteUser(username) {
  if (!username instanceof String && typeof username !== "string")
    throw new Error("username must be a string");
  return await wofApi
    .get("/users/" + username)
    .then(() => {
      return true;
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
}

export { registerUser, deleteUser };
