/**
 * This module exports the /api/logout controller.
 *
 * @module controllers/logoutController
 */
import logoutUser from "../services/logoutService.js";

/**
 * Logout controller.
 *
 * @param {Object} req The Axios HTML request object
 * @param {Object} res The Axios HTML response object
 * @returns {void}
 * @function
 * @name logoutController
 */
export default async (req, res) => {
  try {
    const wipedToken = await logoutUser();
    res.cookie("wofToken", wipedToken, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 8 * 60 * 60 * 100,
      domain: "localhost",
    });
    res.status(200).send();
  } catch (error) {
    res.status(400).send({ message: "Error signing out" });
  }
};
