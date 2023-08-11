import axios from "axios";

const BASE_URL = "http://localhost:3000";

const CONFIG = {
  baseURL: BASE_URL,
};

export const AxiosInstance = axios.create(CONFIG);

export default AxiosInstance;
