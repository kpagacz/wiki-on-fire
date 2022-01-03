/**
 * This module exports a middleware router which filters the allowed incoming
 * HTTP requests based on their type.
 *
 * @module middleware/allowedRequests
 */

/**
 * This middleware router filters the allowed incoming HTTP requests. The
 * allowed requests are: OPTIONS, HEAD, CONNECT, GET, POST, PUT, DELETE, PATCH.
 *
 * @param {Object} req The Axios HTML request object
 * @param {Object} res The Axios HTML response object
 * @param {function} next The Axios `next` function
 * @function
 * @name allowedRequests
 */
export default (req, res, next) => {
  const allowedMethods = [
    "OPTIONS",
    "HEAD",
    "CONNECT",
    "GET",
    "POST",
    "PUT",
    "DELETE",
    "PATCH",
  ];

  if (!allowedMethods.includes(req.method))
    res.status(405).send(`${req.method} not allowed`);

  next();
};
