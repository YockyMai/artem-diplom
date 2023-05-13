import "./styles.css"
import {useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../redux/hook/hook";
import {removeUser, setUser} from "../../redux/slices/userSlice";
import {isAuth} from "../../redux/slices/isAuthSlice";
const SigninPage = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user)

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        dispatch(setUser(data))
        dispatch(isAuth(true))
    }
    return (
        <div className="mainN">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="reg">
                    <p>Авторизация</p>

                    <div id="table">
                        <div className="form">
                            <label htmlFor="name" className={errors.email && 'err_label'}>Email{errors.email?.type === 'required' && '(не может быть пустым полем)'}{errors.email?.type === 'maxLength' && '(меньше 40 символов)'}{errors.email?.type === 'pattern' && '(пример: example@gmail.com)'}:</label>
                            <input type="text" placeholder="Введите email" id="email" {...register('email', {required: true, maxLength: 40, pattern: /[^@\s]+@[^@\s]+\.[^@\s]+/})}/><br/>
                            <p className="login_error">Заполните это поле</p>
                            <br/>

                            <label htmlFor="name" className={errors.password && 'err_label'}>Пароль{errors.password?.type === 'required' && '(не может быть пустым полем)'}{errors.password?.type === 'maxLength' && '(меньше 30 символов)'}{errors.password?.type === 'minLength' && '(минимум 6 символов)'}{errors.password?.type === 'pattern' && '(только латинские символы)'}:</label>
                            <input type="password" placeholder="Введите пароль" id="password" {...register('password', {required: true, minLength: 6, maxLength: 30, pattern: /[^А-Яа-я0-9]/})}/><br/>
                            <br/>

                            <input value="Отправить" type="submit" id="submit"/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SigninPage;
