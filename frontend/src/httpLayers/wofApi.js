import axios from "axios";

const wofApi = axios.create({
<<<<<<< HEAD:frontend/src/httpLayers/wofApi.js
  baseURL: "http://localhost:3001/api",
=======
  baseURL: "http://localhost/api/",
>>>>>>> 103_create_login_endpoint:frontend/src/httpLayers/wofapi.js
  timeout: 5000,
  withCredentials: true,
})

export default wofApi;
