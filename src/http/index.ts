import axios from "axios";
import { config } from "dotenv";

const $host = axios.create({
    baseURL: 'http://localhost:7000/',
});
const $authHost = axios.create({
    baseURL: 'http://localhost:7000/',
});

const authInterceptor = (config: any) => {
    config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
};
$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };