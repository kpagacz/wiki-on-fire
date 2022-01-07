import axios from "axios";

const wofApi = axios.create({
  baseURL: "http://ec2-18-159-108-123.eu-central-1.compute.amazonaws.com/api",
  timeout: 5000,
  withCredentials: true,
})

export default wofApi;
