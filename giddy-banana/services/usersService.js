import db from "../models/index.cjs";
import { NotFoundError } from "./serviceErrors.js";

const account_status_mapping = {
  "active" : 1
}

const account_type_mapping = {
  "user" : 1
}

async function getUser(_username) {
  try {
    const found = await db.User.findOne({
      where: { username: _username },
    }).then((user) => {
      return user;
    });
    if (!found) throw new Error("User not found");
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
      account_type: account_type_mapping["user"],
      account_status: account_status_mapping["active"]
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
      throw new NotFoundError("Username not found");
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
