const React = require('react');
const Layout = require('./Layout');

function Log() {
  return (
    <Layout>
      <script defer src="./client/logg.js" />
      <link rel="stylesheet" href="/css/logregform.css" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
      <div className="center">
        <h1>Войдите в ваш аккаунт</h1>
        <form style={{height: "290px"}} method="POST" action="/login" id="logForm">
          {' '}
          {/* action='/api/auth/signup' method='POST' onSubmit={handlerSubmit} */}
          <div className="txt_field">
            <input name="login" type="text" id="inputname" required />
            <label>Имя</label>
            <span />
          </div>
          <div className="txt_field">
            <input name="password" type="password" required />
            <label>Введите пароль</label>
            <span />
          </div>

          <input type="submit" value="Войти" />
          <div className="signup_link">
            Еще не зарегистрированы?
            {' '}
            <a href="/register">Зарегистрироваться</a>
          </div>
        </form>
      </div>
    </Layout>
  );
}

module.exports = Log;
