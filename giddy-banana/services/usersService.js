import db from "../models/index.cjs";
import { NotFoundException } from "./serviceErrors.js";

const AccountStatusMapping = {
  "active" : 1
}

const AccountTypeMapping = {
  "user" : 1
}

/**
 * Returns information about a user.
 *
 * @param {string} _username the username
 * @return {Object} JSON with the requested user's data
 * @throws {Error} If the user couldn't be found or the database
 * connection was refused.
 */
async function getUser(_username) {
  try {
    const found = await db.User.findOne({
      where: { username: _username },
    }).then((user) => {
      return user;
    });
    if (!found) throw new NotFoundException("User not found");
    return found;
  } catch (e) {
    throw new Error(e.message);
  }
}

async function postUser(
  _username,
  _password,
  _email,
  _user_avatar
) {
  try {
    await db.User.create({
      username: _username,
      password: _password,
      email: _email,
      account_type: AccountTypeMapping["user"],
      account_status: AccountStatusMapping["active"]
    });
  } catch (e) {
    throw new Error(e.message);
  }
}

async function deleteUser(username) {
  try {
    await db.User.destroy({
      where: { username: username },
    });
  } catch (e) {
    throw new Error(e.message);
  }
}

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
    throw e;
  }
}

export { getUser, postUser, deleteUser, updateUser };
