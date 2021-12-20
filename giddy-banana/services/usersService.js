import db from "../models/index.cjs";
import { NotFoundException } from "../src/Errors.js";
import hashPassword from "../src/hashing.js";

const AccountStatusMapping = {
  active: 1,
};

const AccountTypeMapping = {
  user: 1,
};

/**
 * Returns information about a user.
 *
 * @param {string} username the username
 * @return {Object} JSON with the requested user's data
 * @throws {Error} If the user couldn't be found or the database
 * connection was refused.
 */
async function getUser(username) {
  try {
    const found = await db.User.findOne({
      where: { username: username },
    }).then((user) => {
      return user;
    });
    if (!found) throw new NotFoundException("User not found");
    return found;
  } catch (e) {
    throw new Error(e.message);
  }
}

/**
 * Creates a new user and stores it in the database.
 *
 * @param {String} username the unique username
 * @param {String} password the raw password of the user
 * @param {String} email the email address of the user
 * @param {String} userAvatar avatar
 */
async function postUser(username, password, email, userAvatar) {
  try {
    await db.User.create({
      username: username,
      password: hashPassword(password),
      email: email,
      account_type: AccountTypeMapping["user"],
      account_status: AccountStatusMapping["active"],
    });
  } catch (e) {
    throw new Error(e.message);
  }
}

/**
 * Deletes the account from the WoF database.
 *
 * @param {String} username the name of the account
 * @throws {Error} if the database operation failed
 */
async function deleteUser(username) {
  try {
    await db.User.destroy({
      where: { username: username },
    });
  } catch (e) {
    throw new Error(e.message);
  }
}

/**
 * Updates the account details in the WoF database.
 *
 * @param {String} username the name of the account
 * @param {Object} updatedFields the object containing the updated fields
 * @throws {Error} if the database operation failed
 */
async function updateUser(username, updatedFields) {
  try {
    if ((await db.User.findOne({ where: { username: username } })) === null)
      throw new NotFoundException("Username not found");
    const modelKeys = Object.keys(db.User.rawAttributes);
    const subsetFields = modelKeys
      .filter((key) => key in updatedFields)
      .reduce((subset, key) => {
        subset[key] = updatedFields[key];
        return subset;
      }, {});
    await db.User.update(subsetFields, { where: { username: username } });
  } catch (e) {
    throw new Error(e.message);
  }
}

export { getUser, postUser, deleteUser, updateUser };
