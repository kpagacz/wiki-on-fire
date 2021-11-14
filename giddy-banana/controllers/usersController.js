import { getUser, postUser, deleteUser, updateUser } from "../services/usersService.js";

async function getUsers(req, res) {
  const username = req.params.username ? req.params.username : next();
  try {
    const user = await getUser(username);
    res.status(200).json(user);
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
}

async function postUsers(req, res) {
  try {
    console.dir(req.body);
    const createdUser = await postUser(
      req.body.username,
      req.body.password,
      req.body.email,
      req.body._user_avatar,
      req.body.account_type,
      req.body.account_status
    );
    res.status(201).json(createdUser);
  } catch (e) {
    res.status(400).send({ message: e.message });
  }
}

async function deleteUsers(req, res) {
  try {
    await deleteUser(req.params.username);
    res.status(200).send();
  } catch (e) {
    res.status(400).send({ message: e.message });
  }
}

async function updateUsers(req, res) {
  try {
    const username = req.params.username;
    await updateUser(username, req.body);
    res.status(200).send();
  } catch (e) {
    res.status(400).send({ message: e.message });
  }
}

export { getUsers, postUsers, deleteUsers, updateUsers };
