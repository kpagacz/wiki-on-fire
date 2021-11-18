import wof_api from "./wofapi";

async function registerUser(username, password, email) {
  await wof_api.post(
    url = "/users",
    data = {
      username: username,
      password: password,
      email: email,
    }
  );
}

export { registerUser };
