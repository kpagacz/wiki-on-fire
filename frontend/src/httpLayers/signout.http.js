import wofApi from "./wofApi.js";

/**
 * Signs out the user from the backend session.
 *
 * @return `true` if the operation was successful
 */
async function signOut() {
  return await wofApi
    .get("/logout")
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
}

export { signOut };
