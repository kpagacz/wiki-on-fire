import { User } from "../models";

getUser = async function (_username) {
  try {
    const found = await User.findOne({
      where: { username: _username }
    }).then(user => { return user });
  } catch (e) {
    throw Error("Error while requesting a user")
  }
}
