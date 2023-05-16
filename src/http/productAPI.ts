import {$host} from "./index";

export const getAllProduct = async () => {
    const {data} = await $host('api/product')
    return data.rows
}