import {$authHost, $host} from "./index";

export const getAllProduct = async () => {
    const {data} = await $host('api/product')
    return data.rows
}
export const removeProduct = async (productId: any) => {
    const {data} = await $authHost.delete('api/product/delete', {data: {productId}})
    return data
}