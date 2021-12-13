import logoutUser from "../services/logoutService.js";

/**
 * Logout controller.
 *
 * @param {Object} req the request object
 * @param {Object} res the response object
 * @return {void}
 */
export default async (req, res) => {
  try {
    const wipedToken = await logoutUser();
    res.cookie(
      "wofToken", wipedToken, {
        httpOnly: true,
        sameSite: "lax",
        maxAge: 8 * 60 * 60 * 100,
        domain: "localhost"
      })
    res.status(200).send();
  } catch (error) {
    res.status(400).send({ message: "Error signing out" });
  }
};
