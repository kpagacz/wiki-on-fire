import db from "../models/index.cjs";

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
  username,
  password,
  email,
  user_avatar,
  account_type,
  account_status
) {
  try {
    await db.User.create({
      username,
      password,
      email,
      user_avatar,
      account_type,
      account_status,
    });
  } catch (e) {
    throw new Error(e.message);
  }
}

async function deleteUser(username) {
  try(
    await db.User;
  ) catch (e) {
    throw new Error(e.message);
  }
}

export { getUser, postUser };
