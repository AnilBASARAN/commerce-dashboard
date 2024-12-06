import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.mode === "development" ? "http://localhost:3000/api" : "/api",
    withCredentials:true,//this allows us send cookies to the server

})

export default axiosInstance;