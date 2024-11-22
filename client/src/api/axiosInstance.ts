import axios from "axios";
import { DEFAULT_API_URL } from "./const";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL || DEFAULT_API_URL,
});
