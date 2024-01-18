const React = require('react');
const Layout = require('./Layout');

function Reg() {
  return (
    <Layout>
      <script defer src="./client/regg.js"></script>
      <link rel="stylesheet" href="/css/logregform.css" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
      <div className="center">
        <h1>Зарегистрируйтесь</h1>
        <form method="POST" action="/register" id="regForm">
          {' '}
          {/* action='/api/auth/signup' method='POST' onSubmit={handlerSubmit} */}
          <div className="txt_field">
            <input name="email" type="email" required />
            <label>Email</label>
            <span />
          </div>
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

          <input type="submit" value="Зарегистрироваться" />
          <div className="signup_link">
            Есть аккаунт?
            {' '}
            <a href="/login">Войдите</a>
          </div>
        </form>
      </div>
    </Layout>
  );
}

module.exports = Reg;
