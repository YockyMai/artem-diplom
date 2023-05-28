import {Center, Select, Stack} from "@mantine/core";
import {useEffect, useState} from "react";
import {getAllReviews, removeReview} from "../../../http/reviewAPI.ts";

const RemoveReview = () => {
    const [check, setCheck] = useState<any>('')
    const [reviewData, setReviewData] = useState<any>([]);
    useEffect(() => {
        getAllReviews().then((data) => setReviewData(data))
    }, [])
    const deleteReview = async () => {
        if (check === '') alert('Выберите отзыв!')
        else try {
            removeReview(check)
            setCheck('')
            getAllReviews().then((data) => setReviewData(data))
            alert('Отзыв успешно удален!')
        } catch (e) {
            alert('Ошибка удаления отзыва! Возможно вы не авторизованы или проблемы с соединением')
        }
    }
    return (
        <div>
            <Center>
                <Stack>
                    <Select value={check} onChange={(value) => setCheck(value)}
                            data={reviewData.map((obj: any) => ({value: `${obj.id}`, label: `Отзыв №${obj.id}`}))}/>
                    <button onClick={() => deleteReview()} className={'CartBtn'}
                            style={{backgroundColor: '#c72626', width: 300}}>Удалить продукт
                    </button>
                </Stack>
            </Center>
        </div>
    );
};

export default RemoveReview;