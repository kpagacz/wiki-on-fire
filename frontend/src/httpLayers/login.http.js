import wofApi from "./wofApi.js";

const loginUser = async (username, password) => {
  const token = await wofApi
    .post("/login", { username: username, password: password })
    .then(() => {
      return true;
    })
    .catch((error) => {
      if (error.response) {
        throw new Error(`${error.response.data.message}`);
      } else if (error.request) {
        throw new Error("Service refused connection");
      } else {
        throw new Error("Undefined error");
      }
    });
  console.dir(token);
}

await loginUser("test_username1", "test_password");

export { loginUser };
