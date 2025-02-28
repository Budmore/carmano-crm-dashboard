import axios from "axios";

const axiosClient = axios.create({
  baseURL: "/api/generic",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
