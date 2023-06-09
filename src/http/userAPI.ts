import { $authHost, $host } from "./index";
import jwtDecode from "jwt-decode";

export const registration = async (
    username: string,
    email: string,
    password: string
) => {
    const { data } = await $host.post("api/user/registration/", {
        username,
        email,
        password,
        role: "USER",
    });
    localStorage.setItem("token", data.token);
    return jwtDecode(data.token);
};
export const login = async (email: string, password: string) => {
    const { data } = await $host.post("api/user/login", {
        email,
        password,
    });
    localStorage.setItem("token", data.token);
    return jwtDecode(data.token);
};
export const check = async () => {
    const { data } = await $authHost.get("api/user/auth");
    return jwtDecode(data.token);
};