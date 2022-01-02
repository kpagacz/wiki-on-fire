/**
 * This module exports services associated with the /users endpoint.
 *
 * @module services/usersService
 */
import db from "../models/index.cjs";
import { NotFoundException } from "../src/errors.js";
import hashPassword from "../src/hashing.js";

/**
 * Mapping of account statuses to integer values for the sake of storing it in
 * the database.
 */
const AccountStatusMapping = {
  active: 1,
};

/** Mapping of account types to integer values for the sake of storing it in the database. */
const AccountTypeMapping = {
  user: 1,
};

/**
 * Returns information about a user.
 *
 * @param {string} username The username
 * @returns {Object} JSON with the requested user's data
 * @throws {NotFoundException} If the user couldn't be found or the database
 *   connection was refused.
 * @throws {Error} If the user couldn't have been retrieved from the database
 *   for another reason
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
 * @param {String} username The unique username
 * @param {String} password The raw password of the user
 * @param {String} email The email address of the user
 * @param {String} userAvatar Avatar
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
 * @param {String} username The name of the account
 * @throws {Error} If the database operation failed
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
 * @param {String} username The name of the account
 * @param {Object} updatedFields The object containing the updated fields
 * @throws {Error} If the database operation failed
 */
async function updateUser(username, updatedFields) {
  try {
    if ((await db.User.findOne({ where: { username: username } })) === null)
      throw new NotFoundException("Username not found");
    const modelKeys = Object.keys(db.User.rawAttributes);
    let subsetFields = modelKeys
      .filter((key) => key in updatedFields)
      .reduce((subset, key) => {
        subset[key] = updatedFields[key];
        return subset;
      }, {});
    if ("password" in subsetFields)
      subsetFields.password = hashPassword(subsetFields.password);
    await db.User.update(subsetFields, { where: { username: username } });
  } catch (e) {
    throw new Error(e.message);
  }
}

export { getUser, postUser, deleteUser, updateUser };
