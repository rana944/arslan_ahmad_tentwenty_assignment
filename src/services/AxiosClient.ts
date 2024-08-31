import axios from "axios";
import ApiUrls from "./ApiUrls";

const AxiosClient = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/",
    timeout: 5000,
});

AxiosClient.interceptors.request.use((config) => {{
    config.headers.Accept = "application/json";
    config.headers.Authorization = `Bearer ${ApiUrls.API_TOKEN}`;
    return config;
}})

export default AxiosClient;