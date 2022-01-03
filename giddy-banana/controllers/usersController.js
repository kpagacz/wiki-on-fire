/**
 * This module exports controllers under the `/users` endpoint.
 *
 * @module controllers/usersController
 */
import {
  getUser,
  postUser,
  deleteUser,
  updateUser,
} from "../services/usersService.js";
import { NotFoundException } from "../src/errors.js";

/**
 * The users GET controller.
 *
 * @param {Object} req The Axios HTML request object
 * @param {Object} res The Axios HTML response object
 * @returns {void}
 */
async function getUsers(req, res) {
  if (req.params.username === undefined)
    res.status(400).send({ message: "Username must be defined" });
  try {
    const user = await getUser(req.params.username);
    res.status(200).json(user);
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
}

/**
 * The users POST controller.
 *
 * @param {Object} req The Axios HTML request object
 * @param {Object} res The Axios HTML response object
 * @returns {void}
 */
async function postUsers(req, res) {
  try {
    const createdUser = await postUser(
      req.body.username,
      req.body.password,
      req.body.email,
      req.body.user_avatar
    );
    res.status(201).json(createdUser);
  } catch (e) {
    res.status(400).send({ message: e.message, path: e.path });
  }
}

/**
 * The users DELETE controller.
 *
 * @param {Object} req The Axios HTML request object
 * @param {Object} res The Axios HTML response object
 * @returns {void}
 */
async function deleteUsers(req, res) {
  try {
    await deleteUser(req.params.username);
    res.status(200).send();
  } catch (e) {
    res.status(400).send({ message: e.message });
  }
}

/**
 * The users PATCH controller.
 *
 * @param {Object} req The Axios HTML request object
 * @param {Object} res The Axios HTML response object
 * @returns {void}
 */
async function updateUsers(req, res) {
  try {
    const username = req.params.username;
    await updateUser(username, req.body);
    res.status(200).send();
  } catch (e) {
    if (e instanceof NotFoundException) {
      res.status(404);
    } else {
      res.status(400);
    }
    res.send({ message: e.message });
  }
}

export { getUsers, postUsers, deleteUsers, updateUsers };
