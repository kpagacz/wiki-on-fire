import axios from "axios";

const wofApi = axios.create({
  baseURL: "http://localhost:3001/api/",
  timeout: 5000
})

export default wofApi;
