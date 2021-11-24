import axios from "axios";

const wofApi = axios.create({
<<<<<<< Updated upstream
  baseURL: "http://localhost:3001/api/",
  timeout: 5000
=======
  baseURL: "http://localhost:3001/api",
  timeout: 5000,
  withCredentials: true,
>>>>>>> Stashed changes
})

export default wofApi;
