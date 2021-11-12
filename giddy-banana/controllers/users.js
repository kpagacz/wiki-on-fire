import getUser from "../services/users";

getUsers = function (req, res, next) {
  const username = req.params.username ? req.params.username : next();
  try {
    const user = await getUser(username);
  } catch (e) {
    return res.status(400).json({ status: 400, message: "User Not Found" });
  }
}
