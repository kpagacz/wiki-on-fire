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
 * If the user could not have been created, the error
 * contains the property `path` specifying what field
 * of the form was invalid. Possible values: `username`, `password`, `email`.
 *
 * @example
 * await registerUser("firstuser", "theirpassword", "theirmail@mail.com");
 */
async function registerUser(username, password, email) {
  return await wofApi
    .post("/users", { username: username, password: password, email: email })
    .then(() => {
      return true;
    })
    .catch((error) => {
      if (error.response) {
        const err = new Error(`${error.response.data.message}`);
        err.path = error.response.data.path;
        throw err;
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
 * @returns `true` if the operation succeeded
 * @throws {Error} if `username` is not a `string`
 * @throws {Error} In one of three cases:
 * 1. The user couldn't have been deleted.
 * 2. The connection to the backend service was refused.
 * 3. An unexpected error.
 */
async function deleteUser(username) {
  if (!(username instanceof String) && typeof username !== "string")
    throw new Error("username must be a string");
  return await wofApi
    .delete("/users/" + username)
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

/**
 * Updates account details.
 *
 * @param {String} username the account, which details are updated
 * @param {Object} updatedDetails an object with the details to update. Possible keys: `password`, `email`.
 * @returns {Object} an object with the updated information about the user
 * @throws {Error} if username is not a `string`
 * @throws {Error} In one of three cases:
 * 1. The account information could not have been udpated.
 * 2. The connection to the backend service was refused.
 * 3. An unexpected error.
 */
async function updateUser(username, updatedDetails) {
  if (!(username instanceof String) && typeof username !== "string")
    throw new Error("username must be a string");
  let sentDetails = {};
  if ("password" in updatedDetails)
    sentDetails.password = updatedDetails.password;
  if ("email" in updatedDetails) sentDetails.email = updatedDetails.email;

  return await wofApi
    .patch("/users/" + username, sentDetails)
    .then(() => {
      return getUserDetails(username);
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
 * Returns the details of the account identifies by its username.
 *
 * @param {String} username the account name
 * @returns {Object} the details of the account
 * @throws {Error} In one of three cases:
 * 1. The user does not exist.
 * 2. The connection to the backend service was refused.
 * 3. An unexpected error.
 */
async function getUserDetails(username) {
  if (!(username instanceof String) && typeof username !== "string")
    throw new Error("username must be a string");
  return await wofApi
    .get("/users/" + username)
    .then((user) => {
      return user.data;
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

export { registerUser, deleteUser, updateUser, getUserDetails };
