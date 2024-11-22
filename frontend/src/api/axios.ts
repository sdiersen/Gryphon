import axios, { isAxiosError } from "axios";

const axiosInstance = axios.create({
  baseURL: "http://192.168.68.73:5105",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
export { isAxiosError };
