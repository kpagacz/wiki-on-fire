import axios from "axios";

const wof_api = axios.create({
  baseURL: "http://localhost/api/",
  timeout: 5000
})

export default wof_api;
