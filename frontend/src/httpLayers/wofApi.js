import axios from "axios";

const env = {
  production: "http://ec2-18-159-108-123.eu-central-1.compute.amazonaws.com/api",
  development: "http://localhost/api"
}

const wofApi = axios.create({
  baseURL: env[process.env.NODE_ENV] ? env[process.env.NODE_ENV] : env.development,
  timeout: 5000,
  withCredentials: true,
})

export default wofApi;
