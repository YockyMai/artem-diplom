import "./styles.css"
const SignupPage = () => {
  return (
    <div className="mainN">
      <div className="reg">
        <p>Регистрация</p>

        <div id="table">
          <div className="form">
            <label htmlFor="name">Имя:</label>
            <input type="text" name="name" placeholder="Введите имя" id="name"/><br/>
            <p className="login_error">Заполните это поле</p>
            <br/>


            <label htmlFor="name">Email:</label>
            <input type="text" name="email" placeholder="Введите логин" id="email"/><br/>
            <p className="login_error">Заполните это поле</p>
            <br/>

            <label htmlFor="name">Ваш пароль:</label>
            <input type="password" name="password" placeholder="Введите пароль" id="password"/><br/>
            <br/>

            <input value="Отправить" type="submit" name="submit" id="submit"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
