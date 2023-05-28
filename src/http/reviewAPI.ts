import {$authHost, $host} from "./index.ts";

export const createReview = async (value: any, userId: any) => {
    const {data} = await $authHost.post('api/review/create', {
        value, userId
    })
    return data;
}

export const getAllReviews = async () => {
    const {data} = await $host('api/review/get-all')
    return data
}

export const removeReview = async (id: any) => {
    const {data} = await $host.delete('api/review/delete', {data: {id}})
    return data
}