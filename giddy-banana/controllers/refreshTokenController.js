import refreshToken from "../services/refreshTokenService.js";

/**
 * Refresh token controller.
 *
 * @description verifies the validity of the token in the cookie and if valid, refreshes it.
 * Additionally, it sends an object with information about the user
 * (username, email, account type and account status).
 *
 * @param {Object} req the request object
 * @param {Object} res the response object
 * @return {void}
 */
export default async (req, res) => {
  const wofCookie = req.cookies.wofToken;

  try {
    const { userData, token } = await refreshToken(wofCookie);
    res.cookie("wofToken", token, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 8 * 60 * 60 * 100,
      domain: "localhost",
    });
    let response = {};
    response.type = "success";
    response.data = userData;
    res.status(200).send(response);
  } catch (error) {
    res.status(200).send({
      type: "invalidToken",
      data: error.message,
    });
  }
};
