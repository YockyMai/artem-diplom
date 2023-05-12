import "./styles.css"
import {useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../redux/hook/hook";
import {setUser} from "../../redux/slices/userSlice";
const SignupPage = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.user)

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    dispatch(setUser(data))
    console.log(user)
  }
  return (
    <div className="mainN">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="reg">
          <p>Регистрация</p>

          <div id="table">
            <div className="form">
              <label htmlFor="name" className={errors.name && 'err_label'}>Имя{errors.name?.type === 'required' && '(не может быть пустым полем)'}{errors.name?.type === 'maxLength' && '(меньше 15 символов)'}:</label>
              <input type="text" placeholder="Введите имя" id="name" {...register('name', {required: true, maxLength: 15})}/><br/>
              <p className="login_error">Заполните это поле</p>
              <br/>


              <label htmlFor="name" className={errors.email && 'err_label'}>Email{errors.email?.type === 'required' && '(не может быть пустым полем)'}{errors.name?.type === 'maxLength' && '(меньше 20 символов)'}{errors.email?.type === 'pattern' && '(пример: example@gmail.com)'}:</label>
              <input type="text" placeholder="Введите email" id="email" {...register('email', {required: true, maxLength: 20, pattern: /[^@\s]+@[^@\s]+\.[^@\s]+/})}/><br/>
              <p className="login_error">Заполните это поле</p>
              <br/>

              <label htmlFor="name" className={errors.password && 'err_label'}>Пароль{errors.password?.type === 'required' && '(не может быть пустым полем)'}{errors.password?.type === 'maxLength' && '(меньше 30 символов)'}{errors.password?.type === 'minLength' && '(минимум 6 символов)'}{errors.password?.type === 'pat tern' && '(только латинские символы)'}:</label>
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

export default SignupPage;
