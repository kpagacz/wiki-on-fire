/**
 * This module exports an `/about` endpoint controller.
 *
 * @module controllers/aboutController
 */

/**
 * The `/about` controller.
 *
 * @param {Object} req The Axios HTML request object
 * @param {Object} res The Axios HTML response object
 * @function
 * @name aboutController
 */
export default async (req, res) => {
  res.status(200).send(`This is the WikiOnFire backend service.<br>
             ____<br>
            / . .\\<br>
            \\    ---<<br>
             \\  /<br>
   __________/ /<br>
-=:___________/<br>
`);
};
