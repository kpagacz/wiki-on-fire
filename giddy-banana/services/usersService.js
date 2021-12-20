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
 * Deletes the user from the database.
 *
 * @param {String} username uniquely identifying the user
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
 * Updates user information in the database.
 *
 * @param {String} username uniquely identifying the user
 * @param {Object} updatedFields the object with the fields and new values for the given user
 */
async function updateUser(username, updatedFields) {
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
}

export { getUser, postUser, deleteUser, updateUser };
