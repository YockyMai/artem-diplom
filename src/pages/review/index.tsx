import {Center, Container, Stack, Text, TextInput} from "@mantine/core";
import {useForm} from "react-hook-form";
import {createReview, getAllReviews} from "../../http/reviewAPI.ts";
import {useAppSelector} from "../../redux/hook/hook.ts";
import {useEffect, useState} from "react";
import {IconMoodSad} from "@tabler/icons-react";


const ReviewPage = () => {
    const currentAuth = useAppSelector(state => state.isAuth.isAuth)
    const [reviewData, setReviewData] = useState<any>([]);
    useEffect(() => {
        const data = getAllReviews().then((data) => setReviewData(data))
    }, [])
    const user = useAppSelector(state => state.user.user)
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = async (data: any) => {
        try {
            createReview(data.value, user?.id);
            alert('Отзыв успешно создан')
            window.location.reload()
        } catch (e) {
            alert('Ошибка создания отзыва')
        }
    }
    if (!reviewData) return null
    return (
        <div>
            {reviewData.length === 0 && <>
                <h1>Никто еще не написал ни одного отзыва</h1>
                <Center mt={'5%'}>
                    <IconMoodSad size={'10%'}/>
                </Center></>}
            <Container sx={() => ({
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                borderRadius: '1.2em',
                paddingTop: '1%',
                paddingBottom: '2%'
            })} mt={'6%'}>
                Форма отправки отзыва
                <Center>
                    {!currentAuth ? <Text>Авторизуйтесь чтобы написать отзыв</Text> :
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Stack>
                                {errors.value?.type === "required" ? <Text color={'red'}>Это поле обязательно для
                                    заполнения</Text> : errors.value?.type === 'maxLength' ? 'dsadsa' :
                                    <Text size={'md'}>Здесь вы можете написать ваш отзыв</Text>}
                                <TextInput placeholder={'Введите ваш отзыв'} {...register('value', {
                                    required: true,
                                    maxLength: 2000
                                })}/>
                                <button className={'CartBtn'} type={'submit'}>Отправить</button>
                            </Stack>
                        </form>}
                </Center>
            </Container>
            {reviewData.map((obj: any) => (<Container sx={() => ({
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                borderRadius: '1.2em',
                paddingTop: '1%',
                paddingBottom: '2%',
                marginTop: '1%'
            })}><Text>Отзыв
                №{obj.id}</Text>{obj.user.role === 'ADMIN' ? 'Администрация' : `Пользователь: ${obj.user.username}`}<Text
                size={23}>Комментарий: {obj.value}</Text></Container>))}
        </div>
    );
};

export default ReviewPage;